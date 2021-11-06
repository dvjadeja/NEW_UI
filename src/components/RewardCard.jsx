import React from "react";
import { Card, Image } from "react-bootstrap";

const RewardCard = (props) => {
  return (
    <Card
      onClick={props.onclick}
      className="scroll-card"
      style={props.cardStyle}
    >
      <Card.Body style={props.bodyStyle}>
        <Card.Text className="card-info" style={props.bottomtextStyle}>
          {props.text}
        </Card.Text>
      </Card.Body>
      <Image
        className="img-fluid for-light"
        style={props.cardImageStyle}
        src={props.cardImage}
        alt={props.cardImage}
      />
    </Card>
  );
};

export default RewardCard;
