import React from 'react';
import { useEffect, useRef } from 'react';
import '../assets/css/style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from "../assets/images/logoss (1).jpg";
import event1 from "../assets/images/evnt1.jpeg";
import event2 from "../assets/images/evnt2.jpeg";
import event3 from "../assets/images/evnt3.jpeg";
import missonpic from "../assets/images/missonpic.jpeg";
import recherchepic from "../assets/images/recherchepic.jpeg";
import members from "../assets/images/members.jpeg";

function Accueil() {

    const scrollToTopBtnRef = useRef(null);

    useEffect(() => {

        const scrollToTopBtn = scrollToTopBtnRef.current;

        AOS.init();
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

        scrollToTopBtn.addEventListener('click', handleScrollToTop);

        return () => {

            scrollToTopBtn.removeEventListener('click', handleScrollToTop);
        };
    }, []);

    return (
        <body>
            <button id="scrollToTopBtn" className="scroll-to-top" ref={scrollToTopBtnRef}>
                <i className='bx bx-chevron-up'></i>
            </button>

            <section className="home" id="accueil">
                <div className="overlay">
                    <h1>Laboratoire d'Etudes Transversales en Droit, Economie et Management des Affaires</h1>
                </div>
            </section>


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

        </body>
    );
}

export default Accueil;