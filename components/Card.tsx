import { ReactElement } from "react";

type Props = Required<{
  children: ReactElement;
}>;

export const Card: React.FC<Props> = ({ children }) => {
  return (
    <div className="shadow-symmetric bg-white opacity-70 p-6 my-4">
      {children}
    </div>
  );
};
