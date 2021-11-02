import React, { useState } from "react";
import { Modal, Table } from "react-bootstrap";
import Topbar from "./Topbar";
import back from "../assests/images/back.svg";
import wallet from "../assests/images/cash/wallet.png";

const CashbackModal = ({ show, setShow }) => {
  const [onBack, setOnBack] = useState("/rewards-cashback");
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen={true}
        // dialogClassName="custom-modal"
        style={{ paddingLeft: "0 !important", paddingRight: "0 !important" }}
      >
        <Modal.Header>
          <Topbar
            back={back}
            title="Cashback Won"
            link=""
            onBack={() => setOnBack("/rewards-cashback")}
          />
        </Modal.Header>
        <Modal.Body style={{ margin: 20 }} className="p-0 text-left">
          <div style={{ backgroundColor: "rgb(255,253,209)", borderRadius: 5 }}>
            <div
              style={{
                padding: 10,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img src={wallet} alt="wallet" height="35" />
              <div>
                <p style={{ marginBottom: 0 }}>Cashback Won</p>
                <h2>1500</h2>
              </div>
              <img
                src={require("../assests/coin-wallet.png").default}
                alt="spped"
                height="80"
                style={{ marginTop: -22 }}
              />
            </div>
          </div>

          <Table responsive className="mt-5">
            <thead>
              <tr>
                {Array.from({ length: 3 }).map((_, index) => (
                  <th key={index}>{`Column ${index + 1} `}</th>
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

export default CashbackModal;
