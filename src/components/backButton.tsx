import React from "react";
import { MouseEvent } from "react";
interface BackButtonProps {
onClick: (event: MouseEvent<HTMLDivElement>) => void
}

export const BackButton: React.FC<BackButtonProps> = ({onClick}) => {
  return (
    <div
      className="
        justify-self-start self-start
        hover:cursor-pointer
         lg:ml-[2.5em] lg:pb-[1em] lg:-mb-5
         "
         onClick={onClick}
    >
      &#x25c0;
    </div>
  );
};
