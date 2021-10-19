import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import back from "../assests/images/back.svg";
import { Col, Row } from "react-bootstrap";
import HistoryCard from "../components/HistoryCard";

const historyData = [
  {
    cardBg: "#FFFFFF",
    status: "Dropped",
    statusBg: "#0EB6BA",
    title: "Exceed Expectations Award",
    sup: "th",
    startDate: 20,
    startMonth: "June",
    endDate: 20,
    endMonth: "July",
    earnedMilestone: 3,
    totalMilestone: 5,
    pointsEarned: 1500,
    pointsTotal: 2000,
    badgeEarned: 1,
    badgeTotal: 2,
  },
  {
    cardBg: "#F5C0BD",
    status: "Expired",
    statusBg: "#F5726A",
    title: "Outstanding Salesmanship",
    sup: "th",
    startDate: 20,
    startMonth: "June",
    endDate: 20,
    endMonth: "July",
    earnedMilestone: 3,
    totalMilestone: 5,
    pointsEarned: 1500,
    pointsTotal: 2000,
    badgeEarned: 1,
    badgeTotal: 2,
  },
  {
    cardBg: "#9FDDB0",
    status: "Completed",
    statusBg: "#20B849",
    title: "Highest of High Fives",
    sup: "th",
    startDate: 20,
    startMonth: "June",
    endDate: 20,
    endMonth: "July",
    earnedMilestone: 3,
    totalMilestone: 5,
    pointsEarned: 1500,
    pointsTotal: 2000,
    badgeEarned: 1,
    badgeTotal: 2,
  },
];

const Home8 = () => {
  return (
    <>
      <div>
        <Sidebar />
        <div
          className="main-container"
          style={{
            marginTop: 20,
            marginRight: 20,
            borderRadius: 20,
            paddingBottom: 10,
            boxShadow: "0px 6px 14px 5px rgba(201,201,201,1)",
          }}
        >
          <Topbar back={back} title="" />
          <Row className="mt-3 mb-3">
            <Col style={{ padding: 15, paddingBottom: 0 }}>
              <Row style={{ paddingLeft: 10 }}>
                <Col className="mb-3" md={2}>
                  <div
                    className="badge"
                    style={{
                      background: "white !important",
                      borderRadius: 20,
                      padding: 10,
                      fontSize: 14,
                    }}
                  >
                    <span>Active</span>
                  </div>
                </Col>
                <Col md={2}>
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
                <Col md={1} style={{ textAlign: "left" }}>
                  <div
                    className="badgeActive"
                    style={{
                      background: "#fad6a5 !important",
                      borderRadius: 20,
                      padding: 10,
                      fontSize: 14,
                    }}
                  >
                    <span>History</span>
                  </div>
                </Col>
              </Row>

              <Row className="mt-3">
                {historyData.map((item, index) => (
                  <Col
                    xs={12}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <HistoryCard {...item} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Home8;
