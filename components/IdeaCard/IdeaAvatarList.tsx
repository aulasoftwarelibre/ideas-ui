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
    .map((attendee, index) => (
      <img
        className="-ml-1 first:ml-0 inline-block h-8 w-8 rounded-full text-white shadow-solid"
        src={attendee.image ?? "/avatar.svg"} 
        alt=""
        key={index}
      />
    ));
  return (
    <div className="flex overflow-hidden p-1">
      {avatars}
      <div className="font-bold text-white text-base ml-3 mt-1">
        {attendess.length}
      </div>
    </div>
  );
};

export default IdeaAvatarList;
