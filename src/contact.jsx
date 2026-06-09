import React from "react";
import linkedin_logo from "./assets/linkedin-icon-2-logo-svgrepo-com.svg"
import insta_logo from "./assets/instagram-2016-logo-svgrepo-com.svg"
import gitlogo from "./assets/github.png"
import WhatsAppButton from "./whatsapp";
function ContactSection(){
    return(
        <div>
            {/* <div style={{width:'90%',height:'3px',background:'white','border-radius':'2px',
                'margin-left':'5%'
            }}></div> */}
            <div className="contacts">
                <h1 style={{'margin-left':'40%', 
                fontSize: "40px", width: "30%",
                fontFamily: "Changa One", 
                fontWeight: "100",
                fontStyle: "normal",
                'margin-bottom':"200px",
                }}>Connect Me</h1>
                <div className="contacts-options">
                <a href="https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BPrO5uvfXQay3B09bJdXS4g%3D%3D"><div className="linkedin"><img src={linkedin_logo} alt="logo" width="50px" height="50"/></div></a>
                <a href="https://www.instagram.com/whighnesh/"><div className="insta"><img src={insta_logo} alt="logo"width="50px" height="50" /></div></a>
                <a href="https://github.com/Vighnesh3334" ><img src={gitlogo} alt="logo"width="50px" height="50"/></a>
                <WhatsAppButton/>
                </div>
            </div>
        </div>
    )
}
export default ContactSection;