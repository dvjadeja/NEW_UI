import React from "react";
import { Modal } from "react-bootstrap";
import Topbar from "./Topbar";
import back from "../assests/images/back.svg";
import dummy from "../assests/dummy.png";
import RankCard from "../components/RankCard";

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

const CityDetailModal = ({ show, setShow }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen={true}
        // dialogClassName="custom-modal"
        style={{ paddingLeft: "0 !important", paddingRight: "0 !important" }}
      >
        <Modal.Header>
          <Topbar
            back={back}
            title="Movement"
            link=""
            onBack={() => setShow(false)}
          />
        </Modal.Header>
        <Modal.Body className="text-center p-0" style={{ marginBottom: 0 }}>
          <div style={{ background: "#FFFEF2", paddingBottom: 3 }}>
            <div style={{ padding: 20 }}></div>
          </div>

          <div className="home-card" style={{ padding: "10px 0px" }}>
            <p
              className="h1 text-center"
              style={{
                padding: 10,
                borderBottom: "1px solid #8080805c",
                color: "#dc7832",
              }}
            >
              Chennai
            </p>

            {rankData.map((data) => (
              <RankCard {...data} />
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CityDetailModal;
