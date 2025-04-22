import React from "react";

interface ImageCardProps {
  src: string;
  alt?: string;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt = "", className = "" }) => {
  return <img src={src} alt={alt} className={`object-cover w-full h-full ${className}`} />;
};

export default ImageCard;
