import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve user from localStorage
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        } else {
            // If no user is found, send them back to login
            navigate("/login");
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    if (!user) return <div className="text-center mt-5">Loading...</div>;

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-12">
                    <div className="card shadow p-4 mb-4 bg-white rounded">
                        <h2>Welcome, {user.firstName}!</h2>
                        <p className="text-muted">Role: <strong>{user.roleName}</strong></p>
                        <hr />
                        
                        <div className="row text-center mt-4">
                            {/* Dashboard Cards based on Roles */}
                            <div className="col-md-4 mb-3">
                                <div className="card border-primary p-3">
                                    <h4>Profile</h4>
                                    <p>View/Edit your details</p>
                                    <button className="btn btn-outline-primary">Open</button>
                                </div>
                            </div>

                            {user.roleName === 'Admin' && (
                                <div className="col-md-4 mb-3">
                                    <div className="card border-danger p-3">
                                        <h4>User List</h4>
                                        <p>Manage Students & Faculty</p>
                                        <button className="btn btn-outline-danger">Manage</button>
                                    </div>
                                </div>
                            )}

                            <div className="col-md-4 mb-3">
                                <div className="card border-success p-3">
                                    <h4>Marksheet</h4>
                                    <p>{user.roleName === 'Student' ? 'View Results' : 'Manage Marks'}</p>
                                    <button className="btn btn-outline-success">Go</button>
                                </div>
                            </div>
                        </div>

                        <button onClick={handleLogout} className="btn btn-secondary mt-4">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;