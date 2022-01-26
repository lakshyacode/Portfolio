import React from "react";
import './Skills.css';

const SkillCard=({skillName,skillUrl})=>{
    return(
      <div className="skill">
          <img src={skillUrl} alt="" />
          <p>{skillName}</p>
      </div>
    );
}
export default SkillCard;