
import { useEffect, useState } from "react";
import NavigationBar from "./navigationbar.jsx";
import robo from "./assets/robo.jpeg";
import hero from "./assets/hero.png";
import abimg from "./assets/Hongqi eqm5  01 A989QC.jpeg"
import Aboutus from "./Aboutme.jsx";
import Skill from "./skill.jsx";
import Contactme from "./contact.jsx"
import AppMarquee from "./marquee.jsx";
import ProjectSlider from "./slider.jsx";
function App() {
     const [index, setIndex] = useState(0);
     const [scale, setScale] = useState(1);
     const [motion, setmotion] = useState(0);
     const [xmotion, setxmotion] = useState(0);
     const motion_rev=-1*motion
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY / 1000;
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const y_motion = -scrollY /3;
      setmotion(y_motion);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const images = [robo,
    "https://cdn.corenexis.com/files/c/3389961720.jpg",
    "https://cdn.corenexis.com/files/c/2359521720.jpg",
    "https://cdn.corenexis.com/files/c/2756947720.jpg",
    "https://cdn.corenexis.com/files/c/7676548720.jpg ",
  ];

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setIndex(i);
      i = (i + 1) % images.length;
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const x_motion = 270-(scrollY / 18);
      setxmotion(x_motion);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container"> 
     <NavigationBar />
     <div className="upper_section">
          <div className="hero_section"
          style={{
              transform:`translateY(${motion}px)`,
              transition:`transform 0.1s linear`
          }}>
            <img className="profile-pic" src="https://cdn.corenexis.com/files/c/8763479720.png" />
            <div className="circle_light"></div>
            <h1>Hi, I'm Vighnesh M S</h1>
          </div>
          <div className="short_intro"
          style={{
                  transform: `translateY(${motion}px)`,
                  transition: "transform .3s linear"
                }}>
            <p>Full Stack Web Developer | Electronics & AI Enthusiast</p>
            <p>"I build web applications and intelligent systems using software development, electronics, and AI technologies. I enjoy creating full stack projects, exploring machine learning, and solving real-world problems through technology".</p></div>
          <div className="greenlight"
            style={{
            transform: `scale(${scale})`,
            transition: "transform 0.2s ease-out",}} >
            </div>
            <div className="transition_images"           
                style={{
                // background:`url(${images[index]})`,
                // trasition:"background 0.1 ease-in"
              }}>  
            <img
              src={images[index]}
              alt="Scrolling Image"
            />
            </div>
        </div>

        <Aboutus motion_rev={motion_rev}/>
        <ProjectSlider/>
        <Skill xmotion={xmotion}/>
        <AppMarquee/>
        <Contactme/>
    </div>
  );
}

export default App;