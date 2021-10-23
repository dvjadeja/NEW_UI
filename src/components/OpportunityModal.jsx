import React from "react";
import { Card, Col, Modal, Row } from "react-bootstrap";
import Topbar from "./Topbar";
import back from "../assests/images/back.svg";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

const OpportunityModal = ({ show, setShow }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen={true}
        // dialogClassName="custom-modal"
        style={{ padding: 0 }}
      >
        <Modal.Header>
          <Topbar
            back={back}
            title="Incentive Achivement Novemeber"
            link=""
            onBack={() => setShow(false)}
          />
        </Modal.Header>
        <Modal.Body
          style={{
            marginBottom: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Row>
            <Col>
              <Card
                className="scroll-card"
                style={{
                  width: "43vw",
                  background: "white",
                  color: "white",
                  margin: 5,
                  borderRadius: 10,
                }}
              >
                <div style={{ height: "400px", marginBottom: 60 }}>
                  <CircularProgressbarWithChildren
                    value={50}
                    styles={buildStyles({
                      textSize: "15px",
                      backgroundColor: "#C985C5",
                      pathColor: "rgb(255 153 102)",
                    })}
                  >
                    <span style={{ color: "#C985C5", fontSize: 30 }}>15</span>
                    <span style={{ color: "#C985C5", fontSize: 30 }}>
                      Days Left
                    </span>
                  </CircularProgressbarWithChildren>
                </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card
                className="scroll-card"
                style={{
                  width: "43vw",
                  background:
                    "linear-gradient(150deg, rgb(71, 141, 11), rgb(36, 71, 6) 100%)",
                  color: "white",
                  margin: 5,
                  borderRadius: 10,
                }}
              >
                <Card.Body>
                  <Card.Title>
                    Achivement Under Incentive Achivement November |
                  </Card.Title>
                  <span
                    style={{ borderBottom: "1px solid", fontWeight: 900 }}
                  ></span>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="scroll-card"
                style={{
                  width: "43vw",
                  background:
                    "linear-gradient(150deg, rgb(71, 141, 11), rgb(36, 71, 6) 100%)",
                  color: "white",
                  margin: 5,
                  borderRadius: 10,
                }}
              >
                <Card.Body>
                  <Card.Title>
                    Achivement Under Incentive Achivement November |
                  </Card.Title>
                  <span
                    style={{ borderBottom: "1px solid", fontWeight: 900 }}
                  ></span>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="scroll-card"
                style={{
                  width: "43vw",
                  background:
                    "linear-gradient(150deg, rgb(71, 141, 11), rgb(36, 71, 6) 100%)",
                  color: "white",
                  margin: 5,
                  borderRadius: 10,
                }}
              >
                <Card.Body>
                  <Card.Title>
                    Achivement Under Incentive Achivement November |
                  </Card.Title>
                  <span
                    style={{ borderBottom: "1px solid", fontWeight: 900 }}
                  ></span>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="scroll-card"
                style={{
                  width: "43vw",
                  background:
                    "linear-gradient(150deg, rgb(71, 141, 11), rgb(36, 71, 6) 100%)",
                  color: "white",
                  margin: 5,
                  borderRadius: 10,
                }}
              >
                <Card.Body>
                  <Card.Title>
                    Achivement Under Incentive Achivement November |
                  </Card.Title>
                  <span
                    style={{ borderBottom: "1px solid", fontWeight: 900 }}
                  ></span>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OpportunityModal;
