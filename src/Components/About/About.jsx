import React from "react";
import Header from "../Header/Header";
import './About.css';
import AboutVector from'./../../assets/about_vector.png';
import Footerlink from "../Footerlink/Footerlink";
import aboutanime from "./../../assets/about_anime.gif";
const About=()=> {
    return (
        <div className='section-container'>
            {/* <h1>About me</h1> */}
            <Header 
                heading='About Me.'
                details='Aspiring Software Dev| Front end dev | Fitness enthusiast | Artist '/>
                <div className="about-main">
                    <div className="about-main-left">
                    {/* sub section 1 */}
                    <h3 className="about-sub-head">Student</h3>
                    <p className='about-details'>
                        Iam a 3rd year undergraduate currently pursuing my Btech in information technology from Narsee monjeee institute of management studies(MPSTME),Shirpur.{''}
                        <a className='about-link-element' href="/projects">Check out my projects</a>
                    </p>
                     {/* sub section 2 */}
                     <h3 className="about-sub-head">Hobbies and interest</h3>
                    <p className='about-details'>
                        So apart from learning different techstacks,i have a kneen interest in sports like badminton and gymming.This keeps my strong mind muscle connection.{''}
                        <a className='about-link-element' href="/projects">Check out my projects</a>
                    </p>
                     {/* sub section 3 */}
                     <h3 className="about-sub-head">Extra-curricular</h3>
                    <p className='about-details'>
                        Also i have taken part in my cultural events in my school days and hosted as well.Iam also an organizing commitee member in sponsorship department of youth speak forum.{''}
                        <a className='about-link-element' href="/projects">Check out my projects</a>
                    </p>
                    </div>
                    <div className="about-main-right">
                        <img src={aboutanime} alt="animation" className="about-anime" />
                    </div>
                </div>
            {/* <h1>iam the about page</h1> */}
            {/* vector frame */}
            <Footerlink phrase="check out my"
            link="projects"
            toAddress="/projects"/>
            <div className="vector-frame">
 <img src={AboutVector} className="about-vector" alt="about"/>
            </div>
        </div>
    );
};
export default About