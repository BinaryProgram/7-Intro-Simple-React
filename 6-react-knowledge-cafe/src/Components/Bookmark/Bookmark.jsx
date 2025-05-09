import React from 'react';

const Bookmark = (props) => {
    const {blog} = props;
    return (
      <div>
        <p className="rounded-lg bg-[#fff] p-5 text-base font-semibold text-[#111] lg:text-lg">
            {blog.title}
        </p>
      </div>
    );
};

export default Bookmark;