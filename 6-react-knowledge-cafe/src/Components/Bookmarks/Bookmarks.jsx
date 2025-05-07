import React from "react";

const Bookmarks = () => {
  return (
    <section className="w-full lg:w-1/3">
      <header className="mb-6 rounded-lg border border-[#6047ec] bg-[#6047ec1a] px-1 lg:px-12 py-3 lg:py-5 text-center">
        <h1 className="text-xl lg:text-2xl font-bold text-[#6047ec]">
          Spent time on read : 177 min
        </h1>
      </header>
      <div className="rounded-lg bg-[#1111110d] p-4 lg:p-8 space-y-4">
        <h2 className="text-xl lg:text-2xl font-bold text-[#111]">Bookmarked Blogs : 8</h2>
        <article>
          <p className="font-semibold text-[#111] text-base lg:text-lg p-5 bg-[#fff] rounded-lg">Master Microsoft Power Platform and Become an In-Demand!</p>
        </article>
      </div>
    </section>
  );
};

export default Bookmarks;
