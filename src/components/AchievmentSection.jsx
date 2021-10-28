import React, { useState } from "react";
import { Card, Col, Row, ProgressBar } from "react-bootstrap";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import Calendar from "react-calendar";

import mortarboard from "../assests/mortarboard.svg";
import block from "../assests/block.svg";
import cup from "../assests/cup.svg";
import target from "../assests/target.svg";
import idea from "../assests/idea.svg";
import test from "../assests/test.svg";
import project from "../assests/project.svg";

import blue from "../assests/certificate-blue.svg";
import green from "../assests/certificate-green.svg";
import yellow from "../assests/certificate-yellow.svg";
import starImg from "../assests/star.png";
import styled from "styled-components";

const achivementCardData = [
  {
    name: "Achivement",
    value: 1,
    color: "#477B9E",
    icon: mortarboard,
  },
  {
    name: "Achivement",
    value: 0,
    color: "#43BAD1",
    icon: block,
  },
  {
    name: "Achivement",
    value: 1,
    color: "#FEDF5B",
    icon: block,
  },
  {
    name: "Achivement",
    value: 0,
    color: "#FCAA57",
    icon: mortarboard,
  },
];

const achivementTableData = [
  {
    name: "Achivement",
    icon: project,
    color: "black",
    value: 0,
  },
  {
    name: "Achivement",
    icon: test,
    color: "#017296",
    value: 1,
  },
  {
    name: "Achivement",
    icon: idea,
    color: "#01988C",
    value: 2,
  },
  {
    name: "Achivement",
    icon: target,
    color: "#FF668C",
    value: 3,
  },
  {
    name: "Achivement",
    icon: cup,
    color: "#F2AE5A",
    value: 3,
  },
];

const AchievmentSection = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div style={{ padding: 20 }} className="mt-5">
      <Row>
        {achivementCardData.map(({ name, value, color, icon }, idx) => (
          <Col xs={6} key={idx} className="mb-3">
            <StyledDivCard>
              <div style={{ height: 50, width: 50 }}>
                <CircularProgressbarWithChildren
                  value={value}
                  styles={buildStyles({ pathColor: color })}
                >
                  <img src={icon} alt="mortarboard" />
                </CircularProgressbarWithChildren>
              </div>
              <div style={{ marginTop: 15, marginLeft: -10 }}>
                <h2 style={{ color: color }}>{`${value}%`}</h2>
                <p>{name}</p>
              </div>
            </StyledDivCard>
          </Col>
        ))}
      </Row>
      <Card
        style={{
          boxShadow: "0px 10px 20px #00000014",
          borderRadius: 5,
          border: 0,
        }}
      >
        <Card.Body>
          <Row>
            <h6>1% Challenge Completed</h6>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: 300,
              }}
            >
              {achivementTableData.map((item, idx) => (
                <Col
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  xs={12}
                  key={idx}
                >
                  <img src={item.icon} alt="icon" />
                  <ProgressBar
                    style={{ width: "75%", height: "0.5rem" }}
                    now={item.value}
                  />
                  <p
                    style={{ paddingTop: 15 }}
                    className="text-muted"
                  >{`${item.value}%`}</p>
                </Col>
              ))}
            </div>
          </Row>
        </Card.Body>
      </Card>

      <Card
        className="mt-3"
        style={{
          boxShadow: "0px 10px 20px #00000014",
          borderRadius: 5,
          border: 0,
        }}
      >
        <Card.Header style={{ backgroundColor: "white" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: "0.8rem",
            }}
          >
            <span style={{ display: "flex", justifyContent: "space-around" }}>
              <div style={{ height: 20, width: 20, marginRight: 5 }}>
                <CircularProgressbarWithChildren
                  value={15}
                  styles={buildStyles({ pathColor: "#477B9E" })}
                ></CircularProgressbarWithChildren>
              </div>
              <span>13 Total</span>
            </span>
            <span style={{ display: "flex", justifyContent: "space-around" }}>
              <img
                style={{ marginRight: 5 }}
                height="20"
                src={starImg}
                alt="star"
              />
              <span>228 Total</span>
            </span>
          </div>
        </Card.Header>
        <Card.Body>
          <div>
            <Calendar
              className="borderZero"
              onChange={onChange}
              value={value}
            />
          </div>
        </Card.Body>
      </Card>

      <Card
        className="mt-3"
        style={{
          boxShadow: "0px 10px 20px #00000014",
          borderRadius: "5px",
          border: "0",
        }}
      >
        <Card.Header style={{ backgroundColor: "white" }}>
          0 of 3 certificates
        </Card.Header>
        <Card.Body>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <img height="40" src={blue} alt="blue" />
            <img height="40" src={green} alt="blue" />
            <img height="40" src={yellow} alt="blue" />
          </div>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexdirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img height="70" src={blue} alt="blue" />
            <div>
              <p style={{ margin: 0, display: "inline-block" }}>Learner</p>
              <p
                style={{
                  marginLeft: "80px",
                  display: "inline-block",
                  fontWeight: 600,
                }}
              >
                <span style={{ color: "#73C3F9" }}>150</span> Blocks
              </p>
              <ProgressBar
                style={{ height: "0.5rem", width: "224px" }}
                now={5}
              />
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

const StyledDivCard = styled.div`
  height: 84px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 20px #00000014;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
`;

export default AchievmentSection;
