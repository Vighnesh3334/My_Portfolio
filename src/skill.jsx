import React from "react";

function Skill({xmotion}){
    return(
        <div className="skills">
        <h1>MY Skills</h1>
         <div className="skill_section"
         style={{
          gap:`${xmotion}px`,
          transition: "gap 0.3s linear"
         }}>
              <div className="skill_card">
                <h3>Frontend</h3>
                 <text>HTML, CSS3, JavaScript, React</text>
                 <div className="logos">
                  <img src="https://cdn.corenexis.com/files/c/1175313720.png" alt="Logo"/>
                  <img src="https://cdn.corenexis.com/files/c/8184252720.png" alt="Logo"/>
                  <img src="https://cdn.corenexis.com/files/c/1213421720.png" alt="Logo"/>
                  <img src="https://cdn.corenexis.com/files/c/1795466720.png" alt="Logo"/>
                 </div>
              </div>
              <div className="skill_card">
                <h3>Backend</h3>
                <text>Node.js, Express, Python,REST APIs,Axios,MongoDB</text> 
                <div className="logos">
                  <img src="https://cdn.corenexis.com/files/c/9233794720.png" alt="Logo"/>
                  <img src="https://cdn.corenexis.com/files/c/5948446720.png" alt="Logo"/>
                 </div>
              </div>
              <div className="skill_card">
                <h3>AI / Machine Learning</h3>
                <text>TensorFlow, PyTorch, scikit-learn</text>
                <div className="logos">
                  <img src="https://cdn.corenexis.com/files/c/6756951720.png" alt="Logo"/>
                  <img src="https://cdn.corenexis.com/files/c/8278952720.png" alt="Logo"/>
                 </div>
              </div>
              <div className="skill_card">
                <h3>Embedded Systems</h3>
                <text>Arduino, C/C++</text>
                <div className="logos">
                  <img src="https://cdn.corenexis.com/files/c/7555317720.png" alt="Logo"/>
                  <img src="https://cdn.corenexis.com/files/c/8714939720.png  " alt="Logo"/>
               </div>
              </div>
              <div className="skill_card">
                <h3>Tools</h3>
                <text>Git, Docker, VS Code,Postman,MagoDB,Google Colab</text>
                <div className="logos">
                  <img src="https://cdn.corenexis.com/files/c/7555317720.png" alt="Logo"/>
               </div>
              </div>
         </div>
      </div>
    )
}
export default Skill;