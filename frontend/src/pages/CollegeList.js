import React, { useEffect, useState } from 'react';
import httpClient from '../BaseConfig';

const CollegeList = () => {
    const [list, setList] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        httpClient.get("/College/list").then((res) => {
            setList(res.data);
        });
    };

    const deleteItem = (id) => {
        httpClient.get(`/College/delete/${id}`).then(() => {
            setMessage("College deleted successfully!");
            fetchData(); // Refresh list
        });
    };

    return (
        <div className="card shadow mt-3">
            <div className="card-header bg-primary text-white"><h3>College List</h3></div>
            <div className="card-body">
                {message && <div className="alert alert-success">{message}</div>}
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>
                                    <button onClick={() => deleteItem(item.id)} className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CollegeList;