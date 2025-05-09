import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = (props) => {
  const [blogs, setBlogs] = useState([]);
  const { handleAddBookmarks, handleMarkAsRead } = props;
  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("blogs.json");
      const blogData = await res.json();
      setBlogs(blogData);
    };
    fetchBlogs();
  }, []);
  return (
    <div className="w-full lg:w-2/3">
      {blogs.map((blog) => (
        <Blog
          blog={blog}
          key={blog.id}
          handleMarkAsRead={handleMarkAsRead}
          handleAddBookmarks={handleAddBookmarks}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
