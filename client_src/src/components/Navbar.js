import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class Navbar extends Component {
  render() {
    return (
        <div>
            <nav className="blue darken-3">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo center">Information</a>
                    <a data-activates="main-menu" className="button-collapse show-on-large">
                    <i className="fa fa-bars"></i>
                    </a>
                    <ul className="right hide-on-small-only">
                    <li><Link to="/"><i className="fa fa-users"></i> Home</Link></li>         
                    </ul>
                    <ul className="side-nav" id="main-menu">
                      <li><Link to="/"><i className="fa fa-users"></i> Home</Link></li>  
                      <li><Link to="/users/add"><i className="fa fa-plus"></i> Add User</Link></li>  
                      <li><Link to="/about"><i className="fa fa-question-circle"></i> About</Link></li> 
                    </ul>
                </div>
            </nav>
      </div>
    )
  }
}

export default Navbar
