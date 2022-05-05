import React from "react";
import { Link } from "react-router-dom";

const Twitter = () => {
  return (
    <body className="pagebody">
      <div id="pagetitle">
        <h1>TWITTER</h1>
      </div>
      <div id="pagelink">
        <p>
          Twitter Handle :-{" "}
          <a href="https://twitter.com/badhackerdotnet?t=yRXwLRqlas3jCpxTHFRFiQ&s=09">
            @badhackerdotnet
          </a>
        </p>
      </div>
      <div>
        <Link to={"/"}>
          <div class="container">
            <div class="center">
              <button className="btn">
                <svg>
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    class="bg-line"
                  />
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    class="hl-line"
                  />
                </svg>
                <span>
                  <i class="fa-3x fa-solid fa-arrow-left-long"></i>
                </span>
              </button>
            </div>
          </div>
        </Link>
      </div>
    </body>
  );
};

export default Twitter;
