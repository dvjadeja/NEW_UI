import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RankCard = (props) => {
  return (
    <div className="mb-3">
      <Row style={{ margin: 10, background: props.mainBG, borderRadius: 10 }}>
        <Col
          xs={2}
          style={{
            display: "flex",
            background: props.secoundaryBG,
            color: "white",
            borderRadius: "10px 0 0 10px",
          }}
        >
          <div style={{ margin: "auto 0", width: "100%" }}>
            {props.points}
            <FontAwesomeIcon icon="arrow-down" /> <p>{props.diff}</p>
          </div>
        </Col>
        <Col xs={2} style={{ display: "flex" }}>
          <div style={{ position: "relative", margin: "auto 0" }}>
            <div id="hexagon">{props.rank}</div>
            <img src={props.profile} alt="" />
          </div>
        </Col>
        <Col xs={6} style={{ paddingBottom: 10 }}>
          <div style={{ textAlign: "left", marginBottom: 5 }}>
            <p style={{ marginBottom: 0 }}>{props.name}</p>
            <p style={{ marginBottom: 5 }}>{props.address}</p>
            <span className="rank-point">
              <img
                src={require("../assests/star.png").default}
                alt="star"
                className="rank-img"
              />
              {props.star}
            </span>
          </div>
        </Col>
        <Col xs={2} style={{ display: "flex", color: "" }}>
          <div
            style={{
              margin: "auto 0",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p
              className={
                props.isYouLiked ? "like-thumb mb0" : "another-like-thumb mb0"
              }
            >
              <img src={require("../assests/thumb.png").default} alt="thumb" />
            </p>
            <p style={{ paddingRight: 5 }} className="mb0">
              {props.like}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RankCard;
