import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h1>Logo</h1>
        <ul>
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#news">Features</a>
          </li>
          <li>
            <a href="#news">Services</a>
          </li>
          <li>
            <a href="#contact">Parser</a>
          </li>
          <li>
            <a href="#contact">Ranking</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
