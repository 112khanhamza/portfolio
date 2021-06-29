import React from "react";
import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import SkillCard from "./SkillCard"
import skillsVector from "./../../assets/skills_vector.png";
import { skillList } from "../../assets/skillsData";
import "./Skills.css";

const Skills = () => {
    return (
        <div className="section-container">
            <Header
                heading="My Skills"
                details="Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!"
            />

            <div className="skill-card-container">
                {
                    skillList.map(skill => {
                        return <SkillCard skillName={skill.skillName} skillUrl={skill.skillUrl} />
                    })
                }
            </div>

            <FooterLink
                phrase="Get in "
                link="touch."
                toAddress="/contact"
            />

            <div className="skills-vector-frame">
                <img src={skillsVector} alt="skills" className="skills-vector" />
            </div>
        </div>
    )
}

export default Skills;