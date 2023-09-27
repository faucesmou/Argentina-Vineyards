import React, { useState } from 'react'

function Galeria({ images }) {
    const [showModal, setShowModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    console.log("Imagenes -->", images[currentImageIndex]);

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="GalleryWrapper">
            {images.map((image, index) => (
                <div className="ImageWrapper" key={index} onClick={() => openModal(index)}>
                    <img className="Image" src={image} alt={`Imagen ${index}`} />
                </div>
            ))}
            {showModal && (
                <div className="ModalOverlay" onClick={closeModal}>
                    <img className="ModalImage" src={images[currentImageIndex]} alt={`Imagen ${currentImageIndex}`} />
                    <span className="CloseButton" onClick={closeModal}>&times;</span>
                    <div className="ModalButtons">
                        <button onClick={prevImage}>Anterior</button>
                        <button onClick={nextImage}>Siguiente</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Galeria