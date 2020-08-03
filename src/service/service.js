
import axios from 'axios'

const API_URL = 'http://localhost:8080'
const EVENTS = 'events'

class Service {

    getEvents(query) {
        return axios.get(`${API_URL}/${EVENTS}/${query}`)
    }

    markDone(id, query) {
        return axios.put(`${API_URL}/${EVENTS}/${id}/${query}`)
    }

    editEvent(id, header, comment, date, month, year, hour, minute, query) {
        return axios.put(`${API_URL}/${EVENTS}/${id}/${header}/${comment}/${date}/${month}/${year}/${hour}/${minute}/${query}`)
    }

    updateCourse(name, id, course) {
        return axios.put(`${API_URL}/courses/${id}`, course);
    }
}

export default new Service()