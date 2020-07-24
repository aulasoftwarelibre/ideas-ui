import React from "react";
import { User } from "../../model/user/auth";

export interface Props {
  attendess: User[];
}

export const IdeaAvatarList: React.FunctionComponent<Props> = ({
  attendess,
}) => {
  const avatars = attendess
    .slice(0, 4)
    .map((attendee) => (
      <img
        className="-ml-1 first:ml-0 inline-block h-8 w-8 rounded-full text-white shadow-solid"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    ));
  return (
    <div className="flex overflow-hidden">
      {avatars}
      <div className="font-bold text-white text-base ml-3 mt-1">
        {attendess.length}
      </div>
    </div>
  );
};

export default IdeaAvatarList;
