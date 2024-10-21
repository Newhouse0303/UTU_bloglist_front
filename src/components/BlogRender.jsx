import Blog from './Blog';  

const BlogRender = ({ blogs, handleLikes, handleRemove, user }) => {  
  return (
    <div>
      {blogs.map(blog => (
        <Blog key={blog.id} blog={blog} handleLikes={handleLikes} handleRemove={handleRemove} user={user}/>
      ))}
    </div>
  );
};

export default BlogRender;
