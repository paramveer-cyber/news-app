import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <div>
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
                        <a className="nav-link active" aria-current="page" href="##">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Checkout My Other Sites
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" rel="noreferrer" target="_blank" href="https://site-for-9b.herokuapp.com/">Site For 9B</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" rel="noreferrer" target="_blank" href="https://online-notepad-exe.herokuapp.com/">Online Notepad</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" rel="noreferrer" target="_blank" href="https://online-weather-exe.herokuapp.com/">Online Weather app</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}



Navbar.prototype = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set  Title"
}