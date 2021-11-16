import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import Topbar from "./Topbar";
import back from "../assests/images/back.svg";

const achivementDetail = [
  {
    title: "Task 1",
    desc: "Visit 10 old customers",
  },
  {
    title: "Task 2",
    desc: "Cross sell 5 old Customers",
  },
  {
    title: "Task 3",
    desc: "Upsell 5 Old Customers",
  },
];

const OpportunityDetailModal = ({ showDetail, setShowDetail }) => {
  return (
    <>
      <Modal
        show={showDetail}
        onHide={() => setShowDetail(false)}
        fullscreen={true}
        backdrop={false}
        // dialogClassName="custom-modal"
        style={{ padding: 0 }}
      >
        <Modal.Header>
          <Topbar
            back={back}
            title="Incentive Under Incentive Achivement Novemeber |"
            link=""
            onBack={() => setShowDetail(false)}
          />
        </Modal.Header>
        <Modal.Body
          style={{
            marginBottom: 20,
            paddingLeft: "20px !important",
            marginTop: 5,
          }}
        >
          <div style={{ paddingLeft: 20 }}>
            <div
              style={{
                borderBottom: "2px solid #80808063",
                marginBottom: 10,
                paddingLeft: "20px",
              }}
            >
              <h3>Incentive Under Incentive Achivement Novemeber |</h3>
              <p></p>
              <p className="text-grey">Expiry Date: 06-11-2021</p>
            </div>
            <div>
              <h3>Tasks to complete achivement</h3>
              {achivementDetail.map((item, index) => (
                <Row key={index} style={{ padding: 10 }}>
                  <Col style={{ margin: "auto" }} xs={2}>
                    <span className="round">{index + 1}</span>
                  </Col>
                  <Col className="bg-sec-grey">
                    <p>{item.title}</p>
                    <p className="text-grey">{item.desc}</p>
                  </Col>
                </Row>
              ))}
            </div>
            <div style={{ padding: 10 }}>
              <p className="mb-2 text-grey">Offer Duration</p>
              <p className="text-grey">1 month</p>
              <p className="mb-2 text-grey">Rules for Rewards</p>
              <p className="text-grey">Mention the rules to earn rewards</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OpportunityDetailModal;
