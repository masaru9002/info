import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ModalContent from "./ModalContent";
import ModalBackground from "./ModalBackground";
import ModalCloseButton from "./ModalCloseButton";

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsClosing(false);

      if (modalRef.current && contentRef.current) {
        // Reset initial state
        gsap.set(modalRef.current, {
          visibility: "visible",
          pointerEvents: "auto",
        });
        gsap.set(contentRef.current, {
          scale: 0.5,
          yPercent: -5,
          rotationX: 45,
          force3D: true,
          transformPerspective: 1000,
          transformOrigin: "50% 50%",
        });

        // Create animation timeline with reduced complexity
        gsap
          .timeline({
            defaults: { duration: 0.4, ease: "power2.out" },
          })
          .to(contentRef.current, {
            scale: 1,
            yPercent: 0,
            rotationX: 0,
            clearProps: "rotationX,scale,yPercent", // Only clear animation-specific properties
          });
      }
    }
  }, [isOpen]);

  const handleClose = () => {
    if (!isClosing && modalRef.current && contentRef.current) {
      setIsClosing(true);

      gsap
        .timeline({
          defaults: { duration: 0.3, ease: "power2.in" },
          onComplete: () => {
            onClose();
            setIsClosing(false);
            setIsVisible(false);
          },
        })
        .to(contentRef.current, {
          scale: 0.9,
          yPercent: 5,
          rotationX: -45,
          force3D: true,
        })
        .set(modalRef.current, {
          visibility: "hidden",
          pointerEvents: "none",
        });
    }
  };

  if (!isVisible && !isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        visibility: "hidden",
        perspective: "1000px",
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      <ModalBackground onClose={handleClose} />
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-2xl"
        style={{
          willChange: "transform",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        <ModalContent title={title}>{children}</ModalContent>
        <ModalCloseButton onClose={handleClose} />
      </div>
    </div>
  );
};

export default Modal;
