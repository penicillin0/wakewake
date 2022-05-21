type Props = {
  numbering: number;
  text: string;
};

export const NumberingTypography: React.FC<Props> = (props) => {
  return (
    <div className="px-1 py-2 text-lg mt-7">
      {props.numbering}. &nbsp;{props.text}
    </div>
  );
};
