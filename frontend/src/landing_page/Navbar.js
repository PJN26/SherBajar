import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-1 border-bottom">
      <div className="container p-2">
        <a className="navbar-brand" href="#">
          <img src="media/images/logo.svg" alt="logo" style={{width: "30%"}}/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <form className="d-flex gap-2" role="search">
            <ul className="navbar-nav mb-md-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Support
              </a>
            </li>
          </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
