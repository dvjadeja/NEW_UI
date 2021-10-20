import React from "react";
import { Image, Nav, Row, Navbar, Container, Col } from "react-bootstrap";
import Avatar from "../assests/images/Avatar.svg";
import home from "../assests/Home.png";
import homeActivated from "../assests/homeActivated.png";
import game from "../assests/game.png";
import gameActivated from "../assests/gameActivated.png";
import rank from "../assests/rank.png";
import rankActivated from "../assests/rankActivated.png";
import group from "../assests/images/groups.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [onclick, setOnClick] = useState(1);
  // const toggle = (position) => {
  //   setOnClick(position);
  // };

  // const changeColor = (position) => {
  //   if (onclick === position) {
  //     return "blue";
  //   }
  // };
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
              style={{
                fontWeight: "bold",
                color: onclick === 1 ? "#DC7832" : "darkgray",
              }}
            >
              <div
                className={
                  onclick === 1 ? "menu-item menu-item-active" : "menu-item"
                }
              >
                {onclick === 1 ? (
                  <Image src={homeActivated} className="menu-item-icon" />
                ) : (
                  <Image src={home} className="menu-item-icon" />
                )}
                <span>Home</span>
              </div>
            </Link>
            <Link
              to="/games"
              onClick={() => setOnClick(2)}
              className="m-2 text-decoration-none "
              style={{
                fontWeight: "bold",
                color: onclick === 2 ? "#DC7832" : "darkgray",
              }}
            >
              <div
                className={
                  onclick === 2 ? "menu-item menu-item-active" : "menu-item"
                }
              >
                {onclick === 2 ? (
                  <Image src={gameActivated} className="menu-item-icon" />
                ) : (
                  <Image src={game} className="menu-item-icon" />
                )}
                <span>Games</span>
              </div>
            </Link>
            <Link
              to="/ranks"
              onClick={() => setOnClick(3)}
              className="m-2 text-decoration-none"
              style={{
                fontWeight: "bold",
                color: onclick === 3 ? "#DC7832" : "darkgray",
              }}
            >
              <div
                className={
                  onclick === 3 ? "menu-item menu-item-active" : "menu-item"
                }
              >
                {onclick === 3 ? (
                  <Image src={rankActivated} className="menu-item-icon" />
                ) : (
                  <Image src={rank} className="menu-item-icon" />
                )}
                <span>Ranks</span>
              </div>
            </Link>
            <Link
              to="/groups"
              onClick={() => setOnClick(4)}
              className="m-2 text-decoration-none"
              style={{
                fontWeight: "bold",
                color: onclick === 4 ? "#DC7832" : "darkgray",
              }}
            >
              <div
                className={
                  onclick === 4 ? "menu-item menu-item-active" : "menu-item"
                }
              >
                <Image src={group} className="menu-item-icon" />
                <span>Groups</span>
              </div>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Sidebar;
