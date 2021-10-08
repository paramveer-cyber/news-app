import React from 'react'
import {
    BrowserRouter as Router
} from "react-router-dom";
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <div>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src="https://yt3.ggpht.com/ytc/AKedOLRZy4co1_R50i2L6fSqbjx3ygQ-veua0-4LRUd_=s900-c-k-c0x00ffffff-no-rj" alt="" width="50" height="44" />
                        </a>
                        <a className="navbar-brand" href="/">{props.title}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/buisness">Business</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/entertainment">Entertainment</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">General</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/health">Health</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/science">Science</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/sports">Sports</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/technology">Technology</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Checkout My Other Sites
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" rel="noreferrer" target="_blank" href="https://site-for-9b.herokuapp.com/">Site For 9B</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><arguments className="dropdown-item" rel="noreferrer" target="_blank" href="https://online-notepad-exe.herokuapp.com/">Online Notepad</arguments></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" rel="noreferrer" target="_blank" href="https://online-weather-exe.herokuapp.com/">Online Weather app</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Router>
        </div>
    )
}



Navbar.prototype = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set  Title"
}