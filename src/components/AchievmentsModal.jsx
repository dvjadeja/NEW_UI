import React, { useState } from "react";
import { Badge, Modal } from "react-bootstrap";
import Topbar from "./Topbar";
import back from "../assests/images/back.svg";
import meter from "../assests/images/speedometer.svg";
import trophy from "../assests/images/trofy.png";
import certificate from "../assests/images/rewardCertificate.svg";
import styled from "styled-components";
import AchievmentSection from "./AchievmentSection";
import CertificateSection from "./CertificateSection";
import AwardSection from "./AwardSection";

const activeToggleData = [
  { name: "Progress", icon: meter },
  { name: "Certificates", icon: certificate },
  { name: "Awards", icon: trophy },
];

const AchievmentsModal = ({ show, setShow }) => {
  const [active, setActive] = useState(0);
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
            backgroundColor: "#FFFEF2",
          }}
        >
          <Topbar
            back={back}
            title="Achivements"
            link=""
            onBack={() => setShow(false)}
          />
        </Modal.Header>
        <Modal.Body className="p-0 text-center" style={{ marginBottom: 0 }}>
          <div style={{ background: "white" }} className="pb-3">
            <div style={{ padding: 20 }}></div>
          </div>

          <div className="home-card" style={{ padding: 10 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: 15,
              }}
            >
              {activeToggleData.map(({ name, icon }, idx) => (
                <StyledBadge
                  key={idx}
                  onClick={() => setActive(idx)}
                  pill
                  active={active === idx ? 1 : 0}
                >
                  <StyledImage src={icon} alt="meter" />
                  <span
                    style={{ fontSize: 20, fontWeight: 600, paddingRight: 100 }}
                  >
                    {name}
                  </span>
                </StyledBadge>
              ))}
            </div>

            {active === 0 && <AchievmentSection />}

            {active === 1 && <CertificateSection />}

            {active === 2 && <AwardSection />}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const StyledBadge = styled(Badge)`
  background-color: ${(props) =>
    props.active ? "#DC7832 !important" : "white !important"};
  color: ${(props) => (props.active ? "white !important" : "black !important")};
  font-weight: 400;
  border: ${(props) =>
    props.active ? "1px solid #dc7832" : "1px solid #F1F1F1"};
  width: 31%;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`;

const StyledImage = styled.img`
  margin-right: 5px;
  margin-left: -15px;
`;

export default AchievmentsModal;
