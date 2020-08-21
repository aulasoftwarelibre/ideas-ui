import React from 'react';

import { Idea } from '../../model/idea/idea';
import IdeaCard from './IdeaCard';

export interface Props {
  ideas: Idea[];
}

const NotFound: React.FunctionComponent = () => (
  <div className="flex flex-col w-1/2 mx-auto" data-testid="not-found">
    <div className="mx-auto">
      <svg
        className="h-24 w-24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    </div>
    <div className="text-center">
      <h2 className="font-bold">
        No se han encontrado coincidencias con tu búsqueda
      </h2>
      <p className="font-light">Prueba otra búsqueda o intentalo más tarde.</p>
    </div>
  </div>
);

export const IdeaCardList: React.FunctionComponent<Props> = ({ ideas }) => {
  if (ideas.length === 0) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-wrap">
      {ideas.map((idea: Idea) => (
        <div key={idea.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <IdeaCard idea={idea} />
        </div>
      ))}
    </div>
  );
};

export default IdeaCardList;
