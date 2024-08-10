import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skills = [
  { name: "HTML", value: 90, color: "#e34c26", image: "images/html.png" },
  { name: "CSS", value: 85, color: "#264de4", image: "images/css.png" },
  {
    name: "JavaScript",
    value: 80,
    color: "#f0db4f",
    image: "images/javascript.png",
  },
  { name: "jQuery", value: 70, color: "#0769ad", image: "images/jquery.png" },
  {
    name: "Bootstrap",
    value: 75,
    color: "rgb(250, 26, 231)",
    image: "images/bootstrap.png",
  },
  { name: "React.js", value: 80, color: "#61dafb", image: "images/react.png" },
  { name: "Next.js", value: 70, color: "#f5f5f5", image: "images/next.svg" },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="skills-section" style={styles.skillsSection}>
      <h2 className="text-light" data-aos="fade-up">My Skills</h2>
      <div className="container">
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div
              className="col-12 col-md-6 col-lg-4 mb-4"
              key={index}
            >
              <div style={styles.skillItem} data-aos="fade-up" className="bg-blue">
                <div className="skill-icon text-center mb-3">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    style={styles.skillImage}
                  />
                </div>
                <div className="progress-wrapper">
                  <div className="progress" style={styles.progressBar}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${skill.value}%`,
                        backgroundColor: skill.color,
                      }}
                      aria-valuenow={skill.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>
                <h4 className="text-light mt-3">{skill.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  skillsSection: {
    textAlign: "center",
    padding: "50px 20px",
  },
  skillItem: {
    padding: "20px",
    margin: "15px",
    borderRadius: "10px",
    transition: "transform 0.3s ease-in-out",
  },
  skillImage: {
    maxWidth: "60px",
    height: "auto",
    marginBottom: "10px",
  },
  progressBar: {
    height: "10px",
    borderRadius: "5px",
    backgroundColor: "#333",
  },
};

export default Skills;
