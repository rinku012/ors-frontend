import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users from the backend
        axios.get("http://localhost:8080/ORSAPI/User/list")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.error("Error fetching user list", err);
            });
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">User List</h2>
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Login ID</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.loginId}</td>
                            <td>{user.email}</td>
                            <td>{user.roleName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;