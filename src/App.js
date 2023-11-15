import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route ,Link } from "react-router-dom";

class App extends Component{
  render(){
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            Konnectify
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/tutorials/add"} className="nav-link">
                Add Tutorials
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            
          </Routes>
        </div>
      </div>
    )
  }
}

export default App;