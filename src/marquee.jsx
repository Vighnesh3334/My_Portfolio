import MarqueeModule from "react-fast-marquee";
import html_logo from "./assets/html.png";
import css_logo from "./assets/css.png";
import js_logo from "./assets/js.png";
import react_logo from "./assets/atom.png";
import node_logo from "./assets/programing.png";
import mongo_logo from "./assets/database.png";
import scikit_logo from "./assets/chip.png";
import git_logo from "./assets/github.png";

const Marquee = MarqueeModule.default || MarqueeModule;

export default function AppMarquee() {
  return (
    <div className="marquee-container">
        <Marquee speed={50} pauseOnHover style={{ 
        background: "black",
        color: "white",
        fontSize: "24px",
        backgroundImage: "url('https://cdn.corenexis.com/files/c/8478339720.png')",
        height: "80px",
        animation: "gradientAnimation 10s ease infinite",}}>
            <img src={html_logo} alt="HTML" /><span style={{ marginRight: "80px" }}>HTML</span>
            <img src={css_logo} alt="CSS" /><span style={{ marginRight: "80px" }}>CSS</span>
            <img src={js_logo} alt="JavaScript" /><span style={{ marginRight: "80px" }}>JavaScript</span>
            <img src={react_logo} alt="React" /><span style={{ marginRight: "80px" }}>React</span>
            <img src={node_logo} alt="Node.js" /><span style={{ marginRight: "80px" }}>Node.js</span>
            <img src={mongo_logo} alt="MongoDB" /><span style={{ marginRight: "80px" }}>MongoDB</span>
            <img src={scikit_logo} alt="Scikit-Learn" /><span style={{ marginRight: "80px" }}>Scikit-Learn</span>
            <img src={git_logo} alt="Git" /><span style={{ marginRight: "80px" }}>Git</span>
        </Marquee>
    </div>
  );
}