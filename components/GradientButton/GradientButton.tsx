import React from 'react';

export interface Props {
  onClick?: () => void;
}

export const GradientButton: React.FunctionComponent<Props> = ({
  onClick,
  children,
}) => {
  return (
    <button
      className="ml-3  bg-gradient-l-primary-to-light hover:bg-none hover:bg-secondary text-white font-bold py-2 px-6 text-sm rounded-md"
      onClick={() => onClick()}
      data-testid="gradient-button"
    >
      {children}
    </button>
  );
};

export default GradientButton;
