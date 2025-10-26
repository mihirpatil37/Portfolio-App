import { useEffect, useState } from "react";

const AnimatedTitles = () => {
  const roles = [
    { title: "Electrical Engineer" },
    { title: "Master Thesis (Computer Vision/ML)" },
    { title: "Freelance Full-Stack Python Devloper" },
    { title: "Freelance Web Developer (React)" },
  ];

  const [currentRoleIndex, setCurrIndex] = useState(0);
  const [currentText, setCurrText] = useState("");
  const [isDeleting, setOnIsDeleting] = useState(false);
  const [typingSpeed, setOnTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const current = roles[currentRoleIndex].title;

      if (!isDeleting) {
        // Typing forward
        setCurrText(current.substring(0, currentText.length + 1));

        if (currentText === current) {
          // Pause before deleting
          setTimeout(() => setOnIsDeleting(true), 2000);
          setOnTypingSpeed(100);
        } else {
          setOnTypingSpeed(100);
        }
      } else {
        // Deleting backward
        setCurrText(current.substring(0, currentText.length - 1));

        if (currentText === "") {
          setOnIsDeleting(false);
          setCurrIndex((prev) => (prev + 1) % roles.length);
          setOnTypingSpeed(200);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <div className="text-center md:text-start">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
        <span className="text-outline pb-1">{currentText}</span>
        <span className="inline-block h-7 md:h-14 w-0.5 bg-cyan-300 ml-1 animate-pulse"></span>
      </h1>
    </div>
  );
};

export default AnimatedTitles;
