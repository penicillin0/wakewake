import { IoIosCloseCircleOutline } from "react-icons/io";

type Props = {
  name: string;
  hasCloseButton?: boolean;
};

export const MemberChip: React.FC<Props> = ({
  name,
  hasCloseButton = true,
}) => {
  return (
    <div
      className={`flex items-center py-1 ${
        hasCloseButton ? "pr-1" : "pr-2"
      } pl-2 bg-white rounded-md border border-gray-600`}
    >
      <div className="text-base">{name}</div>
      {hasCloseButton && (
        <div className="ml-2">
          <IoIosCloseCircleOutline className="hover:text-pink-600 active:text-blue-500" />
        </div>
      )}
    </div>
  );
};
