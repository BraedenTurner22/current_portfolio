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
    <div className="flex flex-col mt-20 align-center justify-center border-b-indigo-300 border-b-12 border-double pt-3 pb-8 3xl:pl-100 3xl:pr-100">
      <h2 className="text-2xl lg:text-4xl font-bold text-orange-300 text-center font-serif items-center pb-5">
        Projects
      </h2>

      {/* Timeline wrapper */}
      <div className="relative">
        {/* The vertical line */}
        {/* Each timeline entry */}
        {experiences.map((exp, i) => (
          <div key={i} className="relative mb-12">
            {/* The “dot” = the image */}
            <div className="absolute top-0 left-0 w-20 h-20 -ml-6">
              <Image
                src={exp.image_url}
                alt={exp.organization}
                width={100}
                height={100}
                className="rounded-full border-2 border-orange-300 object-cover"
              />
            </div>

            {/* Content box */}
            <div className="border bl-orange-300 p-20">
              <h3 className="text-xl font-semibold text-orange-300 font-serif">
                {exp.role} @ {exp.organization}
              </h3>
              <time className="block text-sm text-orange-100 mt-1">
                {exp.date}
              </time>
              <p className="text-sm text-orange-100 mt-3">{exp.description}</p>
              {exp.tools_and_skills.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tools_and_skills.map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gradient-to-r from-blue-300/50 to-blue-600/50 px-2 py-1 rounded-full text-orange-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
