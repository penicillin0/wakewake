import { NextPage } from "next";
import styled from "styled-components";

const Team: NextPage = () => {
  return (
    <MainContainer>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1>Team</h1>
      <p>This is the Team page. You can edit this page by editing the file</p>
    </MainContainer>
  );
};

export default Team;

const MainContainer = styled.div``;
