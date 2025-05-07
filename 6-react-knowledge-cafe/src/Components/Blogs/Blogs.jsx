import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
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
        <Blog blog={blog} key={blog.id}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
