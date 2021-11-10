import React from "react";
import { Badge, Modal } from "react-bootstrap";
import ReactStoreIndicator from "react-score-indicator";

import Topbar from "./Topbar";
import back from "../assests/images/back.svg";
import DonutChart from "./DonutChart";
import styled from "styled-components";

const ScoreModal = ({ show, setShow }) => {
  const colours = [
    "#FB3E28",
    "#FE5720",
    "#F86014",
    "#FF7510",
    "#FF7012",
    "#FF840D",
    "#FE9000",
    "#FFA600",
    "#F9BD05",
    "#FFD602",
    "#FFDF00",
    "#FFEB01",
    "#EBE400",
    "#D7DD01",
    "#C3D702",
    "#AAD000",
    "#93C501",
    "#7EC100",
    "#6CC509",
    "#56C20D",
    "#3DC115",
    "#2CBB13",
    "#24BD1C",
    "#00A11E",
  ];
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
            backgroundColor="#F7E7CE"
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
            <ReactStoreIndicator
              lineWidth={20}
              value={62}
              maxValue={100}
              lineGap={2}
              stepsColors={colours}
              textStyle={{ color: "black", fontWeight: "bold" }}
              style={{ width: 225 }}
            />
            <p
              style={{
                position: "relative",
                top: -25,
                textAlign: "center",
                fontSize: 19,
                fontWeight: 500,
                color: "#00A11E",
              }}
            >
              Good
            </p>
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
