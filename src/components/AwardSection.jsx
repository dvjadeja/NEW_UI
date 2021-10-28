import React, { useState } from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";
import styled from "styled-components";

import target from "../assests/target.svg";
import idea from "../assests/idea.svg";
import test from "../assests/test.svg";
import project from "../assests/project.svg";
import starImg from "../assests/star.png";
import check from "../assests/check-green.png";

const activeButtons = [
  { title: "3 of 60 awards" },
  { title: "Streak Bonuses" },
];

const awardsData = [
  {
    title: "Achievment 1",
    text: "Complete 10 'Arrange the 3 items blocks'.",
    star: 10,
    totalProgress: 10,
    compltedProgress: 3,
    icon: target,
  },
  {
    title: "Just Arrage it once more",
    text: "Complete 'Arrange the 3 items blocks'.",
    star: 25,
    totalProgress: 10,
    compltedProgress: 3,
    icon: idea,
  },
  {
    title: "Rising Star",
    text: "Complete 10 'Arrange the 3 items blocks'.",
    star: 36,
    totalProgress: 15,
    compltedProgress: 14,
    icon: test,
  },
  {
    title: "Another 25 !",
    text: "Complete 25 Challenges",
    star: 25,
    totalProgress: 25,
    compltedProgress: 18,
    icon: project,
  },
];

const streakBonusData = [
  {
    name: "Day 1",
    star: 10,
    done: true,
  },
  {
    name: "Day 2",
    star: 15,
    done: true,
  },
  {
    name: "Day 3",
    star: 15,
    done: false,
  },
  {
    name: "Day 4",
    star: 15,
    done: false,
  },
  {
    name: "Day 5",
    star: 15,
    done: false,
  },
];

const AwardSection = () => {
  const [active, setActive] = useState(0);
  return (
    <div style={{ padding: "20px", marginTop: "60px" }}>
      <div
        style={{
          display: "flex",
          flexdirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "35px",
        }}
      >
        {activeButtons.map((item, idx) => (
          <StyledDiv
            key={idx}
            active={active === idx}
            onClick={() => setActive(idx)}
          >
            <p>{item.title}</p>
          </StyledDiv>
        ))}
      </div>

      {active === 0 &&
        awardsData.map(
          (
            { icon, title, text, compltedProgress, totalProgress, star },
            idx
          ) => (
            <Row key={idx} style={{ margin: 0 }}>
              <Col
                xs={2}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={icon} alt={icon} />
              </Col>
              <Col xs={8}>
                <h6 style={{ margin: 0 }}>{title}</h6>
                <p
                  className="text-muted"
                  style={{ margin: "5px 0 0 5px", fontSize: "11px" }}
                >
                  {text}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <ProgressBar
                    style={{ margin: "0", height: "0.5rem", width: "60%" }}
                    now={compltedProgress}
                    max={totalProgress}
                    min={1}
                  />
                  <p
                    className="text-muted"
                    style={{ margin: "0", fontSize: "11px" }}
                  >{`${compltedProgress}/${totalProgress}`}</p>
                </div>
              </Col>
              <Col xs={2} style={{ display: "flex", alignItems: "center" }}>
                <span>
                  <img style={{ zIndex: "5" }} src={starImg} alt="dummy" />
                  <p style={{ textAlign: "center" }}>{star}</p>
                </span>
              </Col>
              <hr />
            </Row>
          )
        )}

      {active === 1 &&
        streakBonusData.map((item, idx) => (
          <>
            <Row key={idx} className="mb-3">
              <Col xs={4}>
                <h6>{item.name}</h6>
              </Col>
              <Col xs={5}>
                <StyledSpan>
                  <img style={{ zIndex: "5" }} src={starImg} alt="dummy" />
                  <StyledYellowDiv>{item.star}</StyledYellowDiv>
                </StyledSpan>
              </Col>
              <Col xs={3}>
                {item.done && <img height="25" src={check} alt="check" />}
              </Col>
            </Row>
            <hr />
          </>
        ))}
    </div>
  );
};

const StyledDiv = styled.div`
  background-color: ${(props) => (props.active ? "#FAD6A5" : "#FAFAFA")};
  width: 60%;
  height: 50px;
  padding-top: 13px;
  padding-left: 23px;
  border-radius: 10px 10px 0px 0px;
`;
const StyledSpan = styled.span`
  display: flex;
  flex-direction: row;
  width: 60px;
`;

const StyledYellowDiv = styled.div`
  background-color: #ffd93b;
  border-radius: 0 10px 10px 0;
  width: 600px;
  margin-left: -13px;
  z-index: 4;
  padding-left: 15px;
`;

export default AwardSection;
