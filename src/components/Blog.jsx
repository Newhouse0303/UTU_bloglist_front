// import '../index.css'
//import PropTypes from 'prop-types';


const Blog = ({ blog, handleLikes, handleRemove, user }) => (
  <div className='blog-container'>
    <div>{blog.title} {blog.author}</div>
    <div>{blog.url}</div>
    <div>Likes: {blog.likes} <button onClick={() => handleLikes(blog)}>Like</button></div>
    <div>{user}</div>
      
    {/* In my backend I failed to populate the blog.user so it is null, the "a" stands for my mock username
    With fully functioning backend I would of course compare blog.user to the id of the user */}
    {blog.user === null && user === "a" && (
      <button className='button-remove' onClick={() => {
        const confirmed = window.confirm(`Are you sure you want to delete "${blog.title}"?`);
        if (confirmed) {
          handleRemove(blog);
        }
      }}>Remove</button>
    )}
      
  </div>
);

// Blog.propTypes = {
//   blog: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired,
//     likes: PropTypes.number.isRequired,
//     user: PropTypes.string.isRequired, // this will fail as the blog.user is not populated 
//     id: PropTypes.string.isRequired,
//   }).isRequired,
//   handleLikes: PropTypes.func.isRequired,
//   handleRemove: PropTypes.func.isRequired,
//   user: PropTypes.string.isRequired 
// };
export default Blog;

