import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../service/UserService';

const SignUp = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        firstName: '', lastName: '', loginId: '', password: '', email: '', roleName: 'Student'
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        UserService.signUp(user)
            .then((res) => {
                alert("Registration Successful!");
                navigate("/login");
            })
            .catch(err => {
                alert(err.response?.data || "Error in Registration.");
            });
    };
    
    return (
        <div className="form-card shadow-lg">
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
                <button type="submit" className="btn btn-primary w-100 fw-bold py-2">REGISTER</button>
            </form>
            <p className="mt-4 text-center small text-muted">
                Already have an account? <Link to="/login" className="fw-bold text-decoration-none">Login here</Link>
            </p>
        </div>
    );
};

export default SignUp;