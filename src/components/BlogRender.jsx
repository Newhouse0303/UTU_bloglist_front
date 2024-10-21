import Blog from './Blog';  

const BlogRender = ({ blogs, handleLikes, handleRemove }) => {
  return (
    <div>
      {blogs.map(blog => (
        <Blog key={blog.id} blog={blog} handleLikes={handleLikes} handleRemove={handleRemove}/>
      ))}
    </div>
  );
};

export default BlogRender;
