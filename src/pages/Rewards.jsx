import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Col, Image, Row } from "react-bootstrap";
import back from "../assests/images/back.svg";
import trofy from "../assests/images/trofy.png";
import electricalServiceBadge from "../assests/images/electricalServiceBadge.svg";
import highVoltage from "../assests/images/highVoltage.svg";
import electricalServicesPink from "../assests/images/electricalServicesPink.svg";
import rewardCertificate from "../assests/images/rewardCertificate.svg";
import RewardsCard from "../components/RewardsCard";

const optFilter = [
  { title: "Badges", key: 1 },
  { title: "Certificates", key: 2 },
];

const badgeCard = [
  {
    name: "Electrical Service",
    img: electricalServiceBadge,
    bg: "linear-gradient(150deg,#1C1C1C, #484848 100%)",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic tenetur, error sunt eum quidem voluptate laborum officia",
  },
  {
    name: "High Voltage",
    img: highVoltage,
    bg: "linear-gradient(150deg,#B7642A, #7A4D04 100%)",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic tenetur, error sunt eum quidem voluptate laborum officia",
  },
  {
    name: "Electrical Service",
    img: electricalServicesPink,
    bg: "linear-gradient(150deg,#EF1B7E, #D81454,#C60F31,#B50A11,#B10909 100%)",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic tenetur, error sunt eum quidem voluptate laborum officia",
  },
];

const certCard = [
  {
    name: "Bringing it Beyond",
    img: rewardCertificate,
    bg: "white",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic tenetur, error sunt eum quidem voluptate laborum officia",
  },
  {
    name: "Ace of Initiative",
    img: rewardCertificate,
    bg: "white",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic tenetur, error sunt eum quidem voluptate laborum officia",
  },
  {
    name: "Top Performer",
    img: rewardCertificate,
    bg: "white",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic tenetur, error sunt eum quidem voluptate laborum officia",
  },
];

const Rewards = () => {
  const [activeOptFilter, setActiveOptFilter] = useState(1);
  return (
    <>
      <div>
        <Sidebar />
        <div
          className="main-container"
          style={{
            marginBottom: 10,
            boxShadow: "0px 6px 14px 5px rgba(201,201,201,1)",
            borderRadius: 20,
          }}
        >
          <div
            style={{
              width: "100%",
              background: "#F7E7CE",
              marginTop: 20,
              marginRight: 20,
              borderRadius: "20px 20px 0px 0px",
              paddingBottom: 20,
            }}
          >
            <Topbar back={back} title="Rewards" />
            <Row style={{ padding: "40px 20px 20px 20px" }}>
              <Col style={{ textAlign: "left" }}>
                <p
                  style={{
                    fontSize: "1rem",
                    marginBottom: 0,
                    color: "#484848",
                  }}
                >
                  Total Score
                </p>
                <span style={{ fontSize: "1.9rem", color: "#E1AA06" }}>
                  1500/
                </span>{" "}
                <span className="text-grey fs-20">2500</span>
              </Col>
              <Col style={{ textAlign: "right", position: "relative" }}>
                <Image
                  src={trofy}
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    right: "-10px",
                  }}
                />
              </Col>
            </Row>
          </div>
          <div
            style={{
              background: "white",
              marginTop: 0,
              marginRight: 20,
              borderRadius: "0px 0px 20px 20px",
              paddingBottom: 20,
              paddingTop: 20,
              marginBottom: 10,
            }}
          >
            <div style={{ width: "50%" }}>
              <Row style={{ paddingLeft: 10 }}>
                {optFilter.map(({ title, key }) => (
                  <Col className="mb-3" key={key}>
                    <div
                      onClick={() => setActiveOptFilter(key)}
                      className={
                        key === activeOptFilter ? "badgeActive badge" : "badge"
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
            <div>
              <Row style={{ paddingLeft: 20, paddingRight: 20 }}>
                {activeOptFilter === 1
                  ? badgeCard.map((data, index) => (
                      <RewardsCard
                        data={data}
                        index={index}
                        textColor="white"
                      />
                    ))
                  : certCard.map((data, index) => (
                      <RewardsCard
                        data={data}
                        index={index}
                        textColor="black"
                      />
                    ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rewards;
