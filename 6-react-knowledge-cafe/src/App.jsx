import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

const App = () => {
  /*
   Lift Up the state(context api)
   We will not set useState inside 
   blog component. Cause blog is not
   directly connect with appx.jsx.
   To handle bookmarks, we lift up the
   state two level up. 
  */
  const [bookmarks, SetBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddBookmarks = (blog) => {
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    SetBookmarks(newBookmarks);
  };
  const handleMarkAsRead = (blogReadTime,id) => {
    const newReadTime = blogReadTime + readingTime;
    setReadingTime(newReadTime);
    // remove bookmarks
    const removeBookmarks = bookmarks.filter(bookmark => bookmark.id !==id);
    SetBookmarks(removeBookmarks);
  };
  return (
    <div className="mx-4">
      <Header></Header>
      <div className="flex flex-col justify-between gap-6 lg:flex-row">
        <Blogs handleAddBookmarks={handleAddBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  );
};

export default App;
