import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import Main from "../layouts/Main";

import Cell from "../components/Projects/Cell";
import data from "../data/projects";

const Projects = () => (
  <Main>
    <Helmet title="Projects" />
    <article>
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Projects</Link>
          </h2>
          <p>A few of my better projects</p>
        </div>
      </header>
      {data.map(project => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Projects;
