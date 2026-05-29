import axios from 'axios'
const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
    return axios
            .get("http://localhost:3001/persons")
}

const create = (nameObject) => {
    return axios
            .post("http://localhost:3001/persons", nameObject)
}

const deletePerson = (id) => {
    return axios
            .delete(`${baseUrl}/${id}`)
}

const updatePerson = (nameObject) => {
    return axios
            .put(`${baseUrl}/${nameObject.id}`, nameObject)
}

export default { getAll, create, deletePerson, updatePerson }