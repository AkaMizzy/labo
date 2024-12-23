import React, { useState } from "react";
import "../assets/css/Galerie.css";

export default function Galerie() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Dynamically load images from the folder
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context("../assets/IMAGES-galerie", false, /\.(jpg|jpeg|png|gif)$/));

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="galerie-container">
      <div className="galerie-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="galerie-thumbnail"
            onClick={() => openModal(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected" className="modal-image" />
            <button className="close-button" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
