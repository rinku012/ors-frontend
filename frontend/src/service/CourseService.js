import httpClient from '../BaseConfig';

class CourseService {
   save(data) { return httpClient.post("/Course/save", data); }
    list() { return httpClient.get("/Course/list"); }
    delete(id) { return httpClient.get(`/Course/delete/${id}`); }
}
export default new CourseService();