import { ReactElement } from "react";

type Props = Required<{
  children: ReactElement;
}>;

export const Card: React.FC<Props> = ({ children }) => {
  return (
    <div className="p-6 my-4 bg-white shadow-symmetric opacity-70">
      {children}
    </div>
  );
};
