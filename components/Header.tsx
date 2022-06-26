import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

const LOGO_SIZE = "52";

const OriginHeader: React.FC = () => {
  return (
    <div className="flex justify-center w-full h-16 bg-white shadow-md opacity-70">
      <div className="flex flex-row px-2 w-[52rem] h-full">
        <div className="flex basis-3/4 items-center">
          <Link href="/team" className="cursor-pointer">
            <Image
              src="/logo.svg"
              width={LOGO_SIZE}
              height={LOGO_SIZE}
              alt="wakewake home"
              className="ml-1"
            />
          </Link>
          <span className="ml-3 text-3xl text-gray-800">wakewake</span>
        </div>
        <div className="flex basis-1/4 justify-end items-center">
          <a href="https://github.com/penicillin0/wakewake">
            <IconContext.Provider value={{ color: "#111", size: "2.5rem" }}>
              <FaGithub />
            </IconContext.Provider>
          </a>
        </div>
      </div>
    </div>
  );
};

export const Header = React.memo(OriginHeader);
