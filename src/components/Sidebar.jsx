import React from "react";
import { Image, Nav, Row, Navbar, Container, Col } from "react-bootstrap";
import Avatar from "../assests/images/Avatar.svg";
import home from "../assests/images/home.svg";
import console from "../assests/images/console.svg";
import rank from "../assests/images/rank.svg";
import group from "../assests/images/groups.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [onclick, setOnClick] = useState(1);
  return (
    <div className="side-menu">
      <Row className="profile-img">
        <Col>
          <Image src={Avatar} />
        </Col>
      </Row>
      <Navbar bg="white" variant="light" expand="lg">
        <Container fluid={true}>
          <Nav className="d-flex flex-column" style={{ width: "99%" }}>
            <Link
              to="/"
              onClick={() => setOnClick(1)}
              className="m-2 text-decoration-none"
              style={{ color: "darkgray" }}
            >
              <div
                className={
                  onclick === 1 ? "menu-item menu-item-active" : "menu-item"
                }
              >
                <Image src={home} className="menu-item-icon" />
                <span>Home</span>
              </div>
            </Link>
            <Link
              to="/games"
              onClick={() => setOnClick(2)}
              className="m-2 text-decoration-none "
              style={{ color: "darkgray" }}
            >
              <div
                className={
                  onclick === 2 ? "menu-item menu-item-active" : "menu-item"
                }
              >
                <Image src={console} className="menu-item-icon" />
                <span>Games</span>
              </div>
            </Link>
            <Nav.Link href="#pricing">
              <div className="menu-item">
                <Image src={rank} className="menu-item-icon" />
                <span>Ranks</span>
              </div>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <div className="menu-item">
                <Image src={group} className="menu-item-icon" />
                <span>Groups</span>
              </div>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Sidebar;
