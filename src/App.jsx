import { useState, useEffect } from 'react'
import Form from './components/Form'
import BlogForm from './components/BlogForm'
import BlogRender from './components/BlogRender'
import Notification from './components/Notification'
import LogoutButton from './components/LogoutButton'
import blogService from './services/blogs'
import loginService from './services/login'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null);
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [url, setUrl] = useState("")



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

  const handleName = (e) => 
    setUsername(e.target.value)

  const handlePassword = (e) => 
    setPassword(e.target.value)
  
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
    console.log("logging out", user)
    setUser(null)
    window.localStorage.clear()
  }

  const handleTitle = (e) => 
    setTitle(e.target.value)

  const handleAuthor = (e) => 
    setAuthor(e.target.value)

  const handleUrl = (e) => 
    setUrl(e.target.value)

  const handlePost = (e) => {
    e.preventDefault();
    setMessage(`A new blog ${title} by ${author} added`)
    setTimeout(() => {
      setMessage(null);
    }, 5000);
    setTitle("")
    setAuthor("")
    setUrl("")
  }

  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
          <Notification message={message} color="red"/>
          <Form 
          username={username} 
          password={password}
          handleLogin={handleLogin}
          handleName={handleName}
          handlePassword={handlePassword}
          />
      </div>
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      <Notification message={message} color="green" />
      <LogoutButton user={user} handleLogout={handleLogout}/>
      <BlogRender blogs={blogs}/>
      <h2>create new</h2>
      <BlogForm 
      title={title} 
      author={author} 
      url={url}
      handleTitle={handleTitle} 
      handleAuthor={handleAuthor} 
      handleUrl={handleUrl} 
      handlePost={handlePost}/>
    </div>
  )
}

export default App
