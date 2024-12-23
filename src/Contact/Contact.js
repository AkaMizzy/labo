import React, { useEffect } from "react";

import "../assets/css/contact.css";
import "../assets/css/style.css";

export default function Contact() {
    useEffect(() => {
        // Ajout dynamique du script de l'API Google Maps
        const script = document.createElement("script");
        script.src =
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyDlLGdF9o-vorD4iIJByqW2FTbh3oJGCXU&callback=initMap";
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        // Fonction de callback pour initialiser la carte
        window.initMap = () => {
            const map = new window.google.maps.Map(document.getElementById("map"), {
                zoom: 14,
                center: { lat: 33.5731, lng: -7.5898 }, // Coordonnées (Casablanca, Maroc)
            });

            new window.google.maps.Marker({
                position: { lat: 33.5731, lng: -7.5898 },
                map,
                title: "Emplacement",
            });
        };

        // Nettoyage pour éviter les conflits lors du démontage
        return () => {
            delete window.initMap;
            const existingScript = document.querySelector(
              'script[src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDlLGdF9o-vorD4iIJByqW2FTbh3oJGCXU&callback=initMap"]'
            );
            if (existingScript) {
              document.head.removeChild(existingScript);
            }
            
        };
    }, []);

    return (
        <div>
            <div className="section-title">
                <h1>CONTACT</h1>
            </div>

            <div id="map" style={{ width: "100%", height: "400px" }}></div>

            <section className="contact-section">
                <div className="contact-info">
                    <h2>Informations de contact</h2>
                    <div className="info-item">
                        <i className="bx bx-phone"></i>
                        <p>+212 6 1234 5678</p>
                    </div>
                    <div className="info-item">
                        <i className="bx bx-envelope"></i>
                        <p>contact@laremo.com</p>
                    </div>
                    <div className="info-item">
                        <i className="bx bx-map"></i>
                        <p>123 Rue des Labos, Rabat, Maroc</p>
                    </div>
                    <div className="info-item">
                        <i className="bx bx-globe"></i>
                        <p>
                            <a href="https://laremo.com">www.laremo.com</a>
                        </p>
                    </div>

                    <div className="business-hours">
                        <h3>Heures d'ouverture</h3>
                        <ul>
                            <li>
                                <i className="bx bx-time"></i> Lundi - Vendredi : 9h à 17h
                            </li>
                            <li>
                                <i className="bx bx-time"></i> Samedi : 9h à 14h
                            </li>
                            <li>
                                <i className="bx bx-time"></i> Dimanche : Fermé
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="contact-form">
                    <h2>Contactez-nous</h2>
                    <form action="#" method="post">
                        <label htmlFor="name">Nom:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="subject">Sujet:</label>
                        <input type="text" id="subject" name="subject" required />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>

                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </section>
       </div>
);
}