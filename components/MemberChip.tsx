import { IoIosCloseCircleOutline } from "react-icons/io";

type Props = {
  name: string;
};

export const MemberChip: React.FC<Props> = (props) => {
  return (
    <div className="border border-gray-600 pl-2 pr-1 py-1 rounded-md flex items-center">
      <div className="text-base">{props.name}</div>
      <div className="ml-2">
        <IoIosCloseCircleOutline className="hover:text-pink-600" />
      </div>
    </div>
  );
};
