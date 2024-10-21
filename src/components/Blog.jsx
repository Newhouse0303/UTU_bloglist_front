import '../Blog.css'

const Blog = ({ blog, handleLikes, handleRemove }) => (
    <div className='blog-container'>
      <div>{blog.title} {blog.author} </div>
      <div>{blog.url}</div>
      <div>Likes: {blog.likes} <button onClick={() => handleLikes(blog)}>Like</button></div>
      <button onClick={() => handleRemove(blog)}>Remove</button>  
    </div>  
  )
  
export default Blog
  