import React, { useState } from "react";
import Topbar from "../components/Topbar";
import back from "../assests/images/back.svg";
import { Col, Image, Row } from "react-bootstrap";
import CashbackModal from "../components/CashbackModal";
import UnotagPointsModal from "../components/UnotagPointsModal";
import { useHistory } from "react-router";
import WinUpToRewards from "../components/WinUpToRewards";
import ScratchCardModal from "../components/ScratchCard";

const RewardsAndCashback = () => {
  const history = useHistory();
  const [onBack, setOnBack] = useState("/");
  const [showUnotag, setShowUnotag] = useState(false);
  const [showCashBack, setShowCashBack] = useState(false);
  const [showUpTo, setShowUpTo] = useState(false);
  const [active, setActive] = useState("rewards");
  return (
    <>
      <CashbackModal show={showCashBack} setShow={setShowCashBack} />
      <UnotagPointsModal show={showUnotag} setShow={setShowUnotag} />

      <div>
        <div
          className="main-container"
          style={{
            marginTop: 20,
            marginRight: 20,
            borderRadius: 20,
            paddingBottom: 10,
            boxShadow: "0px 6px 14px 5px rgba(201,201,201,1)",
            background: "#F7E7CE",
          }}
        >
          <Topbar
            back={back}
            title="Cashback & Rewards"
            link=""
            onBack={() => setOnBack("/rewards-cashback")}
          />
          <Row>
            <Col>
              <div
                style={{
                  background: "white",
                  height: "70vh",
                  marginLeft: 10,
                  paddingTop: 10,
                  borderRadius: 10,
                }}
              >
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
                        src={
                          require("../assests/images/cash/wallet.png").default
                        }
                        alt="wallet"
                      />{" "}
                    </span>
                    <span
                      style={{
                        fontSize: 30,
                        color: "#E96C14",
                        fontWeight: 700,
                      }}
                    >
                      1500
                    </span>
                    <p className="mt-3">Total Cashback Won</p>
                  </Col>
                  <Col
                    onClick={() => setShowUnotag(true)}
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
                  <Col xs={12}>
                    <span
                      style={{
                        fontSize: 30,
                        color: "#E846E8",
                        fontWeight: 700,
                      }}
                    >
                      5
                    </span>

                    <p className="mt-4">Your Stickers</p>
                  </Col>
                  <Col
                    onClick={() => {
                      history.push("/stickers");
                    }}
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
              </div>
            </Col>
            {active === "rewards" && (
              <Col xs={7}>
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
                      style={{ cursor: "pointer", width: "33%", height: "33%" }}
                      onClick={() => setActive("scratchCard")}
                    />
                    <Image
                      src={require("../assests/images/cash/ca2.png").default}
                      alt="ca2"
                      style={{ cursor: "pointer", width: "33%", height: "33%" }}
                    />
                    <Image
                      src={require("../assests/images/cash/ca3.png").default}
                      alt="ca3"
                      style={{ cursor: "pointer", width: "33%", height: "33%" }}
                    />
                  </div>
                  <div className="horizontal-scroll mt-3 d-flex flex-column justify-content-center align-items-center">
                    <div style={{ width: "100%", marginRight: 5 }}>
                      <Image
                        src={
                          require("../assests/images/cash/Group 33595.png")
                            .default
                        }
                        alt="up1"
                        style={{ width: "95%", cursor: "pointer" }}
                        onClick={() => setActive("winUpTo")}
                      />
                    </div>
                    <div
                      style={{
                        width: "100%",
                        marginRight: 5,
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={require("../assests/images/cash/up2.png").default}
                        alt="up2"
                        style={{ width: "95%", cursor: "pointer" }}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <Image
                        src={require("../assests/images/cash/up3.png").default}
                        alt="up3"
                        style={{ width: "95%", cursor: "pointer" }}
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
              </Col>
            )}

            {active === "winUpTo" && (
              <Col xs={7}>
                <WinUpToRewards />
              </Col>
            )}

            {active === "scratchCard" && (
              <Col>
                <ScratchCardModal onclick={() => setActive("rewards")} />
              </Col>
            )}
          </Row>
        </div>
      </div>
    </>
  );
};

export default RewardsAndCashback;
