const LogoutButton = ({ user, handleLogout }) => (
  <div>
    <p>
      {user} logged in 
      <button type="button" onClick={handleLogout}>Logout</button>
    </p>
  </div>
);

export default LogoutButton;
