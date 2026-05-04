import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../service/UserService';

const SignUp = () => {
    const navigate = useNavigate();
    
    // Check if the person currently using the app is an Admin
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    const isAdmin = loggedInUser && loggedInUser.roleId === 1;

    const [user, setUser] = useState({
        firstName: '', 
        lastName: '', 
        loginId: '', 
        password: '', 
        email: '', 
        roleId: 4 // Changed from roleName to roleId (4 = Student)
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        UserService.signUp(user)
            .then((res) => {
                alert("Registration Successful!");
                // If Admin is adding a user, maybe stay here or go to list
                // If a guest is signing up, go to login
                isAdmin ? navigate("/user-list") : navigate("/login");
            })
            .catch(err => {
                alert(err.response?.data || "Error in Registration.");
            });
    };
    
    return (
        <div className="form-card shadow-lg p-4">
            <h3 className="text-center mb-4 text-primary fw-bold">USER REGISTRATION</h3>
            <form onSubmit={handleSave}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <input type="text" name="firstName" className="form-control" placeholder="First Name" onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input type="text" name="lastName" className="form-control" placeholder="Last Name" onChange={handleChange} required />
                    </div>
                </div>
                <div className="mb-3">
                    <input type="text" name="loginId" className="form-control" placeholder="Login ID (Username)" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <input type="email" name="email" className="form-control" placeholder="Email Address" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange} required />
                </div>

                {/* NEW: Role Selection Dropdown (Only visible if Admin is logged in) */}
                {isAdmin && (
                    <div className="mb-3">
                        <label className="form-label small fw-bold text-muted">Assign Role</label>
                        <select name="roleId" className="form-select" onChange={handleChange} required>
                            <option value="4">Student</option>
                            <option value="3">Faculty</option>
                            <option value="2">College</option>
                            <option value="1">Admin</option>
                        </select>
                    </div>
                )}

                <button type="submit" className="btn btn-primary w-100 fw-bold py-2">REGISTER</button>
            </form>
            
            {!isAdmin && (
                <p className="mt-4 text-center small text-muted">
                    Already have an account? <Link to="/login" className="fw-bold text-decoration-none">Login here</Link>
                </p>
            )}
        </div>
    );
};

export default SignUp;