import React from "react";
import "../assets/css/Equipe_Recherche.css";

// Composant pour afficher une équipe individuelle
const Team = ({ title, chief, members }) => {
  return (
    <div className="team">
      <h2 className="team-title">{title}</h2>
      <ul className="team-members">
        <li className="team-chief">
          <strong>{chief}</strong> - <span className="chief">Chef d'Equipe</span>
        </li>
        {members.map((member, idx) => (
          <li key={idx} className="team-member">
            {idx + 1}. {member}
          </li>
        ))}
      </ul>
    </div>
  );
};

export function Equipe_Recherche() {
  const teams = [
    {
      title: "EQUIPE 1 : Ingénierie Juridique et Droit des Affaires",
      chief: "Pr Moulay Mohamed LAHBIB",
      members: ["Pr Souad BENNOUR", "Pr Zakaria BOUABIDI", "Pr Hamid HAMMANI"],
    },
    {
      title: "EQUIPE 2 : Marketing, Management et Innovation",
      chief: "Pr Soumaya DLIMI",
      members: [
        "Pr Abdelouahed KOUCHIH",
        "Pr Abdelmounim SALAHEDDINE",
        "Pr Said GUENNOUNI",
      ],
    },
    {
      title: "EQUIPE 3 : Droit Pénal des Affaires",
      chief: "Pr Aziz EN-NEKHAOUI",
      members: ["Pr Zakia OMRI", "Pr Wafaa FARES", "Pr Assia AIT ALI"],
    },
    {
      title:
        "EQUIPE 4 : Pôle de Recherche en Economie et finance pour l’innovation et les Expertises en Emergence",
      chief: "Pr Said CHAHI",
      members: [
        "Pr Mohammed BAISSA",
        "Pr Brahim JBALI",
        "Pr Mohammed Amine ESSALHI",
      ],
    },
  ];

  return (
    <div className="app-container">
      <h1 className="main-title">EQUIPES DE RECHERCHE Laboratoire LEDTEM</h1>
      {teams.map((team, index) => (
        <Team
          key={index}
          title={team.title}
          chief={team.chief}
          members={team.members}
        />
      ))}
    </div>
  );
}
