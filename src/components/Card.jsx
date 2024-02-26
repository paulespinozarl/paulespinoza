import React from "react";

const Card = ({ title, subtitle, text, href = "", image, web = "" }) => {
  return (
    <div className="flex justify-center">
      <div className="card">
        <img className="image" src={image} alt="Nawara" />
        <div className="text-slate-100">
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{text}</p>
          <a href={href}>{web}</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
