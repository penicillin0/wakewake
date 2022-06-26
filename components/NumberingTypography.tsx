import React from "react";

type Props = {
  numbering: number;
  text: string;
};

const OriginNumberingTypography: React.FC<Props> = (props) => {
  return (
    <div className="p-1 mt-7 text-lg text-gray-900">
      {props.numbering}. &nbsp;{props.text}
    </div>
  );
};

export const NumberingTypography = React.memo(OriginNumberingTypography);
