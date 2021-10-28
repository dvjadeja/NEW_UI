import React from "react";
import { Col, Row } from "react-bootstrap";
import Topbar from "../components/Topbar";
import back from "../assests/images/back.svg";
import { useState } from "react";
import ActiveBadge from "../components/ActiveBadge";
import UpcomingCard from "../components/UpcomingCard";
import HistoryCard from "../components/HistoryCard";

const optFilter = [
  { title: "Active", key: 1 },
  { title: "Upcoming", key: 2 },
  { title: "History", key: 3 },
];

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

const Games = () => {
  const [activeOptFilter, setActiveOptFilter] = useState(1);
  const [onBack, setOnBack] = useState("/");
  return (
    <>
      <div>
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
          <Topbar back={back} title="" link="" onBack={() => setOnBack("/")} />
          <Row className="mt-3 mb-3">
            <Col style={{ padding: 15, paddingBottom: 0 }}>
              <div style={{ width: "50%" }}>
                <Row style={{ paddingLeft: 10 }}>
                  {optFilter.map(({ title, key }) => (
                    <Col className="mb-3" key={key}>
                      <div
                        onClick={() => setActiveOptFilter(key)}
                        className={
                          key === activeOptFilter
                            ? "badgeActive badge"
                            : "badge"
                        }
                        style={{
                          background: "white !important",
                          borderRadius: 20,
                          padding: 10,
                          fontSize: 14,
                        }}
                      >
                        <span>{title}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            {activeOptFilter === 1 &&
              ActiveCardData.map((item, index) => (
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
            {activeOptFilter === 2 &&
              upcomingCard.map((item, index) => (
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
                  <UpcomingCard {...item} />
                </Col>
              ))}
            {activeOptFilter === 3 &&
              historyData.map((item, index) => (
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
                  <HistoryCard {...item} />
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Games;
