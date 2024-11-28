import React from "react";
import Modal from "./Modal/Modal";
import { FaGithub, FaCode, FaStar } from "react-icons/fa";

interface CodingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const projects = [
  {
    name: "Project Nebula",
    description:
      "A cosmic-themed web application built with React and Three.js",
    stars: 128,
    language: "TypeScript",
    url: "https://github.com/username/project-nebula",
  },
  {
    name: "Galaxy Generator",
    description: "Procedural galaxy generation using WebGL and mathematics",
    stars: 256,
    language: "JavaScript",
    url: "https://github.com/username/galaxy-generator",
  },
  {
    name: "Space Portfolio",
    description: "An interactive 3D space-themed portfolio website",
    stars: 512,
    language: "TypeScript",
    url: "https://github.com/username/space-portfolio",
  },
];

const CodingModal: React.FC<CodingModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Coding Projects">
      <div className="space-y-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <FaGithub className="text-2xl text-white/90" />
                    <h3 className="text-xl font-bold text-white/90">
                      {project.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <FaStar className="text-yellow-500" />
                    <span>{project.stars}</span>
                  </div>
                </div>
                <p className="text-white/70 mb-4">{project.description}</p>
                <div className="flex items-center gap-2">
                  <FaCode className="text-white/60" />
                  <span className="text-white/60 text-sm">
                    {project.language}
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Modal>
  );
};

export default CodingModal;
