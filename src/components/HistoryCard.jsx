import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import tick from "../assests/images/tick.svg";
import badge from "../assests/images/badgeIconColour.svg";
import star from "../assests/images/star.svg";

const HistoryCard = ({
  cardBg,
  status,
  statusBg,
  title,
  sup,
  startDate,
  startMonth,
  endDate,
  endMonth,
  earnedMilestone,
  totalMilestone,
  pointsEarned,
  pointsTotal,
  badgeEarned,
  badgeTotal,
}) => {
  return (
    <>
      <Card
        style={{
          marginBottom: 20,
          boxShadow: "5px 10px 30px #0000001a",
          border: 0,
          borderRadius: 7,
          backgroundColor: `${cardBg}`,
          width: "96%",
        }}
      >
        <div
          style={{
            backgroundColor: `${statusBg}`,
            width: 118,
            height: 31,
            borderRadius: "10px 0px",
            color: "white",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            fontSize: 13,
          }}
        >
          {status}
        </div>
        <h6
          style={{
            textAlign: "left",
            margin: "10px 0 0 10px",
            fontWeight: "bold",
          }}
        >
          {title}
        </h6>
        <p
          style={{
            fontSize: 13,
            textAlign: "left",
            marginTop: 5,
            marginLeft: 10,
          }}
        >
          {startDate}
          <sup>{sup}</sup> {startMonth} - {endDate}
          <sup>{sup}</sup> {endMonth}
        </p>
        {status === "Dropped" ? (
          <Row style={{ marginTop: 10, marginLeft: 25 }}>
            <Col>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <img
                  src={tick}
                  alt="tick"
                  style={{ margin: "0px 5px auto 0px" }}
                />
                <div style={{ textAlign: "left" }}>
                  <h6>
                    {`${3}/`}
                    <span style={{ color: "#9E9999" }}>5</span>
                  </h6>

                  <p
                    style={{
                      fontWeight: 600,

                      fontSize: 13,
                    }}
                  >
                    Completed Milestones
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <img
                  src={star}
                  alt="star"
                  style={{ margin: "0px 5px auto 0px" }}
                />
                <div style={{ textAlign: "left" }}>
                  <h6>
                    {`${1500}/`}
                    <span style={{ color: "#9E9999" }}>2000</span>
                  </h6>

                  <p
                    style={{
                      fontWeight: 600,

                      fontSize: 13,
                    }}
                  >
                    Points
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <img
                  src={badge}
                  alt="badge"
                  style={{ margin: "0px 5px auto 0px" }}
                />
                <div style={{ textAlign: "left" }}>
                  <h6>
                    {`${1}/`}
                    <span style={{ color: "#9E9999" }}>2</span>
                  </h6>

                  <p
                    style={{
                      fontWeight: 600,

                      fontSize: 13,
                    }}
                  >
                    Badges
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <Row style={{ marginTop: 40, marginLeft: 25 }}></Row>
        )}
      </Card>
    </>
  );
};

export default HistoryCard;
