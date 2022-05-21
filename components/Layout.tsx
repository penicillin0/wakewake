import { ReactElement } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="fixed overflow-hidden top-0 left-0 right-0 bottom-0">
        <div className="rounded-full absolute top-[2rem] left-[-10%] h-[40vw] w-2/5 border-3vw border-amber-400 opacity-25"></div>
        <div className="absolute top-[22rem] left-[-10rem] w-[140vw] h-[4vw] bg-slate-300 opacity-50 -rotate-[27deg]"></div>
        <div className="rounded-full absolute top-[20rem] right-[-10%] h-[40vw] w-2/5 border-3vw border-teal-400 opacity-25"></div>
      </div>
      <Header />

      {children}
      <Footer />
    </div>
  );
};
