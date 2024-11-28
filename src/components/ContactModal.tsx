import React from "react";
import Modal from "./Modal/Modal";
import { FaDiscord, FaTwitter, FaEnvelope } from "react-icons/fa";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const socialLinks = [
  {
    name: "Discord",
    value: "sillycat4725 (click to copy!)",
    icon: FaDiscord,
    color: "#5865F2",
    href: "#",
    onClick: () => navigator.clipboard.writeText("sillycat4725"),
  },
  {
    name: "Twitter",
    value: "@sillycat4725",
    icon: FaTwitter,
    color: "#1DA1F2",
    href: "https://twitter.com/sillycat4725",
  },
  {
    name: "Email",
    value: "Coming soon :>",
    icon: FaEnvelope,
    color: "#EA4335",
    href: "#",
    onClick: () => {},
  },
];

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Text me whenever!">
      <div className="space-y-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            onClick={(e) => {
              if (link.onClick) {
                e.preventDefault();
                link.onClick();
              }
            }}
          >
            <div
              className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] hover:shadow-xl"
              style={{
                background: `radial-gradient(circle at center, ${link.color}10 0%, transparent 100%)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-4">
                <div
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm"
                  style={{ color: link.color }}
                >
                  <link.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white/90 mb-1">
                    {link.name}
                  </h3>
                  <p className="text-white/70">{link.value}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Modal>
  );
};

export default ContactModal;
