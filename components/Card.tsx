import React, { ReactElement } from "react";

type Props = Required<{
  children: ReactElement;
}>;

const OriginCard: React.FC<Props> = ({ children }) => {
  return (
    <div className="p-5 my-3 bg-white shadow-symmetric opacity-80">
      {children}
    </div>
  );
};

export const Card = React.memo(OriginCard);
