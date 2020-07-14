import React from "react";

import "./GradientButton.css";

export interface Props {
  onClick?: () => void;
}

export const GradientButton: React.FunctionComponent<Props> = ({
  onClick,
  children,
}) => {
  return (
    <button
      className="bg-gradient-l-gorange hover:bg-none hover:bg-gray text-white font-bold py-5 px-10 rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default GradientButton;
