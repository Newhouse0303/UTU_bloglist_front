const BlogForm = ({
    title,
    author, 
    url,
    handleTitle,
    handleAuthor,
    handleUrl,
    handlePost }) => {
    return (
      <form onSubmit={handlePost}>
        <div>
            title:
            <input type="text" value={title} onChange={handleTitle} />
        </div>
        <div>
            author:
            <input type="text" value={author} onChange={handleAuthor} />
        </div>
        <div>
            url:
            <input type="text" value={url} onChange={handleUrl} />
        </div>
        <div>
          <button type="submit" onClick={handlePost}>create</button>
        </div>
      </form>
    );
  };
  
export default BlogForm;