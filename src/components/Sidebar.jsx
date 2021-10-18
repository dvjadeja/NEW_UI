import React from "react";
import { Image, Nav, Row, Navbar, Container, Col } from "react-bootstrap";
import Avatar from "../assests/images/Avatar.svg";
import home from "../assests/images/home.svg";
import console from "../assests/images/console.svg";
import rank from "../assests/images/rank.svg";
import group from "../assests/images/groups.svg";

const Sidebar = () => {
  return (
    <div className="side-menu">
      <Row className="profile-img">
        <Col>
          <Image src={Avatar} />
        </Col>
      </Row>
      <Navbar bg="white" variant="light" expand="lg" style={{ width: "99%" }}>
        <Container fluid={true}>
          <Nav className="ms-auto me-auto d-flex flex-column">
            <Nav.Link href="#home">
              <div className="menu-item">
                <Image src={home} className="menu-item-icon" />
                <span>Home</span>
              </div>
            </Nav.Link>
            <Nav.Link href="#features">
              <div className="menu-item">
                <Image src={console} className="menu-item-icon" />
                <span>Games</span>
              </div>
            </Nav.Link>
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
