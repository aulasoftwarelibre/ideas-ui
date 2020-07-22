import React from "react";

export interface Props {
  onClick?: () => void;
}

export const GradientButton: React.FunctionComponent<Props> = ({
  onClick,
  children,
}) => {
  return (
    <button
      className="ml-3 bg-gradient-l-gorange hover:bg-none hover:bg-gray-700 text-white font-bold py-2 px-6 text-sm rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default GradientButton;
