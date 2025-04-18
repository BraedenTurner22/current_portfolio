"use client"; // If needed for interactivity

import React from "react";
import Image from "next/image";
import projectsData from "@/components/projects.json"; // adjust path if needed

const Projects = () => {
  type Project = {
    title: string;
    image_url: string;
    description: string;
    date: string;
    tools: string[];
    github_url: string;
    project_url?: string; // ⬅️ optional
  };

  const projects: Project[] = Object.values(projectsData.projects);

  return (
    <div className="flex flex-col mt-20 text-center align-center justify-center border-b-indigo-300 border-b-12 border-double pt-3 pb-8 3xl:pl-100 3xl:pr-100">
      <h2 className="text-2xl lg:text-4xl font-bold text-orange-300 text-center font-serif items-center pb-5">
        Projects
      </h2>

      <div className="relative bg-background w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center p-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-blue-950/90 backdrop-blur-lg rounded-2xl border w-full max-w-md hover:shadow-lg hover:shadow-indigo-300 hover:scale-101 transition-all duration-300 transform" // ⬅️ control card max width
          >
            {project.image_url && (
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-2xl">
                <Image
                  src={project.image_url}
                  alt={project.title + " image"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                />
              </div>
            )}
            <div className="p-3 flex flex-col items-center text-center">
              <h3 className="flex items-center justify-center gap-3 text-xl font-semibold text-orange-300 pt-3 font-serif">
                <span>{project.title}</span>
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1024 1024"
                      className="h-6 w-6 md:h-8 md:w-8 icon-svg"
                    >
                      <path
                        d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                )}
                {project.project_url?.trim() && (
                  <a
                    href={project.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 420 420"
                      className="h-6 w-6 md:h-8 md:w-8 icon-svg"
                    >
                      <path
                        d="M209,15a195,195 0 1,0 2,0z"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="26"
                      />
                      <path
                        d="m210,15v390m195-195H15M59,90a260,260 0 0,0 302,0 m0,240 a260,260 0 0,0-302,0M195,20a250,250 0 0,0 0,382 m30,0 a250,250 0 0,0 0-382"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="18"
                      />
                    </svg>
                  </a>
                )}
              </h3>

              <hr className="w-16 border-t-2 border-orange-300 my-2" />
              <p className="text-sm text-orange-100 mt-2">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gradient-to-r from-blue-300/50 to-blue-600/50 px-2 py-1 rounded-full text-orange-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
