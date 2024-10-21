
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
  const blogId = blog.id
  const updatedBlog = {
    ...blog, likes: blog.likes + 1
  }

  try {
    const response = await axios.put(`${baseUrl}/${blogId}`, updatedBlog)
    return response.data;
  } catch (error) {
    console.error(`The the likes in ${blog.title} should have been increased by one`)
    throw error;
  }
 
}

export default { getAll, create, increaseLikes }

