import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

export const Header: React.FC = () => {
  return (
    <div className="flex justify-center h-16 w-full bg-white opacity-70 shadow-md">
      <div className="flex flex-row w-[52rem] h-full border-2 px-2">
        <div className="basis-3/4 flex items-center">
          <>アイコン</>
          <>サービス名</>
        </div>
        <div className="basis-1/4 flex justify-end items-center">
          <IconContext.Provider value={{ color: "#111", size: "2.5rem" }}>
            <FaGithub />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};
