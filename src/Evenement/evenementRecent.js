import React from "react";
import AppelImage from "../assets/documents/Appel_Contrbution.png";
import JournéeImage from "../assets/documents/Journée_doctorale.png";
import PDF1 from "../assets/documents/Appel_Contrbution.pdf";
import PDF2 from "../assets/documents/4_5774101161694992166.pdf";
import PDF3 from "../assets/documents/دعوة للنشر.pdf";
import "../assets/css/evenement.css";

const initialEvenementR = [
  {
    id: 1,
    titre: "JOURNÉE DE RECHERCHE SCIENTIFIQUE 2022 DE L'ESTC (JRS'22-ESTC)",
    image: AppelImage,
    date: "16 juin 2022 - 16 juin 2022",
    description: "École Supérieure de Technologie organise la Journée de Recherche Scientifique 2022 de l'ESTC sous le thème «La recherche scientifique au service de l'innovation» le 16 juin...",
    pdf: PDF1, // PDF for this event
    link: "#",
  },
  {
    id: 2,
    titre: "Journée doctorale organisée",
    image: JournéeImage,
    date: "16 Octobre 2024",
    description: "Journée doctorale organisée par :Le laboratoire « Droit et management des affaires »À la Faculté des Sciences Juridiques Economiques et Sociales Ain Chock-Salle de conférence 2-",
    pdf: PDF2, 
    link: "#",
  },
  {
    id: 3,
    titre: "Atelier sur le Développement Durable et l'Énergie",
    image: AppelImage,
    date: "12 décembre 2023",
    description: "Un atelier pratique pour explorer les solutions durables dans le domaine de l'énergie et du développement.",
    pdf: PDF3, // PDF for this event
    link: "#",
  },
];
export {initialEvenementR}
export default function EvenementRecent() {
  const handleDownload = (pdf) => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = pdf.split("/").pop(); 
    link.click();
  };

  return (
    <div className="evenement-page">
      <div className="evenement-grid">
        {initialEvenementR.map((eve) => (
          <div className="evenement-card" key={eve.id}>
            <img src={eve.image} alt={eve.titre} className="evenement-photo" />
            <div className="evenement-content">
              <h3 className="evenement-title">{eve.titre}</h3>
              <p className="evenement-date">{eve.date}</p>
              <p className="evenement-description">{eve.description}</p>
              <div>
                <button
                  onClick={() => handleDownload(eve.pdf)}
                  className="evenement-download-button"
                >
                  Télécharger le PDF
                </button>
                <a href={eve.link} className="evenement-link">
                  Lire la suite
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
