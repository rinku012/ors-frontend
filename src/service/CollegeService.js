import httpClient from '../BaseConfig';

class CollegeService {
    // Save or Update a College
    save(data) {
        // httpClient handles the http://localhost:8080/ORSAPI part automatically
        return httpClient.post("/College/save", data);
    }

    // Get the list of all Colleges
    list() {
        return httpClient.get("/College/list");
    }

    // Delete a College by ID
    delete(id) {
        return httpClient.get(`/College/delete/${id}`);
    }

    // Optional: Get a single College for editing
    getById(id) {
        return httpClient.get(`/College/get/${id}`);
    }
}

export default new CollegeService();