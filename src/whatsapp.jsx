import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import whatsapp_logo from "./assets/whatsapp-whats-app-svgrepo-com.svg"

const WhatsAppButton = () => {
  const phoneNumber = "917558952470"; 
  
  const message = encodeURIComponent("Hello! I'd like to know more about your services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="whatsapp-link"
    >
      <img src={whatsapp_logo} width="50px" height="50"/>
    </a>
  );
};

export default WhatsAppButton;