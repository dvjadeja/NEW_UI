import React from "react";
import { Card } from "react-bootstrap";

const OfyCard = (props) => {
  return (
    <Card
      onClick={props.onclick}
      className="scroll-card text-center"
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: 154,
        height: 154,
      }}
    >
      <span className="ofy-count">{props.text1}</span>
      <Card.Body>
        <p style={props.titleStyle}>{props.text2}</p>
        <Card.Text className="card-info" style={props.textStyle}>
          {props.text3}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default OfyCard;
