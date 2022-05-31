type Props = {
  text: string;
};

export const TeamCard: React.FC<Props> = ({ text }) => {
  return (
    <div className="flex -z-0 flex-col p-6 w-56 odd:bg-amber-400/25 even:bg-teal-400/20 shadow-symmetric">
      <div>{text}</div>
    </div>
  );
};
