"use client";
import React from "react";
import Link from "next/link";
import thoughtsData from "@/components/thoughts.json";
import Cursor from "@/styles/cursor";
import Footer from "@/app/footer";

const ThoughtsPage = () => {
  type Thought = {
    title: string;
    date: string;
    content: string;
  };

  const thoughts: Thought[] = Object.values(thoughtsData.thoughts);

  return (
    <main
      className="min-h-screen bg-gradient-to-t
          from-blue-300/30
          to-transparent"
    >
      <Cursor />
      <div className="relative w-full flex justify-center pt-20 pb-20">
        <div className="w-full max-w-4xl flex flex-col px-4">
          {/* Return Button and Title */}
          <div className="mb-8">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-orange-100 hover:text-orange-300 transition-colors font-serif mb-4"
            >
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
                className="transform -rotate-90 transition-transform duration-300 group-hover:-translate-x-1"
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
              Return
            </Link>
            <h2 className="text-2xl lg:text-4xl font-bold text-orange-300 font-serif">
              My Thoughts
            </h2>
          </div>
          <div className="space-y-12 pt-5">
            {thoughts.map((thought, idx) => (
              <React.Fragment key={idx}>
                <article>
                  <h3 className="text-2xl font-semibold text-orange-300 font-serif">
                    {thought.title}
                  </h3>
                  <time className="block text-md text-indigo-100 mt-1">
                    {thought.date}
                  </time>
                  <div className="mt-4 text-orange-100 font-serif whitespace-pre-wrap">
                    {thought.content}
                  </div>
                </article>
                {idx < thoughts.length - 1 && (
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-300/50 to-transparent" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ThoughtsPage;
