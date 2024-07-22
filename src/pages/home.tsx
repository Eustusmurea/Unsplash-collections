import React from "react";
import Navbar from "../components/navbar";
import Search from "../components/search";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
};

export default Home;
