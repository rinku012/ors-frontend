import React, { useState } from 'react';
import CollegeService from '../service/CollegeService';

const College = () => {
    const [college, setCollege] = useState({ name: '', address: '', state: '', city: '', phoneNo: '' });

    const handleSave = (e) => {
        e.preventDefault();
        CollegeService.save(college)
            .then(() => alert("College added successfully!"))
            .catch(err => alert("Error adding college"));
    };

    return (
        <div className="form-card">
            <h3 className="text-center mb-4">Add College</h3>
            <form onSubmit={handleSave}>
                <input type="text" className="form-control mb-3" placeholder="College Name" 
                    onChange={e => setCollege({...college, name: e.target.value})} required />
                <input type="text" className="form-control mb-3" placeholder="City" 
                    onChange={e => setCollege({...college, city: e.target.value})} required />
                <input type="text" className="form-control mb-3" placeholder="State" 
                    onChange={e => setCollege({...college, state: e.target.value})} required />
                <input type="text" className="form-control mb-3" placeholder="Address" 
                    onChange={e => setCollege({...college, address: e.target.value})} required />
                <input type="text" className="form-control mb-3" placeholder="Phone No" 
                    onChange={e => setCollege({...college, phoneNo: e.target.value})} required />
                <button type="submit" className="btn btn-primary w-100">Save College</button>
            </form>
        </div>
    );
};

export default College;