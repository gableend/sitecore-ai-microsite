'use client';

import { useState, useEffect } from 'react';

export default function MainHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the fade-in to allow countdown animation to complete
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative min-h-screen flex flex-col justify-center overflow-hidden ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ paddingTop: '4rem' }}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source
            src="https://cdn.pixabay.com/video/2019/07/29/25834-351879066_tiny.mp4"
            type="video/mp4"
          />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gradient-to-br from-[hsl(var(--sitecore-ultra-violet))] to-[hsl(var(--sitecore-purple))] opacity-30" />
        </video>
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--sitecore-black))] via-[hsl(var(--sitecore-black))/0.7] to-[hsl(var(--sitecore-ultra-violet))/0.2]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center space-y-6 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Welcome to{' '}
          <span className="gradient-big">
            Sitecore.ai
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-[hsl(var(--sitecore-gray-76))] font-light max-w-3xl mx-auto leading-relaxed">
          The future of web experience
        </p>

        {/* Featured Video Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-[hsl(var(--sitecore-gray-46))] bg-[hsl(var(--sitecore-black))/0.5] backdrop-blur-sm cursor-pointer group">
            {/* Video Thumbnail */}
            <img
              src="/images/future-web.png"
              alt="AI is reshaping digital experience"
              className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--sitecore-black))/0.6] to-transparent pointer-events-none" />

            {/* Video Description */}
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <p className="text-white/90 text-sm md:text-base font-medium">
                Experience the power of AI-driven digital experiences
              </p>
              <p className="text-white/70 text-xs md:text-sm mt-1">
                Click to watch how AI is reshaping the future
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-[hsl(var(--sitecore-gray-76))]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
