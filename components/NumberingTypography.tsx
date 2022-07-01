import React from "react";

type Props = {
  numbering: number;
  text: string;
};

const OriginNumberingTypography: React.FC<Props> = (props) => {
  return (
    <div className="p-[4px] mt-[28px] text-lg text-gray-900">
      {props.numbering}. &nbsp;{props.text}
    </div>
  );
};

export const NumberingTypography = React.memo(OriginNumberingTypography);
