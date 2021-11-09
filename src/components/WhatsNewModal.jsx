import React from "react";
import { Badge, Col, Image, Modal, Row } from "react-bootstrap";
import Topbar from "./Topbar";
import back from "../assests/images/back.svg";
import covidImg from "../assests/images/Beans1.svg";

const WhatsNewModal = ({ show, setShow }) => {
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
        <Modal.Header>
          <Topbar
            back={back}
            title="Whats New"
            link=""
            onBack={() => setShow(false)}
          />
        </Modal.Header>
        <Modal.Body>
          <Row className="mt-3 mb-3">
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                objectFit: "cover",
                paddingLeft: 30,
              }}
            >
              <Image src={covidImg} width="60%" />
            </Col>
            <Col>
              <Row style={{ paddingRight: 25 }}>
                <Col style={{ textAlign: "left" }} xs={7}>
                  <p
                    style={{ color: "#DC7832", margin: 0, fontSize: "0.8rem" }}
                  >
                    Protect Yourself
                  </p>
                  <p style={{ margin: 0, fontSize: "1.2rem" }}>Against Covid</p>
                </Col>
                <Col xs={5}>
                  <Badge
                    pill
                    style={{
                      borderRadius: 20,
                      border: "none",
                      background: "#F7E7CE",
                      fontWeight: "400",
                      fontSize: 12,
                      padding: "7px 20px",
                    }}
                  >
                    Know More
                  </Badge>
                </Col>
              </Row>
              <div style={{ paddingRight: 50, marginTop: 20 }}>
                <p
                  style={{
                    fontSize: "0.7rem",
                    textAlign: "left",
                    color: "#9E9999",
                  }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Delectus dignissimos culpa, ea laudantium accusantium
                  blanditiis repellat dolore nobis eum provident facilis nam ad
                  enim sunt rem totam sint similique consequuntur?
                  <br />
                  <br />
                  Necessitatibus libero hic, ullam, placeat nemo deserunt velit
                  aperiam facilis, tempore iusto ipsam quo pariatur molestiae.
                  Facere a corrupti id labore itaque inventore qui eum quia,
                  quaerat optio nostrum quos? Neque cupiditate nihil voluptas
                  dolorem modi inventore maiores numquam molestias. Mollitia
                  nobis molestiae quo, ex ab esse sed
                </p>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WhatsNewModal;
