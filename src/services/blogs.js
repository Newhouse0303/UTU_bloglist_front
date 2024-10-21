
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

const increaseLikes = async (blog) => {
  const updatedBlog = {
    ...blog, likes: blog.likes + 1
  }

  try {
    const response = await axios.put(`${baseUrl}/${blog.id}`, updatedBlog)
    return response.data;
  } catch (error) {
    console.error(`The likes in ${blog.title} should have been increased by one`)
    throw error;
  }
 
}

const remove = async (blog) => {
  try {
    await axios.delete(`${baseUrl}/${blog.id}`)
  } catch (error) {
  console.error("The blog could not be removed")
  }
}

export default { getAll, create, increaseLikes, remove }

