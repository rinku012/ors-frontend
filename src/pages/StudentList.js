import React, { useEffect, useState } from 'react';
import StudentService from '../service/StudentService';

const StudentList = () => {
    const [list, setList] = useState([]);
    // Get logged in user to check role
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
    StudentService.list().then(res => {
        // If your backend returns the Map we created:
        if (res.data && res.data.success) {
            setList(res.data.result); 
        } else {
            // Fallback for if the backend returns the raw list
            setList(Array.isArray(res.data) ? res.data : []);
        }
    }).catch(err => {
        console.error("Error fetching students:", err);
    });
}, []);

    return (
        <div className="container mt-4">
            <h3 className="mb-4">Student List</h3>
            <table className="table table-striped shadow">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Email</th>
                        {/* Only show Action column header if NOT a student (Role 4) */}
                        {user && user.roleId !== 4 && <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index}>
                            <td>{item.firstName}</td>
                            <td>{item.email}</td>
                            {/* Hide Buttons for Students */}
                            {user && user.roleId !== 4 && (
                                <td>
                                    <button className="btn btn-sm btn-primary me-2">Edit</button>
                                    <button className="btn btn-sm btn-danger">Delete</button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;