import httpClient from '../BaseConfig';

class MarksheetService {
    save(data) {
        return httpClient.post("/Marksheet/save", data);
    }

    getMeritList() {
        return httpClient.get("/Marksheet/meritlist");
    }

    getRollNo(rollNo) {
        return httpClient.get(`/Marksheet/rollno/${rollNo}`);
    }

    delete(id) {
        return httpClient.get(`/Marksheet/delete/${id}`);
    }
}

export default new MarksheetService();