import React from "react";

interface Props {
  label: string;
  isSelected: Boolean;
  onClick: (category) => void;
}

const CategoryLink: React.FunctionComponent<Props> = ({
  label,
  isSelected,
  onClick,
}) => {
  if (isSelected) {
    return (
      <span
        className="text-grey-dark font-bold border-b-2 border-primary tracking-wide text-sm py-3 mr-8"
        data-testid="active-category-link"
      >
        {label}
      </span>
    );
  }

  return (
    <button
      className="text-gray-600 border-b-2 border-transparent tracking-wide text-sm py-3 mr-8"
      onClick={onClick}
      data-testid="category-link"
    >
      {label}
    </button>
  );
};

export default CategoryLink;
