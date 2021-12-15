import React, { Fragment } from "react";
import NavBar from "../shared/NavBar";

const HomePage = () => {
  return (
    <Fragment>
      <div className="container">
        <ul>
          <li>
            <a href="mailto:contacto@santacruzfg.com">
              <i className="fas fa-envelope"></i> contacto@santacruzfg.com{" "}
            </a>
          </li>

          <li>
            <a href="tel:+591-3 (3158000)">
              <i className="fas fa-phone"></i> +591-3 (3158000)
            </a>
          </li>
        </ul>
      </div>
      <NavBar />
    </Fragment>
  );
};

export default HomePage;
