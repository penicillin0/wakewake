import React from "react";

const OriginFooter: React.FC = () => {
  return (
    <div className="flex justify-center  items-center w-full h-16 text-gray-500 bg-white  shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] opacity-70">
      this is Footer
    </div>
  );
};

export const Footer = React.memo(OriginFooter);
