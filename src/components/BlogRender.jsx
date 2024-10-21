import Blog from './Blog';  

const BlogRender = ({ blogs, handleLikes }) => {
  return (
    <div>
      {blogs.map(blog => (
        <Blog key={blog.id} blog={blog} handleLikes={handleLikes}/>
      ))}
    </div>
  );
};

export default BlogRender;
