import { useState } from "react";

export const ServiceCard = ({ imageSrc, defaultText, hoverText }) => {

  return (
    <div
      className={`relative overflow-hidden w-full h-full md:m-4 hover:cursor-pointer transition-transform hover:-translate-y-5`}
      style={{ boxShadow: '14px 14px 1px 0px rgba(2, 177, 186, 1)'}}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={imageSrc}
        alt="Imagen"
        className={`w-full h-full`}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center`}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <p className="text-white text-center">{defaultText}</p>
        </div>
      </div>
    </div>
  );
};