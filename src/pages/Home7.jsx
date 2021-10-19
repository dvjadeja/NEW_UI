import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import back from "../assests/images/back.svg";
import { Col, Row } from "react-bootstrap";
import UpcomingCard from "../components/UpcomingCard";

const upcomingCard = [
  {
    title: "August Dhamaka Quarter ||",
    startDate: 20,
    sup: "th",
    startMonth: "June",
    endDate: 20,
    endMonth: "July",
    points: 1200,
    badges: 3,
    certificates: 3,
  },
  {
    title: "Super Star Award",
    startDate: 20,
    sup: "th",
    startMonth: "June",
    endDate: 20,
    endMonth: "July",
    points: 1200,
    badges: 3,
    certificates: 3,
  },
  {
    title: "Your Insurance Price",
    startDate: 20,
    sup: "th",
    startMonth: "June",
    endDate: 20,
    endMonth: "July",
    points: 1200,
    badges: 3,
    certificates: 3,
  },
];
const Home7 = () => {
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
                    className="badgeActive"
                    style={{
                      background: "#fad6a5 !important",
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
            </Col>
          </Row>

          <Row className="mt-3">
            {upcomingCard.map((item, index) => (
              <Col
                lg={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <UpcomingCard {...item} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Home7;
