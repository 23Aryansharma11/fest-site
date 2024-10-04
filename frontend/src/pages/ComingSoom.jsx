import React, { useEffect, useState } from "react";

const ComingSoon = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500); // Delay to show animations
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="text-center">
        <h1
          className={`text-6xl font-bold mb-4 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          } `}
          style={{ fontFamily: "marine-corps" }}
        >
          Coming Soon
        </h1>
        <p
          className={`text-xl mb-8 transition-all duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          We are working hard to bring something amazing!
        </p>
        <div
          className={`bg-gray-800 py-2 px-6 rounded-full transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <span className="text-gray-400">Launching in</span>{" "}
          <span className="text-white font-semibold">January 2025</span>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
