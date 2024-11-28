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
    language: "Typescript, Tailwind, React, Vite",
    url: "https://github.com/masaru9002/masaru-portfolio",
  },
  {
    name: "Dsdle",
    description:
      "A joke project for my friend group - Wordle clone with our inside jokes as the words",
    stars: 10,
    language: "HTML, CSS, Javascript",
    url: "https://github.com/masaru9002/dsdle",
  },
];

const CodingModal: React.FC<CodingModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="💻 Coding Projects ( ͡⎚ ω ͡⎚)"
    >
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
                    <FaRocket className="text-2xl text-white/90" />
                    <h3 className="text-xl font-bold text-white/90">
                      {project.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <FaHeart className="text-red-400" />
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