import React from "react";
import { Modal } from "react-bootstrap";
import Topbar from "./Topbar";
import back from "../assests/images/back.svg";
import styled from "styled-components";
import { Button } from "reactstrap";
import RangeFeedback from "./RangeFeedback";

const arr = [1, 2, 3];

const Survey = ({ show, setShow }) => {
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
            title="Survey"
            link=""
            onBack={() => setShow(false)}
          />
        </Modal.Header>
        <Modal.Body>
          <div className="mainPage">
            {arr.map((index) => (
              <StyledCardDiv key={index}>
                <h6>Question 1</h6>
                <p style={{ fontSize: "14px" }} className="text-muted">
                  Question 1 Question 1 Question 1 Question 1 Question 1
                  Question 1 Question 1 Question 1 Question 1 Question 1
                  Question 1 Question 1
                </p>
                <RangeFeedback />
              </StyledCardDiv>
            ))}
            <div className="mt-3">
              <StyledSubmitBtn>Submit</StyledSubmitBtn>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const StyledCardDiv = styled.div`
  width: 95%;
  height: 183px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 30px #00000014;
  border-radius: 4px;
  margin-top: 20px;
  text-align: left;
  padding: 20px;
`;

const StyledSubmitBtn = styled(Button)`
  background-color: #dc7832;
  border: 0;
  border-radius: 500px;
  padding: 8px 35px 8px 35px;
`;

export default Survey;
