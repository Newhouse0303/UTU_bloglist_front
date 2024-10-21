

const LoginForm = ({
    username,
    password, 
    handleSubmit, 
    handleUsername, 
    handlePassword,
}) => {
    
    return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
            username:
            <input type="text" value={username} onChange={handleUsername} />
        </div>
        <div>
            password:
            <input type="password" value={password} onChange={handlePassword} />
        </div>
        <div>
          <button type="submit">login</button>
        </div>
      </form>
      </div>
    );
  };
  
export default LoginForm;