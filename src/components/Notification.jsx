const Notification = ({ message, color }) => {
    if (message === null) return;
    return (
        <div className={color === "red" ? "redMessage" : "greenMessage"}>
          {message}
        </div>
      );     
};
  
  export default Notification;