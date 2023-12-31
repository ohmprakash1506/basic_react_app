import http from "../http.common";

class TutorialDataService {
    getAll(){
        return http.get("/tutorials")
    }

    get(id){
        return http.get(`/tutorials/${id}`)
    }

    create(data){
        return http.post("/tutorials/", data)
    }

    update(data, id){
        return http.put(`/tutorials/${id}`, data)
    }

    delete(id){
        return http.delete(`tutprials/${id}`)
    }

    deleteAll(){
        return http.delete("/tutorials")
    }

    findByTitle(title){
        return http.get(`/tutorials?title=${title}`)
    }
}

export default new TutorialDataService();