import { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnTxt, setBtnTxt] = useState({
    text: "Enable Dark Mode",
    variant: "light",
  });

  const btnClick = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnTxt({
        text: "Enable Dark Mode",
        variant: "light",
      });
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnTxt({
        text: "Disable Dark Mode",
        variant: "dark",
      });
    }
  };

  return (
    <>
      <h2>About Us</h2>
      <Accordion defaultActiveKey="0" style={myStyle}>
        <Accordion.Item eventKey="0" style={myStyle}>
          <Accordion.Header style={myStyle}>Accordion Item #1</Accordion.Header>
          <Accordion.Body style={myStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={myStyle}>
          <Accordion.Header style={myStyle}>Accordion Item #2</Accordion.Header>
          <Accordion.Body style={myStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="container my-3">
        <Button variant={btnTxt.variant} onClick={btnClick}>
          {btnTxt.text}
        </Button>
      </div>
    </>
  );
}

export default About;
