import React from "react";
import { useState } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import AchivementListModal from "./AchivementListModal";

// const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];

const Badge = (props) => {
  const [acListShow, setAcListShow] = useState(false);

  return (
    <>
      <AchivementListModal show={acListShow} setShow={setAcListShow} />
      <Col xs={12} className="mt-3 pe-0 ps-0" key={props.index}>
        <Card
          style={{
            background: `${props.data.bg}`,
            borderRadius: "10px",
            padding: 5,
          }}
          onClick={() => setAcListShow(true)}
        >
          <Row>
            <Col className="p-0">
              <div style={{ width: "90%", height: "90%" }}>
                <Image
                  src={props.data.img}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </Col>
            <Col
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="d-flex flex-column">
                <span style={{ fontSize: 15, color: "#484848" }}>
                  {props.data.name}
                </span>
                <span
                  style={{ fontSize: 32, fontWeight: "bold", color: "#000000" }}
                >
                  {props.data.points}
                </span>
                <span style={{ fontSize: 14, color: "#484848" }}>
                  {props.data.desc}
                </span>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
};

export default Badge;
