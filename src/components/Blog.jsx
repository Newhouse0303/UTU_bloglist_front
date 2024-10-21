import '../Blog.css'

const Blog = ({ blog, handleLikes }) => (
    <div className='blog-container'>
      <div>{blog.title} {blog.author} </div>
      <div>{blog.url}</div>
      <div>Likes: {blog.likes} <button onClick={() => handleLikes(blog)}>Like</button></div>
      
    </div>  
  )
  
export default Blog
  