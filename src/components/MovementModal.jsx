import React from "react";
import { Image, Modal } from "react-bootstrap";
import Topbar from "./Topbar";
import back from "../assests/images/back.svg";
import coins from "../assests/images/coins.svg";

const MovementModal = ({ show, setShow }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen={true}
        // dialogClassName="custom-modal"
        style={{ padding: 0 }}
      >
        <Modal.Header>
          <Topbar
            back={back}
            title="Movement"
            link=""
            onBack={() => setShow(false)}
          />
        </Modal.Header>
        <Modal.Body style={{ background: "rgb(227 81 105)" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "100px",
            }}
          >
            <p
              style={{
                fontSize: "24px",
                fontFamily: "Poppins",
                color: "#FFFFFF",
                fontWeight: 600,
              }}
            >
              Let's Celebrate Movement !
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <p
              style={{
                fontSize: "40px",
                fontFamily: "Satisfy",
                color: "#FFFFFF",
                fontWeight: 600,
              }}
            >
              Cheers
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                color: "#FFFFFF",
              }}
            >
              Collect
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p
              style={{
                fontSize: "42px",
                fontFamily: "Poppins",
                color: "#FFFFFF",
              }}
            >
              1000 Points
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p
              style={{
                fontSize: "21px",
                fontFamily: "Poppins",
                color: "#FFFFFF",
              }}
            >
              11/09/2021, 01:09PM
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image style={{ width: "20vw", marginTop: 40 }} src={coins} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MovementModal;
