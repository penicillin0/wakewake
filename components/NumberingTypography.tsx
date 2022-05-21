type Props = {
  numbering: number;
  text: string;
};

export const NumberingTypography: React.FC<Props> = (props) => {
  return (
    <div className="py-2 px-1 mt-9 text-lg text-gray-900">
      {props.numbering}. &nbsp;{props.text}
    </div>
  );
};
