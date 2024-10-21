import {useState} from 'react'


const BlogForm = ({handlePost }) => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [url, setUrl] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault()
      
      const newBlog = {
        title,
        author,
        url,
      }

    handlePost(newBlog)
    setTitle("")
    setAuthor("")
    setUrl("")

    }
      
    return (
      <div>
      <h2>Create new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          title:
          <input 
            type="text" 
            value={title} 
            onChange={({ target }) => setTitle(target.value)} 
          />
        </div>
        <div>
          author:
          <input 
            type="text" 
            value={author} 
            onChange={({ target }) => setAuthor(target.value)} 
          />
        </div>
        <div>
          url:
          <input 
            type="text" 
            value={url} 
            onChange={({ target }) => setUrl(target.value)} 
          />
        </div>
        <div>
          <button type="submit">create</button>
        </div>
      </form>
      </div>
    )
  };
  
export default BlogForm;