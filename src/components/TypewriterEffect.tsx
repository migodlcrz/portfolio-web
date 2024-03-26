import React, { useEffect, useState } from "react";

interface TypewriterEffectProps {
  text: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const intervalId = setInterval(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 10);

      return () => clearInterval(intervalId);
    }
  }, [currentIndex, text]);

  return <>{displayText}</>;
};

export default TypewriterEffect;
