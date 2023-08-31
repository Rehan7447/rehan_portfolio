import styled from "styled-components";
import banner from "../assets/placer.png";
import CustButton from "./subComponents/button";

const Main = styled.div`
  margin: 150px auto 0px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;
const Mid = styled.div`
  flex: 2;
`;
const Right = styled.div`
  flex: 1;
  @media (max-width: 768px) {
    display: none;
  }
`;

const BannerImg = styled.img`
  width: 100%;
  max-width: 450px;
  min-width: 100px;
  border-radius: 20%;
  margin: 0px auto;
`;

const Heading = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 3rem;
  font-weight: bolder;
  text-align: left;
  margin: 30px auto;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Dash = styled.div`
  width: 40px;
  height: 2px;
  background: #e4aa48;
  margin: 50px 0px;
`;

const SubHeading = styled.h2`
  color: #e4aa48;
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 2.4px;
  justify-content: left;
`;

const ParaHead = styled.h1`
  color: #dadada;
  font-size: 2.4rem;
  font-weight: 500;
`;

const Desc = styled.p``;

export default function Banner() {
  return (
    <Main>
      <Left>
        <Heading>
          Rehan
          <br />
          &nbsp;Ashraf
          <span style={{ fontSize: "3rem", color: "#e4aa48" }}>.</span>
        </Heading>
        <Dash></Dash>
        <CustButton dest="www.google.com" text="Contact Me" />
      </Left>
      <Mid>
        <BannerImg src={banner} alt="bannerImage" />
      </Mid>
      <Right>
        <SubHeading>Introduction</SubHeading>
        <ParaHead>Full Stack Web Developer</ParaHead>
        <Desc>
          Dedicated and hardworking individual with a passion for Full-stack web
          development and a desire to deliver the best.
        </Desc>
      </Right>
    </Main>
  );
}
