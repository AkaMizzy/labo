import React from "react";
import "../assets/css/organigramme.css"; // Ajoutez un fichier CSS pour le style
import organigramImage from "../assets/images/organigramme.png"; // Chemin vers l'image

export default function Organigramme() {
  return (
    <div className="organigramme-container">
      <h1>Organigramme</h1>
      <img src={organigramImage} alt="Organigramme" className="organigramme-image" />
    </div>
  );
}
