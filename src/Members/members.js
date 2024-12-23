import React, { useState, useEffect } from "react";
import '../assets/css/members.css';
import Dlimi from "../assets/Images-members/dlimi.jpg";
import BennourSouad from "../assets/Images-members/BennourSouad.jpg";
import KouchihAbdelouahid from "../assets/Images-members/KouchihAbdelouahid.jpg";
import moulaymohamedlahbibrhalib from "../assets/Images-members/moulaymohamedlahbibrhalib.jpg";
import bouabidizakaria from "../assets/Images-members/bouabidizakaria.jpg";
import BaissaMohamed from "../assets/Images-members/BaissaMohamed.jpg";
import AbdelmajidSalaheddine from "../assets/Images-members/abdelmajidSalaheddine.jpg";
import AmineEssalhi from "../assets/Images-members/aminessalhi.jpg";
import SaidCHAHI from "../assets/Images-members/SaidCHAHI.jpg";
import JbaliBrahim from "../assets/Images-members/jbalibrahim.jpg";
import ZakiaOmri from "../assets/Images-members/zakiaomri.jpg";
import SaidElGuennouni from "../assets/Images-members/saidGuennouni.jpg";
import HammaniHamid from "../assets/Images-members/hammaniHamid.jpg";
import AssiyaAitAli from "../assets/Images-members/assiyaAitAli.jpg";
import FaresWafaa from "../assets/Images-members/faresWafaa.jpg";



const initialMembersData = [
  { 
      id: 1, 
      name: "Pr Soumaya DLIMI", 
      role: "Chef d'Equipe Marketing, Management et Innovation", 
      image: Dlimi, 
      description: "Professeure à la faculté des Sciences Juridiques Economiques et Sociales Université Hassan II, de Casablanca au Maroc depuis 2003. Docteur en Sciences de Gestion, elle est spécialiste en Management RH, Marketing, stratégie, RSE et performance du capital humain. Conférencière et Consultante en Entreprise, ses communications scientifiques dans les Colloques (nationaux et internationaux) et Congrès et ses livres et ouvrages portent sur ses champs d’expertise et convergent vers la réflexion autour de la compétitivité et la Performance."
  },
  { 
      id: 2, 
      name: "Bennour Souad", 
      role: "Directrice du Laboratoire", 
      image: BennourSouad, 
      description: "Professeur, Faculté des sciences juridiques, économiques et sociales, Université Hassan II, Beida. Maroc. Spécialisé en droit des affaires, ingénierie juridique et financière et fiscalité des sociétés. Ses publications scientifiques portent sur le système juridique du commerçant, le leadership des femmes, les droits sociaux et économiques et le système d’égalité avec la loi sur l’emploi public."
  },
  { 
      id: 3, 
      name: "Pr Kouchih Abdelouahid", 
      role: "Directeur Adjoint du Laboratoire", 
      image: KouchihAbdelouahid, 
      description: "Professeur à la faculté des Sciences Juridiques Economiques et Sociales Université Hassan II, de Casablanca au Maroc, depuis 2010, mais a 27 ans d’expériences académiques plurielles. Docteur en Marketing et Compétitivité des entreprises, il est spécialiste en Marketing fondamental et opérationnel, Digital, Marketing des produits innovants, Marketing international et touristique, et le Management de projet. Ses travaux scientifiques et publications portent sur le Marketing et innovation dans sa pluridisciplinarité, à l’échelle nationale et internationale."
  },
  { 
      id: 4, 
      name: "Pr Rhaubmoulay Mohamed Lahbib", 
      image: moulaymohamedlahbibrhalib, 
      description: "Il est Professeur à la faculté des Sciences Juridiques Economiques et Sociales, Université Hassan II, de Casablanca au Maroc. Docteur en Droit privé, ses publications portent sur la protection du consommateur en Droit Marocain, le redressement judiciaire des entreprises en difficultés, la gouvernance des banques et la lutte contre le blanchiment d’argent. Ses ouvrages mettent en lumière le droit des affaires pour les managers, le droit des sociétés, et la Responsabilité Limitée."
  },
  { 
      id: 5, 
      name: "Pr Zakaria Bouabidi", 
      image: bouabidizakaria, 
      description: "Il est Professeur à la faculté des Sciences Juridiques Economiques et Sociales, Université Hassan II, de Casablanca au Maroc depuis 2014. Docteur en Droit privé, il est spécialiste en Procédure civile, le Droit pénal des affaires, le Droit des sociétés, le Droit de la consommation, les Modes alternatifs de règlement de litiges, Droit des procédures collectives, Droit des contrats, Droit des sûretés, et les techniques contractuelles. Ses publications portent sur les procédures collectives au Maroc, et la succession des réformes de droit de surendettement."
  },
  { 
      id: 6, 
      name: "PR BAISSA MOHAMED", 
      image: BaissaMohamed, 
      description: "Professeur à la Faculté des Sciences Juridiques, Économiques et Sociales, Université Hassan II de Casablanca. Ses travaux publiés portent sur l'effet des recours sur l'exécution, l'opposabilité de la conciliation aux tiers, l'action en responsabilité des services fiscaux, le droit de préemption au profit de l'État et les droits de l'Homme. Son ouvrage est intitulé : « Le contentieux fiscal entre recours en annulation et recours de pleine juridiction »."
  },
  { 
      id: 7, 
      name: "Pr Abdelmajid Salaheddine", 
      image: AbdelmajidSalaheddine, 
      description: "Il est Professeur à la faculté des Sciences Juridiques Economiques et Sociales, Université Hassan II, de Casablanca au Maroc depuis 1992. Docteur en Sciences Economiques, il est spécialiste en Comptabilité, finance et Audit. Animateur de divers séminaires et formations sur la gestion de la trésorerie, la gestion obligatoire, le risk management, la titrisation d’actifs et les marchés à terme."
  },
  { 
      id: 8, 
      name: "Pr Amine ESSALHI", 
      image: AmineEssalhi, 
      description: "Il est Professeur à l'ENCG de Casablanca depuis 2010. Docteur en finance, il est expert en Management et finance. Trader, animateur de conférence, ses travaux scientifiques portent sur le Mode d’amortissement des immobilisations, La bourse islamique, produit, la Fiscalité et création de valeur, la Création de valeur par les entreprises cotées à la Bourse des Valeurs de Casablanca, et la Structure optimale du capital."
  },
  { 
      id: 9, 
      name: "Pr CHAHI SAID", 
      image: SaidCHAHI, 
      description: "Il est Professeur à la faculté des Sciences Juridiques Economiques et Sociales, Université Hassan II, de Casablanca au Maroc depuis 1995. Ses domaines de compétences incluent la recherche scientifique, le consulting, les études économiques et de marché, l’audit, le benchmarking, et l’assistance technique."
  },
  { 
      id: 10, 
      name: "Pr JBALI Brahim", 
      image: JbaliBrahim, 
      description: "Il est Professeur à la faculté des Sciences Juridiques Economiques et Sociales, Université Hassan II, de Casablanca au Maroc depuis 1992. Docteur es Sciences économiques, expert en gestion, et responsable de cours axés sur les techniques de gestion avancées."
  },
  { 
      id: 11, 
      name: "Pr Zakia Omri", 
      image: ZakiaOmri, 
      description: "Professeure à la Faculté des Sciences Juridiques, Économiques et Sociales de l'Université Hassan II de Casablanca depuis 2014. Sa thèse, consacrée à la lutte contre le blanchiment de capitaux, reflète son expertise en droit pénal des affaires, procédure pénale, et droit commercial. Ses recherches et publications portent sur des thématiques clés telles que les enquêtes et la conformité en blanchiment de capitaux, la confiscation des avoirs, ou encore l’impact des crypto-monnaies dans la lutte contre le blanchiment d’argent. Figure reconnue dans son domaine, Pr. Omri contribue activement à l’évolution du droit pénal économique et financier."
  },
  ,
  { 
      id: 12, 
      name: "Pr Said EL GUENNOUNI", 
      image: SaidElGuennouni, 
      description: "Il est Professeur à la faculté des Sciences Juridiques Economiques et Sociales, Université Hassan II, de Casablanca au Maroc. Docteur en Marketing, ses contributions scientifiquesportent sur l'identité des marques de luxe, les enjeux managériaux de la digitalisation du service public, et les notions de qualité et de satisfaction."
  },
  ,
  { 
      id: 13, 
      name: "Pr HAMMANI HAMID", 
      image: HammaniHamid, 
      description: "استاذ بكلية العلوم القانونية و الاقتصادية و الاجتماعية، بالبيضاء. له دكتوراه الدولة بالعلوم الاسلامية،"
  },
  ,
  { 
      id: 14, 
      name: "Pr ASSIYA AIT ALI", 
      image: AssiyaAitAli, 
      description: "أستاذة أسيا ايت علي أستاذة محاضرة بكلية العلوم القانونية والاقتصادية والاجتماعية عين الشق- بالدار  البيضاء- دكتورة في القانون الخاص، التحقت برحاب الكلية سنة 2023.متخصصة في قانون الأسرة.منشوراتها العلمية تمحورت حول: قضايا الأسرة، المرأة والطفل"
  },
  ,
  { 
      id: 15, 
      name: "Pr. FARES WAFAA", 
      image: FaresWafaa, 
      description: "Professeur de droit depuis 2014 titulaire de doctorat en droit privé et sciences criminelles ex-responsable juridique de groupe de sociétés spécialisée dans les matières pénales, procedurales et judiciaires; une importante expérience à la faculté de Mohamedia, l'ENCG, l'EHTP ... des études et réalisations relevant du droit pénal, organisation judiciaire, droit des assurances et autres."
  },
];

const Members = ({ membersData }) => {
  const [members, setMembers] = useState(membersData || initialMembersData);

  useEffect(() => {
    if (membersData) {
      setMembers(membersData);
    }
  }, [membersData]);

  return (
    <div className="members-page">
      <h1 className="section-title">Tous les Membres</h1>
      <div className="members-grid">
        {members.map((member) => (
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
};

export { initialMembersData as membersData };
export default Members;
