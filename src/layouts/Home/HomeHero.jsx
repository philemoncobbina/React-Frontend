import React, { useState, useEffect } from 'react';
import BlurFade from '@/components/magicui/blur-fade';
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react';
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

import { Link, useNavigate } from 'react-router-dom';
import { cn } from "@/lib/utils";

const HomeHero = () => {
  // Images array - keeping your existing images
  const images = [
    { src: "https://images.pexels.com/photos/5427671/pexels-photo-5427671.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Classroom" },
    { src: "https://images.pexels.com/photos/4019754/pexels-photo-4019754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Students" },
    { src: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Library" },
    { src: "https://images.pexels.com/photos/8471850/pexels-photo-8471850.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Science Lab" },
    { src: "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sports" },
    { src: "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Art" },
    { src: "https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Outdoor" },
  ];

  // Lightbox state
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Open lightbox with clicked image
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
    setZoomLevel(1);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Close lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setZoomLevel(1);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  // Navigate to next image
  const nextImage = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setZoomLevel(1);
  };

  // Navigate to previous image
  const prevImage = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setZoomLevel(1);
  };

  const navigate = useNavigate();

  const handleNavigate = (event) => {
    event.preventDefault(); // Prevent default link behavior
    navigate('/admission'); // Navigate to the desired route
  };

  // Zoom in
  const zoomIn = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.25, 3));
  };

  // Zoom out
  const zoomOut = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.25, 0.5));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      
      switch (e.key) {
        case 'ArrowRight':
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          setZoomLevel(1);
          break;
        case 'ArrowLeft':
          setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
          setZoomLevel(1);
          break;
        case 'Escape':
          closeLightbox();
          break;
        case '+':
          setZoomLevel((prevZoom) => Math.min(prevZoom + 0.25, 3));
          break;
        case '-':
          setZoomLevel((prevZoom) => Math.max(prevZoom - 0.25, 0.5));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  // Stop propagation for image click inside lightbox
  const handleImageClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div style={{ marginTop: '4.4rem' }} className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-28 lg:pb-48 lg:pt-56">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <div className="z-10 flex ">
              <div className="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                <AnimatedShinyText className="inline-flex items-center text-neutral-400 justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  ✨ Ridoana Comprehensive School
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Inspiring Excellence, Shaping Tomorrow's Leaders
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              At Ridoana Comprehensive School, we provide a nurturing and dynamic learning environment where every student can thrive. Explore our diverse range of programs, dedicated faculty, and state-of-the-art facilities that support academic excellence and personal growth.
            </p>
          </div>
          <div>
            <div className="mt-10">
              <div className="lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <BlurFade inView>
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img 
                            src={images[0].src} 
                            alt={images[0].alt} 
                            className="h-full w-full object-cover object-center rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
                            onClick={() => openLightbox(0)}
                          />
                        </div>
                      </BlurFade>
                      <BlurFade inView>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img 
                            src={images[1].src} 
                            alt={images[1].alt} 
                            className="h-full w-full object-cover object-center rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
                            onClick={() => openLightbox(1)}
                          />
                        </div>
                      </BlurFade>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <BlurFade inView>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img 
                            src={images[2].src} 
                            alt={images[2].alt} 
                            className="h-full w-full object-cover object-center rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
                            onClick={() => openLightbox(2)}
                          />
                        </div>
                      </BlurFade>
                      <BlurFade inView>
                        <div className="h-64 w-44 overflow-hidden rounded-md">
                          <img 
                            src={images[3].src} 
                            alt={images[3].alt} 
                            className="h-full w-full object-cover object-center rounded-md cursor-pointer hover:opacity-90 transition-opacity" 
                            onClick={() => openLightbox(3)}
                          />
                        </div>
                      </BlurFade>
                      <BlurFade inView>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img 
                            src={images[4].src} 
                            alt={images[4].alt} 
                            className="h-full w-full object-cover object-center rounded-md cursor-pointer hover:opacity-90 transition-opacity" 
                            onClick={() => openLightbox(4)}
                          />
                        </div>
                      </BlurFade>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <BlurFade inView>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img 
                            src={images[5].src} 
                            alt={images[5].alt} 
                            className="h-full w-full object-cover object-center rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
                            onClick={() => openLightbox(5)}
                          />
                        </div>
                      </BlurFade>
                      <BlurFade inView>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img 
                            src={images[6].src} 
                            alt={images[6].alt} 
                            className="h-full w-full object-cover object-center rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
                            onClick={() => openLightbox(6)}
                          />
                        </div>
                      </BlurFade>
                    </div>
                  </div>
                </div>
              </div>
              <Link
      to="/admission" // Use `to` instead of `href`
      onClick={handleNavigate} // Attach the click handler
      className="inline-block rounded-md border border-transparent bg-black px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
    >
      Enrol Now
    </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 focus:outline-none z-50"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          
          {/* Previous button */}
          <button 
            onClick={prevImage}
            className="absolute left-4 p-2 text-white hover:text-gray-300 focus:outline-none z-50"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
          
          {/* Image container */}
          <div 
            className="max-w-4xl max-h-screen p-4 flex items-center justify-center"
            style={{ 
              transform: `scale(${zoomLevel})`,
              transition: 'transform 0.3s ease-in-out'
            }}
            onClick={handleImageClick}
          >
            <img 
              src={images[currentImageIndex].src} 
              alt={images[currentImageIndex].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
          
          {/* Next button */}
          <button 
            onClick={nextImage}
            className="absolute right-4 p-2 text-white hover:text-gray-300 focus:outline-none z-50"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
          
          {/* Zoom controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-50">
            <button 
              onClick={zoomOut}
              className="p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 focus:outline-none"
              aria-label="Zoom out"
              disabled={zoomLevel <= 0.5}
            >
              <ZoomOut size={20} />
            </button>
            <button 
              onClick={zoomIn}
              className="p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 focus:outline-none"
              aria-label="Zoom in"
              disabled={zoomLevel >= 3}
            >
              <ZoomIn size={20} />
            </button>
          </div>
          
          {/* Image counter */}
          <div className="absolute bottom-4 right-4 text-white text-sm z-50">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeHero;