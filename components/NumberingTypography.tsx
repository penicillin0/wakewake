import React from "react";

type Props = {
  numbering: number;
  text: string;
};

const OriginNumberingTypography: React.FC<Props> = (props) => {
  return (
    <h3 className="p-[4px] text-[18px] text-gray-900">
      {props.numbering}. &nbsp;{props.text}
    </h3>
  );
};

export const NumberingTypography = React.memo(OriginNumberingTypography);
