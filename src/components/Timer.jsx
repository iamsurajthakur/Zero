import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [days, setDays] = useState(0);
  const [, setPrevDays] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2029-01-01T00:00:00");

    const calculateDays = () => {
      const now = new Date();
      const difference = targetDate - now;
      return Math.max(0, Math.ceil(difference / (1000 * 60 * 60 * 24)));
    };

    const updateCountdown = () => {
      const newDays = calculateDays();
      setPrevDays(days);
      setDays(newDays);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000 * 60 * 60); 
    return () => clearInterval(interval);
  }, [days]);

  // Format days with colon separator
  const formattedDays = days.toString().padStart(4, "0").split("").join(" ");

  return (
    <div
      className="
        relative
        px-8 py-6 md:px-12 md:py-8
        bg-gray-900/80 dark:bg-[#e5e5e5]
        rounded-2xl
        backdrop-blur-md
        flex items-center justify-center
      "
    >
      <span
        className="
          text-6xl md:text-8xl
          font-extrabold
          text-gray-100 dark:text-[#171717]
          tracking-widest
          transition-all duration-500
        "
      >
        {formattedDays}
      </span>

      <style jsx>{`
        @keyframes digitChange {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-digitChange {
          animation: digitChange 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CountdownTimer;
