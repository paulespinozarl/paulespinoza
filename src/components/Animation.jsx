import React, { useEffect, useState } from "react";
import "animate.css";
import { useInView } from "react-intersection-observer";
import Card from "./Card";

const Animation = ({
  image,
  title,
  subtitle,
  description,
  url = "",
  animationDirection,
  web,
  clase,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState(animationDirection);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
      setDirection((prevDirection) =>
        prevDirection === "right" ? "left" : "right"
      );
    }
  }, [inView, isVisible]);

  const animationClass = `animate__animated ${
    isVisible
      ? `animate__fadeIn${direction === "right" ? "Right" : "Left"}`
      : "opacity-0"
  }`;

  return (
    <div ref={ref} className={`mb-10 ${animationClass}`}>
      <Card
        clase={clase}
        title={title}
        subtitle={subtitle}
        text={description}
        href={url}
        image={image}
        web={web}
      />
    </div>
  );
};

export default Animation;
