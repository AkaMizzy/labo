import React from "react";
import '../assets/css/members.css';
import mem1 from "../assets/images/mem1.jpg";
import mem2 from "../assets/images/mem2.jpg";
import mem3 from "../assets/images/mem3.jpg";
import mem4 from "../assets/images/mem4.jpg";
import mem5 from "../assets/images/mem5.jpg";
import mem6 from "../assets/images/mem6.jpg";
import mem7 from "../assets/images/mem7.jpg";
import mem8 from "../assets/images/mem8.jpg";
import mem9 from "../assets/images/mem9.jpg";
import mem10 from "../assets/images/mem10.jpg";
import mem11 from "../assets/images/mem11.jpg";
import mem12 from "../assets/images/mem12.jpg";

const membersData = [
    { id: 1, name: "Ez-zouek Hamza", role: "Chef Exécutif", image: mem1, description: "Responsable de la vision et de la direction culinaire." },
    { id: 2, name: "Sophie Berger", role: "Responsable des Relations Client", image: mem2, description: "Chargée d'assurer une excellente relation avec nos clients." },
    { id: 3, name: "Lucas Dupont", role: "Responsable des Achats", image: mem3, description: "Gère les achats pour garantir la meilleure qualité." },
    { id: 4, name: "Fatima Zahra", role: "Chef Pâtissier", image: mem4, description: "Créatrice des desserts les plus savoureux." },
    { id: 5, name: "Ahmed Mansouri", role: "Sommelier", image: mem5, description: "Expert en vins et accords culinaires." },
    { id: 6, name: "Sara Benali", role: "Chef de Salle", image: mem6, description: "Supervise le service en salle." },
    { id: 7, name: "Youssef Alaoui", role: "Commis de Cuisine", image: mem7, description: "Assiste les chefs dans la préparation des plats." },
    { id: 8, name: "Leila Hakimi", role: "Responsable Marketing", image: mem8, description: "Crée et gère nos campagnes marketing." },
    { id: 9, name: "Karim El Fassi", role: "Directeur Financier", image: mem9, description: "Gère les finances et les budgets de l'entreprise." },
    { id: 10, name: "Amine Othmani", role: "Chef de Rang", image: mem10, description: "Responsable d'une partie du service en salle." },
    { id: 11, name: "Hind Toumi", role: "Responsable Logistique", image: mem11, description: "Organise les livraisons et approvisionnements." },
    { id: 12, name: "Ali Jebari", role: "Manager Général", image: mem12, description: "Supervise toutes les opérations." },
  ];
  

function Members() {
  return (
    <div className="members-page">
  <h1 className="section-title">Tous les Membres</h1>
  <div className="members-grid">
    {membersData.map((member) => (
      <div className="member-card" key={member.id}>
        <img src={member.image} alt={member.name} className="member-photo" />
        <h3>{member.name}</h3>
        <p className="member-role">{member.role}</p>
        <p className="member-description">{member.description}</p>
      </div>
    ))}
  </div>
</div>

  );
}

export default Members;
