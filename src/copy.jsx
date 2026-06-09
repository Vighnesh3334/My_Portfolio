import React, { useState, useEffect } from 'react';
function Aboutus() {
  const [scrolldr, setScroll] = useState(0);

  useEffect(() => {
    const scrolleffect = () => {
      setScroll(window.scrollY);
    };
    
    window.addEventListener("scroll", scrolleffect);
    return () => {
      window.removeEventListener("scroll", scrolleffect);
    };
  }, []);

  // Helper function to calculate smooth entry states based on scroll triggers
  // It handles the fade-in (0 to 1) and movement smoothly without breaking the DOM
  const getScrollProgress = (startPoint, currentScroll) => {
    return Math.max(0, currentScroll - startPoint);
  };

  return (
    <div className="about_section" style={{ perspective: "1000px", overflowX: "hidden" }}>
      <div className="gradient"></div>
      <h1>About ME</h1>

      {/* BLOCK 1: Starts appearing after scrolling past 700px */}
      {(() => {
        const progress = getScrollProgress(700, scrolldr);
        const opacity = Math.min(progress / 200, 1); // Fades in fully over 200px of scrolling
        
        return (
          <div className="p1" style={{
            transform: `translateX(${progress * 0.4}px)  translateZ(${progress * 0.1}px)`,
            opacity: opacity,
            transformStyle: "preserve-3d",
            pointerEvents: opacity === 0 ? "none" : "auto" // Prevents clicking invisible elements
          }}>
            <div className="img"><img src="https://cdn.corenexis.com/files/c/7828531720.jpg" alt="Logo"/></div>
            <p>I am a passionate and curious developer with a strong interest in building intelligent systems that combine software, AI, and electronics. Currently pursuing Electronics and Communication Engineering at National Institute of Technology Calicut, I am also a Udemy-certified Full Stack Web Developer focused on creating scalable web applications and AI-driven solutions.</p>
          </div>
        );
      })()}

      {/* BLOCK 2: Starts appearing after scrolling past 1200px */}
      {(() => {
        const progress = getScrollProgress(1200, scrolldr);
        const opacity = Math.min(progress / 200, 1);
        
        return (
          <div className="p1" style={{
            transform: `translateZ(${progress * 0.8}px) rotateX(${progress * 0.05}deg)`,
            opacity: opacity,
            transformStyle: "preserve-3d",
            marginTop: '300px',
            pointerEvents: opacity === 0 ? "none" : "auto"
          }}>
            <p>My technical interests span across full stack web development, machine learning, embedded systems, VLSI, and modern AI technologies. I have hands-on experience working with programming languages such as C, C++, JavaScript, and Python, along with a solid understanding of core electronics and hardware systems.</p>
            <div className="img"><img src="https://cdn.corenexis.com/files/c/7924159720.png" alt="Logo"/></div>
          </div>
        );
      })()}

      {/* BLOCK 3: Starts appearing after scrolling past 1600px */}
      {(() => {
        const progress = getScrollProgress(1600, scrolldr);
        const opacity = Math.min(progress / 200, 1);
        
        return (
          <div className="p1" style={{
            transform: `translateX(${progress * 0.3}px)`,
            opacity: opacity,
            transformStyle: "preserve-3d",
            marginTop: '600px',
            pointerEvents: opacity === 0 ? "none" : "auto"
          }}>
            <div className="img"><img src="https://cdn.corenexis.com/files/c/3286116720.png" alt="Logo"/></div>
            <p>In machine learning, I have learned and built projects using algorithms including Linear Regression, Logistic Regression...</p>
          </div>
        );
      })()}

      <p className="p1" style={{ marginTop: '200px' }}>
        I am passionate about developing impactful technology solutions and aim to contribute to the fields of AI, embedded systems, and next-generation software engineering.
      </p>
    </div>
  );
}

export default Aboutus;