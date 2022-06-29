import Image from "next/image";
import React from "react";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

const LOGO_SIZE = "48";

const OriginHeader: React.FC = () => {
  return (
    <div className="flex justify-center w-full h-[64px] bg-white shadow-md opacity-70">
      <div className="flex flex-row px-2 w-[20rem] h-full sm:w-[32rem] md:w-[40rem] lg:w-[52rem]">
        <div className="flex basis-3/4 items-center">
          <Image
            src="/logo.svg"
            width={LOGO_SIZE}
            height={LOGO_SIZE}
            alt="wakewake home"
          />
          <span className="ml-3 text-3xl text-gray-800">wakewake</span>
        </div>
        <div className="flex basis-1/4 justify-end items-center">
          <a href="https://github.com/penicillin0/wakewake">
            <IconContext.Provider value={{ color: "#111", size: "2.5rem" }}>
              <FaGithub title="Github Link" />
            </IconContext.Provider>
          </a>
        </div>
      </div>
    </div>
  );
};

export const Header = React.memo(OriginHeader);
