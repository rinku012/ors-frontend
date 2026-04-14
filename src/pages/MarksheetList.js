import React, { useEffect, useState } from 'react';
import httpClient from '../BaseConfig';

const MarksheetList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        // Calling a specific Merit List API
        httpClient.get("/Marksheet/meritlist").then((res) => {
            setList(res.data);
        });
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center text-danger mb-4">Top 10 Merit List</h2>
            <table className="table table-striped table-bordered shadow">
                <thead className="table-dark">
                    <tr>
                        <th>Rank</th>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>Physics</th>
                        <th>Chemistry</th>
                        <th>Maths</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.rollNo}</td>
                            <td>{item.name}</td>
                            <td>{item.physics}</td>
                            <td>{item.chemistry}</td>
                            <td>{item.maths}</td>
                            <td>{parseInt(item.physics) + parseInt(item.chemistry) + parseInt(item.maths)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MarksheetList;