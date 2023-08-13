import { useState } from "react";

export const PortfolioCard = ({ imageSrc, defaultText, children }) => {
  console.log(children)

  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden w-full h-full mx-auto hover:cursor-pointer transition-transform hover:-translate-y-5`}
      style={{ boxShadow: hovered ? '14px 14px 1px 0px rgba(2, 177, 186, 1)' : 'none'}}
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
          <div>
            <p className="text-center md:text-3xl text-cyan-500 font-bold mb-5">{defaultText}</p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};