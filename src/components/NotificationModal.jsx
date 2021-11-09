import React from "react";
import { Modal, Row, Col, Image } from "react-bootstrap";
import back from "../assests/images/back.svg";
import Topbar from "./Topbar";

const notificationData = [
  {
    image: "../assests/badge.png",
    time: "9H",
    isView: false,
    des: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
  },
  {
    image: "../assests/badge.png",
    time: "1W",
    isView: false,
    des: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
  },
  {
    image: "../assests/badge.png",
    time: "2W",
    isView: true,
    des: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
  },
  {
    image: "../assests/badge.png",
    time: "3W",
    isView: false,
    des: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
  },
  {
    image: "../assests/badge.png",
    time: "4W",
    isView: false,
    des: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
  },
  {
    image: "../assests/badge.png",
    time: "5W",
    isView: false,
    des: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
  },
  {
    image: "../assests/badge.png",
    time: "3M",
    isView: false,
    des: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
  },
];

const NotificationModal = ({ show, setShow }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen={true}
        backdrop={false}
        // dialogClassName="custom-modal"
        style={{ paddingLeft: "0 !important", paddingRight: "0 !important" }}
      >
        <Modal.Header
          style={{
            border: 0,
            display: "flex",
            flexDirection: "row-reverse",
            backgroundColor: "#FFFEF2",
          }}
        >
          <Topbar
            back={back}
            title="Notification"
            link=""
            onBack={() => setShow(false)}
          />
        </Modal.Header>
        <Modal.Body className="p-0 text-left">
          <div style={{ background: "#FFFEF2" }} className="pb-3">
            <div style={{ padding: "20px" }}></div>
          </div>

          <div className="home-card" style={{ padding: "10px 0px" }}>
            {notificationData.map((data, index) => (
              <Row
                key={index}
                style={{ borderBottom: "1px solid #80808057", marginTop: 15 }}
              >
                <Col xs={1} style={{ textAlign: "end", paddingRight: 0 }}>
                  <span
                    style={{
                      padding: 10,
                      background: "#F7E7CE",
                      borderRadius: 20,
                      marginTop: 20,
                    }}
                  >
                    <Image
                      src={require("../assests/badge.png").default}
                      alt="badge"
                    />
                  </span>
                </Col>
                <Col xs={9} className="fs-10">
                  <p>{data.des}</p>
                  {data.isView && (
                    <span
                      style={{ marginBottom: 20 }}
                      style={{
                        color: "#dc7832 !important",
                        borderBottom: "1px solid",
                      }}
                      className="fs-15"
                    >
                      View Statement {"     >"}
                    </span>
                  )}
                </Col>
                <Col xs={2}>
                  <p
                    style={{
                      background: "#F7E7CE",
                      padding: "9px 15px",
                      borderRadius: "25px 0 0 25px",
                      marginTop: 10,
                    }}
                  >
                    {data.time}
                  </p>
                </Col>
              </Row>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NotificationModal;
