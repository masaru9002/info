import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ModalContent from "./ModalContent";
import ModalBackground from "./ModalBackground";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen && modalRef.current && contentRef.current) {
      setIsClosing(false);
      // Reset initial state
      gsap.set(modalRef.current, { opacity: 0 });
      gsap.set(contentRef.current, {
        scale: 0.5,
        opacity: 0,
        rotationX: 45,
        y: 0,
      });

      // Create animation timeline
      const tl = gsap.timeline();

      tl.to(modalRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      }).to(
        contentRef.current,
        {
          scale: 1,
          opacity: 1,
          rotationX: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.1"
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    if (modalRef.current && contentRef.current) {
      setIsClosing(true);

      const tl = gsap.timeline({
        onComplete: () => {
          onClose();
          setIsClosing(false);
        },
      });

      tl.to(contentRef.current, {
        scale: 0.8,
        opacity: 0,
        rotationX: -45,
        y: 100,
        duration: 0.4,
        ease: "power2.in",
      }).to(
        modalRef.current,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        },
        "-=0.2"
      );
    }
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 perspective-1000"
    >
      <ModalBackground onClose={handleClose} />
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-2xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        <ModalContent title={title}>{children}</ModalContent>
      </div>
    </div>
  );
};

export default Modal;
