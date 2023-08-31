import styled from "styled-components";

const Button = styled.a`
  background-color: #2e2e35;
  color: #e4aa48;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #e4aa48;
  padding: 5% 10%;
  font-size: 1.1rem;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #e4aa48;
    color: #2e2e35;
  }
`;

export default function CustButton(props) {
  return <Button href={props.href}>{props.text}</Button>;
}
