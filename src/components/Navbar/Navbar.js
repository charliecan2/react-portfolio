import React from 'react';
import { Link } from "react-router-dom";
import '../Home/style.css';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-collapse navbar-dark bg-transparent">
            <Link to={"/"}>
                <a className="navbar-brand" href="#">Home</a>
            </Link> 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/about"}>
                            <a className="nav-link" href="#">About</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/contact"}>
                            <a className="nav-link" href="#">Contact</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/portfolio"}>
                            <a className="nav-link" href="#">Portfolio</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;