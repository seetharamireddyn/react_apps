import React from 'react';
import { Link } from 'react-router-dom';
import './Common.css'

const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand">
                            <svg width="120">
                                <defs>
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style={{ stopColor: "rgba(0,255,0)", stopOpacity: "1" }} />
                                        <stop offset="100%" style={{ stopColor: "rgba(255,0,0)", stopOpacity: "1" }} />
                                    </linearGradient>
                                </defs>
                                <ellipse cx="50" cy="15" rx="50" ry="20" fill="url(#grad1)" />
                                <text fill="#FFFFFF" fontSize="15" fontFamily="Verdana" x="8" y="20">Junk Store</text>
                                Sorry, your browser does not support inline SVG.
                            </svg>
                        </Link>

                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                            <li><Link to="/"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr />
        </div>
    )
}

export default Header;