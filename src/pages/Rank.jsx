import React, { useState } from "react";
import Topbar from "../components/Topbar";
import back from "../assests/images/back.svg";
import { Col, Row } from "react-bootstrap";
import dummy from "../assests/dummy.png";
import RankCard from "../components/RankCard";
import CityDetailModal from "../components/CityDetailModal";

const optFilter = [
  { title: "Players", key: 1 },
  { title: "Friends", key: 2 },
  { title: "Cities", key: 3 },
];

const rankData = [
  {
    name: "Johanaa Lyons",
    address: "Adarshnagar - DEL",
    points: 300,
    diff: 66,
    rank: 1,
    profile: dummy,
    like: 3,
    star: 229,
    isYouLiked: false,
    mainBG: "#f7e7ce",
    secoundaryBG: "#DC7832",
  },
  {
    name: "Johanaa Lyons",
    address: "Adarshnagar - DEL",
    points: 233,
    diff: 55,
    rank: 2,
    profile: dummy,
    like: 3,
    star: 25,
    isYouLiked: true,
    mainBG: "#F1F1F1",
    secoundaryBG: "#484848",
  },
  {
    name: "Johanaa Lyons",
    address: "Adarshnagar - DEL",
    points: 232,
    diff: 22,
    rank: 3,
    profile: dummy,
    like: 3,
    star: 21,
    isYouLiked: false,
    mainBG: "#f7e7ce",
    secoundaryBG: "#DC7832",
  },
];

const friendData = [
  {
    name: "Johanaa Lyons",
    address: "Adarshnagar - DEL",
    points: 300,
    diff: 66,
    rank: 1,
    profile: dummy,
    like: 3,
    star: 229,
    isYouLiked: false,
    mainBG: "#f7e7ce",
    secoundaryBG: "#DC7832",
  },
  {
    name: "Johanaa Lyons",
    address: "Adarshnagar - DEL",
    points: 233,
    diff: 55,
    rank: 2,
    profile: dummy,
    like: 3,
    star: 25,
    isYouLiked: true,
    mainBG: "#F1F1F1",
    secoundaryBG: "#484848",
  },
];

const cityData = [
  {
    name: "Chennai",
    star: 88470,
  },
  {
    name: "New Delhi",
    star: 88450,
  },
  {
    name: "Ahmedabad",
    star: 88430,
  },
];
const Rank = () => {
  const [activeOptFilter2, setActiveOptFilter2] = useState(1);
  const [onBack, setOnBack] = useState("/");
  const [show, setShow] = useState(false);
  return (
    <>
      <CityDetailModal show={show} setShow={setShow} />
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
          <Row style={{ paddingLeft: 10, marginTop: 20 }}>
            {optFilter.map(({ title, key }) => (
              <Col className="mb-3" key={key} xxl={4} xl={4} lg={4} md={6}>
                <div
                  onClick={() => setActiveOptFilter2(key)}
                  className={
                    key === activeOptFilter2 ? "rank-badge badge" : "badge"
                  }
                  style={{
                    background:
                      key === activeOptFilter2
                        ? "#fad6a5 !important"
                        : "white !important",
                    borderRadius: 20,
                    padding: 10,
                  }}
                >
                  <span>{title}</span>
                </div>
              </Col>
            ))}
          </Row>

          {activeOptFilter2 === 1 &&
            rankData.map((data) => <RankCard {...data} />)}

          {activeOptFilter2 === 2 &&
            friendData.map((data) => <RankCard {...data} />)}

          {activeOptFilter2 === 3 &&
            cityData.map((data, key) => (
              <Row
                key={key}
                style={{
                  margin: 10,
                  background: "#f7e7ce",
                  borderRadius: 5,
                }}
                onClick={() => setShow(true)}
              >
                <Col
                  xs={2}
                  style={{
                    background: "#FAD6A5",
                    padding: 10,
                    borderRadius: "5px 0 0 5px",
                  }}
                >
                  {key + 1}
                </Col>
                <Col xs={5} style={{ padding: 10, textAlign: "left" }}>
                  {data.name}
                </Col>
                <Col xs={5} style={{ paddingTop: 10 }}>
                  <span className="rank-point">
                    <img
                      className="rank-img"
                      src={require("../assests/star.png").default}
                      alt=""
                    />
                    {data.star}
                  </span>
                </Col>
              </Row>
            ))}
        </div>
      </div>
    </>
  );
};

export default Rank;
