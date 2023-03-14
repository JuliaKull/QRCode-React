import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Employee List
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          ></div>

          <Link className="btn btn-outline-light" to="/create">
            Add Employee
          </Link>
          <Link className="btn btn-light mx-2" to="/scan">
            Scan QR Code
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
