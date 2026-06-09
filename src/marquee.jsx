import MarqueeModule from "react-fast-marquee";

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
            <img src="https://cdn.corenexis.com/files/c/1175313720.png" alt="HTML" /><span style={{ marginRight: "80px" }}>HTML</span>
            <img src="https://cdn.corenexis.com/files/c/8184252720.png" alt="CSS" /><span style={{ marginRight: "80px" }}>CSS</span>
            <img src="https://cdn.corenexis.com/files/c/1213421720.png" alt="JavaScript" /><span style={{ marginRight: "80px" }}>JavaScript</span>
            <img src="https://cdn.corenexis.com/files/c/1795466720.png" alt="React" /><span style={{ marginRight: "80px" }}>React</span>
            <img src="https://cdn.corenexis.com/files/c/9233794720.png" alt="Node.js" /><span style={{ marginRight: "80px" }}>Node.js</span>
            <img src="https://cdn.corenexis.com/files/c/6756951720.png" alt="MongoDB" /><span style={{ marginRight: "80px" }}>MongoDB</span>
            <img src="https://cdn.corenexis.com/files/c/8278952720.png" alt="Scikit-Learn" /><span style={{ marginRight: "80px" }}>Scikit-Learn</span>
            <img src="https://cdn.corenexis.com/files/c/7555317720.png" alt="Full Stack Developer" /><span style={{ marginRight: "80px" }}>C++</span>
        </Marquee>
    </div>
  );
}