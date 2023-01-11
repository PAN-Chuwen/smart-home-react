import React from "react";
import "./Header.css"

export default function Header() {
  return (
    <header className="main-header">
      <nav className="nav main-nav">
        <ul>
          <li>
            <a href="index.html">HOME</a>
          </li>
          <li>
            <a href="rooms.html">ROOMS</a>
          </li>
          <li>
            <a href="https://github.com/Pancw2000?tab=repositories">GITHUB</a>
          </li>
        </ul>
      </nav>
      <h1 className="projectName">SMART HOME</h1>
      
    </header>
  );
}
