import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Component Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Imports
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import StudentList from './pages/StudentList';
import Student from './pages/Student';

const LayoutWrapper = ({ children }) => {
    const location = useLocation();
    
    const getPageClass = (path) => {
        if (path === '/login' || path === '/signup') return 'bg-login';
        return 'bg-dashboard';
    };

    return (
        /* This is the ONLY place Navbar and Footer should be called */
        <div className={`page-container ${getPageClass(location.pathname)}`}>
            <Navbar />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

function App() {
    return (
        <Router>
            <LayoutWrapper>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/student-list" element={<StudentList />} />
                    <Route path="/student" element={<Student />} />
                    <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
            </LayoutWrapper>
        </Router>
    );
}

export default App;
