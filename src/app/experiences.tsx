"use client";

import React from "react";
import Image from "next/image";
import experiencesData from "@/components/experiences.json";

const Experiences = () => {
  type Experience = {
    image_url: string;
    organization: string;
    role: string;
    date: string;
    description: string;
    tools_and_skills: string[];
  };
  const experiences: Experience[] = Object.values(experiencesData.experiences);

  return (
    // 1. make this container `relative` so its children absolutely position against it
    <div className="relative w-full flex justify-center mt-20 pb-16">
      {/* 2. constrains your text to max-w-6xl, centered via the parent’s flex */}
      <div className="w-full max-w-6xl flex flex-col">
        <h2 className="text-2xl lg:text-4xl font-bold text-orange-300 text-center font-serif pb-5">
          Experience
        </h2>

        {/* Timeline container */}
        <div className="relative px-8">
          <div className="absolute h-full border-l-4 border-orange-300 left-13.5" />
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-8 relative pl-16 pr-4">
              <div className="absolute -left-2 top-0 w-16 h-16">
                <Image
                  src={exp.image_url}
                  alt={exp.organization}
                  width={64}
                  height={64}
                  className="rounded-full border-2 border-orange-300 object-cover"
                />
              </div>
              <div className="bg-background/20 p-4 rounded-2xl">
                <h3 className="text-2xl font-semibold text-orange-300 font-serif">
                  {exp.role} @ {exp.organization}
                </h3>
                <time className="block text-md text-indigo-100 mt-1">
                  {exp.date}
                </time>
                <p className="text-md text-orange-100 font-serif mt-2">
                  {exp.description}
                </p>
                {exp.tools_and_skills.length > 0 && (
                  <div className="mt-4 inline-block border-b-2 border-orange-300 pb-5">
                    <div className="flex flex-wrap gap-2">
                      {exp.tools_and_skills.map((tool, i) => (
                        <span
                          key={i}
                          className="text-sm bg-gradient-to-r from-blue-300/50 to-blue-600/50 px-2 py-1 rounded-full text-orange-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. this absolute div now lives inside the `.relative`, so its bottom:0 is the component’s bottom */}
      <div
        className="
          absolute 
          bottom-0 
          left-0 
          w-full      /* spans the full viewport width because parent is w-full */
          h-50        /* adjust to taste */
          bg-gradient-to-t 
          from-blue-300/30
          to-transparent 
          pointer-events-none
        "
      />
    </div>
  );
};

export default Experiences;
