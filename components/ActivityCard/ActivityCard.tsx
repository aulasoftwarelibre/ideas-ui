import React from "react";
import classnames from "classnames";

export interface Props {
  title: string;
  group: string;
  category: string;
  image?: string;
  starts_at: Date;
  online: Boolean;
  onClick?: () => void;
}

export const ActivityCard: React.FunctionComponent<Props> = ({
  title,
  group,
  category,
  image,
  starts_at,
  online,
  onClick,
}) => {
  return (
    <div
      className="h-auto max-w-sm rounded-large overflow-hidden shadow-lg "
      onClick={onClick}
    >
      <div
        className="flex h-56 bg-cover bg-center"
        style={{
          backgroundImage: "url('" + image + "')",
        }}
      >
        <div className="p-4 flex-col items-end text-white mt-auto">
          <h4 className="font-bold text-lightgray text-base">{category}</h4>
          <h3 className="font-bold text-white text-2xl">{title}</h3>
        </div>
        <div className="flex-col items-end text-white mb-auto ml-auto">
          <div
            className={classnames(
              "h-10 px-4 py-1 bg-gradient-l-primary-to-light rounded-tr-large rounded-bl-large",
              { "w-24": online },
              { "w-32": !online }
            )}
          >
            <p className="font-bold text-white text-xl">
              {online ? "Online" : "Presencial"}
            </p>
          </div>
        </div>
      </div>
      <div className="px-5 py-4 bg-gradient-l-primary-to-light">
        <div className="font-bold text-white text-xl">
          {starts_at.toUTCString()}
        </div>
        <div className="font-bold text-white text-sm mb-2">{group}</div>
        <div className="flex overflow-hidden">
          <img
            className="inline-block h-8 w-8 rounded-full text-white shadow-solid"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="-ml-2 inline-block h-8 w-8 rounded-full text-white shadow-solid"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="-ml-2 inline-block h-8 w-8 rounded-full text-white shadow-solid"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="-ml-2 inline-block h-8 w-8 rounded-full text-white shadow-solid"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="font-bold text-white text-base ml-3 mt-1">23</div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
