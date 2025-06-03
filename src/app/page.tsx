'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import CountdownHero from '@/components/CountdownHero';
import MainHero from '@/components/MainHero';

export default function Home() {
  const [showMainHero, setShowMainHero] = useState(false);
  const [showMiniCountdown, setShowMiniCountdown] = useState(false);
  const [countdownData, setCountdownData] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate time until Sitecore Symposium 2025
  const targetDate = new Date('2025-11-03T09:00:00-05:00');

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setCountdownData({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setCountdownData({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCountdownComplete = () => {
    setShowMiniCountdown(true);
    setTimeout(() => {
      setShowMainHero(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--sitecore-black))]">
      <Header showMiniCountdown={showMiniCountdown} countdownData={countdownData} />

      {!showMainHero ? (
        <CountdownHero onCountdownComplete={handleCountdownComplete} countdownData={countdownData} />
      ) : (
        <MainHero />
      )}
    </div>
  );
}
