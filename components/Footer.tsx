import React from "react";

const OriginFooter: React.FC = () => {
  return <div>this is footer</div>;
};

export const Footer = React.memo(OriginFooter);
