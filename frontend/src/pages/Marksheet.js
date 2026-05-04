import React, { useState } from 'react';
import axios from 'axios';

const Marksheet = () => {
    const [marks, setMarks] = useState({
        rollNo: '', name: '', physics: 0, chemistry: 0, maths: 0
    });

    const save = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/ORSAPI/Marksheet/save", marks)
            .then(() => alert("Marksheet Saved!"));
    };

    // Simple Calculation Logic for UI display
    const total = Number(marks.physics) + Number(marks.chemistry) + Number(marks.maths);
    const result = (marks.physics >= 33 && marks.chemistry >= 33 && marks.maths >= 33) ? "PASS" : "FAIL";

    return (
        <div className="form-card">
            <h3>Add Marksheet</h3>
            <form onSubmit={save}>
                <input className="form-control mb-2" placeholder="Roll No" onChange={e => setMarks({...marks, rollNo: e.target.value})} />
                <input className="form-control mb-2" placeholder="Student Name" onChange={e => setMarks({...marks, name: e.target.value})} />
                <input type="number" className="form-control mb-2" placeholder="Physics" onChange={e => setMarks({...marks, physics: e.target.value})} />
                <input type="number" className="form-control mb-2" placeholder="Chemistry" onChange={e => setMarks({...marks, chemistry: e.target.value})} />
                <input type="number" className="form-control mb-2" placeholder="Maths" onChange={e => setMarks({...marks, maths: e.target.value})} />
                
                <div className="mt-3 p-2 bg-light border">
                    <strong>Total:</strong> {total} | <strong>Result:</strong> {result}
                </div>
                
                <button type="submit" className="btn btn-success w-100 mt-3">Submit Marks</button>
            </form>
        </div>
    );
};

export default Marksheet;