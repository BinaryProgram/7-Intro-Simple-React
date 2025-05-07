import React from "react";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

const App = () => {
  return (
    <div className="mx-4">
      <Header></Header>
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  );
};

export default App;
