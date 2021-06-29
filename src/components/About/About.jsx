import React from "react";
import "./About.css";
import Header from "./../Header/Header";
import aboutVector from "./../../assets/about_vector.png";
import aboutAnime from "./../../assets/about_anime.gif"
import FooterLink from "../FooterLink/FooterLink";
import aboutData from "../../constants/aboutData";

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading="About Me"
                details="Traveller | Fitness Enthusiast | Teacher | Learning and growing each and everyday"
            />

            <div className="about-main">
                <div className="about-main-left">
                    {/* Sub Section 1 */}
                    <h3 className="about-sub-head">{aboutData[0].subHead}</h3>
                    <p className="about-details">
                        {aboutData[0].details}{' '}
                        <a className="about-link-element" href="mailto:112khanhamza@gmail.com" rel="noreferrer" >{aboutData[0].link}</a>
                    </p>

                    {/* Sub Section 2 */}
                    <h3 className="about-sub-head">{aboutData[1].subHead}</h3>
                    <p className="about-details">
                        {aboutData[1].details}{' '}
                        <a className="about-link-element" href="mailto:112khanhamza@gmail.com" rel="noreferrer" >{aboutData[1].link}</a>
                    </p>

                    {/* Sub Section 3 */}
                    <h3 className="about-sub-head">{aboutData[2].subHead}</h3>
                    <p className="about-details">
                    {aboutData[2].details}{' '}
                        <a className="about-link-element" href="mailto:112khanhamza@gmail.com" rel="noreferrer">{aboutData[2].link}</a>
                    </p>

                </div>
                    <img src={aboutAnime} alt="animation" className="about-anime" />
                <div className="about-main-right">

                </div>
            </div>

            <FooterLink
                phrase="Check out my "
                link="projects!"
                toAddress="/projects"
            />

            {/* Vector Frame */}
            <div className="vector-frame">
                <img src={aboutVector} className='about-vector' alt="about" />
            </div>
        </div>
    )
}

export default About;