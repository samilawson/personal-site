import React, { useState } from "react";
import { Link } from "react-router-dom";

import cookie from "js-cookie";
import Menu from "react-burger-menu/lib/menus/slide";

import routes from "../../data/routes";

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const { id, admin } = cookie.get();

  return (
    <div className="hamburger-container">
      <nav className="main" id="hamburger-nav">
        <ul>
          {open ? (
            <li className="menu close-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">
                &#10005;
              </div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">
                &#9776;
              </div>
            </li>
          )}
        </ul>
      </nav>
      <Menu right isOpen={open}>
        <ul className="hamburger-ul">
          {routes.map(l => (
            <li key={l.label}>
              <Link to={l.path} onClick={() => setOpen(!open)}>
                <h3 className={l.index && "index-li"}>{l.label}</h3>
              </Link>
            </li>
          ))}
          {admin && (
            <li>
              <Link to="/admin">
                <h3>Admin</h3>
              </Link>
            </li>
          )}
          {id && (
            <li>
              <a href="/logout">
                <h3>Logout</h3>
              </a>
            </li>
          )}
        </ul>
      </Menu>
    </div>
  );
};

export default Hamburger;
