import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

type Props = {
  name: string;
  hasCloseButton?: boolean;
  handleDeleteClick: () => void;
};

const OriginMemberChip: React.FC<Props> = ({
  name,
  hasCloseButton = true,
  handleDeleteClick,
}) => {
  return (
    <div className="flex justify-center items-center px-[4px] min-w-[7rem] h-[32px] tracking-wide bg-white rounded-md border border-gray-600">
      <div className="inline-block text-base align-middle">{name}</div>
      {hasCloseButton && (
        <div className="ml-[4px]">
          <IoIosCloseCircleOutline
            className="hover:text-pink-600 active:text-blue-500"
            onClick={handleDeleteClick}
          />
        </div>
      )}
    </div>
  );
};

export const MemberChip = React.memo(OriginMemberChip);
