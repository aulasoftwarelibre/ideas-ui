import React from 'react';

export interface Props {
  criteria: string;
  onChange: (criteria: string) => void;
}

export const SearchBar: React.FunctionComponent<Props> = ({
  criteria,
  onChange,
}) => {
  return (
    <div
      className="shadow-md bg-gradient-to-r from-primary to-primary-light rounded-lg text-white px-2 pt-2 pb-6 items-center "
      data-testid="searchbar"
    >
      <div className="flex border-solid border-b-2 border-white mx-10">
        <span
          id="search-tool"
          className="pr-3 py-3 focus:outline-none focus:shadow-outline "
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </span>
        <input
          className="bg-transparent focus:outline-none placeholder- placeholder-white text-xl w-full pl-5"
          type="search"
          name="search"
          placeholder="Buscar eventos i.e web-development"
          onChange={(e) => onChange(e.target.value)}
          data-testid="searchbar-input"
        ></input>
      </div>
    </div>
  );
};

export default SearchBar;
