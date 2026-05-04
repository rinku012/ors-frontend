import React, { useState } from 'react';
import CollegeService from '../service/CollegeService'; 

const College = () => {
    const [college, setCollege] = useState({ 
        name: '', 
        address: '', 
        state: '', 
        city: '', 
        phoneNo: '' 
    });

    const handleSave = (e) => {
        e.preventDefault();
        
        // 1. Get the logged-in user from localStorage
        const loggedInUser = JSON.parse(localStorage.getItem("user"));
        
       // 2. Pass both the data and the roleId to the service
    CollegeService.save(college, loggedInUser.roleId)
        .then((res) => {
            alert("Success: " + res.data);
            // navigate("/college-list"); // Optional: redirect after success
        })
        .catch(err => {
            // This will catch "Only Admins can manage Colleges" from the backend
            alert("Error: " + (err.response?.data || "Server Error"));
        });
};

    return (
        <div className="container mt-5">
            <div className="form-card shadow p-4 mx-auto" style={{maxWidth: '500px'}}>
                <h3 className="text-center mb-4 text-primary fw-bold">ADD COLLEGE</h3>
                <form onSubmit={handleSave}>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="College Name" value={college.name}
                            onChange={e => setCollege({...college, name: e.target.value})} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="City" value={college.city}
                            onChange={e => setCollege({...college, city: e.target.value})} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="State" value={college.state}
                            onChange={e => setCollege({...college, state: e.target.value})} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Address" value={college.address}
                            onChange={e => setCollege({...college, address: e.target.value})} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Phone No" value={college.phoneNo}
                            onChange={e => setCollege({...college, phoneNo: e.target.value})} required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 fw-bold">SAVE COLLEGE</button>
                </form>
            </div>
        </div>
    );
};

export default College;