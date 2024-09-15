import React, { useRef, useState, useEffect } from "react";

const Card = ({ title, subtitle, text, href = "", image, web = "", clase }) => {
  // const [isHovered, setIsHovered] = useState(false);
  // const cardRef = useRef(null);

  // useEffect(() => {
  //   const handleMouseEnter = () => setIsHovered(true);
  //   const handleMouseLeave = () => setIsHovered(false);

  //   const cardElement = cardRef.current;

  //   cardElement.addEventListener("mouseenter", handleMouseEnter);
  //   cardElement.addEventListener("mouseleave", handleMouseLeave);

  //   return () => {
  //     cardElement.removeEventListener("mouseenter", handleMouseEnter);
  //     cardElement.removeEventListener("mouseleave", handleMouseLeave);
  //   };
  // }, []);

  // const handleMouseMove = (event) => {
  //   const cardElement = cardRef.current;
  //   const { left, top, width, height } = cardElement.getBoundingClientRect();
  //   const x = (event.clientX - left) / width;
  //   const y = (event.clientY - top) / height;

  //   cardElement.style.transform = `perspective(1000px) rotateX(${
  //     20 - y * 40
  //   }deg) rotateY(${20 - x * 40}deg)`;
  // };

  // const handleMouseLeave = () => {
  //   const cardElement = cardRef.current;
  //   cardElement.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  // };

  return (
    <div className="flex justify-center image">
      <div className={clase}>
        <img className="image" src={image} alt="Nawara" />
        <div className="text-slate-100">
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p className="text-center">{text}</p>
          <a target="_blank" href={href}>
            {web}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
