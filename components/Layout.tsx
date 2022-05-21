import { ReactElement } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="overflow-hidden fixed inset-0">
        <div className="absolute top-[2rem] left-[-10%] w-2/5 h-[40vw] rounded-full border-3vw border-amber-400 opacity-25"></div>
        <div className="absolute top-[22rem] left-[-10rem] w-[140vw] h-[4vw] bg-slate-300 opacity-50 rotate-[330deg]"></div>
        <div className="absolute top-[20rem] right-[-10%] w-2/5 h-[40vw] rounded-full border-3vw border-teal-400 opacity-25"></div>
      </div>
      <Header />

      {children}
      <Footer />
    </div>
  );
};