import React from "react";
import html_logo from "./assets/html.png";
import css_logo from "./assets/css.png";
import js_logo from "./assets/js.png";
import react_logo from "./assets/atom.png";
import node_logo from "./assets/programing.png";
import mongo_logo from "./assets/database.png";
import scikit_logo from "./assets/chip.png";
import git_logo from "./assets/github.png";
function Skill({xmotion}){
    return(
        <div className="skills">
        <h1>MY Skills</h1>
         <div className="skill_section"
         style={{
          gap:`${xmotion}px`,
          transition: "gap 0.1s linear"
         }}>
              <div className="skill_card">
                <h3>Frontend</h3>
                 <text>HTML, CSS3, JavaScript, React</text>
                 <div className="logos">
                  <img src={html_logo} alt="Logo"/>
                  <img src={css_logo} alt="Logo"/>
                  <img src={js_logo} alt="Logo"/>
                  <img src={react_logo} alt="Logo"/>
                 </div>
              </div>
              <div className="skill_card">
                <h3>Backend</h3>
                <text>Node.js, Express, Python,REST APIs,Axios,MongoDB</text> 
                <div className="logos">
                  <img src={node_logo} alt="Logo"/>
                  <img src={mongo_logo} alt="Logo"/>
                 </div>
              </div>
              <div className="skill_card">
                <h3>AI / Machine Learning</h3>
                <text>TensorFlow, PyTorch, scikit-learn</text>
                <div className="logos">
                  <img src={scikit_logo} alt="Logo"/>
                  <img src={git_logo} alt="Logo"/>
                 </div>
              </div>
              <div className="skill_card">
                <h3>Embedded Systems</h3>
                <text>Arduino, C/C++</text>
                <div className="logos">
                  <img src={html_logo} alt="Logo"/>
                  <img src={css_logo} alt="Logo"/>
               </div>
              </div>
              <div className="skill_card">
                <h3>Tools</h3>
                <text>Git, Docker, VS Code,Postman,MagoDB,Google Colab</text>
                <div className="logos">
                  <img src={git_logo} alt="Logo"/>
               </div>
              </div>
         </div>
      </div>
    )
}
export default Skill;