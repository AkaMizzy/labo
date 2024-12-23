import '../assets/css/style.css';
import logo from "../assets/images/labologo.jpg";

export default function Footer() {
    return (
        <section>
            <footer className="footer" id="footer">
                <div className="footer-content">
                    {/* Section principale avec le logo et une description */}
                    <div>
                        <img src={logo} width="100px" height="100px" alt="Logo" />
                        <p>
                            Bienvenue au Laboratoire LETDEM. Nous nous engageons à promouvoir la recherche 
                            interdisciplinaire et à offrir des solutions innovantes aux défis économiques, 
                            juridiques et managériaux.
                        </p>
                        <div className="footer-social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className='bx bxl-facebook' aria-hidden="true"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className='bx bxl-twitter' aria-hidden="true"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className='bx bxl-linkedin' aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                    {/* Section des contacts des professeurs */}
                    <div className="footer-contact">
                        <h3>Contacts des Professeurs</h3>
                        <p>Pr Souad BENNOUR : 06 62 78 99 89</p>
                        <p>Pr Abdelouahid KOUCHIH : 06 64 95 15 98</p>
                        <p>Pr Soumaya DLIMI : 06 65 07 08 30</p>
                    </div>

                   

                    {/* Section pour l'email */}
                    <div className="footer-email">
                        <h3>Email</h3>
                        <p>letdem2024@gmail.com</p>
                    </div>

                    {/* Section pour la localisation */}
                    <div className="footer-location">
                        <h3>Adresse</h3>
                        <p>
                            Cliquez <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">ici</a> 
                            pour voir la localisation sur Google Maps.
                        </p>
                    </div>
                </div>

                <hr />
                <p className="footer-copyright">
                    &copy; 2024 LETDEM. Tous droits réservés.
                </p>
            </footer>
        </section>
    );
}
