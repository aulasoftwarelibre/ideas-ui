import classnames from "classnames";
import React from "react";
import Moment from "react-moment";

import { Idea } from "../../model/idea/idea";
import IdeaAvatarList from "./IdeaAvatarList";

export interface Props {
  idea: Idea;
  onClick?: () => void;
}

export const IdeaCard: React.FunctionComponent<Props> = ({ idea, onClick }) => {
  const ideaImage = idea.image ?? "/ideas-banner.png";

  return (
    <div
      className="h-auto max-w-sm rounded-large overflow-hidden shadow-lg "
      onClick={onClick}
    >
      <div
        className="flex h-56 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 1)), url(${ideaImage})`,
        }}
      >
        <div className="p-4 flex-col items-end text-white mt-auto">
          <h4 className="font-bold text-lightgray text-base">
            {idea.category}
          </h4>
          <h3 className="font-bold text-white text-2xl">{idea.title}</h3>
        </div>
        <div className="flex-col items-end text-white mb-auto ml-auto">
          <div
            className={classnames(
              "h-8 px-4 py-1 bg-gradient-l-primary-to-light rounded-tr-large rounded-bl-large",
              { "w-26": idea.online },
              { "w-30": !idea.online }
            )}
          >
            <p className="font-bold text-white text-l">
              {idea.online ? "ONLINE" : "PRESENCIAL"}
            </p>
          </div>
        </div>
      </div>
      <div className="px-5 py-4 bg-gradient-l-primary-to-light">
        <div className="font-bold text-white text-xl capitalize-date">
          <Moment>{idea.startsAt}</Moment>
        </div>
        <div className="font-bold text-white text-sm mb-2">{idea.group}</div>
        <IdeaAvatarList attendees={idea.attendees}></IdeaAvatarList>
      </div>
    </div>
  );
};

export default IdeaCard;
