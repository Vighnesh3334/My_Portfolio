import React,{useEffect, useState}from "react";
import Button from "./about_btn";
function Aboutus({motion_rev}){
const [scrolldr,setscroll]=useState(0)
useEffect(()=>{
  const scrolleffect=()=>{
    const scrollY=window.scrollY
    setscroll(scrollY)
  }
  
   window.addEventListener("scroll" ,scrolleffect)
  return ()=>{
    window.removeEventListener("scroll" ,scrolleffect)
  };
  
},[])
 console.log(scrolldr)
    return(
        <div className="about_section">
        <div className="gradient"></div>
        <h1>About ME</h1>
        <div className="box">
          <img className="profile-pic" src="https://cdn.corenexis.com/files/c/7287117720.png"
          style={{
            transform: `translateY(${motion_rev/3}px)`,
                transition: "transform 1s linear"
          }}/>
          <div className="shadow"></div>
        </div>
        <Button/>
        {scrolldr > 700 && scrolldr < 3900 && (
          <div className="p1" style={{
             transform:`translateY(${scrolldr*0.2}px)`,
             transition: "transform 0.1s linear",
             opacity:scrolldr > 700  ? 1 : 0,
             transformStyle: "preserve-3d",
             transition:"opacity 0.5 0.1s ease-in-out"}}>
            {console.log(scrolldr)}
            <div className="img"><img  src="https://cdn.corenexis.com/files/c/7828531720.jpg" alt="Logo"/></div>
            <p>I am a passionate and curious developer with a strong interest in building intelligent systems that combine software, AI, and electronics. Currently pursuing Electronics and Communication Engineering at National Institute of Technology Calicut, I am also a Udemy-certified Full Stack Web Developer focused on creating scalable web applications and AI-driven solutions.</p>
          </div>
        )}

        {scrolldr > 1480 && scrolldr < 3900 && (
          <div className="p1" style={{transform:`translateY(${scrolldr*0.2}px)`,transition: "transform 0.1s linear",
            opacity: scrolldr > 1480 ? 1 : 0,transformStyle: "preserve-3d"}}>
            {console.log(scrolldr)}
            <p>My technical interests span across full stack web development, machine learning, embedded systems, VLSI, and modern AI technologies. I have hands-on experience working with programming languages such as C, C++, JavaScript, and Python, along with a solid understanding of core electronics and hardware systems.</p>
            <div className="img"><img src="https://cdn.corenexis.com/files/c/7924159720.png" alt="Logo"/></div>
          </div>
        )}
        {scrolldr > 1987 && scrolldr < 3900 && (
        <div className="p1" style={{transform:`translateY(${scrolldr*0.2}px)`,transition: "transform 0.1s linear",opacity: scrolldr > 1987 ? 1 : 0,transformStyle: "preserve-3d"}}>
          <div className="img"><img src="https://cdn.corenexis.com/files/c/3286116720.png" alt="Logo"/></div>
          <p>In machine learning, I have learned and built projects using algorithms including Linear Regression, Logistic Regression, Polynomial Regression, Naive Bayes, Decision Trees, Random Forest, and AdaBoost. Currently, I am expanding my expertise in Natural Language Processing (NLP), Large Language Models (LLMs), Deep Learning, and Artificial Neural Networks.</p>
        </div>
        )}
        {scrolldr >2488 && scrolldr < 3900 && (
        <div className="p1" style={{
          marginTop:"0px",
          transform:`translateY(${scrolldr*0.2}px)`,transition: "transform 0.1s linear",opacity: scrolldr > 2488 ? 1 : 0,transformStyle: "preserve-3d"}}>
          <p>Beyond software development, I am deeply interested in electronics and embedded systems, especially in building intelligent IoT-based solutions that integrate hardware with AI. I enjoy exploring innovative technologies and continuously improving my skills through practical projects and real-world problem solving.</p>
           <div className="img"><img src="https://cdn.corenexis.com/files/c/3939385720.jpg" alt="Logo" /></div>
        </div>
        )}
          {/* <p className="p1">I am passionate about developing impactful technology solutions and aim to contribute to the fields of AI, embedded systems, and next-generation software engineering.</p> */}
       
      </div>
    )

}
export default Aboutus;