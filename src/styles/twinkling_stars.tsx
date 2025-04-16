"use client";

import React, { useEffect, useState } from "react";

interface StarProps {
  top: string;
  left: string;
  animationDelay: string;
  animationDuration: string;
}

const STAR_COUNT = 75;

function generateStarProps(): StarProps {
  return {
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    // Random delay between 0 and 5 seconds for the twinkle animation
    animationDelay: Math.random() * 5 + "s",
    // Random duration between 4 and 6 seconds for the twinkle animation
    animationDuration: Math.random() * 2 + 4 + "s",
  };
}

export default function TwinklingStars() {
  const [stars, setStars] = useState<StarProps[]>([]);

  useEffect(() => {
    const generatedStars = Array.from(
      { length: STAR_COUNT },
      generateStarProps
    );
    setStars(generatedStars);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-transparent">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute w-0.25 h-0.25 bg-white rounded-full star"
          style={
            {
              top: star.top,
              left: star.left,
              /* Pass random values as CSS custom properties */
              "--twinkle-delay": star.animationDelay,
              "--twinkle-duration": star.animationDuration,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
