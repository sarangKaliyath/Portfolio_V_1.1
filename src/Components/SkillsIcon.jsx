import React from "react";
import './SkillsIcon.css';
import { data } from "./Skills.js";

export const SkillsIcon = () => {
  return data.map(({ img, title },index) => {
    return (
      <div className="skills_container" key = {index}>
        <img src={img} alt="" />
        <h5>{title}</h5>
      </div>
    );
  });
};
