import React from "react";

const OriginFooter: React.FC = () => {
  return (
    <div className="flex sticky top-[100vh] justify-center items-center w-full h-[96px] text-gray-500 bg-white  shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] opacity-70">
      <span className="flex justify-center items-center w-[320px] sm:w-[512px] md:w-[640px] lg:w-[832px]">
        Copyright © 2022 wakewake All Rights Reserved.
      </span>
    </div>
  );
};

export const Footer = React.memo(OriginFooter);
