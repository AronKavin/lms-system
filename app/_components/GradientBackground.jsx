// GradientBackground.jsx
import React from 'react';

const GradientBackground = () => {
  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        background: 'linear-gradient(270deg, #ff0080, #ff8c00, #4caf50, #00bcd4, #3f51b5, #9c27b0)',
        backgroundSize: '400% 400%', // Makes the gradient bigger for smooth animation
        animation: 'gradientAnimation 10s ease infinite', // Animation for the gradient
      }}
    >
      <h1 className="text-white text-4xl font-bold">Continuous Gradient Animation</h1>

      <style jsx>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default GradientBackground;
