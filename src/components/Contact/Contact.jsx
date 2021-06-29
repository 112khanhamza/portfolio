import React from "react";
import "./Contact.css";
import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import contactVector from "./../../assets/contact_anime.png";
import github from "./../../assets/gh.png";
import linkedin from "./../../assets/li.png";
import instagram from "./../../assets/in.png";

const Contact = () => {
    return (
        <div className="section-container">
            <Header
                heading="Get in touch"
                details="Intrested to collaborate? Feel free to drop me an email."
            />

            {/* Form Section */}
            <div className="contact-form-container">
                <form 
                    action="https://formspree.io/f/xqkwlarj" 
                    method="POST" 
                    className="contact-form"
                >
                    {/* For email input */}
                    <input 
                        type="email"
                        placeholder="Your Email Id"
                        name="_replyto"
                        className="input-box email-input"
                    />
                    {/* Email Body */}
                    <textarea
                        type="text"
                        placeholder="Your Message"
                        name="message" 
                        className="input-box body-input" 
                        
                    ></textarea>
                    {/* Submit Button */}
                    <button type="submit" className="contact-btn">Send Email</button>
                </form>
            </div>

            {/* Social Icons */}
            <div className="social-icons-container">
                <a href="https://github.com/112khanhamza" className="social-icon" target="_blank" rel="noreferrer">
                    <img src={github} alt="social" />
                </a>
                <a href="https://www.linkedin.com/in/hamza-a-khan/" className="social-icon" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="social" />
                </a>
                <a href="https://www.instagram.com/hamzazmah11/" className="social-icon" target="_blank" rel="noreferrer">
                    <img src={instagram} alt="social" />
                </a>
            </div>

            <FooterLink
                phrase="Read more "
                link="about me."
                toAddress="/about"
            />

            <div className="vector-frame">
                <img src={contactVector} alt="contact" className="about-vector" />
            </div>
        </div>
    )
}

export default Contact;