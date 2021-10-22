import React, { useState } from "react";

import { Card, Col, Image, Row } from "react-bootstrap";
import BagdeListModal from "./BagdeListModal";

const Achivement = (props) => {
  const [badgeListShow, setBadgeListShow] = useState(false);
  return (
    <>
      <BagdeListModal show={badgeListShow} setShow={setBadgeListShow} />
      <Col xs={12} className="mt-3 pe-0 ps-0" key={props.index}>
        <Card
          style={{
            background: `${props.data.bg}`,
            borderRadius: "10px",
            padding: 5,
            cursor: "pointer",
          }}
          onClick={() => setBadgeListShow(true)}
        >
          <Row>
            <Col className="p-0">
              <Image
                src={props.data.img}
                style={{ width: "126px", height: "126px" }}
              />
            </Col>
            <Col
              style={{
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                fontSize: "20px",
              }}
            >
              <span>{props.data.name}</span>
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
};

export default Achivement;
