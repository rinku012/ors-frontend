import httpClient from '../BaseConfig';
class StudentService {
    save(data) { return httpClient.post("/Student/save", data); }
    list() { return httpClient.get("/Student/list"); }
    delete(id) { return httpClient.get(`/Student/delete/${id}`); }
    getById(id) { return httpClient.get(`/Student/get/${id}`); }
}
export default new StudentService();