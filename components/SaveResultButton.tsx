import React from "react";

type Props = {
  onClick: () => Promise<void>;
  text: string;
};

const OriginSaveResultButton: React.FC<Props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="py-[4px] px-[8px] text-[12px] text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700 rounded-md sm:text-[16px]"
    >
      {props.text}
    </button>
  );
};

export const SaveResultButton = React.memo(OriginSaveResultButton);
