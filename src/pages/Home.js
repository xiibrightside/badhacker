import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";
import "./home.css";

const Home = () => {
  return (
    <body className="homepage">
      <div id="hometitle">
        <h1>BADHACKER</h1>
      </div>
      <div id="homecon">
        <p>Per Dolorem Ad Astra</p>
      </div>
      <div className="discordwala">
        <Link to={"/discord"}>
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
                <span className="disc">
                  <i class="fa-3x fa-brands fa-discord"></i>
                </span>
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div className="twitterwala">
        <Link to={"/twitter"}>
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
                <span className="twit">
                  <i class="fa-3x fa-brands fa-twitter"></i>
                </span>
              </button>
            </div>
          </div>
        </Link>
      </div>
    </body>
  );
};

export default Home;
