import React from "react";
import { Card, Col, Image } from "react-bootstrap";

const MovementCard = (props) => {
  return (
    <>
      <Col xs={12} lg={6} className="pe-0 ps-0" key={props.index}>
        <Card
          style={{
            width: "98%",
            background: `${props.data.bg}`,
            marginTop: "50px",
            marginRight: "0px",
            borderRadius: "10px",
          }}
        >
          <Image
            className="img-fluid for-light"
            style={{
              position: "absolute",
              top: "-25px",
              left: "35%",
            }}
            src={props.data.icon}
          />
          <Card.Body style={{ color: "#ffffff", fontSize: "10px" }}>
            <Card.Title>Accomplish Achivement</Card.Title>
            <Card.Text>21st Jan 2020, 12:30PM</Card.Text>
            <Card.Title className="mb-0">Collect</Card.Title>
            <Card.Title>1000 Points</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default MovementCard;
