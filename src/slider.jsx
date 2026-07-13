import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow } from "swiper/modules";
import slider_1 from "./assets/lvvton (1).png";
import slider_2 from "./assets/lvvton (2).png";
import slider_3 from "./assets/lvvton (3).png";

function ProjectSlider() {
  return (
  <div className="slider-container" style={{marginTop:"200px"}}>
    <Swiper
      spaceBetween={2}
      slidesPerView={6}
      style={{
        position: "relative",
        display: "flex",
        height: "500px",
        width: "1000px",
        marginLeft: "550px",
        borderRadius: "20px",
      }}
       effect="coverflow"
        modules={[EffectCoverflow]}
        centeredSlides
        grabCursor
        coverflowEffect={{
          rotate: 20,
          stretch: 4,
          depth: 150,
          modifier: 1,
          slideShadows: false,
  }}
    >
        <SwiperSlide >
          <div className="card"><p>Technology is transforming the way we live, work, and communicate. From artificial intelligence to cloud computing, modern innovations are creating smarter solutions that improve efficiency and solve complex real-world problems</p>
            {/* <img src="https://cdn.corenexis.com/files/c/3389961720.jpg" alt="Project 1"/>*/}
            <button style={{marginTop:"20px", padding:"10px 20px", backgroundColor:"#007bff", color:"#fff", border:"none", borderRadius:"5px", cursor:"pointer", position:"absolute", bottom:"20px", left:"50%", transform:"translateX(-50%)"}}>Learn More</button> 
            </div>
          
        </SwiperSlide>

        <SwiperSlide>
          <div className="card"><p>I am passionate about technology and its ability to shape the future. Through web development, electronics, and AI, I enjoy building innovative solutions that combine creativity with practical functionality.</p>
          <h1 style={{position:"absolute", top:"-9px", marginLeft:"15px", fontSize:"40px"}}>CO-FOUNDING</h1>
             <img src={slider_3} alt="Project 2"/>
            <button style={{marginTop:"20px", padding:"10px 20px", backgroundColor:"#007bff", color:"#fff", border:"none", borderRadius:"5px", cursor:"pointer", position:"absolute", bottom:"20px", left:"50%", transform:"translateX(-50%)"}}>Learn More</button> 
            </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card"><p>Technology continues to drive innovation across every industry. By leveraging modern software tools, intelligent systems, and data-driven approaches, we can create powerful applications that enhance everyday experiences.</p>
            <h1 style={{position:"absolute", top:"-9px", left:"50%", transform:"translateX(-50%)", fontSize:"40px"}}>PROJECT</h1>
            <img src={slider_1} alt="Project 3"/>
            <button style={{marginTop:"20px", padding:"10px 20px", backgroundColor:"#007bff", color:"#fff", border:"none", borderRadius:"5px", cursor:"pointer",position:"absolute", bottom:"20px", left:"50%", transform:"translateX(-50%)"}}>Learn More</button> 
            </div>
        </SwiperSlide>
              <SwiperSlide>
          <div className="card"><p>As technology evolves, new opportunities emerge to solve challenges in smarter ways. My focus is on developing modern web applications and exploring AI-driven solutions that deliver meaningful impact.</p>
            <h1 style={{position:"absolute", top:"-9px", left:"50%", transform:"translateX(-50%)", fontSize:"40px"}}>EDUCATION</h1>
            <img src={slider_2} alt="Project 4"/>
            <button style={{marginTop:"20px", padding:"10px 20px", backgroundColor:"#007bff", color:"#fff", border:"none", borderRadius:"5px", cursor:"pointer", position:"absolute", bottom:"20px", left:"50%", transform:"translateX(-50%)"}}>Learn More</button> 
            </div>
        </SwiperSlide>
              <SwiperSlide>
          <div className="card"><p>I specialize in creating modern digital experiences through full-stack web development, artificial intelligence, and electronics. My goal is to build efficient, scalable, and user-friendly solutions that bridge the gap between technology and real-world needs.</p>
            {/* <img src="https://cdn.corenexis.com/files/c/3389961720.jpg" alt="Project 5"/>*/}
            <button style={{marginTop:"20px", padding:"10px 20px", backgroundColor:"#007bff", color:"#fff", border:"none", borderRadius:"5px", cursor:"pointer", position:"absolute", bottom:"20px", left:"50%", transform:"translateX(-50%)"}}>Learn More</button> 
            </div>
        </SwiperSlide>
  
    </Swiper>
  </div>
    
  );
}

export default ProjectSlider;