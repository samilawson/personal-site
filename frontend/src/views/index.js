import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>A responsive web app written with modern Javascript</p>
        </div>
      </header>
      <p>
        Welcome to my website! Feel free to read more{" "}
        <Link to="/about">about me</Link>, or you can check out my{" "}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{" "}
        <Link to="/stats">site stats</Link>, or{" "}
        <Link to="/contact">conact</Link> me.
      </p>
      <p>
        Source available{" "}
        <a href="https://github.com/samilawson/personal-site">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
