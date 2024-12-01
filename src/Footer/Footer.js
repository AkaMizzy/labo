import '../assets/css/style.css'
import logo from "../assets/images/logoss (1).jpg";
export default function Footer(){
    return(
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
    )
}