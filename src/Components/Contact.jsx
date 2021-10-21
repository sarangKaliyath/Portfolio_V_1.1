import React from "react";
import "./Contact.css";
import { gotoLink } from "./Onclick_function.js";

export const Contact = () => {
  return (
    <div className="contact_container" id="contact_me">
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
        <div className="say_hello_links">
          <div>
            <img
              onClick={() => {
                gotoLink("https://github.com/sarangKaliyath");
              }}
              src="./github.svg"
              alt=""
            />
            <img
              onClick={() => {
                gotoLink(
                  "https://www.linkedin.com/in/sarang-kaliyath-84034a122/"
                );
              }}
              src="./linkedin_dark.svg"
              alt=""
            />
            <img
              onClick={() => {
                gotoLink("https://twitter.com/KaliyathSarang");
              }}
              src="./twitter_dark.svg"
              alt=""
            />
          </div>
        </div>
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
  );
};
