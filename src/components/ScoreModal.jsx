import React from "react";
import { Badge, Modal } from "react-bootstrap";
import ReactStoreIndicator from "react-score-indicator";

import Topbar from "./Topbar";
import back from "../assests/images/back.svg";
import DonutChart from "./DonutChart";
import styled from "styled-components";

const ScoreModal = ({ show, setShow }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen={true}
        // dialogClassName="custom-modal"
        style={{ paddingLeft: "0 !important", paddingRight: "0 !important" }}
      >
        <Modal.Header
          style={{
            marginBottom: 20,
            border: 0,
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <Topbar
            back={back}
            title="Your Score"
            link=""
            onBack={() => setShow(false)}
          />
        </Modal.Header>
        <Modal.Body style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "85%" }}>
            <p
              className="text-muted"
              style={{ fontSize: "12px", textAlign: "center" }}
            >
              lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
              ipsum dolor sit am lorem ipsum dolor sit amet
            </p>
            <ReactStoreIndicator lineWidth={10} value={62} maxValue={100} />
            <p
              className="text-muted"
              style={{ fontSize: "12px", textAlign: "center" }}
            >
              lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
              ipsum dolor sit am lorem ipsum dolor sit amet
            </p>
            <div className="d-flex justify-content-center">
              <DonutChart />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <StyledBadge>View Detailed Report</StyledBadge>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const StyledBadge = styled(Badge)`
  margin-top: 35px;
  background-color: #f7e7ce;
  border: 0;
  border-radius: 500px;
  font-size: 20px;
`;

export default ScoreModal;
