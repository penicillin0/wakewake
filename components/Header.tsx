import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

export const Header: React.FC = () => {
  return (
    <div className="flex justify-center w-full h-16 bg-white shadow-md opacity-70">
      <div className="flex flex-row px-2 w-[52rem] h-full">
        <div className="flex basis-3/4 items-center">
          <>アイコン</>
          <>サービス名</>
        </div>
        <div className="flex basis-1/4 justify-end items-center">
          <IconContext.Provider value={{ color: "#111", size: "2.5rem" }}>
            <FaGithub />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};
