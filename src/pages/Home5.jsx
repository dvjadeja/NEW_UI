import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import back from "../assests/images/back.svg";
import { Col, Row } from "react-bootstrap";
import ActiveBadge from "../components/ActiveBadge";

const ActiveCardData = [
  {
    color: "#F9E7F9",
    title: "Incentive Achivement",
    days: 17,
    daysColor: "#000000",
    bg: "#fff1ff",
    badgeEarned: 1,
    badgeTotal: 3,
    scoreEarned: 1500,
    scoreTotal: 2000,
    mission: "||",
  },
  {
    color: "#C7ADA2",
    title: "Top Achievers",
    days: 20,
    daysColor: "#DC7832",
    bg: "#eedcd0",
    badgeEarned: 0,
    badgeTotal: 3,
    scoreEarned: 0,
    scoreTotal: 1000,
    mission: "|",
  },
  {
    color: "#FFFDD1",
    title: "Top Achievers",
    days: 20,
    daysColor: "#B5B50E",
    bg: "#ebebbe",
    badgeEarned: 0,
    badgeTotal: 3,
    scoreEarned: 0,
    scoreTotal: 1000,
    mission: "|",
  },
];

const Home5 = () => {
  return (
    <>
      <div>
        <Sidebar />
        <div
          className="main-container"
          style={{
            marginTop: 20,
            marginBottom: 20,
            marginRight: 20,
            borderRadius: 20,
            paddingBottom: 10,
            boxShadow: "0px 6px 14px 5px rgba(201,201,201,1)",
          }}
        >
          <Topbar back={back} title="" />
          <Row className="mt-3 mb-3">
            <Col style={{ padding: 15, paddingBottom: 0 }}>
              <div style={{ width: "50%" }}>
                <Row style={{ paddingLeft: 10 }}>
                  <Col className="mb-3">
                    <div
                      className="badgeActive"
                      style={{
                        background: "#fad6a5 !important",
                        borderRadius: 20,
                        padding: 8,
                        fontSize: 14,
                      }}
                    >
                      <span>Active</span>
                    </div>
                  </Col>
                  <Col>
                    <div
                      className="badge"
                      style={{
                        background: "white !important",
                        borderRadius: 20,
                        padding: 10,
                        fontSize: 14,
                      }}
                    >
                      <span>Upcoming</span>
                    </div>
                  </Col>
                  <Col style={{ textAlign: "center" }}>
                    <div
                      className="badge"
                      style={{
                        background: "white !important",
                        borderRadius: 20,
                        padding: 10,
                        fontSize: 14,
                      }}
                    >
                      <span>History</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row className="mt-3">
            {ActiveCardData.map((item, index) => (
              <Col
                lg={12}
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <ActiveBadge {...item} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Home5;
