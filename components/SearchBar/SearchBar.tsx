import React from "react";

export interface Props {
  criteria?: string;
  onClick?: () => void;
}

export const SearchBar: React.FunctionComponent<Props> = ({
  criteria,
  onClick,
}) => {
  return (
    <div className="flex bg-gradient-l-primary-to-light rounded-lg text-white px-2 py-2 items-center">
      <button
        id="search-tool"
        type="submit"
        className="px-3 py-3 focus:outline-none focus:shadow-outline"
        onClick={onClick}
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
      <input
        className="bg-transparent focus:outline-none placeholder- placeholder-white text-xl w-full pl-5"
        type="search"
        name="search"
        placeholder="Buscar eventos i.e web-development"
      ></input>
    </div>
  );
};

export default SearchBar;
