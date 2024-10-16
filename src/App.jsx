import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Form from './components/Form'
import LogoutButton from './components/LogoutButton'
import blogService from './services/blogs'
import loginService from './services/login'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

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

      try {
        const user = "simple user"
        console.log('Logging in with', user);
        
      window.localStorage.setItem(
        'loggedBloglistUser', JSON.stringify(user))
      
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = (e) => {
    console.log("logging out", user)
    setUser(null)
    window.localStorage.clear()
  }

  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
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
      <LogoutButton user={user} handleLogout={handleLogout}/>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog}/>
      )}
    </div>
  )
}

export default App
