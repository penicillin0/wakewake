import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

type Props = {
  name: string;
  hasCloseButton?: boolean;
};

const OriginMemberChip: React.FC<Props> = ({ name, hasCloseButton = true }) => {
  return (
    <div className="flex justify-center items-center px-2 min-w-[7rem] h-8 tracking-wide bg-white rounded-md border border-gray-600">
      <div className="text-base">{name}</div>
      {hasCloseButton && (
        <div className="ml-1">
          <IoIosCloseCircleOutline className="hover:text-pink-600 active:text-blue-500" />
        </div>
      )}
    </div>
  );
};

export const MemberChip = React.memo(OriginMemberChip);
