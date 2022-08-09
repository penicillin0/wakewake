import { NextPage } from "next";

export const getStaticProps = async () => {
  return {
    redirect: {
      permanent: true,
      destination: "https://awakewake.jp/tool/team-divider/wakewake",
    },
  };
};

const Home: NextPage = () => {
  return <>Old URL</>;
};

export default Home;
