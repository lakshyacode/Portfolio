import React from "react";
import './Skills.css';
import  Header from '../Header/Header';
import { skillList } from "../../assets/skillsData";
import Footerlink from "../Footerlink/Footerlink";
import Skillsvector from './../../assets/skills_vector.png';
import SkillCard from "./Skillcard";
const Skills=()=>{
    return(
        <div className='section-container'>
        <Header
        heading="My skills"
        details="Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!"
        />
        <div className="skills-card-container">
            {
             skillList.map(({skillName,skillUrl})=>{
               
                return <SkillCard skillName={skillName} skillUrl={skillUrl}/>
                     })
            }
           
        </div>
         <Footerlink phrase="Get in" link="touch" toAddress="/contact"/>
       
       <div className="skills-vector-frame">
   <img src={Skillsvector} alt="skills"  className="skills-vector"/>
       </div>
       </div>
    );
};
export default Skills;