import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200&h=600&fit=crop",
      caption: "Renewable Energy Systems"
    },
    {
      url: "https://images.unsplash.com/photo-1581092919535-7146c38f79c5?w=1200&h=600&fit=crop",
      caption: "Energy Storage & Smart Grids"
    },
    {
      url: "https://images.unsplash.com/photo-1612833609274-97d4bb0a6e36?w=1200&h=600&fit=crop",
      caption: "Hydrogen & Future Energy Carriers"
    },
    {
      url: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?w=1200&h=600&fit=crop",
      caption: "Microgrids & Distributed Energy Systems"
    },
    {
      url: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&h=600&fit=crop",
      caption: "Policy, Markets & Net-Zero Transition"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <div className="pt-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-8 mb-10">
            {/* Logo */}
            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center border-4 border-green-500">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">NZ</div>
                <div className="text-xs text-gray-700 font-semibold">
                  ENERGY
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                National Conference on  
                <span className="block text-green-400">
                  Net-Zero Energy Systems
                </span>
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl">
                Advancing renewable energy, smart grids, energy storage, hydrogen
                technologies, and policy frameworks to support India’s
                <strong className="text-white"> Net-Zero 2070 </strong>
                vision.
              </p>
            </div>
          </div>

          {/* Date Banner */}
          <div className="bg-white text-gray-800 rounded-xl p-5 inline-block shadow-lg mb-8">
            <p className="text-lg font-semibold">
              Conference Dates:{" "}
              <span className="text-green-600">
                To Be Announced
              </span>
            </p>
          </div>

          {/* Tagline */}
          <p className="text-xl text-gray-200 max-w-4xl">
            Bringing together academia, industry, policymakers, and research
            organizations to shape sustainable, low-carbon, and resilient
            energy systems for the future.
          </p>
        </div>
      </div>

      {/* IMAGE CAROUSEL */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Conference Themes
        </h2>

        <div className="relative group">
          <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <p className="text-white text-2xl font-semibold">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="text-gray-800" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-green-600 w-8"
                    : "bg-gray-300 w-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
