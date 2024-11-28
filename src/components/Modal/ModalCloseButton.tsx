import React from "react";

interface ModalCloseButtonProps {
  onClose: () => void;
}

const ModalCloseButton: React.FC<ModalCloseButtonProps> = ({ onClose }) => {
  return (
    <button
      onClick={onClose}
      className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      aria-label="Close modal"
      style={{
        background: "linear-gradient(45deg, #ff3080, #4560ff)",
        boxShadow: "0 0 15px rgba(255, 48, 128, 0.5)",
      }}
    >
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(45deg, #4560ff, #ff3080)",
        }}
      />
      <svg
        className="w-4 h-4 text-white relative z-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255, 48, 128, 0.3) 0%, transparent 70%)",
          filter: "blur(4px)",
        }}
      />
    </button>
  );
};

export default ModalCloseButton;
