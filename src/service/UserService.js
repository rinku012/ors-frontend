import httpClient from '../BaseConfig';

class UserService {

    // Login logic using centralized httpClient
    login(loginCredentials) {
        return httpClient.post("/User/login", loginCredentials);
    }

    // SignUp logic
    signUp(userData) {
        // We set roleId to 4 (Student) by default for self-registration
        const data = { ...userData, roleId: 4 };
        return httpClient.post("/User/signUp", data);
    }

    // Get all users (Admin only)
    list() {
        return httpClient.get("/User/list");
    }

    // Delete a user (Admin only)
    delete(id) {
        return httpClient.get(`/User/delete/${id}`);
    }

    // Find a single user for editing
    getById(id) {
        return httpClient.get(`/User/get/${id}`);
    }
}

// Export an instance of the class
export default new UserService();