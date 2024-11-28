import React from "react";
import Modal from "./Modal/Modal";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="✨ About Masaru (*≧ω≦*)">
      <p>
        I'm a 21 year-old Asian Software Engineering student in his third year.
        I can speak both English and Japanese.
      </p>
      <p>
        I go by{" "}
        <a
          className="font-bold text-cyan-200"
          href="https://twitter.com/sillycat4725"
          target="_blank"
        >
          @sillycat4725
        </a>{" "}
        as an illustrator on social media. Though I mainly work as a Fullstack
        Developer, art has always been my main passion. I have been drawing for
        technically 3 years. However, if we exclude the time I spent on
        classwork and hiatuses, it's roughly 1 year.
      </p>
      <p>
        You can hire me for either your tech project or for an art commission. I
        will happily reply to any inquiries when I'm available. My prices are
        flexible and provides a great balance between the Eastern and Western
        market. More information can be found in the other tabs!
      </p>
    </Modal>
  );
};

export default AboutModal;
