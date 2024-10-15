const Form = ({
    userName,
    password, 
    checkPassword, 
    handleName, 
    handlePassword }) => {
    return (
      <form onSubmit={checkPassword}>
        <div>
          <label>
            username:
            <input value={userName} onChange={handleName} />
          </label>
        </div>
        <div>
          <label>
            password:
            <input value={password} onChange={handlePassword} />
          </label>
        </div>
        <div>
          <button type="submit">login</button>
        </div>
      </form>
    );
  };
  
export default Form;