import React from "react";
import "../assets/css/rules.css";
import RI from "../assets/documents/RI_Laboratoire.pdf"

export default function ReglementInterieur() {
    const handleDownload = (e) => {
        e.preventDefault();
        const link = document.createElement("a");
        link.href = RI ; 
        link.download = "RI_Laboratoire.pdf";
        link.click();
    };

    return (
        <div className="reglement-container">
            <h1>Règlement Intérieur</h1>
            <section className="reglement-summary">
                <h2>Résumé</h2>
                <p>
                    Le laboratoire <strong>« Laboratoire d'Études Transversales en Droit, Économie et Management des affaires »</strong> 
                    est un centre de recherche pluridisciplinaire situé à la Faculté des Sciences Juridiques, Économiques et Sociales - Aïn Chock, 
                    sous l'Université Hassan II de Casablanca. Il est structuré autour de 4 équipes de recherche couvrant 
                    10 thématiques clés :
                </p>
                <ul>
                    <li>Transformation numérique et droit des affaires</li>
                    <li>Innovation financière et finance durable</li>
                    <li>Fiscalité des entreprises et contentieux fiscal</li>
                    <li>Gouvernance d'entreprise et responsabilité sociétale</li>
                    <li>Conformité et gestion des risques dans les affaires</li>
                    <li>Droit pénal des affaires et prévention des infractions économiques</li>
                    <li>Management et innovation managériale</li>
                    <li>Compétitivité, concurrence et régulation des marchés</li>
                    <li>Développement durable et transition énergétique</li>
                    <li>Économie et politiques publiques pour l'innovation</li>
                </ul>
                <p>
                    Le laboratoire encourage une approche interdisciplinaire et collaborative, avec pour ambition de produire des 
                    connaissances appliquées pour répondre aux défis économiques, juridiques et managériaux contemporains.
                </p>
                <p>
                    Sa stratégie repose sur trois piliers majeurs : l'innovation, la gouvernance et le développement durable, 
                    accompagnant le secteur privé et public dans les transformations numériques, réglementaires et économiques.
                </p>
            </section>

            <button className="download-button" onClick={handleDownload}>
                Télécharger le Règlement Intérieur
            </button>
        </div>
    );
}
