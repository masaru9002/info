import React from "react";

interface ModalBackgroundProps {
  onClose: () => void;
}

const ModalBackground: React.FC<ModalBackgroundProps> = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className="absolute inset-0 bg-black/60 backdrop-blur-md"
      style={{
        background:
          "radial-gradient(circle at center, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 100%)",
      }}
    />
  );
};

export default ModalBackground;
