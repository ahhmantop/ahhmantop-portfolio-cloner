import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center space-background transition-opacity duration-500 ${
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="stars"></div>
      
      <div className="relative z-10 text-center">
        {/* Animated Spaceship */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="loading-spaceship text-6xl">🚀</div>
            <div className="loading-trail"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-flow mb-2 font-pixelify">
            Initializing Portfolio
          </h1>
          <div className="loading-dots text-muted-foreground font-pixelify">
            Loading<span className="animate-pulse">...</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-flow to-teal-flow transition-all duration-300 ease-out rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <p className="text-sm text-muted-foreground mt-2 font-pixelify">
            {Math.round(Math.min(progress, 100))}%
          </p>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="loading-particle loading-particle-1"></div>
          <div className="loading-particle loading-particle-2"></div>
          <div className="loading-particle loading-particle-3"></div>
        </div>
      </div>
    </div>
  );
}