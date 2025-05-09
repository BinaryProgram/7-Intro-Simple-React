import React from "react";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = (props) => {
  const {bookmarks,readingTime} = props;

  return (
    <section className="w-full lg:w-1/3">
      <header className="mb-6 rounded-lg border border-[#6047ec] bg-[#6047ec1a] px-1 lg:px-12 py-3 lg:py-5 text-center">
        <h1 className="text-xl lg:text-2xl font-bold text-[#6047ec]">
          Spent time on read : {readingTime} min
        </h1>
      </header>
      <div className="rounded-lg bg-[#1111110d] p-4 lg:p-8 space-y-4">
        <h2 className="text-xl lg:text-2xl font-bold text-[#111]">Bookmarked Blogs : {bookmarks.length}</h2>
        <article className="space-y-4">
          {bookmarks.map((blog,idx) => <Bookmark blog ={blog} key = {idx}></Bookmark>)}
        </article>
      </div>
    </section>
  );
};

export default Bookmarks;
