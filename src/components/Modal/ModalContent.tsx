import React from "react";
import NeonBorder from "./NeonBorder";
import "@fontsource/space-grotesk";

interface ModalContentProps {
  title: string;
  children: React.ReactNode;
}

const ModalContent: React.FC<ModalContentProps> = ({ title, children }) => {
  return (
    <div className="relative bg-[#0a001f]/60 backdrop-blur-xl rounded-2xl overflow-hidden">
      <div className="font-['Space_Grotesk'] relative z-10 p-6 sm:p-8 border border-white/10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          {title}
        </h2>
        <div className="text-white/90 text-base sm:text-lg space-y-4">
          {children}
        </div>
      </div>
      <NeonBorder isActive={true} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(45deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))",
          filter: "blur(20px)",
          opacity: 0.5,
        }}
      />
    </div>
  );
};

export default ModalContent;
