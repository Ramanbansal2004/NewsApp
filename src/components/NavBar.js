import React from 'react'
import { Link, useLocation } from "react-router-dom";
// router uses Link to instead of a and href
// useLocation is used to know the location of the current tab
const NavBar = () => {
    let location = useLocation();
    return (
      // fixed-top is used to fix the component at top
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Newsapp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/"? "active":""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/Business"? "active":""}`} aria-current="page" to="/Business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/Entertainment"? "active":""}`} aria-current="page" to="/Entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/Health"? "active":""}`} aria-current="page" to="/Health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/Science"? "active":""}`} aria-current="page" to="/Science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/Sports"? "active":""}`} aria-current="page" to="/Sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/Technology"? "active":""}`} aria-current="page" to="/Technology">Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

export default NavBar