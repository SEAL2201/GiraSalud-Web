import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+5930960120939" // Agregar número
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;