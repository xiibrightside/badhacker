import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      this is homepage
      <div>
        <button>
          <Link to={"/discord"}>discord</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
