import React, { useState } from "react";
import { Col, Modal, Row, Card, Image } from "react-bootstrap";
import Topbar from "./Topbar";
import back from "../assests/images/back.svg";
import electricalServiceBadge from "../assests/images/electricalServiceBadge.svg";
import pinkImg from "../assests/images/pinkImg.svg";
import orangeImage from "../assests/images/orangeImage.svg";
import blackImg from "../assests/images/blackImg.svg";

const BagdeListModal = ({ show, setShow }) => {
  const [activeOptFilter, setActiveOptFilter] = useState(1);
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen={true}
        backdrop={false}
        // dialogClassName="custom-modal"
        style={{ padding: 0 }}
      >
        <Modal.Header style={{ backgroundColor: "#F7E7CE" }}>
          <Topbar
            back={back}
            title="Electrical Services"
            link=""
            onBack={() => setShow(false)}
          />
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#F7E7CE" }}>
          <Row className="mt-3">
            <Col style={{ padding: 15 }}>
              <Row style={{ paddingLeft: "10px" }}>
                <Col className="mb-3 me-2">
                  <div
                    onClick={() => setActiveOptFilter(1)}
                    className={
                      1 === activeOptFilter ? "badgeActive badge" : "badge"
                    }
                    style={{
                      background:
                        1 === activeOptFilter
                          ? "#fad6a5 !important"
                          : "white !important",
                      borderRadius: "20px",
                      padding: 10,
                    }}
                  >
                    <span>Latest Achivement</span>
                  </div>
                </Col>
                <Col>
                  <div
                    onClick={() => setActiveOptFilter(2)}
                    className={
                      2 === activeOptFilter ? "badgeActive badge" : "badge"
                    }
                    style={{
                      background:
                        2 === activeOptFilter
                          ? "#fad6a5 !important"
                          : "white !important",
                      borderRadius: "20px",
                      padding: 10,
                    }}
                  >
                    <span>Badges</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Card
                    style={{
                      background:
                        "linear-gradient(137deg, rgba(28,28,28,1) 0%, rgba(103,101,101,1) 100%)",
                      borderRadius: "10px",
                      padding: "40px 5px 30px 5px",
                      cursor: "pointer",
                      marginLeft: 10,
                    }}
                  >
                    <Row>
                      <Col style={{ padding: "0px 10px" }}>
                        <Image
                          src={electricalServiceBadge}
                          style={{ width: 126, height: 126 }}
                        />
                      </Col>
                      <Col
                        style={{
                          color: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          textAlign: "left",
                          fontSize: "20px",
                          position: "relative",
                        }}
                      >
                        <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                          Electrical Services
                        </span>
                        <div
                          style={{
                            position: "absolute",
                            bottom: -31,
                            background: "white",
                            color: "#484848",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            right: 6,
                            borderRadius: "0px 0px 10px 0px",
                          }}
                        >
                          <span style={{ fontSize: 10 }}>Badge Collected</span>
                          <span style={{ fontSize: 14 }}>21-03-2021</span>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
              <h4 className="text-start mt-4 p-0" style={{ marginLeft: 10 }}>
                Benefits
              </h4>
              <Row className="mt-3 ms-1">
                <Col md={4} lg={4} sm={12}>
                  <Image
                    src={pinkImg}
                    style={{ backgroundSize: "cover", width: "100%" }}
                  />
                </Col>
                <Col md={4} lg={4} sm={12}>
                  <Image
                    src={orangeImage}
                    style={{ backgroundSize: "cover", width: "100%" }}
                  />
                </Col>
                <Col md={4} lg={4} sm={12}>
                  <Image
                    src={blackImg}
                    style={{ backgroundSize: "cover", width: "100%" }}
                  />
                </Col>
              </Row>
            </Col>
            <Col
              style={{
                background: "#FFFFFF",
                borderRadius: 20,
                marginRight: 20,
              }}
            >
              <p
                className="text-start mt-3 mb-1 p-0"
                style={{ marginLeft: 10, fontSize: "0.9rem", color: "#DC7832" }}
              >
                Badge for Electrical Services
              </p>
              <h4 className="text-start mt-0 p-0" style={{ marginLeft: 10 }}>
                <u>Electrical Service</u>
              </h4>
              <p
                className="text-start mt-4 p-0"
                style={{ marginLeft: 10, fontSize: 19 }}
              >
                Steps to be followed
              </p>

              <Row style={{ padding: 10 }}>
                <Col style={{ margin: "auto" }} xs={2}>
                  <span className="round">1</span>
                </Col>
                <Col style={{ background: "#f8f8f8", textAlign: "left" }}>
                  <p>Step 1</p>
                  <p style={{ color: "grey" }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing
                  </p>
                </Col>
              </Row>
              <Row style={{ padding: 10 }}>
                <Col style={{ margin: "auto" }} xs={2}>
                  <span className="round">2</span>
                </Col>
                <Col style={{ background: "#f8f8f8", textAlign: "left" }}>
                  <p>Step 2</p>
                  <p style={{ color: "grey" }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing
                  </p>
                </Col>
              </Row>
              <Row style={{ padding: 10 }}>
                <Col style={{ margin: "auto" }} xs={2}>
                  <span className="round">3</span>
                </Col>
                <Col style={{ background: "#f8f8f8", textAlign: "left" }}>
                  <p>Step 3</p>
                  <p style={{ color: "grey" }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BagdeListModal;
