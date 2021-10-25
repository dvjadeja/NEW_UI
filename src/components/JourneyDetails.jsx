import React from "react";
import { Image, Modal } from "react-bootstrap";
import close from "../assests/popclose.png";

const JourneyDetails = ({ show, setShow }) => {
  return (
    <>
      <Modal
        fullscreen={false}
        backdrop="static"
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={() => setShow(false)}
        style={{ padding: "0px 30px", width: "auto", margin: "0 auto 0 450px" }}
      >
        <Modal.Body>
          <span className="modal-close">
            <Image src={close} alt="" onClick={() => setShow(false)} />
          </span>
          <div style={{ width: "250px", borderRadius: "10px" }}>
            <p style={{ fontSize: "20px", color: "#000000" }}>Tasks Pending</p>
            <p>
              30% / 100% <span style={{ marginLeft: "20px" }}>NB Rev</span>
            </p>
            <p>
              30% / 100%{" "}
              <span style={{ marginLeft: "20px" }}>No. of Policies</span>
            </p>
            <p>
              20% / 100% <span style={{ marginLeft: "20px" }}>Persistency</span>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default JourneyDetails;
