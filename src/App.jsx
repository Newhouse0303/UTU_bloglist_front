import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Form from './components/Form'
import LoginButton from './components/LoginButton'
import blogService from './services/blogs'



const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null)

  const handleName = (e) => 
    setUsername(e.target.value)
    console.log(username);
    

  const handlePassword = (e) => 
    setPassword(e.target.value)
  console.log(password);

  const handleLogout = (e) => 
    // clear local memory 
    // return to login page
    setUser(null)
  
  // Authentification logic here 
  const checkPassword = (e) => {
    e.preventDefault();
    
    if (username === "Sara" && password === "123") {
      setUser(username);
    } else {
      console.log("Username or password not valid");
    }
  };
  

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
          <Form 
          username={username} 
          password={password}
          checkPassword={checkPassword}
          handleName={handleName}
          handlePassword={handlePassword}
          />
      </div>
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      <LoginButton user={user} handleLogout={handleLogout}/>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog}/>
      )}
    </div>
  )
}

export default App
