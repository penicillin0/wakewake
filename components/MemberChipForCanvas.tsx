import React from "react";

type Props = {
  name: string;
};

const OriginMemberChipForCanvas: React.FC<Props> = ({ name }) => {
  return (
    <div className="flex justify-center items-center px-1 min-w-[7rem] h-8 text-sm tracking-wide whitespace-nowrap bg-white rounded-md border border-gray-600">
      <div>{name}</div>
    </div>
  );
};

export const MemberChipForCanvas = React.memo(OriginMemberChipForCanvas);
