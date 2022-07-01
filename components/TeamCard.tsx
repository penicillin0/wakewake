import React from "react";
import { MemberType } from "../types/Member";
import { MemberChipForCanvas } from "./MemberChipForCanvas";

type Props = {
  teamName: string;
  members: MemberType[];
};

const OriginTeamCard: React.FC<Props> = ({ teamName, members }) => {
  return (
    <div className="flex -z-0 flex-col py-[24px] px-[20px] w-[224px] odd:bg-amber-400/25 even:bg-teal-400/20 shadow-symmetric">
      <div className="mb-[12px]">{teamName}</div>
      <div className="flex flex-col items-center space-y-2">
        {members.map((member, index) => {
          return (
            <MemberChipForCanvas
              key={index}
              name={member.name}
            ></MemberChipForCanvas>
          );
        })}
      </div>
    </div>
  );
};

export const TeamCard = React.memo(OriginTeamCard);
