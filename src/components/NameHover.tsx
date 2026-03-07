import { useState } from "react";

interface NameHoverProps {
  name: string;
  hoverText: string;
}

export default function NameHover({ name, hoverText }: NameHoverProps) {
  const [nameText, setNameText] = useState(name);

  return (
    <div
      className="transform bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-2xl font-bold text-transparent duration-500 ease-in-out hover:translate-x-4 hover:-skew-y-1 hover:scale-125 hover:from-[#D42406] hover:to-[#EBAD25] hover:drop-shadow-md motion-safe:animate-text"
      role="text"
      aria-label={`${name} - ${hoverText}`}
      aria-live="polite"
      tabIndex={0}
      onMouseOver={() => setNameText(hoverText)}
      onMouseOut={() => setNameText(name)}
      onFocus={() => setNameText(hoverText)}
      onBlur={() => setNameText(name)}
    >
      {nameText}
    </div>
  );
}
