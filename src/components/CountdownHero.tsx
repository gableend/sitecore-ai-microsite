'use client';

import { useState, useEffect } from 'react';

interface CountdownHeroProps {
  onCountdownComplete: () => void;
  countdownData: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export default function CountdownHero({ onCountdownComplete, countdownData }: CountdownHeroProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  // Transition timer - separate from countdown display
  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => {
        onCountdownComplete();
      }, 2000);
    }, 3000); // 3 seconds for testing

    return () => clearTimeout(transitionTimer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen hero-gradient ${isAnimating ? 'countdown-shrink' : ''}`} style={{ paddingTop: '4rem' }}>
      <div className="text-center space-y-8 px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Something{' '}
          <span className="gradient-big text-3xl md:text-5xl lg:text-6xl font-black">
            BIG
          </span>{' '}
          is coming
        </h1>

        <div className="flex justify-center space-x-4 md:space-x-8">
          <div className="text-center">
            <div className="bg-gradient-to-br from-[hsl(var(--sitecore-ultra-violet))] to-[hsl(var(--sitecore-purple))] rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-2xl md:text-4xl font-bold text-white">
                {countdownData.days.toString().padStart(2, '0')}
              </div>
            </div>
            <div className="text-sm md:text-base text-[hsl(var(--sitecore-gray-76))] mt-2">
              Days
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-[hsl(var(--sitecore-ultra-violet))] to-[hsl(var(--sitecore-purple))] rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-2xl md:text-4xl font-bold text-white">
                {countdownData.hours.toString().padStart(2, '0')}
              </div>
            </div>
            <div className="text-sm md:text-base text-[hsl(var(--sitecore-gray-76))] mt-2">
              Hours
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-[hsl(var(--sitecore-ultra-violet))] to-[hsl(var(--sitecore-purple))] rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-2xl md:text-4xl font-bold text-white">
                {countdownData.minutes.toString().padStart(2, '0')}
              </div>
            </div>
            <div className="text-sm md:text-base text-[hsl(var(--sitecore-gray-76))] mt-2">
              Minutes
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-[hsl(var(--sitecore-ultra-violet))] to-[hsl(var(--sitecore-purple))] rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-2xl md:text-4xl font-bold text-white">
                {countdownData.seconds.toString().padStart(2, '0')}
              </div>
            </div>
            <div className="text-sm md:text-base text-[hsl(var(--sitecore-gray-76))] mt-2">
              Seconds
            </div>
          </div>
        </div>

        <p className="text-base md:text-lg text-[hsl(var(--sitecore-gray-76))] max-w-2xl mx-auto">
          Get ready for Sitecore Symposium 2025 - Orlando, November 3-5
        </p>
      </div>
    </div>
  );
}
