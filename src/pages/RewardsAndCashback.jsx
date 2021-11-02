import React, { useState } from "react";
import Topbar from "../components/Topbar";
import back from "../assests/images/back.svg";
import { Col, Image, Row } from "react-bootstrap";
import CashbackModal from "../components/CashbackModal";

const RewardsAndCashback = () => {
  const [onBack, setOnBack] = useState("/");
  const [showCashBack, setShowCashBack] = useState(false);
  return (
    <>
      <CashbackModal show={showCashBack} setShow={setShowCashBack} />
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
          <Topbar
            back={back}
            title="Cashback & Rewards"
            link=""
            onBack={() => setOnBack("/rewards-cashback")}
          />
          <Row className="m-2">
            <Col
              onClick={() => setShowCashBack(true)}
              style={{
                padding: 20,
                background: "#FFFDD1",
                marginRight: 5,
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              <span>
                {" "}
                <Image
                  style={{ width: 30, marginBottom: 10 }}
                  src={require("../assests/images/cash/wallet.png").default}
                  alt="wallet"
                />{" "}
              </span>
              <span style={{ fontSize: 30, color: "#E96C14", fontWeight: 700 }}>
                1500
              </span>
              <p className="mt-3">Total Cashback</p>
            </Col>
            <Col
              style={{
                padding: 20,
                background: "#FFF2E1",
                marginLeft: 5,
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              <span>
                {" "}
                <Image
                  style={{ width: 30, marginBottom: 10 }}
                  src={require("../assests/images/cash/star.png").default}
                  alt="star"
                />{" "}
              </span>
              <span
                style={{
                  fontSize: 30,
                  color: "#E41A60",
                  fontWeight: 700,
                }}
              >
                1500
              </span>

              <p className="mt-3">UNOTAG Points</p>
            </Col>
          </Row>

          <Row className="m-2 p-3" style={{ background: "#F9E7F9" }}>
            <Col xs={5}>
              <span style={{ fontSize: 30, color: "#E846E8", fontWeight: 700 }}>
                5
              </span>

              <p className="mt-4">Your Stickers</p>
            </Col>
            <Col
              style={{
                margin: "auto",
                display: "flex",
                justifyContent: "space-evenly",
                cursor: "pointer",
              }}
            >
              <span>
                {" "}
                <Image
                  style={{ width: 40 }}
                  src={require("../assests/images/cash/st1.png").default}
                  alt="st1"
                />{" "}
              </span>
              <span>
                <Image
                  style={{ width: 40, marginRight: 5, marginLeft: 5 }}
                  src={require("../assests/images/cash/st2.png").default}
                />{" "}
              </span>
              <span>
                <Image
                  style={{ width: 40 }}
                  src={require("../assests/images/cash/st3.png").default}
                />{" "}
              </span>
            </Col>
          </Row>

          <div className="m-2">
            <p
              style={{
                color: "#484848",
                fontSize: 15,
                marginBottom: 0,
                textAlign: "left",
              }}
            >
              Scratch Cards and Get Cashback
            </p>
            <div className="horizontal-scroll mt-3 d-flex justify-content-evenly">
              <Image
                src={require("../assests/images/cash/ca1.png").default}
                alt="ca1"
                style={{ cursor: "pointer" }}
              />
              <Image
                src={require("../assests/images/cash/ca2.png").default}
                alt="ca2"
                style={{ cursor: "pointer" }}
              />
              <Image
                src={require("../assests/images/cash/ca3.png").default}
                alt="ca3"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="horizontal-scroll mt-3 d-flex">
              <div style={{ width: "40%", marginRight: 5 }}>
                <Image
                  src={require("../assests/images/cash/up1.png").default}
                  alt="up1"
                  style={{ width: "100%", cursor: "pointer" }}
                />
              </div>
              <div style={{ width: "40%", marginRight: 5, cursor: "pointer" }}>
                <Image
                  src={require("../assests/images/cash/up2.png").default}
                  alt="up2"
                  style={{ width: "100%", cursor: "pointer" }}
                />
              </div>
              <div style={{ width: "40%" }}>
                <Image
                  src={require("../assests/images/cash/up3.png").default}
                  alt="up3"
                  style={{ width: "100%", cursor: "pointer" }}
                />
              </div>
            </div>
            <p
              className="primary"
              style={{
                fontSize: "15px",
                marginBottom: 0,
                textAlign: "left",
                marginTop: 10,
              }}
            >
              Unlock these cards
            </p>
            <div className="horizontal-scroll mt-3 d-flex justify-content-evenly">
              <Image
                src={require("../assests/images/cash/un1.png").default}
                alt="un1"
                style={{ cursor: "pointer" }}
              />
              <Image
                src={require("../assests/images/cash/un2.png").default}
                alt="un2"
                style={{ cursor: "pointer" }}
              />
              <Image
                src={require("../assests/images/cash/un3.png").default}
                alt="un3"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RewardsAndCashback;
