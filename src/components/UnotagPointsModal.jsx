import React from "react";
import { Modal, Table } from "react-bootstrap";
import Topbar from "./Topbar";
import back from "../assests/images/back.svg";
import pinkStar from "../assests/images/pink-star.png";

const UnotagPointsModal = ({ show, setShow }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen={true}
        backdrop={false}
        // dialogClassName="custom-modal"
        style={{ paddingLeft: "0 !important", paddingRight: "0 !important" }}
      >
        <Modal.Header>
          <Topbar
            back={back}
            title="Cashback Won"
            link=""
            onBack={() => setShow(false)}
          />
        </Modal.Header>
        <Modal.Body style={{ margin: 20 }}>
          <div style={{ backgroundColor: "#FFF2E1", borderRadius: 5 }}>
            <div
              style={{
                padding: 10,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img src={pinkStar} height="35" alt="spped" />
              <div>
                <p style={{ marginBottom: 0 }}>UNOTAG Points</p>
                <h2>525</h2>
              </div>
              <img
                src={require("../assests/gift.png").default}
                style={{ marginTop: -10 }}
                height="90"
                alt="spped"
              />
            </div>
          </div>

          <Table responsive className="mt-5">
            <thead>
              <tr>
                {Array.from({ length: 3 }).map((_, index) => (
                  <th key={index}>{`Column ${index + 1}`}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 9 }).map((item, index) => (
                <tr key={index}>
                  <td>{`Row ${index + 1}`}</td>
                  <td>{`Row ${index + 1}`}</td>
                  <td>{`Row ${index + 1}`}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UnotagPointsModal;
