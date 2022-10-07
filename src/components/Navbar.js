import React, { Component } from 'react'

import { Link } from 'react-router-dom';

export class Navbar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewsMonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item active"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                                {/* <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Category
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                        <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                                        <li><Link className="dropdown-item" to="/health">Health</Link></li>
                                        <li><Link className="dropdown-item" to="/science">Science</Link></li>
                                        <li><Link className="dropdown-item" to="/tech">Technology</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="/general">General</Link></li>

                                    </ul>
                                </li> */}

                                {/* <li className="nav-item">
                                    <Link className="nav-link disabled" to="/">Disabled</Link>
                                </li> */}
                            </ul>
                            <ul className="navbar-nav me-auto mb-1 mb-lg-2  justify-content-end flex-grow-1">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/register">
                                        <button type="button" className="btn btn-success">Register</button>
                                    </Link>
                                    
                                </li>
                                <li className="nav-item">
                                    
                                    <Link className="nav-link" aria-current="page" to="/login">
                                        <button type="button" className="btn btn-outline-primary">Login</button>
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar
