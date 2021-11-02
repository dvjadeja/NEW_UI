import React, { useState } from "react";
import Topbar from "../components/Topbar";
import back from "../assests/images/back.svg";
import { Col, Image, Row } from "react-bootstrap";

const Stickers = () => {
  const [onBack, setOnBack] = useState("/");
  return (
    <>
      <div>
        <div
          className="main-container"
          style={{
            marginTop: 20,
            marginRight: 20,
            borderRadius: 20,
            paddingBottom: 10,
            boxShadow: "0px 6px 14px 5px rgba(201,201,201,1)",
          }}
        >
          <Topbar
            back={back}
            title="Sticker Shelf"
            link=""
            onBack={() => setOnBack("/rewards-cashback")}
          />
          <div>
            <p style={{ margin: 0 }}>UNO TAG Stickers are here!</p>
            <p style={{ margin: 0 }}>
              Get a Sticker Every Time you use UNO TAG
            </p>
          </div>
          <div style={{ marginTop: 55 }}>
            <Row>
              <Col xs={3}>
                <Image
                  src={require("../assests/images/cash/st1.png").default}
                  alt=""
                  height="50"
                />
                <p>Tiny Plant</p>
              </Col>
              <Col xs={3}>
                <Image
                  src={require("../assests/images/cash/st2.png").default}
                  alt=""
                  height="50"
                />
                <p>Smiley Fire</p>
              </Col>
              <Col xs={3}>
                <Image
                  src={require("../assests/images/cash/st3.png").default}
                  alt=""
                  height="50"
                />
                <p>Tring Tring</p>
              </Col>
              <Col xs={3}>
                <Image
                  src={require("../assests/images/cash/st1.png").default}
                  alt=""
                  height="50"
                />
                <p>Tiny Plant</p>
              </Col>
              <Col xs={3}>
                <Image
                  src={require("../assests/images/cash/st2.png").default}
                  alt=""
                  height="50"
                />
                <p>Smiley Fire</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stickers;
