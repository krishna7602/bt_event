import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop",
      caption: "Conference Hall"
    },
    {
      url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=600&fit=crop",
      caption: "Keynote Session"
    },
    {
      url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&h=600&fit=crop",
      caption: "Networking Event"
    },
    {
      url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&h=600&fit=crop",
      caption: "Research Presentation"
    },
    {
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=600&fit=crop",
      caption: "Workshop Session"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <>
      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-8 mb-12">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center flex-shrink-0 border-4 border-blue-400">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent">IC</div>
                <div className="text-xs text-gray-700 font-semibold">NARI</div>
              </div>
            </div>
            
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                International Conference on Next-Generation Adaptive Research and Innovations 2026
              </h1>
            </div>
          </div>

          <div className="bg-white text-gray-800 rounded-2xl p-6 inline-block mb-8 shadow-lg">
            <p className="text-xl font-semibold">
              Event Date: <span className="text-blue-600">6<sup>th</sup>, 7<sup>th</sup> & 8<sup>th</sup> of March, 2026</span>
            </p>
          </div>

          <p className="text-xl text-gray-200 mb-12">
            Join the most innovative minds for a transformative event that pushes the boundaries of research and innovation.
          </p>
        </div>
      </div>

      {/* Photo Carousel */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Conference Gallery</h2>
        
        <div className="relative group">
          {/* Carousel Container */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <p className="text-white text-2xl font-semibold">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-gray-800" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-gray-800" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-6">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Highlights and Recent Updates Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Highlights */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-4xl">📄</div>
              <h2 className="text-3xl font-bold text-gray-800">Highlights</h2>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-gray-800 font-semibold mb-2">
                  All papers must be submitted electronically through Microsoft CMT
                </p>
                <p className="text-blue-600 font-medium">
                  Authors: Microsoft CMT
                </p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap">
                View
              </button>
            </div>
          </div>

          {/* Recent Updates */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-4xl">🔥</div>
              <h2 className="text-3xl font-bold text-gray-800">Recent Updates</h2>
            </div>
            
            <div className="bg-blue-100 rounded-xl p-6">
              <p className="text-gray-800 font-semibold mb-2">
                Paper submission opens on 16th June 2025
              </p>
              <p className="text-blue-700 font-medium">
                Paper submission opens on 16th June 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;