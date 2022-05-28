import { IoIosCloseCircleOutline } from "react-icons/io";

type Props = {
  name: string;
};

export const MemberChip: React.FC<Props> = (props) => {
  return (
    <div className="flex items-center py-1 pr-1 pl-2 rounded-md border border-gray-600">
      <div className="text-base">{props.name}</div>
      <div className="ml-2">
        <IoIosCloseCircleOutline className="hover:text-pink-600 active:text-blue-500" />
      </div>
    </div>
  );
};
