"use client"; // This directive must be at the very top

import React, { useState, useEffect } from "react";
import Image from "next/image";
import TwinklingStars from "@/styles/twinkling_stars";
import Link from "next/link";

const Mountains = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Close mobile menu when viewport gets medium or larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Adjust the multiplier to control the speed of movement
  const translateYValue = scrollY * 0.5;

  return (
    <div className="bg-black">
      <nav className="relative w-full">
        {/* Mobile Menu Button (visible on small screens) */}
        <div className="flex md:hidden absolute top-0 right-0 pr-5 pt-5 z-40">
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <svg
              fill="#faefde"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              className="text-white/30"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute top-16 left-0 right-0 z-40 transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <ul className="md:hidden flex flex-col w-full bg-gradient-to-b from-black to-background rounded-lg text-center font-serif">
            {/* <li className="p-2 icon-svg">
              <a href="/thoughts">My Thoughts</a>
            </li> */}
            {/* <li className="p-2 icon-svg">
              <a
                href="/mountains/Braeden_Turner_Resume.pdf"
                target="_top"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li> */}
            <li className="p-2 icon-svg">
              <a
                href="mailto:braedenturner22@gmail.com"
                target="_top"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </li>
            <li className="p-2 icon-svg">
              <a
                href="https://www.linkedin.com/in/braedenturner/"
                target="_top"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="p-2 icon-svg">
              <a
                href="https://github.com/BraedenTurner22"
                target="_top"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="p-2 icon-svg">
              <a
                href="https://www.youtube.com/@BraedenChefs"
                target="_top"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Navigation (visible on medium and larger screens) */}
        <ul className="hidden md:flex absolute top-0 right-0 items-center space-x-4 3xl:space-x-10 md:pr-4 md:pt-4 lg:pr-8 lg:pt-8 3xl:pr-15 3xl:pt-15 z-30">
          {/* <li className="icon-svg 3xl:text-3xl font-serif">
            <Link href="/thoughts">My Thoughts</Link>
          </li> */}
          {/* <li className="icon-svg 3xl:text-3xl font-serif">
            <a
              href="/mountains/Braeden_Turner_Resume.pdf"
              target="#"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li> */}
          <li>
            <a
              href="mailto:braedenturner22@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                className="h-8 w-8 3xl:h-20 3xl:w-20 icon-svg"
              >
                <path
                  d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/braedenturner/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                className="h-8 w-8 3xl:h-20 3xl:w-20 icon-svg"
              >
                <path
                  d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/BraedenTurner22"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                className="h-8 w-8 3xl:h-20 3xl:w-20 icon-svg"
              >
                <path
                  d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@BraedenChefs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                className="h-8 w-8 3xl:h-20 3xl:w-20 icon-svg"
              >
                <path
                  d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      {/* Mountain Container */}
      <div className="relative w-full aspect-[16/9]">
        {/* Nest the TwinklingStars inside the mountain container */}
        <div
          className={`absolute bottom-3 left-0 w-full pointer-events-none z-0 ${
            isOpen ? "opacity-0" : "opacity-100"
          }
          `}
        >
          <TwinklingStars />
        </div>

        {/* Background Mountain Image */}
        <Image
          src="/mountains/mountain_landscape.png"
          alt="Mountains background"
          fill
          sizes="100vw"
          className="object-cover z-20"
          priority
        />

        <div className="absolute bottom-3 left-0 w-full h-[40%] bg-gradient-to-t from-blue-900 to-transparent z-10" />

        {/* Container for the Signature GIF */}
        <div
          className={`
            absolute flex items-center justify-center
            w-[20vw] aspect-square
            top-[35%] md:top-[35%] lg:top-[35%]
            ${isOpen ? "opacity-0" : "opacity-100"}
          `}
          style={{
            left: "50%",
            transform: `translate(-50%, calc(-50% + ${
              translateYValue / 1.2
            }px))`,
          }}
        >
          <Image
            src="/mountains/BJTsignature.gif"
            alt="Signature animation"
            fill
            sizes="20vw"
            className="object-contain z-30"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Mountains;
