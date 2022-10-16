import axios from 'axios'
const baseUrl = '/api/teams'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getTeam = (id) => {
  const request = axios.get(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}


const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, getTeam, update }