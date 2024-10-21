import { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import BlogRender from './components/BlogRender'
import Notification from './components/Notification'
import LogoutButton from './components/LogoutButton'
import blogService from './services/blogs'
import Toggleable from './components/Toggleable'
import Header from './components/Header'
// import loginService from './services/login'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null);
  // const [title, setTitle] = useState("")
  // const [author, setAuthor] = useState("")
  // const [url, setUrl] = useState("")

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBloglistUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      //noteService.setToken(user.token)
    }
  }, [])
  
  // Authentification logic here 

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   console.log('logging in with', username, password)

  //   try {
  //     const user = await loginService.login({
  //       username, password,
  //     })

  const handleLogin = (e) => {
    e.preventDefault();
    // MOCK SIGN-IN
    const simpleuser = "a";
    const simplepassword = "aa";
  
    try {
      if (username !== simpleuser || password !== simplepassword) {
        throw new Error("Wrong credentials, try again"); 
      }
      setUser(username);
      window.localStorage.setItem('loggedBloglistUser', JSON.stringify(username));
      setUsername('')
      setPassword('')
    } catch (exception) {
      setMessage('Wrong credentials')
     

      setTimeout(() => {
        setMessage(null)
        setUsername('')
        setPassword('')
      }, 8000)
    }
  }

  const handleLogout = (e) => {
    setUser(null)
    window.localStorage.clear()
  }

  const handlePost = async (newBlog) => {
    console.log("This should be added to the DB: ", newBlog);
    
    try {
      const createdBlog = await blogService.create(newBlog)
      setBlogs(blogs.concat(createdBlog))
      setMessage(`A new blog ${title} by ${author} added`)
      // setTitle("")
      // setAuthor("")
      // setUrl("")

      setTimeout(() => {
        setMessage(null);
      }, 5000);

    } catch (error) {
      setMessage('Blog could not be added')
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
    
    // setTitle("")
    // setAuthor("")
    // setUrl("")
  }

  const handleLikes = async (blog) => {
    console.log("likes work");
    
    try {
      const updatedBlog = await blogService.increaseLikes(blog);
      setBlogs(blogs.map(b => (b.id === updatedBlog.id ? updatedBlog : b)));
    } catch (error) {
      // Handle any errors that occurred during the like increase
      console.error('Failed to increase likes:', error);
    }
  };
  
  const handleRemove = async (blog) => {
    try {
      await blogService.remove(blog);
      setBlogs(blogs.filter((b) => b.id !== blog.id))
    } catch (error) {
      console.error("Failed to remove blog", error)
    }
  }
    
  if (user === null) {
    return (
      <div>
          <Toggleable buttonLabel='login'>
          <Notification message={message} color="red"/>
          <LoginForm
            username={username}
            password={password}
            handleUsername={({ target }) => setUsername(target.value)}
            handlePassword={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
          </Toggleable>
        </div>
    )
  }

  return (
    <div>
      <Header header={"Blogs"}/>
      <Notification message={message} color="green" />
      <LogoutButton user={user} handleLogout={handleLogout}/>
      <Toggleable buttonLabel={'create'}>
      <BlogForm handlePost={handlePost}/>
      </Toggleable>
      <BlogRender blogs={blogs} handleLikes={handleLikes} handleRemove={handleRemove}/>
    </div>
  )

}
export default App
