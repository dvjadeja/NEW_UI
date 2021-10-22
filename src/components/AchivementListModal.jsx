import React from "react";
import { Modal, Table } from "react-bootstrap";
import Topbar from "./Topbar";
import back from "../assests/images/back.svg";
import speedometer from "../assests/images/speedometer.svg";

const AchivementListModal = ({ show, setShow, fullscreen }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen={true}
        // dialogClassName="custom-modal"
      >
        <Modal.Header>
          <Topbar
            back={back}
            title="Incentive Achivements"
            link=""
            onBack={() => setShow(false)}
          />
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              backgroundColor: "#E0F0F8",
              borderRadius: 5,
            }}
          >
            <div
              style={{
                padding: "10px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img src={speedometer} height="50" alt="speed" />
              <div>
                <p style={{ marginBottom: 0 }}>Incentive Achievment</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h2>2000</h2>
                <p style={{ marginBottom: "1px", paddingLeft: "5px" }}>
                  Special
                </p>
              </div>
            </div>
          </div>

          <Table responsive className="mt-5">
            <thead>
              <tr>
                <th>Date</th>
                <th>Points</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>11-09-2021 01:04 PM</td>
                <td>2000</td>
                <td>Testing Incentive Achivement Modal</td>
              </tr>
              <tr>
                <td>11-08-2021 01:04 PM</td>
                <td>1000</td>
                <td>Testing Incentive Achivement Modal</td>
              </tr>
              <tr>
                <td>11-10-2021 01:04 PM</td>
                <td>2000</td>
                <td>Testing Incentive Achivement Modal</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AchivementListModal;
