import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

import linkedIn from "../assets/linkedin.json";
import gmail from "../assets/gmail.json";
import github from "../assets/github.json";

export default function Header() {
  const playIconRef = useRef([]);
  playIconRef.current = [];
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{ maxWidth: "100%", margin: "auto" }}
    >
      <Container style={{ padding: "0px" }}>
        <Navbar.Brand href="#home">Rehan</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#memes">Portfolio</Nav.Link>
            <Nav.Link href="#memes">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              href="https://www.linkedin.com/in/rehan-ashraf-a3a264221/"
              target="_blank"
              onMouseEnter={() => {
                playIconRef.current[0].play();
              }}
              onMouseLeave={() => {
                playIconRef.current[0].stop();
              }}
            >
              <Player
                src={linkedIn}
                className="player"
                loop
                ref={(el) => {
                  playIconRef.current.push(el);
                }}
              />
            </Nav.Link>
            <Nav.Link
              href="https://github.com/Rehan7447"
              target="_blank"
              onMouseEnter={() => {
                playIconRef.current[1].play();
              }}
              onMouseLeave={() => {
                playIconRef.current[1].stop();
              }}
            >
              <Player
                src={github}
                className="player"
                loop
                ref={(el) => {
                  playIconRef.current.push(el);
                }}
              />
            </Nav.Link>
            <Nav.Link
              href="mailto: m.rd7447@gmail.com"
              target="_blank"
              onMouseEnter={() => {
                playIconRef.current[2].play();
              }}
              onMouseLeave={() => {
                playIconRef.current[2].stop();
              }}
            >
              <Player
                src={gmail}
                className="player"
                loop
                ref={(el) => {
                  playIconRef.current.push(el);
                }}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
