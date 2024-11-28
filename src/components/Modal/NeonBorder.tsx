import React from "react";

interface NeonBorderProps {
  isActive: boolean;
}

const NeonBorder: React.FC<NeonBorderProps> = ({ isActive }) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div
        className={`
          absolute inset-0 
          ${isActive ? "animate-border-chase" : ""}
          before:absolute before:inset-0 before:blur-[2px]
          before:animate-border-chase before:opacity-70
          after:absolute after:inset-0 after:blur-[4px]
          after:animate-border-chase after:opacity-40
        `}
      />
    </div>
  );
};

export default NeonBorder;
