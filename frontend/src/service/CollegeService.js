import httpClient from '../BaseConfig';

class CollegeService {
    // Save or Update a College
    save(data, roleId) {
        // We append the roleId as a query parameter so the Backend Controller 
        // can verify if the user is an Admin (1).
        return httpClient.post(`/College/save?activeRoleId=${roleId}`, data);
    }

    // Get the list of all Colleges (Usually for the Table view)
    list() {
        return httpClient.get("/College/list");
    }

    // Delete a College by ID
    // Added roleId here too because your Controller's delete method checks for Admin
    delete(id, roleId) {
        return httpClient.get(`/College/delete/${id}?activeRoleId=${roleId}`);
    }

    // Get a single College for editing
    getById(id) {
        return httpClient.get(`/College/get/${id}`);
    }
}

export default new CollegeService();