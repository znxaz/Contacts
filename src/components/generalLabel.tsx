import React from "react";

interface LabelProps {
    name: string;
    label: string;
  }

export const GeneralLabel: React.FC<LabelProps> = ({name,  label}) => {
    return(
    <label
    htmlFor={name}
    className="justify-self-start self-start
     lg:ml-[5em] lg:m-2
     md:
     xs:ml-14 xs:m-2 xs:text-sm"
  >
    {label}
  </label>)
}