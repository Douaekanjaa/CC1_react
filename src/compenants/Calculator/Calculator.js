import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './calculator.css'



export default function Calculator() {
  let [res, setRes] = useState("");

  const handleButtonClick = (value) => {
    setRes((prevRes) => prevRes + value);
  };

  const handleDeleteLastCharacter = () => {
    setRes((prevRes) => prevRes.slice(0, -1));
  };

  const handleClear = () => {
    setRes("");
  };

  const handleEqual = () => {
    try {
      const result = eval(res);
      if (!isFinite(result)) {
        setRes("Error !");
      } else {
        setRes(result);
      }
    } catch (error) {
      setRes("Error !");
    }
  };

  return (
    <>
      <h1
        style={{
          color: "#8FA3FF",
          fontSize: "4em",
          fontWeight: "900",
          textShadow: "3px 3px 5px rgba(0, 0, 0, 0.2)",
          fontFamily: "cursive",
        }}
        className="text-center mt-2 mb-5"
      >
        Calculator
      </h1>
      <Container className="mb-2 justify-content-center rounded " style={{ backgroundColor: "#9448F5", maxWidth: "300px" }}>
        <Row className="mb-3 mt-2 justify-content-center">
          <Col xs={9} md={8}>
            <input
              type="text"
              value={res}
              className=" px-4 py-2 ms-xs-3 "
              style={{
                backgroundColor: "#96ecd4e2",
                border: "4px solid #277088de",
                color: "black",
                width : "100%"
              }}
              disabled
            />
          </Col>
          <Col xs={3} md={4}>
            <Button onClick={handleClear} className="w-100 p-2 btn shadow">
              C
            </Button>
          </Col>
        </Row>

        <Row className="my-3 justify-content-center">
          <Col xs={3} md={3}>
            <Button
              value={"%"}
              onClick={() => handleButtonClick("%")}
              className="w-100 blue py-2 px-3 btn shadow"
            >
              %
            </Button>
          </Col>
          <Col xs={3} md={3}>
            <Button
              value={"/"}
              onClick={() => handleButtonClick("/")}
              className="w-100 blue py-2 px-3 btn shadow"
            >
              /
            </Button>
          </Col>
          <Col xs={3} md={3}>
            <Button
              value={"*"}
              onClick={() => handleButtonClick("*")}
              className="w-100 blue py-2 px-3 btn shadow"
            >
              *
            </Button>
          </Col>
          <Col xs={3} md={3}>
            <Button
              onClick={handleDeleteLastCharacter}
              className="w-100 blue p-1 py-xs-5 btn shadow"
            >
              ←
            </Button>
          </Col>
        </Row>

        <Row className="my-3 justify-content-center">
          {[7, 8, 9].map((num) => (
            <Col key={num} xs={3} md={3}>
              <Button
                value={num}
                onClick={() => handleButtonClick(num)}
                className="pink w-100 py-2 px-xs-0 px-1 btn shadow"
              >
                {num}
              </Button>
            </Col>
          ))}
           <Col xs={3} md={3}>
            <Button
              value="-"
              onClick={() => handleButtonClick("-")}
              className="blue w-100 py-2 px-xs-0 px-1 btn shadow"
            >
              -
            </Button>
          </Col>
        </Row>

        <Row className="my-3 justify-content-center">
          {[4, 5, 6].map((num) => (
            <Col key={num} xs={3} md={3}>
              <Button
                value={num}
                onClick={() => handleButtonClick(num)}
                className="pink w-100 py-2 px-xs-0 px-1 btn shadow"
              >
                {num}
              </Button>
            </Col>
          ))}
           <Col xs={3} md={3}>
            <Button
              value=")"
              onClick={() => handleButtonClick(")")}
              className="blue w-100 py-2 px-xs-0 px-1 btn shadow"
            >
              )
            </Button>
          </Col>
        </Row>

        <Row className="my-3 justify-content-center">
          {[1, 2, 3].map((num) => (
            <Col key={num} xs={3} md={3}>
              <Button
                value={num}
                onClick={() => handleButtonClick(num)}
                className="pink w-100 py-2 px-xs-0 px-1 btn shadow"
              >
                {num}
              </Button>
            </Col>
            
          ))}
          <Col xs={3} md={3}>
            <Button
              value="("
              onClick={() => handleButtonClick("(")}
              className="blue w-100 py-2 px-xs-0 px-1 btn shadow"
            >
              (
            </Button>
          </Col>
        </Row>

        <Row className="my-3 justify-content-center">
          <Col xs={3} md={3}>
            <Button
              value={"."}
              onClick={() => handleButtonClick(".")}
              className="pink w-100 py-2 px-xs-0 px-1 btn shadow"
            >
              .
            </Button>
          </Col>
          <Col xs={3} md={3}>
            <Button
              value={"0"}
              onClick={() => handleButtonClick("0")}
              className="pink w-100 py-2 px-xs-0 px-1 btn shadow"
            >
              0
            </Button>
          </Col>
          <Col xs={3} md={3}>
            <Button
              value={"+"}
              onClick={() => handleButtonClick("+")}
              className=" pink w-100 py-2 px-xs-0 px-1 btn shadow"
            >
              +
            </Button>
          </Col>
          <Col xs={3} md={3}>
            <Button
              onClick={handleEqual}
              className="blue w-100 py-2 px-xs-0 px-1 btn shadow"
              style={{ fontSize: "16px", color: "#FF7FAD" }}
            >
              =
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
