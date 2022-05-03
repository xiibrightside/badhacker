import React from "react";
import { Link } from "react-router-dom";

const Discord = () => {
  return (
    <div>
      this is discord page
      <div>
        <button>
          <Link to={"/"}>home</Link>
        </button>
      </div>
    </div>
  );
};

export default Discord;
