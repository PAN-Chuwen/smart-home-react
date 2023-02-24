import React from "react"
import "./Header.css"
import { Link, Outlet } from "react-router-dom"

export default function Header() {
  return (
    <header className="main-header">
      <nav className="nav main-nav">
        <ul>
          <li>
            <Link to="/rooms">ROOMS</Link>
          </li>
          <li>
            <a href="https://github.com/Pancw2000?tab=repositories">GITHUB</a>
          </li>
        </ul>
      </nav>
      <h1 className="projectName">SMART HOME</h1>
      <Outlet></Outlet>
    </header>
  )
}
