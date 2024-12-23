import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/images/logoss (1).jpg";
import Dlimi from "../assets/Images-members/dlimi.jpg";
import Bennour from "../assets/Images-members/BennourSouad.jpg";
import Kouchih from "../assets/Images-members/KouchihAbdelouahid.jpg";
import missonpic from "../assets/images/missonpic.jpeg";
import recherchepic from "../assets/images/recherchepic.jpeg";
import { initialEvenementR } from "../Evenement/evenementRecent"; 
import { initialEvenementA } from "../Evenement/evenementsAvenir"; 

function Accueil() {
  const scrollToTopBtnRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const scrollToTopBtn = scrollToTopBtnRef.current;

    AOS.init();

    const handleScrollToTopVisibility = () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("show");
      } else {
        scrollToTopBtn.classList.remove("show");
      }
    };

    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    window.addEventListener("scroll", handleScrollToTopVisibility);
    scrollToTopBtn.addEventListener("click", handleScrollToTop);

    return () => {
      window.removeEventListener("scroll", handleScrollToTopVisibility);
      scrollToTopBtn.removeEventListener("click", handleScrollToTop);
    };
  }, []);

  const handleViewAllMembers = () => {
    navigate("/membres"); // Cette fonction peut être utilisée n'importe où dans le composant
  };

  const handleDownload = (pdf) => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = pdf.split("/").pop(); // Use the filename from the path
    link.click();
  };

  return (
    <body>
      <button
        id="scrollToTopBtn"
        className="scroll-to-top"
        ref={scrollToTopBtnRef}
      >
        <i className="bx bx-chevron-up"></i>
      </button>

      <section className="home" id="accueil">
        <div className="overlay">
          <h1>
            Laboratoire d'Etudes Transversales en Droit, Economie et Management
            des Affaires
          </h1>
        </div>
      </section>

      <section
        className="statistics"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="stat-item">
          <h2 data-target="2">3</h2>
          <p>Équipes</p>
        </div>
        <div className="stat-item">
          <h2 data-target="19">31</h2>
          <p>Enseignants</p>
        </div>
        <div className="stat-item">
          <h2 data-target="6">10</h2>
          <p>Promotions</p>
        </div>
        <div className="stat-item">
          <h2 data-target="32">53</h2>
          <p>Doctorants</p>
        </div>
        <div className="stat-item">
          <h2 data-target="14">23</h2>
          <p>Manifestations scientifiques</p>
        </div>
        <div className="stat-item">
          <h2 data-target="44">74</h2>
          <p>Publications</p>
        </div>
        <div className="stat-item">
          <h2 data-target="69">115</h2>
          <p>Communications</p>
        </div>
        <div className="stat-item">
          <h2 data-target="12">20</h2>
          <p>Soutenances</p>
        </div>
      </section>

      <section
        className="team-members"
        id="membres"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="section-title">Nos Membres</h2>
        <div className="team-container">
          <div className="member-card">
            <img src={Dlimi} alt="Pr Soumaya DLIMI" className="member-photo" />
            <h3>Pr Soumaya DLIMI</h3>
            <p className="member-role">Chef d’Equipe Marketing, Management et Innovation</p>
            <p className="member-description">
              Professeure à la faculté des Sciences Juridiques Economiques et
              Sociales Université Hassan II, de Casablanca au Maroc depuis 2003.
              Docteur en Sciences de Gestion, elle est spécialiste en Management
              RH, Marketing, stratégie, RSE et performance du capital humain.
              Conférencière et Consultante en Entreprise, ses communications
              scientifiques dans les Colloques (nationaux et internationaux) et
              Congrès et ses livres et ouvrages portent sur ses champs
              d’expertise et convergent vers la réflexion autour de la
              compétitivité et la Performance.
            </p>
          </div>
          <div className="member-card">
            <img src={Bennour} alt="Bennour Souad" className="member-photo" />
            <h3>Bennour Souad</h3>
            <p className="member-role">Directrice du Laboratoire</p>
            <p className="member-description">
              Professeur, Faculté des sciences juridiques, économiques et
              sociales, Université Hassan II, Beida. Maroc. Spécialisé en droit
              des affaires, ingénierie juridique et financière et fiscalité des
              sociétés. Ses publications scientifiques portent sur le système
              juridique du commerçant, le leadership des femmes, les droits
              sociaux et économiques et le système d’égalité avec la loi sur
              l’emploi public.
            </p>
          </div>
          <div className="member-card">
            <img
              src={Kouchih}
              alt="Pr Kouchih Abdelouahid"
              className="member-photo"
            />
            <h3>Pr Kouchih Abdelouahid</h3>
            <p className="member-role">Directeur Adjoint du Laboratoire</p>
            <p className="member-description">
              Professeur à la faculté des Sciences Juridiques Economiques et
              Sociales Université Hassan II, de Casablanca au Maroc, depuis
              2010, mais a 27 ans d’expériences académiques plurielles. Docteur
              en Marketing et Compétitivité des entreprises, il est spécialiste
              en Marketing fondamental et opérationnel, Digital, Marketing des
              produits innovants, Marketing international et touristique, et le
              Management de projet. Ses travaux scientifiques et publications
              portent sur le Marketing et innovation dans sa
              pluridisciplinarité, à l’échelle nationale et internationale.
            </p>
          </div>
        </div>
        <div className="view-all-members">
          <button onClick={() => navigate("/members")}>
            Voir tous les membres
          </button>
        </div>
      </section>

      <section className="events" id="evenements">
        <h2 className="events-title">Événements Récents</h2>
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
      </section>
      <section className="events" id="evenements">
        <h2 className="events-title">Événements à venir</h2>
        <div className="evenement-grid">
          {initialEvenementA.map((eve) => (
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
      </section>


      <section
        className="about-us"
        id="apropos"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h2 className="about-us-title">À propos de nous</h2>
        <div className="about-us-content">
          <img src={logo} alt="About Us" className="about-us-image" />
          <div className="about-us-text">
            <p>
              Bienvenue au Laboratoire d'Études Transversales en Droit, Économie
              et Management des Affaires. Notre mission est de promouvoir la
              recherche interdisciplinaire et de soutenir les collaborations
              entre différents domaines pour relever les défis économiques,
              juridiques et managériaux.
            </p>
            <p>
              Forts d'une équipe d'experts passionnés et d'une vision innovante,
              nous nous engageons à offrir des solutions pratiques et à
              contribuer au développement académique et professionnel de nos
              partenaires.
            </p>
            <button className="read-more-button">Read More</button>
          </div>
        </div>
      </section>

      <section
        className="mission"
        id="mission"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h2 className="mission-title">Notre Mission</h2>
        <div className="mission-content">
          <div className="mission-text">
            <p>
              Notre mission est de contribuer activement au développement
              durable en proposant des solutions novatrices et adaptées aux
              besoins des entreprises et des institutions. Nous visons à :
            </p>
            <ul>
              <li>
                Encourager la recherche appliquée dans les domaines du droit, de
                l'économie et du management.
              </li>
              <li>
                Soutenir la formation continue pour développer les compétences
                des professionnels.
              </li>
              <li>
                Établir des collaborations stratégiques avec des partenaires
                académiques et industriels.
              </li>
            </ul>
            <button className="read-more-button">Read More</button>
          </div>
          <img src={missonpic} alt="Mission" className="mission-image" />
        </div>
      </section>

      <section
        className="research-axes"
        id="axes-recherche"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h2 className="research-axes-title">Nos axes de recherche</h2>
        <div className="research-axes-content">
          <img
            src={recherchepic}
            alt="Axes de Recherche"
            className="research-axes-image"
          />
          <div className="research-axes-text">
            <p>
              Nos axes de recherche sont conçus pour aborder des problématiques
              interdisciplinaires qui se situent à l'intersection du droit, de
              l'économie et du management des affaires. Chaque axe de recherche
              vise à offrir des solutions pratiques et novatrices aux défis
              contemporains rencontrés par les entreprises et les institutions.
            </p>
            <ul>
              <li>La gestion des risques et la gouvernance des entreprises</li>
              <li>
                Les enjeux juridiques et économiques des nouvelles technologies
              </li>
              <li>
                Le développement durable et la responsabilité sociale des
                entreprises
              </li>
              <li>
                La transformation numérique dans les secteurs économiques et
                juridiques
              </li>
              <li>
                Les politiques publiques et leur impact sur l'économie mondiale
              </li>
            </ul>
            <button className="read-more-button">Read More</button>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Accueil;
