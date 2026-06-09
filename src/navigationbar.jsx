import React from "react";
import home from "./assets/nav_icons/home-button.png";
import about from "./assets/nav_icons/information.png";
import project from "./assets/nav_icons/folder.png";
import contact from "./assets/nav_icons/user.png";
function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <h1 style={{ marginLeft: "10%",
         color: "rgba(178, 88, 8, 0.85)", 
         fontSize: "30px", width: "30%",
         fontFamily: "Changa One", 
         fontWeight: "400",
         fontStyle: "normal"
          }}>My Portfolio</h1>
      <ul>
        <li><a href="#home"><img src={home} alt="Home" style={{ width: "20px", height: "20px",  }} /><br />Home</a></li>
        <li><a href="#about"><img src={about} alt="About" style={{ width: "20px", height: "20px", }} /><br />About</a></li>
        <li><a href="#projects"><img src={project} alt="Projects" style={{ width: "20px", height: "20px", }} /><br />Projects</a></li>
        <li><a href="#contact"><img src={contact} alt="Contact" style={{ width: "20px", height: "20px", }} /><br />Contact</a></li>
      </ul>
    </nav>
  );
}
export default NavigationBar;