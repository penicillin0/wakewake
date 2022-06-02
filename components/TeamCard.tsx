import { MemberType } from "../types/Member";
import { MemberChip } from "./MemberChip";

type Props = {
  text: string;
  members: MemberType[];
};

export const TeamCard: React.FC<Props> = ({ text, members }) => {
  return (
    <div className="flex -z-0 flex-col p-6 w-56 odd:bg-amber-400/25 even:bg-teal-400/20 shadow-symmetric">
      <div>{text}</div>
      <div className="flex flex-col items-center space-y-1">
        {members.map((member, index) => {
          return (
            <MemberChip
              key={index}
              name={member.name}
              hasCloseButton={false}
            ></MemberChip>
          );
        })}
      </div>
    </div>
  );
};
