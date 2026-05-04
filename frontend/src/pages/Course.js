import React, { useState } from 'react';
import CourseService from '../service/CourseService';

const Course = () => {
    const [course, setCourse] = useState({ courseName: '', description: '', duration: '' });

    const handleSave = (e) => {
        e.preventDefault();
        CourseService.save(course)
            .then(() => alert("Course added successfully!"))
            .catch(err => alert("Error adding course"));
    };

    return (
        <div className="form-card">
            <h3 className="text-center mb-4">Add Course</h3>
            <form onSubmit={handleSave}>
                <input type="text" className="form-control mb-3" placeholder="Course Name (e.g. B.Tech)" 
                    onChange={e => setCourse({...course, courseName: e.target.value})} required />
                <input type="text" className="form-control mb-3" placeholder="Description" 
                    onChange={e => setCourse({...course, description: e.target.value})} required />
                <input type="text" className="form-control mb-3" placeholder="Duration (e.g. 4 Years)" 
                    onChange={e => setCourse({...course, duration: e.target.value})} required />
                <button type="submit" className="btn btn-success w-100">Save Course</button>
            </form>
        </div>
    );
};

export default Course;