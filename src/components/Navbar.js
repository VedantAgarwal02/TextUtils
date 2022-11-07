import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  // if(props.mode === 'light') {
  //   document.getElementById('color-palette').style.display='none';
  // }
  // else {
  //   document.getElementById('color-palette').style.display='inline';
  // }
  const handleGreen=()=>{
    document.body.style.backgroundColor='#26532B';
  }
  const handleBlue=()=>{
    document.body.style.backgroundColor='#00377E';
  }
  const handleRed=()=>{
    document.body.style.backgroundColor='#6B0E14';
  }
  const handleYellow=()=>{
    document.body.style.backgroundColor='#BD9B16';
  }
  const handleReset=()=>{
    document.body.style.backgroundColor='#432C7A';
  }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id="navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"> <b> {props.title} </b> </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span >
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"> Home </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/About"> {props.about} </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success" type="submit">Search</button>
            </form> */}
            <div className="btn-group mx-2 dropdown-center" id='color-palette' style={{display:props.mode==='light'?'none':'block'}}>
              <button type="button" className="btn btn-sm btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Select Color 
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <h6 className="dropwdown-header mx-2">Color Theme:</h6>
                </li>
                <li><button className="dropdown-item" href="/" onClick={handleGreen}>Green</button></li>
                <li><button className="dropdown-item" href="/" onClick={handleBlue}>Blue</button></li>
                <li><button className="dropdown-item" href="/" onClick={handleRed}>Red</button></li>
                <li><button className="dropdown-item" href="/" onClick={handleYellow}>Yellow</button></li>
                <li><button className="dropdown-item" href="/" onClick={handleReset}>Default</button></li>
              </ul>
            </div>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Light':'Dark'} Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired, 
    about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Title Goes Here",
    about: "About us"
}
