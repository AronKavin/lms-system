// _components/Testimonials.jsx
"use client";
import { useState } from 'react';
import Image from 'next/image';
import { ChevronRight, ChevronLeft } from 'lucide-react'; // Using Lucide icons for navigation buttons

const testimonialsData = [
  {
    id: 1,
    image: '/test1.jpg',
  },
  {
    id: 2,
    image: '/test2.jpg', 
  },
  {
    id: 3,
    image: '/test3.png',
  },
  {
    id: 4,
    image: '/test4.jpg',
  },
  {
    id: 5,
    image: '/test2.jpg',
  },
  {
    id: 6,
    image: '/test1.jpg',
  },
  // Add more testimonials as needed
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const length = testimonialsData.length;
  const itemsToShow = 3; // Number of testimonials to show at once

  // Ensure the last slide displays properly
  const maxIndex = Math.max(0, length - itemsToShow);

  const nextSlide = () => {
    setCurrent(current === maxIndex ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? maxIndex : current - 1);
  };

  if (!Array.isArray(testimonialsData) || testimonialsData.length === 0) {
    return null;
  }

  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">What Our Users Say</h2>
      <div className="relative max-w-7xl mx-auto overflow-hidden">
        {/* Testimonial Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(current * 100) / itemsToShow}%)` }}
        >
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full md:w-1/3 flex-shrink-0 p-2"
              style={{ flex: `0 0 ${100 / itemsToShow}%` }} // Ensure each item takes up 1/3 of the container width
            >
              <Image
                src={testimonial.image}
                alt={`Testimonial ${testimonial.id}`}
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-purple-500 text-white p-2 rounded-full hover:bg-purple-700"
          onClick={prevSlide}
          aria-label="Previous Testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-purple-500 text-white p-2 rounded-full hover:bg-purple-700"
          onClick={nextSlide}
          aria-label="Next Testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
