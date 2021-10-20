import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { useHistory } from "react-router";

const RewardsCard = (props) => {
  const history = useHistory();
  return (
    <>
      <Col xs={12} className="mt-3 pe-0 ps-0" key={props.index}>
        <Card
          style={{
            background: `${props.data.bg}`,
            borderRadius: "10px",
            padding: 5,
            cursor: "pointer",
          }}
          onClick={() => history.push(`/${props.data.to}`)}
        >
          <Row>
            <Col className="p-0" xs={4}>
              <Image
                src={props.data.img}
                style={{ width: "120px", height: "126px" }}
              />
            </Col>
            <Col
              xs={8}
              style={{
                color: `${props.textColor}`,
                display: "flex",
                alignItems: "center",
                fontSize: "20px",
              }}
            >
              <div className="d-flex flex-column align-items-start p-3 text-start">
                <span style={{ fontSize: 16, fontWeight: "bold" }}>
                  {props.data.name}
                </span>
                <div className="d-flex flex-row">
                  <p style={{ fontSize: 12, fontWeight: "bold" }}>
                    Description:
                  </p>
                  <span
                    style={{
                      fontSize: 12,
                      color: "darkgray",
                      paddingLeft: 5,
                    }}
                  >
                    {props.data.desc}
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
};

export default RewardsCard;
