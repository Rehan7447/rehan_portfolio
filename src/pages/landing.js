import styled from "styled-components";
import Banner from "../components/banner";
import Header from "../components/header";
import SubHeading from "../components/subComponents/subHeading";

const MainContainer = styled.div`
  background-color: #2e2e35;
  color: #fff;
  padding: 60px 0px 0px;
  max-width: 80%;
  margin: auto;
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Body = styled.div`
  background-color: #34343b;
`;

export default function Landing() {
  return (
    <MainContainer>
      <Header />
      <Banner />
      <Body>
        <SubHeading>Body</SubHeading>
      </Body>
    </MainContainer>
  );
}
