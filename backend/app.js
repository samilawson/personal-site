// call all the required packages
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs")
const MongoClient = require("mongodb").MongoClient;
const myurl = "mongodb://localhost:27017";
var ObjectId = require('mongodb').ObjectID;

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, __dirname + "/public/images");
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  }
});

var upload = multer({ storage: storage });
//CREATE EXPRESS APP
const app = express();

MongoClient.connect(myurl, (err, client) => {
  if (err) return console.log(err);
  db = client.db("test");
  app.listen(3000, () => {
    console.log("listening on 3000");
  });
});

app.use(bodyParser.urlencoded({ extended: true }));

//ROUTES WILL GO HERE
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
app.post("/uploadfile", upload.single("myFile"), (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
});
//Uploading multiple files
app.post("/uploadmultiple", upload.array("myFiles", 12), (req, res, next) => {
  const files = req.files;
  if (!files) {
    const error = new Error("Please choose files");
    error.httpStatusCode = 400;
    return next(error);
  }

  res.send(files);
});
app.post("/uploadphoto", upload.single("myImage"), (req, res) => {
  var img = fs.readFileSync(req.file.path);
  var encode_image = img.toString("base64");
  // Define a JSONobject for the image attributes for saving to database

  var finalImg = {
    contentType: req.file.mimetype,
    image: Buffer.from(encode_image, "base64")
  };
  db.collection("quotes").insertOne(finalImg, (err, result) => {
    console.log(result);

    if (err) return console.log(err);

    console.log("saved to database");
    res.redirect("/");
  });
});
app.get('/photos/:id', (req, res) => {
    var filename = req.params.id;
     console.log(filename)
    db.collection('quotes').findOne({'_id': ObjectId(filename) }, (err, result) => {
     
        if (err) return console.log(err)
     
       res.contentType('image/jpeg');
       res.send(result.image.buffer)
       
        
      })
    })
app.get('/photos', (req, res) => {
    db.collection('quotes').find().toArray((err, result) => {
     
          const imgArray= result.map(element => element._id);
                console.log(imgArray);
     
       if (err) return console.log(err)
       res.send(imgArray)
     
      })
    });

    

module.exports = app;
