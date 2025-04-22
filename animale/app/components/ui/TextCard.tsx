import React from "react";

interface TextCardProps {
  title: string;
  subtitle: string;
  linkText: string;
  linkHref: string;
  bgColor?: string;
  textColor?: string;
  align?: "left" | "center" | "right";
  subtitleWidth?: string;
}

const TextCard: React.FC<TextCardProps> = ({
  title,
  subtitle,
  linkText,
  linkHref,
  bgColor,
  textColor,
  align = "center",
  subtitleWidth
}) => {
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right"
  };

  const subtitleAlignment = {
    left: "",
    center: "mx-auto",
    right: "ml-auto"
  };

  return (
    <div
      className={`bg-${bgColor ?? "black"} text-${textColor ?? "white"} p-20 flex flex-col justify-center h-full`}
    >
      <div className={`${alignmentClasses[align]} p-2 flex flex-col`}>
        <h2 className="text-xl font-bold pb-4">{title}</h2>
        <p
          className={`text-s mt-2 font-light pb-5 ${subtitleWidth ?? ""} ${subtitleAlignment[align]}`}
        >
          {subtitle}
        </p>
        <a
          href={linkHref}
          className="text-sm underline hover:opacity-80 font-bold"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default TextCard;
