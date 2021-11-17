import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{
    return (
        <>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="#" className="navbar-brand">
                            <svg width="120">
                                <defs>
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{stopColor: "rgba(0,0,225)", stopOpacity: "1"}} />
                                    <stop offset="100%" style={{stopColor: "rgba(0,225,0)", stopOpacity: "1"}} />
                                    </linearGradient>
                                </defs>
                                <ellipse cx="60" cy="15" rx="60" ry="20" fill="url(#grad1)" />
                                <text fill="#FFFFFF" fontSize="15" fontFamily="Verdana" x="8" y="20">Hungry Time</text>
                                Sorry, your browser does not support inline SVG.
                            </svg>
                        </a>

                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr />
        </>
    )
}

export default Header;