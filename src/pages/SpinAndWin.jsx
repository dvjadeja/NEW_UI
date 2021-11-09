import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Col, Modal, Row } from "react-bootstrap";
import Topbar from "../components/Topbar";
import back from "../assests/images/back.svg";
import Wheel from "./Wheel";

import coins from "../assests/images/spin/coins.svg";
import gift from "../assests/images/spin/gift.svg";
import settings from "../assests/images/spin/settings.svg";

const SpinAndWin = () => {
  const history = useHistory();

  const [items, setItems] = useState([
    "Pizzas",
    "Sandwiches",
    "Salads",
    "Soup",
    "Japanese food",
    "Pastas",
  ]);

  const [show, setShow] = useState(true);
  return (
    <>
      <Modal
        show={show}
        fullscreen={true}
        // dialogClassName="custom-modal"
        style={{ paddingLeft: "0 !important", paddingRight: "0 !important" }}
      >
        <Modal.Header
          style={{
            marginBottom: 20,
            border: 0,
            display: "flex",
            flexDirection: "row-reverse",
            backgroundColor: "#FFFEF2",
          }}
        >
          <Topbar
            back={back}
            title="Lucky Spin"
            link=""
            onBack={() => {
              setShow(false);
              history.push("/");
            }}
          />
        </Modal.Header>
        <Modal.Body
          style={{
            margintop: 20,
            background: "#fffef2",
            boxShadow: "#00000005",
            borderRadius: "20px 20px 0px 0px",
          }}
        >
          <Row>
            <Col>
              <Wheel />
            </Col>
            <Col>
              <p style={{ color: "#DC7832", fontSize: 15, marginBottom: 0 }}>
                Test Your Luck
              </p>
              <p style={{ fontSize: 22 }}>Lucky Spin</p>
              <div className="d-flex flex-column mt-5">
                <div className="d-flex mb-3" style={{ width: "30%" }}>
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        background: "#E31E24",
                        borderRadius: "50%",
                        width: 15,
                        height: 15,
                        fontSize: 10,
                        color: "white",
                        right: 0,
                        top: 6,
                        zIndex: 1,
                      }}
                    >
                      <p style={{ marginLeft: 5, fontWeight: "bold" }}>2</p>
                    </div>
                    <img
                      src={gift}
                      alt="gift"
                      style={{ transform: "rotate(-18deg)" }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: 24,
                      fontWeight: 600,
                      margin: "15px 0px 15px 16px",
                    }}
                  >
                    Gifts
                  </p>
                </div>
                <div className="d-flex mb-3" style={{ width: "30%" }}>
                  <img src={settings} alt="settings" />
                  <p
                    style={{
                      fontSize: 24,
                      fontWeight: 600,
                      margin: "15px 0px 15px 10px",
                    }}
                  >
                    Settings
                  </p>
                </div>
                <div className="d-flex" style={{ width: "30%" }}>
                  <img src={coins} alt="coins" />
                  <p
                    style={{
                      fontSize: 24,
                      fontWeight: 600,
                      margin: "15px 0px 15px 16px",
                    }}
                  >
                    Coins
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SpinAndWin;
