import React from "react";
import Footerlink from "../Footerlink/Footerlink";
import Header from "../Header/Header";
import './Projects.css';
import { projectsData } from "../../assets/projectsData";
import ProjectCard from "./Projectcard";
const Projects=()=>{
    return(
        <div className='section-container'>
        <Header
        heading="My projects"
        details="Here are a few cool things I've worked on,do check them out"/>
       <div className="projects-card-container">
           {
         projectsData.map(({ projectName,projectDescription, imageUrl,projectUrl})=>{
             return <ProjectCard
             projectName={projectName}
             projectDescription={projectDescription}
             projectUrl={projectUrl}
             imageUrl={imageUrl}
             />
         })
           }
       </div>
        <Footerlink phrase="Check out " link="My skills" toAddress="/skills"/> 
        </div>
    );
};
export default Projects;