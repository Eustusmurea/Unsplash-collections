import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row border-spacing-2 border-solid">
      <div className="logo">
        <img src="src/assets/react.svg" alt="logo" />
      </div>
      <nav className="bg-white flex flex-row font-bold ">
        <div>
          <h1>Home</h1>
        </div>
        <h1>Collections</h1>
      </nav>
    </div>
  );
};

export default Navbar;
