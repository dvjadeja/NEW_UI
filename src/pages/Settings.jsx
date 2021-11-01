import React, { useState } from "react";
import {
  AiOutlineGlobal,
  AiOutlineBell,
  AiOutlineMail,
  AiOutlineCamera,
  AiOutlineAim,
} from "react-icons/ai";
import { BsCircleHalf } from "react-icons/bs";
import { Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import back from "../assests/images/back.svg";
import SwitchComponent from "../components/SwitchComponent";

const Settings = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <div className="main-container">
          <Row className="mt-3 mb-3">
            <Topbar
              back={back}
              title="Settings"
              link=""
              onBack={() => {
                setShow(false);
                history.push("/");
              }}
            />
            <div style={{ padding: 25 }}>
              <StyledContainerDiv style={{ marginBottom: 20 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 100,
                  }}
                >
                  <div>
                    <AiOutlineGlobal />
                  </div>
                  <div>Language</div>
                </div>
                <div style={{ color: "#DC7832" }}>English</div>
              </StyledContainerDiv>
              <StyledContainerDiv>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "20%",
                  }}
                >
                  <div>
                    <BsCircleHalf />
                  </div>
                  <div>Application Theme</div>
                </div>
                <div style={{ color: "#DC7832" }}>Light</div>
              </StyledContainerDiv>
              <hr />
              <h6 style={{ textAlign: "left" }}>Notifications</h6>

              <StyledContainerColumnDiv>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "20%",
                    }}
                  >
                    <div>
                      <AiOutlineBell />
                    </div>
                    <div>Push Notification</div>
                  </div>
                  <div>
                    <SwitchComponent />
                  </div>
                </div>
                <hr />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "20%",
                    }}
                  >
                    <div>
                      <AiOutlineMail />
                    </div>
                    <div>Email Notification</div>
                  </div>
                  <div>
                    <SwitchComponent />
                  </div>
                </div>
              </StyledContainerColumnDiv>

              <hr />
              <h6 style={{ textAlign: "left" }}>App Permissions</h6>
              <StyledContainerColumnDiv>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      width: "100%",
                    }}
                  >
                    <div>
                      <AiOutlineCamera />
                    </div>
                    <div style={{ textAlign: "left", marginLeft: 15 }}>
                      Camera
                      <br />
                      <span className="text-muted small">
                        lorem ipsum dolor sit amet
                      </span>
                    </div>
                  </div>
                  <div>
                    <SwitchComponent />
                  </div>
                </div>
                <hr />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      width: "100%",
                    }}
                  >
                    <div>
                      <AiOutlineAim />
                    </div>
                    <div style={{ textAlign: "left", marginLeft: "15px" }}>
                      Camera
                      <br />
                      <span className="text-muted small">
                        lorem ipsum dolor sit amet
                      </span>
                    </div>
                  </div>
                  <div>
                    <SwitchComponent />
                  </div>
                </div>
              </StyledContainerColumnDiv>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};

const StyledContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fafafc;
  padding: 15px;
  border-radius: 8px;
`;

const StyledContainerColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafc;
  padding: 15px;
  border-radius: 8px;
`;

export default Settings;
