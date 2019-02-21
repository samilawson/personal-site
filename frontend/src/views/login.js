import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import Main from "../layouts/Main";

const Login = () => (
  <Main fullPage>
    <Helmet title="Login" />
    <article className="post" id="login">
      <h2>
        <Link to="/login">Login</Link>
      </h2>
      <p>
        Since this site contains some persnal information, let me know a little
        about you as well! You can login with your google account below.
      </p>
      <div className="login-container">
        <h3>
          <a href="/login/google">LOGIN WITH GOOGLE</a>
        </h3>
      </div>
    </article>
  </Main>
);

export default Login;
