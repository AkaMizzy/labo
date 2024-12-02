import '../assets/css/style.css'
import logo from "../assets/images/logoss (1).jpg";
import { useEffect, useRef } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
export default function Header(){
    const hamburgerRef = useRef(null);
    const navLinksRef = useRef(null);
    const navbarRef = useRef(null);
    const scrollToTopBtnRef = useRef(null);
  
    useEffect(() => {
      try {
        const hamburger = hamburgerRef.current;
        const navLinks = navLinksRef.current;
        const navbar = navbarRef.current;
        const scrollToTopBtn = scrollToTopBtnRef.current;
  
        AOS.init();
  
        const handleResize = () => {
          if (window.innerWidth <= 768 && hamburger) {
            hamburger.style.display = 'flex';
            navLinks?.classList.remove('active');
          } else if (hamburger) {
            hamburger.style.display = 'none';
            navLinks?.classList.remove('active');
          }
        };
  
        if (hamburger) {
          hamburger.addEventListener('click', () => {
            navLinks?.classList.toggle('active');
          });
        }
  
        const handleScroll = () => {
          if (navbar) {
            if (window.scrollY > 50) {
              navbar.classList.add('scrolled');
            } else {
              navbar.classList.remove('scrolled');
            }
          }
        };
  
        const handleScrollToTopVisibility = () => {
          if (scrollToTopBtn) {
            if (window.scrollY > 300) {
              scrollToTopBtn.classList.add('show');
            } else {
              scrollToTopBtn.classList.remove('show');
            }
          }
        };
  
        const handleScrollToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
  
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScrollToTopVisibility);
        scrollToTopBtn?.addEventListener('click', handleScrollToTop);
  
        handleResize();
  
        return () => {
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('scroll', handleScrollToTopVisibility);
          scrollToTopBtn?.removeEventListener('click', handleScrollToTop);
        };
      } catch (error) {
        console.error("Erreur dans Header :", error);
      }
    }, []);


    return(
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
                            <Link to="/">Accueil</Link>
                        </li>

                        <li className="dropdown">
                            <a href="#apropos">À propos du labo</a>
                            <ul className="dropdown-menu">
                                <li><Link to="/presentation_generale">Presentation generale</Link></li>
                                <li><Link to="/organigramme">L'organigramme </Link></li>
                                <li><Link to="/equipe_recherche">Équipes de recherche</Link></li>
                                <li><Link to="/">Annuaire des doctorants</Link></li>
                                <li><Link to="/reglement_interieur">Reglement interieur</Link></li>
                                <li><Link to="/association">Association</Link></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <a href="#production">Production scientifique</a>
                            <ul className="dropdown-menu">
                                <li><Link to="/ouvrages">Ouvrages</Link></li>
                                <li><Link to="/publication_indexés">Publications indexes</Link></li>
                                <li><Link to="/theses_soutenues">Theses soutenues</Link></li>
                                <li><Link to="/communication">Communications</Link></li>
                                <li><Link to="/projets_recherche">Projets de recherche</Link></li>
                            </ul>
                        </li>


                        <li className="dropdown">
                            <a href="#evenements">Événements</a>
                            <ul className="dropdown-menu">
                                <li><Link to="/journees_scientifique">Journees scientifiques</Link></li>
                                <li><Link to="/colloques">Colloques</Link></li>
                                <li><Link to="/conferences">Conferences</Link></li>
                                <li><Link to="/autres">Autres</Link></li>
                                <li><Link to="/workshops_formation">Workshops & Formations</Link></li>
                                <li><Link to="/tables_rondes">Tables rondes</Link></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <a href="#partenariat">Partenariat</a>
                            <ul className="dropdown-menu">
                                <li><Link to="/echelle_nationale">Echelle nationale</Link></li>
                                <li><Link to="/echelle_internationale">Echelle internationale</Link></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <Link to="/galerie">Galerie</Link>
                        </li>

                        <li className="dropdown">
                            <Link to="/contact">Contact</Link>
                        </li>

                        <li className="dropdown">
                            <Link to="/login">Se connecter</Link>
                        </li>
                    </ul>
                </nav>
            </header>

           
    )
}