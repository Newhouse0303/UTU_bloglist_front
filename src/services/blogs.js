
import axios from 'axios'
const baseUrl = '/api/blogs'
//const baseUrl = 'http://localhost:3001/api/blogs'


const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async (newBlog) => {
  const response = await axios.post(baseUrl, newBlog)
  return response.data
}

export default { getAll, create }

