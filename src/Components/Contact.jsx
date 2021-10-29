import React from "react";
import "./Contact.css";
import { gotoLink } from "./Onclick_function.js";

export const Contact = () => {
  return (
    <div className="contact_outer_container" id="contact_me">
      <div className="contact_container">
        <div className="reach_out">
          <div className="say_hello">
            <h1 style={{ color: "#1E2022" }}>SAY HELLO</h1>
          </div>
          <div>Feel Free to Reach out</div>
          <div className="temp_header">
            <img src="./email.svg" alt="" />
          </div>
          <div>sarang1221@gmail.com</div>
          <div className="temp_header">
            <img src="./phone.svg" alt="" />
          </div>
          <div>+91 7588303199</div>
        </div>
        <div className="contact_input">
          <input
            className="contact_name"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="contact_email"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="contact_message"
            type="text"
            placeholder="Enter Message"
          />
          <button className="submit_button" disabled>
            Submit
          </button>
        </div>
      </div>
      <div className="footer_links">
        <div>
          <img
            src="./github_light.svg"
            alt=""
            onClick={() => {
              gotoLink("https://github.com/sarangKaliyath");
            }}
          />
          <div>github/sarangKaliyath</div>
        </div>
        <div>
          <img
            src="./linkedin.svg"
            alt=""
            onClick={() => {
              gotoLink(
                "https://www.linkedin.com/in/sarang-kaliyath-84034a122/"
              );
            }}
          />
          <div>linkedIn/sarang-kaliyath</div>
        </div>
        <div>
          <img
            src="./twitter.svg"
            alt=""
            onClick={() => {
              gotoLink("https://twitter.com/KaliyathSarang");
            }}
          />
          <div>twitter/KaliyathSarang</div>
        </div>
      </div>
    </div>
  );
};
