import React from "react";
import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="mb-9 mt-4 flex items-center justify-between border-b-2 border-[#11111126] pb-4">
      <h1 className="text-2xl font-bold text-[#111] lg:text-4xl">
        Knowledge Cafe
      </h1>
      <img src={profile} alt="profile image" />
    </header>
  );
};
export default Header;
