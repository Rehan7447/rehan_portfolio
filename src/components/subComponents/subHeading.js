import styled from "styled-components";

const Sub = styled.h2`
  color: #e4aa48;
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 2.4px;
  justify-content: left;
`;

export default function SubHeading({children}) {
  return <Sub>{children}</Sub>;
}
