import React from "react";

const OriginFooter: React.FC = () => {
  return (
    <div className="flex justify-center  items-center w-full h-16 text-gray-500 bg-amber-100 shadow-lg">
      this is Footer
    </div>
  );
};

export const Footer = React.memo(OriginFooter);
