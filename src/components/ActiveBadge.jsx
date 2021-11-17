import React from "react";
import { useHistory } from "react-router";
import { Card, Col, Row, Badge } from "react-bootstrap";
import clock from "../assests/images/clock.svg";
import badge from "../assests/images/badgeIcon.svg";
import speedmeter from "../assests/images/speedmeter.svg";

const ActiveBadge = ({
  color,
  title,
  days,
  daysColor,
  bg,
  badgeEarned,
  badgeTotal,
  scoreEarned,
  scoreTotal,
  mission,
}) => {
  const history = useHistory();
  return (
    <>
      <Card
        style={{
          height: "200px",
          background: `${color}`,
          width: "95%",
        }}
      >
        <Row style={{ paddingRight: "0.73rem" }}>
          <Col xs={7} md={7}>
            <div
              style={{
                backgroundColor: `${bg}`,
                width: "47%",
                height: 70,
                borderRadius: "0px 8px 8px 0px",
                marginTop: 30,
                display: "flex",
                padding: 10,
                textAlign: "start",
              }}
            >
              <h4>{title}</h4>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "10px",
                alignItems: "center",
                width: "50%",
                padding: "10px",
              }}
            >
              <img
                src={clock}
                alt="clockBadge"
                style={{ height: 20, padding: 1 }}
              />
              <p
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  margin: 0,
                  textAlign: "left",
                  marginLeft: 10,
                  color: `${daysColor}`,
                }}
              >
                {days} Days Left
              </p>
            </div>
          </Col>

          <Col
            xs={5}
            md={5}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              background: `${bg}`,
              height: "132%",
              borderRadius: "10px 0px 0px 17px",
            }}
          >
            <div>
              <h6>
                <u>Ea</u>rned
              </h6>
            </div>
            <Row>
              <Col md={3} lg={3}>
                <img src={badge} alt="badge" height="30px" />
              </Col>
              <Col
                md={3}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: 10,
                  padding: 0,
                }}
              >
                <h6 style={{ margin: 0 }}>
                  {badgeEarned}/{badgeTotal}
                </h6>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    margin: 0,
                    textAlign: "left",
                  }}
                >
                  Badge
                </p>
              </Col>
              <Col md={2} lg={3}>
                <img src={speedmeter} alt="badge" height="30px" />
              </Col>
              <Col
                lg={3}
                md={4}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: 10,
                  paddingRight: 0,
                }}
              >
                <h6 style={{ margin: 0, width: "100%" }}>
                  {scoreEarned}/{scoreTotal}
                </h6>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    margin: 0,
                    textAlign: "left",
                  }}
                >
                  Score
                </p>
              </Col>
            </Row>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Badge
                style={{
                  padding: 8,
                  width: "100%",
                  background: "transparent",
                  borderRadius: "20px",
                }}
                pill
                onClick={() => history.push("/journey")}
              >
                Next Milestone : Mission {mission}
              </Badge>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default ActiveBadge;
