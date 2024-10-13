import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const slides = [
    {
      id: 1,
      image: '/banner1.png',
      caption: 'Group 2 couching'
    },
    {
      id: 2,
      image: '/banner2.jpg',
      caption: 'OUR ACHEIVERS'
    },
    {
      id: 3,
      image: '/banner3.png',
      caption: 'GROUP 4 Couching'
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideStyle, setSlideStyle] = useState({});
  const router = useRouter();
  const goToBrowsePage = () => {
    router.push('/browse'); // Programmatic navigation
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideStyle({ transition: 'transform 0.5s ease-in-out' }); // Set transition style
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  // When currentSlide changes, reset the transition after 0.5s
  useEffect(() => {
    const resetTransition = setTimeout(() => {
      setSlideStyle({}); // Remove transition for seamless looping
    }, 500); // Match the duration of the transition

    return () => clearTimeout(resetTransition); // Cleanup on currentSlide change
  }, [currentSlide]);

  return (
    <div style={{ position: 'relative', maxWidth: '1000px', margin: 'auto', overflow: 'hidden',borderRadius:'20px',boxShadow: '0 4px 20px rgba(0,0,0,0.5)'}}>
      <div style={{
        display: 'flex',
        ...slideStyle,
        transform: `translateX(-${currentSlide * 100}%)`,
      }}>
        {slides.map((slide) => (
          <div key={slide.id} style={{ minWidth: '100%', position: 'relative' }}>
            <img 
              src={slide.image} 
              alt={slide.caption} 
              style={{ width: '100%', height: '400px', }} 
            />
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'white',
              
              padding: '10px',
              borderRadius: '5px',
            }}>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;