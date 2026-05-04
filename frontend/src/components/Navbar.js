import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 sticky-top shadow-lg">
            <div className="container">
                <Link className="navbar-brand fw-bold" to={user ? "/dashboard" : "/"}>
                    🎓 <span className="ms-2">ORS SYSTEM</span>
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        {!user ? (
                            <>
                                <li className="nav-item"><Link className="nav-link fw-bold" to="/login">Login</Link></li>
                                <li className="nav-item"><Link className="nav-link fw-bold" to="/signup">Register</Link></li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
                                
                                {(user.roleId === 1 || user.roleId === 3) && (
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#!" id="mgmt" data-bs-toggle="dropdown">
                                            Management
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-dark shadow">
                                            <li><Link className="dropdown-item" to="/add-college">Add College</Link></li>
                                            <li><Link className="dropdown-item" to="/college-list">College List</Link></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><Link className="dropdown-item" to="/student">Add Student</Link></li>
                                            <li><Link className="dropdown-item" to="/student-list">Student List</Link></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><Link className="dropdown-item" to="/marksheet">Add Marksheet</Link></li>
                                        </ul>
                                    </li>
                                )}

                                <li className="nav-item">
                                    <Link className="nav-link text-warning fw-bold" to="/merit-list">🏆 Merit List</Link>
                                </li>

                                <li className="nav-item ms-lg-3">
                                    <button className="btn btn-outline-danger btn-sm px-3" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;