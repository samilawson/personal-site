import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";

import data from "../../data/contact";

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src="/images/me_icon.jpg" alt="" />
      </Link>
      <header>
        <h2>Sam Lawson</h2>
        <p>
          <a href="mailto:samilawson17@gmail.com">samilawson17@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, my name is Sam Lawson. I'm a{" "}
        <a href="https://www.memphis.edu/">University of Memphis</a> computer
        science student!
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== "/resume" ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Sam Lawson</p>
    </section>
  </section>
);

export default Nav;
