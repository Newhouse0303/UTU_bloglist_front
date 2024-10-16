import Blog from './Blog';  

const BlogRender = ({ blogs }) => {
  return (
    <div>
      {blogs.map(blog => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogRender;
