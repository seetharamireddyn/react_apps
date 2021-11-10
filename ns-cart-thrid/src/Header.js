import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a href="#" class="navbar-brand">
                            <svg width="120">
                                <defs>
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{stopColor: "rgba(0,255,0)", stopOpacity: "1"}} />
                                    <stop offset="100%" style={{stopColor: "rgba(255,0,0)", stopOpacity: "1"}} />
                                    </linearGradient>
                                </defs>
                                <ellipse cx="50" cy="15" rx="50" ry="20" fill="url(#grad1)" />
                                <text fill="#ffffff" font-size="15" font-family="Verdana" x="8" y="20">Nutri Store</text>
                                Sorry, your browser does not support inline SVG.
                            </svg>
                        </a>

                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr />
        </>
    )
}

export default Header;