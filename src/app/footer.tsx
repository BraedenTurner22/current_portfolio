"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  const updated = process.env.NEXT_PUBLIC_LAST_UPDATED;

  return (
    <footer className="bg-black shadow-inner py-2">
      <section className="max-w-full text-center leading-6 py-5 font-light px-5">
        {/* Back to Top with underline animation */}
        <Link
          href="#top"
          className="group icon-svg relative inline-flex items-center capitalize text-lg mb-3 transform transition-transform duration-300 ease-in-out hover:scale-105 font-serif"
        >
          Back to Top
          {/* Arrow icon */}
          <svg
            fill="currentColor"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="16px"
            height="16px"
            viewBox="0 0 8 8"
            xmlSpace="preserve"
            className="ml-2"
          >
            <rect
              x="0.016"
              y="1.68"
              transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 6.2428 2.2389)"
              width="5.283"
              height="1.466"
            />
            <rect x="3.161" y="1.604" width="1.683" height="6.375" />
            <rect
              x="2.709"
              y="1.674"
              transform="matrix(0.7073 0.7069 -0.7069 0.7073 3.2674 -3.0786)"
              width="5.284"
              height="1.465"
            />
          </svg>
          {/* Underline bar */}
          <span className="bg-orange-300 absolute bottom-0 left-0 h-[2px] w-full transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
        </Link>

        {/* Link row */}
        <div className="flex w-full justify-center gap-x-6">
          {/* Email */}
          <a
            href="mailto:braedenturner22@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="text-gray-400 hover:text-yellow-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              className="h-8 w-8 icon-svg"
            >
              <path
                d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z"
                fill="currentColor"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/braedenturner/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-yellow-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              className="h-8 w-8 icon-svg"
            >
              <path
                d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"
                fill="currentColor"
              />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/BraedenTurner22"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-yellow-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              className="h-8 w-8 icon-svg"
            >
              <path
                d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                fill="currentColor"
              />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@BraedenChefs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-gray-400 hover:text-yellow-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              className="h-8 w-8 icon-svg"
            >
              <path
                d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>

        {/* Attribution */}
        <p className="text-sm text-indigo-200 pt-2 capitalize">
          Braeden Turner © 2025 — Last updated {updated}
        </p>
      </section>
    </footer>
  );
};

export default Footer;
