import React from "react";
import "./About.css";
// import { Skills } from "./Skills";
import { gotoLink } from "./Onclick_function.js";
import { SkillsIcon } from "./SkillsIcon";

export const About = () => {
  return (
    <div id="about" className="main_container">
      <div className="about_me_container">
        <div className="about_me_image">
          <img src="/user-01.jpg" alt="" />
        </div>
        <div>
          <h2 style={{ fontSize: "2em" }} className="About_me">
            About Me
          </h2>

          <h4>
            <div>
              <p>
                My name is Sarang Kaliyath. Started as an Electrical engineer
                but soon found the light in web development.
              </p>
              <p>
                It's barely been a minute since I have started learning to code,
                building simple real-world apps is something I duly cherish.
              </p>

              <p>
                To quote Steve Jobs “The only way to do great work is to love
                what you do. If you haven’t found it yet, keep looking. Don’t
                settle.”
              </p>
              <p>
                I am diligently looking for opportunities to work as a web
                developer.
              </p>
            </div>
          </h4>
        </div>
      </div>
      {/* <div className="about_skills">
        <Skills cStyle="html" text={"HTML"} />
        <Skills cStyle="css" text={"CSS"} />
        <Skills cStyle="javaScript" text={"JavaScript"} />
        <Skills cStyle="react" text={"React"} />
        <Skills cStyle="node" text={"Node.js"} />
        <Skills cStyle="express" text={"Express"} />
        <Skills cStyle="mongo" text={"MongoDB"} />
      </div> */}
      <div>
        <h2 className="my_skills">My Skills</h2>
        <div className="skills_icon">
          <SkillsIcon />
        </div>
      </div>
      <div>
        <div className="cv_button">
          <button
            onClick={() => {
              gotoLink(
                "https://drive.google.com/file/d/1WlxLkivnuMQNYNz2ymIMBtIg96_ZKsCA/view?usp=sharing"
              );
            }}
          >
            DOWNLOAD RESUME
          </button>
        </div>
      </div>
    </div>
  );
};
