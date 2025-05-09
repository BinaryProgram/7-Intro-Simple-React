import React, { useEffect, useState } from "react";
import { PiBookmarkSimple } from "react-icons/pi";

const Blog = (props) => {
  const { blog,handleAddBookmarks,handleMarkAsRead } = props;

  return (
    <div style={{ marginTop: blog.check > 10 ? "50px" : "0" }}>
      <img className="rounded-lg" src={blog.cover_image} alt="cover image" />
      <div className="mt-9">
        <article className="flex justify-between">
          <div className="flex items-center gap-6">
            <div className="avatar">
              <div className="mask mask-squircle w-20">
                <img src={blog.author_image} />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#111]">
                {blog.author_name}
              </h1>
              <h3 className="font-semibold text-[#11111190]">
                {blog.posted_date}
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-medium text-[#11111190]">
              {blog.reading_time} min read
            </h2>
            <button onClick={() => handleAddBookmarks(blog)} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl text-2xl">
              <PiBookmarkSimple></PiBookmarkSimple>
            </button>
          </div>
        </article>
        <article className="mt-6">
          <p className="text-4xl font-bold text-[#111]">{blog.title}</p>
          <div className="flex items-center gap-3 mt-4">
            {blog.hashtag.map((item,id) => (
              <h3 key={id} className="text-xl text-[#11111190] font-medium">{item}</h3>
            ))}
          </div>
          <div className="mt-4"><a onClick={() => handleMarkAsRead(blog.reading_time,blog.id)} href="#" className="link underline text-[#6047ec] font-semibold text-xl">Mark as read</a></div>
        </article>
      </div>
    </div>
  );
};

export default Blog;
