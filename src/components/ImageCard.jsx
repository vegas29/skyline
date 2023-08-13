import { useState } from "react";

export const ImageCard = ({ imageSrc, defaultText, hoverText }) => {

    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`relative overflow-hidden w-full h-full max-w-[300px] hover:cursor-pointer`}
            style={{ boxShadow: hovered ? '14px 14px 1px 0px rgba(2, 177, 186, 1)' : 'none'}}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img
                src={imageSrc}
                alt="Imagen"
                className={`w-full h-full transition-transform ${hovered ? 'scale-110 filter blur-sm' : ''}`}
            />
            <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity ${hovered ? 'opacity-0' : 'opacity-100'}`}
            >
                <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
                    <p className="text-white text-center">{defaultText}</p>
                </div>
            </div>
            <div
                className={`absolute inset-0 p-4 text-white bg-black bg-opacity-50 transition-opacity ${hovered ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className="absolute inset-x-0 bottom-0 p-4 text-white text-left leading-5">
                    {hoverText}
                </div>
            </div>
        </div>
    );
};