import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const UpcomingCard = ({
  title,
  startDate,
  sup,
  startMonth,
  endDate,
  endMonth,
  points,
  badges,
  certificates,
}) => {
  return (
    <>
      <Card
        style={{
          marginBottom: 20,
          boxShadow: "5px 10px 30px #0000001A",
          border: "1px solid #979797",
          borderRadius: 7,
          backgroundColor: "white",
          width: "96%",
          paddingRight: 12,
        }}
      >
        <Row>
          <Col xs={7} md={7}>
            <h5
              style={{
                textAlign: "left",
                marginTop: 22,
                marginLeft: 17,
              }}
            >
              {title}
            </h5>
            <p
              style={{
                fontSize: 13,
                textAlign: "left",
                marginTop: 0,
                marginLeft: 17,
              }}
            >
              {startDate}
              <sup>{sup}</sup> {startMonth} - {endDate}
              <sup>{sup}</sup> {endMonth}
            </p>
          </Col>
          <Col
            xs={5}
            md={5}
            style={{
              background: "#F7E7CE",
              borderRadius: 10,
              paddingBottom: 20,
            }}
          >
            <p
              style={{
                fontSize: 13,
                textAlign: "center",
                marginLeft: 17,
                marginTop: 8,
                fontWeight: 600,
              }}
            >
              You will be Earned
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  borderRight: "1px solid black",
                  paddingRight: 20,
                }}
              >
                <div style={{ fontWeight: 600 }}>{points}</div>
                <div>Points</div>
              </div>
              <div
                style={{
                  borderRight: "1px solid black",
                  paddingRight: 20,
                }}
              >
                <div style={{ fontWeight: 600 }}>{badges}</div>
                <div>Badges</div>
              </div>
              <div>
                <div style={{ fontWeight: 600 }}>{certificates}</div>
                <div>Certificates</div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default UpcomingCard;
