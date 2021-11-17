import React, { useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import background from "../assests/images/JourneyBg.png";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import medal from "../assests/medal.png";
import ReactAnime from "react-animejs";
import person from "../assests/person.svg";
import JourneyDetails from "./JourneyDetails";
import { useHistory } from "react-router";

const { Anime } = ReactAnime;

const Journey = () => {
  const history = useHistory();
  const [showJourneyDetails, setShowJourneyDetails] = useState(false);
  const [showAchivement, setShowAchievement] = useState(false);
  return (
    <>
      <JourneyDetails
        show={showJourneyDetails}
        setShow={setShowJourneyDetails}
      />
      <div className="main-container">
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            overflowX: "hidden",
            height: 558,
            marginTop: 100,
          }}
        >
          <Row style={{ paddingTop: 10 }}>
            <Col style={{ textAlign: "left" }}>
              <img
                src={require("../assests/images/back.svg").default}
                alt="back"
                style={{ cursor: "pointer" }}
                onClick={() => history.goBack()}
              />
            </Col>
            <Col
              className="pt-1"
              style={{ color: "white", textAlign: "center" }}
            >
              Incentive Achievment
              <p style={{ color: "white", fontSize: 10, margin: 0 }}>
                Updated on
              </p>
              <p style={{ color: "#DC7832", fontSize: 10, margin: 0 }}>
                17 Days Left
              </p>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <span></span>
            </Col>
          </Row>

          <Anime
            initial={[
              {
                targets: "#img",
                translateX: -350,
                translateY: 209,
                easing: "linear",
              },
            ]}
          >
            <Image src={person} alt="" id="img" style={{ width: 60 }} />
          </Anime>

          <p style={{ height: 100 }}></p>

          <div className="d-flex">
            {showAchivement && (
              <>
                <p>
                  <Button
                    size="sm"
                    style={{
                      fontSize: "0.6rem",
                      background:
                        "linear-gradient(150deg,#C7ADA2, #AD8676 100%)",
                      marginLeft: 102,
                      marginTop: 94,
                      position: "relative",
                      border: "1px solid white",
                    }}
                  >
                    <Image
                      src={require("../assests/check.png").default}
                      alt=""
                      style={{
                        fontSize: 20,
                        color: "green",
                        position: "relative",
                        top: -14,
                        left: 18,
                      }}
                    />
                    Bronze
                  </Button>
                </p>

                <p>
                  <Button
                    size="sm"
                    style={{
                      background:
                        "linear-gradient(150deg,#F1F1F1, #9E9999 100%)",
                      marginLeft: 20,
                      position: "relative",
                      marginTop: 175,
                      border: "1px solid white",
                    }}
                  >
                    <span
                      style={{
                        padding: "0px 5px",
                        background: "#484848",
                        border: "1px solid white",
                        position: "absolute",
                        top: -12,
                        left: 15,
                        borderRadius: "50%",
                        width: 20,
                        height: 20,
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
                </p>

                <p>
                  <Button
                    size="sm"
                    className="fs-10"
                    style={{
                      background:
                        "linear-gradient(150deg,#FED526, #F9A02C 100%)",
                      marginLeft: 250,
                      marginTop: 70,
                      position: "relative",
                      border: "1px solid white",
                    }}
                  >
                    <span
                      style={{
                        padding: "0px 5px",
                        background: "#E29925",
                        border: "1px solid white",
                        position: "absolute",
                        top: -12,
                        left: 13,
                        borderRadius: "50%",
                        width: 20,
                        height: 20,
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
                </p>

                <p>
                  <Button
                    size="sm"
                    className="fs-10"
                    style={{
                      background:
                        "linear-gradient(150deg,#26B4FE, #2CF2F9 100%)",
                      marginLeft: 70,
                      marginTop: 190,
                      position: "relative",
                      border: "1px solid white",
                    }}
                  >
                    <span
                      style={{
                        padding: "0px 5px",
                        background: "#1999C8",
                        border: "1px solid white",
                        position: "absolute",
                        top: -13,
                        left: 26,
                        borderRadius: "50%",
                        width: 20,
                        height: 20,
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
                </p>

                <p>
                  <Button
                    size="sm"
                    className="fs-10"
                    style={{
                      background:
                        "linear-gradient(150deg,#26FE7C, #07C157 100%)",
                      marginLeft: 128,
                      marginTop: 57,
                      position: "relative",
                      border: "1px solid white",
                    }}
                  >
                    <span
                      style={{
                        padding: "0px 5px",
                        background: "#049E45",
                        border: "1px solid white",
                        position: "absolute",
                        top: -13,
                        left: 28,
                        borderRadius: "50%",
                        width: 20,
                        height: 20,
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
                </p>
              </>
            )}

            {showAchivement ? (
              <div
                className="float-right"
                style={{
                  position: "absolute",
                  right: 10,
                  bottom: 107,
                  width: 200,
                }}
              >
                <p className="text-center mt-5">
                  <div
                    className="rounded"
                    style={{
                      background: "#caddb2",
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
                    <p
                      className="fw-bold"
                      style={{ color: "black", fontSize: 13 }}
                    >
                      Your Achivements
                    </p>
                    <Row>
                      <Col>
                        <p className="text-dark m-0 fw-bold">1/3</p>
                      </Col>
                      <Col>
                        <p className="text-dark m-0 fw-bold">1500/2500</p>
                      </Col>
                    </Row>
                    <Row className="text-dark fw-bold">
                      <Col>
                        <p style={{ fontSize: "12px" }}>Bagde</p>
                      </Col>
                      <Col>
                        <p style={{ fontSize: "12px" }}>Score</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className="text-dark m-0 fw-bold">2/3</p>
                      </Col>
                      <Col>
                        <p className="text-dark m-0 fw-bold">
                          4<sup>th</sup>
                        </p>
                      </Col>
                    </Row>
                    <Row className="text-dark fw-bold">
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
                  bottom: 200,
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;
