import React, { useState, useEffect } from 'react';

function Galeria2({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            // Cambiar a la siguiente imagen con un efecto de desvanecimiento
            setOpacity(0);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setOpacity(1);
            }, 700); // Tiempo para que se complete el efecto de desvanecimiento
        }, 3000); // Intervalo de cambio de imagen (3 segundos en este ejemplo)

        return () => {
            clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
        };
    }, [currentImageIndex, images]);

    return (
        <div className="GalleryWrapper" style={{ width: '100%', height: '600px', position: 'relative' }}>
            {images.map((image, index) => (
                <div
                    key={index}
                    style={{
                        opacity: index === currentImageIndex ? opacity : 0,
                        transition: 'opacity 0.5s ease-in-out',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <img
                        className="Image"
                        src={image}
                        alt={`Imagen ${index}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            ))}
        </div>
    );
}

export default Galeria2;

