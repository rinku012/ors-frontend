import React, { useState, useEffect } from 'react';
import StudentService from '../service/StudentService';
import CollegeService from '../service/CollegeService';
import CourseService from '../service/CourseService';

const Student = () => {
    const [student, setStudent] = useState({
        firstName: '', lastName: '', email: '', mobileNo: '',
        collegeId: '', collegeName: '', courseId: '', courseName: ''
    });

    const [colleges, setColleges] = useState([]);
    const [courses, setCourses] = useState([]);

    // Load dropdown data when the page opens
    useEffect(() => {
        CollegeService.list().then(res => setColleges(res.data));
        CourseService.list().then(res => setCourses(res.data));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // Logic to store both ID and Name for College/Course
        if (name === "collegeId") {
            const selectedCollege = colleges.find(c => c.id === parseInt(value));
            setStudent({ ...student, collegeId: value, collegeName: selectedCollege.name });
        } else if (name === "courseId") {
            const selectedCourse = courses.find(c => c.id === parseInt(value));
            setStudent({ ...student, courseId: value, courseName: selectedCourse.courseName });
        } else {
            setStudent({ ...student, [name]: value });
        }
    };

    const handleSave = (e) => {
        e.preventDefault();
        StudentService.save(student).then(() => {
            alert("Student Registered successfully!");
        }).catch(err => alert("Error saving student"));
    };

    return (
        <div className="form-card">
            <h3 className="text-center mb-4">Add Student</h3>
            <form onSubmit={handleSave}>
                <input type="text" name="firstName" className="form-control mb-3" placeholder="First Name" onChange={handleChange} required />
                <input type="text" name="lastName" className="form-control mb-3" placeholder="Last Name" onChange={handleChange} required />
                <input type="email" name="email" className="form-control mb-3" placeholder="Email" onChange={handleChange} required />
                <input type="text" name="mobileNo" className="form-control mb-3" placeholder="Mobile No" onChange={handleChange} required />

                {/* College Dropdown */}
                <select name="collegeId" className="form-control mb-3" onChange={handleChange} required>
                    <option value="">Select College</option>
                    {colleges.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>

                {/* Course Dropdown */}
                <select name="courseId" className="form-control mb-3" onChange={handleChange} required>
                    <option value="">Select Course</option>
                    {courses.map(c => <option key={c.id} value={c.id}>{c.courseName}</option>)}
                </select>

                <button type="submit" className="btn btn-primary w-100">Save Student</button>
            </form>
        </div>
    );
};

export default Student;