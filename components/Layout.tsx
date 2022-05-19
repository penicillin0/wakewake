import { ReactElement } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
