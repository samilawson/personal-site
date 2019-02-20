import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import { FontAwesome } from "@fontawesome/react-fontawesome";

import Main from "../layouts/Main";

import data from "../data/contact";

// validates the first half of an email address
const validateText = text => {
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};

const messages = [
  "hi",
  "hello",
  "hola",
  "you-can-email-me-at-literally-anything! Really",
  "well, not anything. But most things",
  "like-this",
  "or-this",
  "but not this :(  ",
  "you.can.also.email.me.with.specific.topics.like",
  "just-saying-hi",
  "please-work-for-us",
  "help",
  "admin",
  "or-I-really-like-your-website",
  "I'll-stop-distracting-you-now",
  "thanks"
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {};
  }, [delay]);
};

const Contact = () => {
  const hold = 50; //ticks to wait before rendering next message
  const delay = 50;

  const [idx, updateIter] = useState(0);
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(messages[idx].length);
  const [isActive, setIsActive] = useState(true);

  useInterval(
    () => {
      let newIdx = idx;
      let newChar = char;
      if (char - hold >= messages[idx].length) {
        newIdx += 1;
        newChar = 0;
      }
      if (newIdx === messages.length) {
        setIsActive(false);
      } else {
        updateMessage(messages[newIdx].slice(0, newChar));
        updateIter(newIdx);
        updateChar(newChar + 1);
      }
    },
    isActive ? delay : null
  );

  return (
    <Main>
      <Helmet title="Contact" />
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2>
              <Link to="/contact">Contact</Link>
            </h2>
          </div>
        </header>
        <div className="email-at">
          <p>Get in touch by emailing me at: </p>
          <div
            className="inline-container"
            style={validateText(message) ? {} : { color: "red" }}
            onMouseEnter={() => setIsActive(false)}
            onMouseLeave={() => idx < messages.length && setIsActive(true)}
          >
            <a
              href={
                validateText(message) ? `mailto:${message}@placeholder.com` : ""
              }
            >
              <span>{message}</span>
              <span>@placeholder.com</span>
            </a>
          </div>
        </div>
        <ul className="icons">
          {data.map(s => (
            <li key={s.label}>
              <a href={s.link}>
                <FontAwesomeIcon icon={s.icon} />
              </a>
            </li>
          ))}
        </ul>
      </article>
    </Main>
  );
};

export default Contact;
