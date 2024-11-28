import React from "react";
import Modal from "./Modal/Modal";
import { FaRocket, FaCode, FaHeart } from "react-icons/fa";

interface CodingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const projects = [
  {
    name: "Dori Bot (Offline)",
    description:
      "A purely for fun Genshin Impact themed Discord bot with various minigames like Poker, Trivia, Genshin Wish simulator and other utility commands",
    stars: 320,
    language: "TypeScript, Node.js, Discord.js",
    url: "https://top.gg/bot/997892574150930523",
  },
  {
    name: "Three.js Portfolio",
    description: "Well it's this website hehe XDXD",
    stars: 69,
    language: "React, Typescript, Tailwind, Vite",
    url: "https://github.com/masaru9002/masaru-portfolio",
  },
  {
    name: "Inari (WIP)",
    description:
      "A Webapp for learning Japanese with cute Anime study buddies - made with love and experience from studying abroad in Japan",
    stars: 10,
    language: "Vue, Typescript, Tailwind, Vite, Express.js, MongoDB",
    url: "https://github.com/InariJP",
  },
];

const CodingModal: React.FC<CodingModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="💻 Coding Projects ( ͡⎚ ω ͡⎚)"
    >
      <div className="space-y-4 sm:space-y-6 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto custom-scrollbar">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block transform-gpu"
          >
            <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 sm:p-6 transition-all duration-300 hover:bg-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative transform-gpu transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <FaRocket className="text-xl sm:text-2xl text-white/90" />
                    <h3 className="text-lg sm:text-xl font-bold text-white/90 line-clamp-1">
                      {project.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 text-white/70">
                    <FaHeart className="text-red-400" />
                    <span className="text-sm sm:text-base">
                      {project.stars}
                    </span>
                  </div>
                </div>
                <p className="text-white/70 mb-3 sm:mb-4 text-sm sm:text-base line-clamp-2 sm:line-clamp-none">
                  {project.description}
                </p>
                <div className="flex items-center gap-2">
                  <FaCode className="text-white/60 text-sm sm:text-base" />
                  <span className="text-white/60 text-xs sm:text-sm">
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
