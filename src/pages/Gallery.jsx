// src/pages/Gallery.jsx
import React from 'react';
import Slider from 'react-slick';
import './Gallery.scss'; // Assuming you will create custom styling for the gallery

const images = [
  { src: '/gallery/images/image1.jpg', alt: 'Event 1', description: 'Event 1 - Description' },
  { src: '/gallery/images/image2.jpg', alt: 'Event 1', description: 'Event 1 - Description' },
  { src: '/gallery/images/image3.png', alt: 'Event 1', description: 'Event 1 - Description' },
  { src: '/gallery/images/image1.jpg', alt: 'Eventoo', description: 'Great time' },
  // Add more images as necessary
];

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <div className="image-container">
              <img src={image.src} alt={image.alt} className="gallery-image" />
              <div className="image-description">{image.description}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;

