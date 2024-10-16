const Form = ({
    username,
    password, 
    handleLogin, 
    handleName, 
    handlePassword }) => {
    return (
      <form onSubmit={handleLogin}>
        <div>
            username:
            <input type="text" value={username} onChange={handleName} />
        </div>
        <div>
            password:
            <input type="password" value={password} onChange={handlePassword} />
        </div>
        <div>
          <button type="submit">login</button>
        </div>
      </form>
    );
  };
  
export default Form;