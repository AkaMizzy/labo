import React, { useEffect, useRef } from "react";
import "../assets/css/style.css";
import "aos/dist/aos.css";
import twitch from "../assets/images/twitch.jpeg";
import "../assets/css/part_nationale.css"

export default function PartenariatNationale() {
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;

        if (carousel) {
            const innerCarousel = document.createElement("div");
            innerCarousel.classList.add("inner-carousel");

            // Clone the children of the carousel
            const items = Array.from(carousel.children);
            items.forEach((item) => {
                innerCarousel.appendChild(item.cloneNode(true));
            });

            // Add a second set of items for infinite scrolling
            items.forEach((item) => {
                innerCarousel.appendChild(item.cloneNode(true));
            });

            // Clear the original container and append the inner-carousel
            carousel.innerHTML = "";
            carousel.appendChild(innerCarousel);
        }
    }, []);

    return (
        <section id="partenariat" className="partenariat">
            <h3 className="partenariat-title">"Nos partenaires nationaux".</h3>
            <div className="partenariat-carousel" ref={carouselRef}>
                {[...Array(9)].map((_, i) => (
                    <div className="partenaire-item" key={i}>
                        <img src={twitch} alt={`Partenaire ${i + 1}`} />
                        <p>Twitch</p>
                    </div>
                ))}
            </div>
        </section>

        /* <section id="partenariat" className="partenariat">
        <h3 className="partenariat-title">"Nos partenaires nationaux".</h3>
        <div className="partenariat-carousel" ref={carouselRef}>
            <div className="partenaire-item">
                <img src="./images/vscode.jpeg" alt="Partenaire 1" />
                <p>Visual Studio Code</p>
            </div>
            <div className="partenaire-item">
                <img src="./images/vscode.jpeg" alt="Partenaire 2" />
                <p>Visual Studio Code</p>
            </div>
            <div className="partenaire-item">
                <img src="./images/vscode.jpeg" alt="Partenaire 3" />
                <p>Visual Studio Code</p>
            </div>
            <div className="partenaire-item">
                <img src="./images/vscode.jpeg" alt="Partenaire 4" />
                <p>Visual Studio Code</p>
            </div>
            <div className="partenaire-item">
                <img src="./images/vscode.jpeg" alt="Partenaire 5" />
                <p>Visual Studio Code</p>
            </div>
            <div className="partenaire-item">
                <img src="./images/vscode.jpeg" alt="Partenaire 6" />
                <p>Visual Studio Code</p>
            </div>
            <div className="partenaire-item">
                <img src="./images/vscode.jpeg" alt="Partenaire 7" />
                <p>Visual Studio Code</p>
            </div>
            <div className="partenaire-item">
                <img src="./images/vscode.jpeg" alt="Partenaire 8" />
                <p>Visual Studio Code</p>
            </div>
            <div className="partenaire-item">
                <img src="./images/vscode.jpeg" alt="Partenaire 9" />
                <p>Visual Studio Code</p>
            </div>
        </div>
        </section> */
    );
}