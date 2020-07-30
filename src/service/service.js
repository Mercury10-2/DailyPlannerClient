
import axios from 'axios'

const API_URL = 'http://localhost:8080'
const EVENTS = 'events'

class Service {

    getEvents(query) {
        return axios.get(`${API_URL}/${EVENTS}/${query}`)
    }

    retrieveAllCourses() {
        return axios.get(`${API_URL}/courses`);
    }
    
    deleteCourse(name, id) {
        return axios.delete(`${API_URL}/courses/${id}`);
    }

    retrieveCourse(name, id) {
        return axios.get(`${API_URL}/courses/${id}`);
    }
    updateCourse(name, id, course) {
        //console.log('executed service')
        return axios.put(`${API_URL}/courses/${id}`, course);
    }
    createCourse(name, course) {

        return axios.post(`${API_URL}/courses/`, course);
    }
}

export default new Service()