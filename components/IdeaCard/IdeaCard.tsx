import Link from 'next/link';
import React from 'react';
import Moment from 'react-moment';

import { Idea } from '../../model/idea/idea';
import IdeaAvatarList from './IdeaAvatarList';

export interface Props {
  idea: Idea;
}

export const IdeaCard: React.FunctionComponent<Props> = ({ idea }) => {
  const ideaImage = idea.image ?? "/ideas-banner.png";

  return (
    <div
      className="relative h-auto max-w-sm rounded-large overflow-hidden shadow-lg"
      data-testid="idea-card"
    >
      <Link href={`/ideas/${idea.slug}`}>
        <a>
          <div
            className="flex flex-col content-end h-56 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 1)), url(${ideaImage})`,
            }}
          >
            {idea.online && (
              <div
                data-testid="idea-type"
                className="absolute top-0 right-0 h-8 px-4 py-1 w-auto bg-gradient-to-r from-primary to-primary-light rounded-tr-large rounded-bl-large"
              >
                <p className="font-bold text-white text-xs font-uppercase">
                  ONLINE
                </p>
              </div>
            )}
            <div className="p-4 items-end text-white mt-auto">
              <h4 className="font-bold text-white text-opacity-75 text-base">
                {idea.category}
              </h4>
              <h3 className="font-bold text-white text-xl">{idea.title}</h3>
            </div>
          </div>
          <div className="px-5 py-4 bg-gradient-to-r from-primary to-primary-light">
            <div className="font-bold text-white text-lg capitalize-date">
              <Moment>{idea.startsAt}</Moment>
            </div>
            <div className="font-bold text-white text-opacity-75 text-sm mb-2">
              {idea.group}
            </div>
            <IdeaAvatarList attendees={idea.attendees}></IdeaAvatarList>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default IdeaCard;
