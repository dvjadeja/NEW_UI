import React, { useState } from "react";
import { Card, Col, Modal, Row } from "react-bootstrap";
import Topbar from "./Topbar";
import back from "../assests/images/back.svg";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import OpportunityDetailModal from "./OpportunityDetailModal";

const arr = [1, 2, 3, 4];

const OpportunityModal = ({ show, setShow }) => {
  const [oppShow, setOppShow] = useState(false);
  return (
    <>
      <OpportunityDetailModal showDetail={oppShow} setShowDetail={setOppShow} />
      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen={true}
        backdrop={false}
        // dialogClassName="custom-modal"
        style={{ padding: 0 }}
      >
        <Modal.Header>
          <Topbar
            back={back}
            title="Incentive Achivement November"
            link=""
            onBack={() => setShow(false)}
          />
        </Modal.Header>
        <Modal.Body
          style={{
            marginBottom: 20,
            display: "flex",
            alignItems: "center",
            marginTop: 20,
            flexDirection: "column",
          }}
        >
          <Row style={{ height: "26vw" }}>
            <Col>
              <Card
                className="scroll-card"
                style={{
                  width: "20vw",
                  background: "white",
                  color: "white",
                  margin: 5,
                  borderRadius: 10,
                }}
              >
                <div style={{ height: "250px", marginBottom: 60 }}>
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
          <div style={{ paddingRight: 10 }}>
            <Row>
              {arr.map((index) => (
                <Col key={index} xs={6}>
                  <Card
                    className="scroll-card"
                    style={{
                      width: "100%",
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
                        onClick={() => setOppShow(true)}
                      >
                        View Details
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OpportunityModal;
