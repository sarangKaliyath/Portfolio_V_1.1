import React from "react";
import "./Projects.css";
import { gotoLink } from "./Onclick_function.js";

export const Projects = () => {
  return (
    <div className="container" id="projects">
      <div className="project_head">
        <h1>Projects</h1>
      </div>
      <div>
        <div className="project_container">
          <div className="project_box">
            <div>
              <h2>Nykaa</h2>
              <div className="icons">
                <img
                  src="/github.svg"
                  alt=""
                  onClick={() => {
                    gotoLink(
                      "https://github.com/sarangKaliyath/Nykaa_Clone.git"
                    );
                  }}
                />
                <img src="/link.svg" alt="" />
              </div>
            </div>
            <h4>
              <div>
                Clone of a Popular E-commerce Website that sells beauty,
                wellness, and fashion products.
              </div>
            </h4>
            <div className="project_image">
              <img src="/home_page.png" alt="" />
            </div>
            <div>
              <h4>Tech: JS, HTML and, CSS</h4>
            </div>
          </div>
          <div className="project_box">
            <div>
              <h2>Nykaa V2.0</h2>
              <div className="icons">
                <img
                  src="/github.svg"
                  alt=""
                  onClick={() => {
                    gotoLink(
                      "https://github.com/sarangKaliyath/Nykaa_Clone_V2.0.git"
                    );
                  }}
                />
                <img src="/link.svg" alt="" />
              </div>
            </div>
            <h4>
              <div>
                This is the predecessor of the the Nykaa website built with a
                distinguishable tech-stack.
              </div>
            </h4>
            <div className="project_image">
              <img src="/home_page.png" alt="" />
            </div>
            <h4>Tech: Express, MongoDB, Node.js and, EJS</h4>
          </div>

          <div className="project_box">
            <div>
              <h2>Star Wars</h2>
              <div className="icons">
                <img
                  src="/github.svg"
                  alt=""
                  onClick={() => {
                    gotoLink(
                      "https://github.com/sarangKaliyath/star_wars_api/tree/master/starWars"
                    );
                  }}
                />
                <img
                  src="/link.svg"
                  alt=""
                  onClick={()=>{gotoLink("https://star-wars-black.vercel.app/");}}
                />
              </div>
            </div>
            <h4>
              <div>A self designed project inspired by characters of</div>
              <div>Star Wars franchise.</div>
            </h4>
            <div className="project_image">
              <img src="/placeholder.png" alt="" />
            </div>
            <h4>Tech: JS, HTML and, CSS</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
