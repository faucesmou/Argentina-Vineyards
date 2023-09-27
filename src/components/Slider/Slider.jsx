import React, { useState, useEffect } from 'react';
import './slider.css';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [aspectRatio, setAspectRatio] = useState(1); 
  
  const images = [
    '/Images/dueno/act-prop-cosecha.jpg',
    '/Images/dueno/act-prop.jpg',
    '/Images/dueno/uvas-slider-ser-dueño-01.jpg',
    '/Images/dueno/IMG_4618-scaled.jpg',
  ];
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia el valor para ajustar el intervalo de cambio de imagen
    
    return () => clearInterval(intervalId);
  }, []);
  
  useEffect(() => {
    
    // Obtener la relación de aspecto de la imagen actual
    const img = new Image();
    img.src = images[currentIndex];
    img.onload = () => {
      setAspectRatio(img.height / img.width);
    };
  }, [currentIndex]);

  return (
    <div className="slider" style={{ paddingTop: `${aspectRatio * 100}%`}}>
      {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide ${index}`}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          />
      ))}
    </div>
  );
};

export default Slider;

