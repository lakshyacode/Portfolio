import React from "react";
import Footerlink from "../Footerlink/Footerlink";
import Header from "../Header/Header";
import './Contact.css';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';
const Contact=()=>{
    return(
        <div className='section-container'>
        <Header 
        heading="Get in touch"
        details="Interested to collaborate?Feel free to drop me an email."
        />
        {/* Form-section */}
        <div className="contact-form-container">
            <form className="contact-form " action="https://formspree.io/f/xpzbqvry"
  method="POST">
                {/* email id input */}
          <input
          type="email"
          placeholder="Your email id"
          name="_replyto"
          className="input-box email-input"
          />
          {/* email  body */}
          <textarea
          type="text"
          placeholder="Your message"
          name="message"
          className="input-box body-input"
          ></textarea>
          {/* submit button */}
          <button type="submit" className="contact-btn">
              Send Email
          </button>
            </form>
        </div>
        {/* Social icons */}
        <div className="social-icons-container">
            <a href="https://github.com/lakshyacode" className="social-item">
                <img src={github} alt="social" />
            </a>

            <a href="https://www.linkedin.com/in/lakshya-sharma-27053a159/" className="social-item">
                <img src={linkedin} alt="social" />
            </a>

            <a href="instagram.com/lakshya14_/" className="social-item">
                <img src={instagram} alt="social" />
            </a>
        </div>
        <Footerlink phrase="Read more" link="About me" toAddress="/About"/>
        <div className="vector-frame">
            <img src={contactVector} alt="vector" className="about-vector" />
        </div>
        </div>
    );
};
export default Contact;