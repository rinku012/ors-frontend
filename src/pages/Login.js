import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import UserService from '../service/UserService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loginId: '', 
            password: '', 
            message: '' 
        };
    }

    // Handles input changes dynamically
    handleChange = (e) => { 
        this.setState({ [e.target.name]: e.target.value }); 
    }

    // Handles the Login logic
    handleLogin = (e) => {
       e.preventDefault();
    UserService.login(this.state).then(res => {
        if (res.data.success) {
            localStorage.setItem("user", JSON.stringify(res.data.result));
            window.location.href = "/dashboard";
        } else {
            // This handles 200 OK but success: false
            this.setState({ message: res.data.message || "Invalid Credentials" });
        }
    }).catch(err => {
        // This handles 401, 404, 500
        if (err.response && err.response.status === 401) {
            this.setState({ message: "Invalid Email or Password (401)" });
        } else {
            this.setState({ message: "Server Error or Backend is Down" });
        }
    });
}

    render() {
        return (
            /* 'form-card' provides the white box and 'shadow-lg' adds the depth */
            <div className="form-card shadow-lg">
                <h3 className="text-center mb-4 text-primary fw-bold">USER LOGIN</h3>
                
                {/* Error Message Alert */}
                {this.state.message && (
                    <div className="alert alert-danger p-2 text-center small fw-bold">
                        {this.state.message}
                    </div>
                )}

                <form onSubmit={this.handleLogin}>
                    <div className="mb-3 text-start">
    <label className="form-label fw-bold">Login ID</label>
    <input 
        name="loginId" 
        type="text" 
        className="form-control" 
        placeholder="Enter Login ID (e.g. sita123)" 
        onChange={this.handleChange} 
        required 
    />
</div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Password</label>
                        <input 
                            name="password" 
                            type="password" 
                            className="form-control" 
                            placeholder="••••••••" 
                            onChange={this.handleChange} 
                            required 
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100 shadow-sm py-2 fw-bold">
                        LOGIN
                    </button>

                    <div className="text-center mt-4">
                        <span className="text-muted small">
                            New User? <Link to="/signup" className="text-decoration-none fw-bold">Register Here</Link>
                        </span>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;