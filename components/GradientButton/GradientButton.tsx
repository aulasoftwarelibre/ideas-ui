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
      className="bg-red hover:bg-regal-blue text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default GradientButton;
