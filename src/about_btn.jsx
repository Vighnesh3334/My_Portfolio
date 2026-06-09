import "./Aboutme";
import "./App.css";
import React, { useRef, useState } from "react";
function AboutButton() {
        const window_box=useRef(null)
        const[isAactive,setActive]=useState(null)
        const[index,setindex]=useState(null)
        function handleClick(currentindex){
        if(currentindex==index){
            setindex(null)
        }
        else{
            setindex(currentindex)
        }
        }
    return (
        <div>
            <div className="about_btn">
                <button onClick={()=>handleClick(0)}
                style={{ boxShadow: index==0 ? "0px 0px 30px yellow, -10px 3px 36px rgb(221,152,42)" : "none" }}> Projects</button>
                <button  onClick={()=>handleClick(1)}
                style={{ boxShadow: index==1 ? "0px 0px 30px yellow, -10px 3px 36px rgb(221,152,42)" : "none" }}> Experences</button>
                <button  onClick={()=>handleClick(2)}
                style={{ boxShadow: index==2 ? "0px 0px 30px yellow, -10px 3px 36px rgb(221,152,42)" : "none" }}> Cirtfications</button>
            </div>
            <div className={`display_window ${index !== null ? 'show' : ''}`}>
                <div style={{ padding: "20px", color: "#f1f1f1" }}>
                    {index === 0 && <div><h3>Currently working on a project.....</h3></div>}
                    {index === 1 && <div><p><h1>Core Software & Architecture</h1>
                        <h2>Full-Stack Engineering & Frontend Artistry</h2>
                                                <h2>Intern @ Webstack Academy</h2>
                        Full-Stack & AI Engineering Intern | Webstack Academy<br/>
                        Engineered and deployed production-ready online platforms, transitioning complex web applications from local development to live internet environments.
                        <h2>Multi-Language Versatility</h2>
                        My core toolkit is built on structural adaptability. I pivot seamlessly from writing memory-efficient execution scripts in C and C++ to deploying high-level dynamic applications using JavaScript and Python. This bilingual fluency across low-level and high-level execution allows me to design codebases that are both computationally fast and architecturally scalable.

                        <h2>Artificial Intelligence & Systems Engineering</h2>
                        Advanced AI Frameworks & Model Training
                        Beyond the browser, my focus lies heavily in data and neural engineering. I have practical, hands-on experience handling, configuring, and training robust machine learning models from scratch. My AI workflow ranges from designing classical predictive pipelines using scikit-learn to structuring and training complex deep learning architectures with PyTorch and TensorFlow.

                        <h2>Hardware-AI Convergence</h2>
                        What sets my approach apart is my background in electronics. I don't look at software in a vacuum; I specialize in linking intelligent data models with physical hardware constraints. Whether I am architecting interactive platforms, training neural networks, or optimization pipelines, my ultimate goal is always to bridge the gap between abstract code and impactful, real-world utility

                        </p></div>}
                        


                    {index=== 2 && <div><h3>Energy Harvester</h3><p>Details about your piezo boost converter system...</p></div>}
                </div>
            </div>
        </div>
    );
}

export default AboutButton;