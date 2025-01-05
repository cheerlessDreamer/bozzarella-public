import { useState } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  index: number;
  isHovered: boolean;
  onHover: (index: number | null) => void;
};

export const FeatureCard = ({ title, description, index, isHovered, onHover }: FeatureCardProps) => {
  return (
    <div
      className={`bg-dark-lighter/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 transition-all duration-300 cursor-pointer
        ${isHovered ? 'border-primary bg-dark-lighter/70' : 'hover:bg-dark-lighter/70 hover:border-gray-700'}
      `}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 
        ${isHovered ? 'text-primary' : 'text-white'}`}>
        {title}
      </h3>
    </div>
  );
};