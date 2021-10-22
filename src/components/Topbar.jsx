import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: block !important;
  justify-content: space-between;
  background: #fcfcfc;
  text-align: right !important;
  .logo {
    padding: 15px 0;
  }
`;
const StyledAlignedImage = styled.img`
  align-self: center;
`;

const Topbar = ({ back, title, link, onBack }) => {
  const backModal = () => {
    onBack();
  };
  return (
    <>
      {back ? (
        <Row style={{ width: "100%" }}>
          <Col style={{ textAlign: "left" }}>
            <Link to={`/${link}`}>
              <StyledAlignedImage src={back} onClick={backModal} />
            </Link>
          </Col>
          <Col style={{ padding: 14 }}>
            <div className="d-flex justify-content-center align-items-center">
              <h5>{title}</h5>
            </div>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <div
              className="logo"
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "10px 4% 10px 40%",
              }}
            >
              <StyledAlignedImage
                src={require("../assests/images/achievement.png").default}
              />
              <StyledAlignedImage
                src={require("../assests/images/Notification.png").default}
              />
              <StyledAlignedImage
                src={require("../assests/images/profile@2x.png").default}
              />
            </div>
          </Col>
        </Row>
      ) : (
        <Nav className="navbar-light">
          <div
            className="logo"
            style={{
              marginLeft: "75%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {back && <StyledAlignedImage src={back} />}
            <StyledAlignedImage
              src={require("../assests/images/achievement.png").default}
            />
            <StyledAlignedImage
              src={require("../assests/images/Notification.png").default}
            />
            <StyledAlignedImage
              src={require("../assests/images/profile@2x.png").default}
            />
          </div>
        </Nav>
      )}
    </>
  );
};

export default Topbar;
