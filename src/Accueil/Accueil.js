import React from 'react';
import { useEffect, useRef } from 'react';
import "./Accueil.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
//-------------------------------images ---------------------------------------
import logo from "../images/logoss (1).jpg";
import event1 from "../images/evnt1.jpeg";
import event2 from "../images/evnt2.jpeg";
import event3 from "../images/evnt3.jpeg";
import missonpic from "../images/missonpic.jpeg";
import recherchepic from "../images/recherchepic.jpeg";
import members from "../images/members.jpeg";

function Accueil() {
    const hamburgerRef = useRef(null);
    const navLinksRef = useRef(null);
    const navbarRef = useRef(null);
    const scrollToTopBtnRef = useRef(null);

   
    useEffect(() => {
        const hamburger = hamburgerRef.current;
        const navLinks = navLinksRef.current;
        const navbar = navbarRef.current;
        const scrollToTopBtn = scrollToTopBtnRef.current;

  
        AOS.init();

    
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                hamburger.style.display = 'flex'; 
                navLinks.classList.remove('active'); 
            } else {
                hamburger.style.display = 'none'; 
                navLinks.classList.remove('active'); 
            }
        };

      
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

       
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        
        const handleScrollToTopVisibility = () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        };

       
        const handleScrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

  
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScrollToTopVisibility);
        scrollToTopBtn.addEventListener('click', handleScrollToTop);

     
        handleResize();

        return () => {
           
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleScrollToTopVisibility);
            scrollToTopBtn.removeEventListener('click', handleScrollToTop);
        };
    }, []);

    return (
        <body>
            <button id="scrollToTopBtn" className="scroll-to-top" ref={scrollToTopBtnRef}>
                <i className='bx bx-chevron-up'></i>
            </button>

            <header className="navbar" ref={navbarRef}>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <button className="hamburger" ref={hamburgerRef}>
                    <i className='bx bx-menu'></i>
                </button>
                <nav>
                    <ul className="nav-links" ref={navLinksRef}>

                        <li className="dropdown">
                            <a href="#accueil">Accueil</a>
                        </li>

                        <li className="dropdown">
                            <a href="#apropos">À propos du labo</a>
                            <ul className="dropdown-menu">
                                <li><a href="#mission">Presentation generale</a></li>
                                <li><a href="#vision">L'organigramme </a></li>
                                <li><a href="#equipe">Équipes de recherche</a></li>
                                <li><a href="#historique">Annuaire des doctorants</a></li>
                                <li><a href="#objectifs">Reglement interieur</a></li>
                                <li><a href="#partenaires">Association</a></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <a href="#production">Production scientifique</a>
                            <ul className="dropdown-menu">
                                <li><a href="#article1">Ouvrages</a></li>
                                <li><a href="#article2">Publications indexes</a></li>
                                <li><a href="#article3">Theses soutenues</a></li>
                                <li><a href="#article4">Communications</a></li>
                                <li><a href="#article5">Projets de recherche</a></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <a href="#remac">REMAC</a>
                        </li>

                        <li className="dropdown">
                            <a href="#evenements">Événements</a>
                            <ul className="dropdown-menu">
                                <li><a href="#event1">Journees scientifiques</a></li>
                                <li><a href="#event2">Colloques</a></li>
                                <li><a href="#event3">Conferences</a></li>
                                <li><a href="#event4">Autres</a></li>
                                <li><a href="#event5">Workshops & Formations</a></li>
                                <li><a href="#event6">Tables rondes</a></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <a href="#Presse">Espace presse</a>
                            <ul className="dropdown-menu">
                                <li><a href="#presse1">Presse 1</a></li>
                                <li><a href="#presse2">Presse 2</a></li>
                                <li><a href="#presse3">Presse 3</a></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <a href="#partenariat">Partenariat</a>
                            <ul className="dropdown-menu">
                                <li><a href="partenariatNa.html">Echelle nationale</a></li>
                                <li><a href="partenaireInter.html">Echelle internationale</a></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <a href="#galerie">Galerie</a>
                        </li>

                        <li className="dropdown">
                            <a href="contact.html">Contact</a>
                        </li>

                        <li className="dropdown">
                            <a href="login.html">Se connecter</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <section className="home" id="accueil">
                <div className="overlay">
                    <h1>Laboratoire d'Etudes Transversales en Droit, Economie et Management des Affaires</h1>
                </div>
            </section>

            {/* <section className="statistics" data-aos="fade-right" data-aos-duration="1000">
        <div className="stat-item">
            <h2 data-target="2">1000</h2>
            <p>Équipes</p>
        </div>
        <div className="stat-item">
            <h2 data-target="19">1000</h2>
            <p>Enseignants</p>
        </div>
        <div className="stat-item">
            <h2 data-target="6">1000</h2>
            <p>Promotions</p>
        </div>
        <div className="stat-item">
            <h2 data-target="32">1000</h2>
            <p>Doctorants</p>
        </div>
        <div className="stat-item">
            <h2 data-target="14">1000</h2>
            <p>Manifestations scientifiques</p>
        </div>
        <div className="stat-item">
            <h2 data-target="44">1000</h2>
            <p>Publications</p>
        </div>
        <div className="stat-item">
            <h2 data-target="69">1000</h2>
            <p>Communications</p>
        </div>
        <div className="stat-item">
            <h2 data-target="12">1000</h2>
            <p>Soutenances</p>
        </div>
    </section> */}

            <section className="statistics" data-aos="fade-right" data-aos-duration="1000">
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



            <section className="events" id="evenements">
                <h2 className="events-title">Événements Récents</h2>
                <div className="events-container">
                    <div className="event-card">
                        <img src={event1} alt="Événement 1" className="event-image" />
                        <h3>Événement 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae molestias voluptatem consequatur
                            rerum, ducimus asperiores omnis adipisci, cumque atque, delectus corporis tenetur hic nihil
                            molestiae.</p>
                        <button className="read-more-btn">Lire la suite</button>
                    </div>
                    <div className="event-card">
                        <img src={event2} alt="Événement 2" className="event-image" />
                        <h3>Événement 2</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda voluptate quibusdam iste? Maxime
                            eligendi aperiam eveniet doloribus nesciunt voluptate voluptatem dolorum voluptas, iusto cum optio.
                        </p>
                        <button className="read-more-btn">Lire la suite</button>
                    </div>
                    <div className="event-card">
                        <img src={event3} alt="Événement 3" className="event-image" />
                        <h3>Événement 3</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae blanditiis repellat beatae odio
                            tenetur numquam at commodi consequatur, rerum corporis, exercitationem quo quisquam libero eius.</p>
                        <button className="read-more-btn">Lire la suite</button>
                    </div>
                    <div className="event-card">
                        <img src={event3} alt="Événement 3" className="event-image" />
                        <h3>Événement 3</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae blanditiis repellat beatae odio
                            tenetur numquam at commodi consequatur, rerum corporis, exercitationem quo quisquam libero eius.</p>
                        <button className="read-more-btn">Lire la suite</button>
                    </div>
                </div>
            </section>

            <section className="about-us" id="apropos" data-aos="fade-right" data-aos-duration="1000">
                <h2 className="about-us-title">À propos de nous</h2>
                <div className="about-us-content">
                    <img src={logo} alt="About Us" className="about-us-image" />
                    <div className="about-us-text">
                        <p>
                            Bienvenue au Laboratoire d'Études Transversales en Droit, Économie et Management des Affaires.
                            Notre mission est de promouvoir la recherche interdisciplinaire et de soutenir les collaborations
                            entre différents domaines pour relever les défis économiques, juridiques et managériaux.
                        </p>
                        <p>
                            Forts d'une équipe d'experts passionnés et d'une vision innovante, nous nous engageons à offrir des
                            solutions
                            pratiques et à contribuer au développement académique et professionnel de nos partenaires.
                        </p>
                        <button className="read-more-button">Read More</button>
                    </div>
                </div>
            </section>

            <section className="mission" id="mission" data-aos="fade-right" data-aos-duration="1000">
                <h2 className="mission-title">Notre Mission</h2>
                <div className="mission-content">
                    <div className="mission-text">
                        <p>
                            Notre mission est de contribuer activement au développement durable en proposant des solutions
                            novatrices et adaptées aux besoins des entreprises et des institutions. Nous visons à :
                        </p>
                        <ul>
                            <li>Encourager la recherche appliquée dans les domaines du droit, de l'économie et du management.
                            </li>
                            <li>Soutenir la formation continue pour développer les compétences des professionnels.</li>
                            <li>Établir des collaborations stratégiques avec des partenaires académiques et industriels.</li>
                        </ul>
                        <button className="read-more-button">Read More</button>
                    </div>
                    <img src={missonpic} alt="Mission" className="mission-image" />
                </div>
            </section>


            <section className="research-axes" id="axes-recherche" data-aos="fade-left" data-aos-duration="1000">
                <h2 className="research-axes-title">Nos axes de recherche</h2>
                <div className="research-axes-content">
                    <img src={recherchepic} alt="Axes de Recherche" className="research-axes-image" />
                    <div className="research-axes-text">
                        <p>
                            Nos axes de recherche sont conçus pour aborder des problématiques interdisciplinaires qui se situent
                            à l'intersection du droit, de l'économie et du management des affaires. Chaque axe de recherche vise
                            à offrir des solutions pratiques et novatrices aux défis contemporains rencontrés par les
                            entreprises et les institutions.
                        </p>
                        <ul>
                            <li>La gestion des risques et la gouvernance des entreprises</li>
                            <li>Les enjeux juridiques et économiques des nouvelles technologies</li>
                            <li>Le développement durable et la responsabilité sociale des entreprises</li>
                            <li>La transformation numérique dans les secteurs économiques et juridiques</li>
                            <li>Les politiques publiques et leur impact sur l'économie mondiale</li>
                        </ul>
                        <button className="read-more-button">Read More</button>
                    </div>
                </div>
            </section>


            <section className="members" id="membres" data-aos="fade-right" data-aos-duration="1000">
                <h2 className="members-title">Nos Membres</h2>
                <div className="members-content">
                    <div className="members-text">
                        <p>
                            Nos membres sont au cœur de notre recherche. Chacun d'entre eux apporte une expertise unique dans
                            son domaine, que ce soit en droit, en économie ou en management des affaires. Ils travaillent
                            ensemble pour promouvoir l'innovation, la collaboration interdisciplinaire et la recherche de
                            solutions concrètes aux défis mondiaux actuels.
                        </p>
                        <ul>
                            <li>Prof. Dr. John Doe - Expert en Droit des Affaires</li>
                            <li>Dr. Jane Smith - Spécialiste en Économie Internationale</li>
                            <li>Prof. Michael Brown - Chercheur en Management des Entreprises</li>
                            <li>Dr. Sarah White - Experte en Transformation Digitale</li>
                        </ul>
                        <button className="read-more-button">Read More</button>
                    </div>
                    <img src={members} alt="Membres" className="members-image" />
                </div>
            </section>


            <section>
                <footer className="footer" id="footer">
                    <div className="footer-content">

                        <div>
                            <img src={logo} width="100px" height="100px" alt="Logo" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ratione distinctio! Iste nulla
                                blanditiis dolores.
                            </p>
                            <div className="footer-social-icons">
                                <a href="https://facebook.com" target="_blank">
                                    <i className='bx bxl-facebook' aria-hidden="true"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank">
                                    <i className='bx bxl-twitter' aria-hidden="true"></i>
                                </a>
                                <a href="https://linkedin.com" target="_blank">
                                    <i className='bx bxl-linkedin' aria-hidden="true"></i>
                                </a>
                            </div>

                        </div>
                        <div className="footer-contact">
                            <div className="contact-item">
                                <i className='bx bx-map' aria-hidden="true"></i>
                                <p>KM 7, Route d'El Jadida, Oasis - Casablanca</p>
                            </div>
                            <div className="contact-item">
                                <i className='bx bx-phone' aria-hidden="true"></i>
                                <p>+212 522 315 660</p>
                            </div>
                        </div>


                    </div>
                    <hr />
                    <p className="footer-copyright">
                        &copy; 2024 LAREMO. All rights reserved.
                    </p>
                </footer>
            </section>

        </body>
    );
}

export default Accueil;