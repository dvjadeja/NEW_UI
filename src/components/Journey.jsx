import React, { useState } from "react";
import { Button, Col, Image, Modal, Row } from "react-bootstrap";
import background from "../assests/images/Background@2x.png";
import Topbar from "./Topbar";
import back from "../assests/images/back.svg";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import medal from "../assests/medal.png";
import ReactAnime from "react-animejs";
import person from "../assests/person.svg";
import JourneyDetails from "./JourneyDetails";

const { Anime } = ReactAnime;

const Journey = ({ show, setShow }) => {
  const [showJourneyDetails, setShowJourneyDetails] = useState(false);
  const [showAchivement, setShowAchievement] = useState(false);
  return (
    <>
      <JourneyDetails
        show={showJourneyDetails}
        setShow={setShowJourneyDetails}
      />
      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen={true}
        // dialogClassName="custom-modal"
        style={{ paddingLeft: "0 !important", paddingRight: "0 !important" }}
      >
        <Modal.Body
          style={{ padding: 0, paddingBottom: 20, textAlign: "left" }}
        >
          <div
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              overflowX: "hidden",
              height: "1200px",
            }}
          >
            <Row style={{ paddingTop: 10 }}>
              <Col style={{ textAlign: "left" }}>
                <Topbar
                  back={back}
                  title="Incentive Achivements"
                  link="games"
                  onBack={() => setShow(false)}
                />
              </Col>
            </Row>
            <p className="text-center mt-5" style={{ height: 100 }}>
              {showAchivement && (
                <Button
                  style={{
                    fontSize: "0.8rem",
                    background: "linear-gradient(150deg,#C7ADA2, #AD8676 100%)",
                    marginRight: 90,
                    marginTop: 65,
                    position: "relative",
                  }}
                >
                  <Image
                    src={require("../assests/check.png").default}
                    alt=""
                    style={{
                      fontSize: 20,
                      color: "green",
                      position: "relative",
                      top: -17,
                      left: 23,
                    }}
                  />
                  Bronze
                </Button>
              )}
            </p>
            {showAchivement ? (
              <div
                className="float-right"
                style={{ position: "absolute", right: 0, top: 50, width: 200 }}
              >
                <p className="text-center mt-5">
                  <div
                    className="rounded"
                    style={{
                      background:
                        "linear-gradient(145deg,#000000, #484848 100%)",
                    }}
                  >
                    <AiFillRightCircle
                      onClick={() => setShowAchievement(false)}
                      style={{
                        color: "#DC7832",
                        position: "relative",
                        display: "flex",
                        right: "0.5rem",
                        top: "5rem",
                        fontSize: "23px",
                      }}
                    />
                    <p style={{ color: "#FFFEF2", fontSize: 13 }}>
                      Your Achivements
                    </p>
                    <Row className="text-white">
                      <Col>
                        <p className="text-white m-0">1/3</p>
                      </Col>
                      <Col>
                        <p className="text-white m-0">1500/2500</p>
                      </Col>
                    </Row>
                    <Row className="text-white">
                      <Col>
                        <p style={{ fontSize: "12px" }}>Bagde</p>
                      </Col>
                      <Col>
                        <p style={{ fontSize: "12px" }}>Score</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className="text-white m-0">2/3</p>
                      </Col>
                      <Col>
                        <p className="text-white m-0">
                          4<sup>th</sup>
                        </p>
                      </Col>
                    </Row>
                    <Row className="text-white">
                      <Col>
                        <p style={{ fontSize: "12px" }}>Certificates</p>
                      </Col>
                      <Col>
                        <p style={{ fontSize: "12px" }}>Rank</p>
                      </Col>
                    </Row>
                  </div>
                </p>
              </div>
            ) : (
              <div
                style={{
                  top: 100,
                  width: 80,
                  height: 60,
                  position: "absolute",
                  right: 0,
                  background: "#FAD6A5 0% 0% no-repeat padding-box",
                  borderRadius: 10,
                  border: "1px solid #FFFFFF",
                }}
              >
                <div className="rounded">
                  <AiFillLeftCircle
                    onClick={() => {
                      setShowAchievement(true);
                    }}
                    style={{
                      color: "#DC7832",
                      justifyContent: "center",
                      position: "absolute",
                      top: "20px",
                      alignItems: "center",
                      fontSize: "20px",
                    }}
                  />
                  <Image
                    src={medal}
                    style={{
                      width: "50px",
                      marginLeft: "20px",
                      marginTop: "5px",
                    }}
                  />
                </div>
              </div>
            )}
            <Anime
              initial={[
                {
                  targets: "#img",
                  translateX: 450,
                  translateY: 10,
                  easing: "linear",
                },
              ]}
            >
              <Image src={person} alt="" id="img" style={{ width: 80 }} />
            </Anime>

            <p className="text-center mt-3" style={{ height: 100 }}>
              {showAchivement && (
                <Button
                  style={{
                    background: "linear-gradient(150deg,#F1F1F1, #9E9999 100%)",
                    marginLeft: 20,
                    position: "relative",
                  }}
                  onClick={() => {
                    setShowJourneyDetails(true);
                  }}
                >
                  <span
                    style={{
                      padding: "0px 5px",
                      background: "#484848",
                      border: "1px solid white",
                      position: "absolute",
                      top: -14,
                      left: 21,
                      borderRadius: "50%",
                      width: 24,
                      height: 24,
                    }}
                  >
                    <Image
                      style={{ width: 8, marginBottom: 7 }}
                      src={require("../assests/lock.png").default}
                      alt=""
                    />
                  </span>
                  Silver
                </Button>
              )}
            </p>
            <p className="text-center mt-5 pt-5" style={{ height: "100px" }}>
              {showAchivement && (
                <Button
                  className="fs-10"
                  style={{
                    background: "linear-gradient(150deg,#FED526, #F9A02C 100%)",
                    marginRight: 40,
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      padding: "0px 5px",
                      background: "#E29925",
                      border: "1px solid white",
                      position: "absolute",
                      top: -13,
                      left: 18,
                      borderRadius: "50%",
                      width: 24,
                      height: 24,
                    }}
                  >
                    <Image
                      style={{ width: 8, marginBottom: 7 }}
                      src={require("../assests/lock.png").default}
                      alt=""
                    />
                  </span>
                  Gold
                </Button>
              )}
            </p>
            <p className="text-center mt-5 pt-5" style={{ height: "200px" }}>
              {showAchivement && (
                <Button
                  className="fs-10"
                  style={{
                    background: "linear-gradient(150deg,#26B4FE, #2CF2F9 100%)",
                    marginRight: 70,
                    marginTop: 95,
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      padding: "0px 5px",
                      background: "#1999C8",
                      border: "1px solid white",
                      position: "absolute",
                      top: -13,
                      left: 37,
                      borderRadius: "50%",
                      width: 24,
                      height: 24,
                    }}
                  >
                    <Image
                      style={{ width: 8, marginBottom: 7 }}
                      src={require("../assests/lock.png").default}
                      alt=""
                    />
                  </span>
                  Diamond
                </Button>
              )}
            </p>
            <p
              className="text-center mt-5 pt-5 mb-0 pb-5"
              style={{ height: "100px" }}
            >
              {showAchivement && (
                <Button
                  className="fs-10"
                  style={{
                    background: "linear-gradient(150deg,#26FE7C, #07C157 100%)",
                    marginLeft: 80,
                    marginTop: 125,
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      padding: "0px 5px",
                      background: "#049E45",
                      border: "1px solid white",
                      position: "absolute",
                      top: -13,
                      left: 34,
                      borderRadius: "50%",
                      width: 24,
                      height: 24,
                    }}
                  >
                    <Image
                      style={{ width: 8, marginBottom: 7 }}
                      src={require("../assests/lock.png").default}
                      alt=""
                    />
                  </span>
                  Signature
                </Button>
              )}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Journey;
