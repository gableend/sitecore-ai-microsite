'use client';

interface HeaderProps {
  showMiniCountdown: boolean;
  countdownData?: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export default function Header({ showMiniCountdown, countdownData }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--sitecore-black))/0.9] backdrop-blur-md border-b border-[hsl(var(--sitecore-gray-46))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/9c42a4c5d8644880b168fa4236c27a63?v=8acfce9f"
              alt="Sitecore"
              className="h-8 w-auto"
            />
          </div>



          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Mini Countdown */}
            {showMiniCountdown && countdownData && (
              <div className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-[hsl(var(--sitecore-ultra-violet))] to-[hsl(var(--sitecore-purple))] px-3 py-1 rounded-full text-sm">
                <span className="text-white/80">Symposium:</span>
                <span className="text-white font-semibold">
                  {countdownData.days}d {countdownData.hours.toString().padStart(2, '0')}h {countdownData.minutes.toString().padStart(2, '0')}m {countdownData.seconds.toString().padStart(2, '0')}s
                </span>
              </div>
            )}

            {/* CTA Button */}
            <button className="flex items-center bg-gradient-to-r from-[hsl(var(--sitecore-red))] to-[hsl(var(--sitecore-deep-red))] hover:from-[hsl(var(--sitecore-deep-red))] hover:to-[hsl(var(--sitecore-red))] text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105">
              Get Early Access
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-[hsl(var(--sitecore-gray-76))] hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
