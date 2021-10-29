import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Topbar from "../components/Topbar";
import back from "../assests/images/back.svg";
import Wheel from "./Wheel";

const SpinAndWin = () => {
  const history = useHistory();

  const [items, setItems] = useState([
    "Pizzas",
    "Sandwiches",
    "Salads",
    "Soup",
    "Japanese food",
    "Pastas",
  ]);

  const [show, setShow] = useState(true);
  return (
    <>
      <Modal
        show={show}
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
            backgroundColor: "#FFFEF2",
          }}
        >
          <Topbar
            back={back}
            title="Lucky Spin"
            link=""
            onBack={() => {
              setShow(false);
              history.push("/");
            }}
          />
        </Modal.Header>
        <Modal.Body
          style={{
            margintop: 20,
            background: "#fffef2",
            boxShadow: "#00000005",
            borderRadius: "20px 20px 0px 0px",
          }}
        >
          <div>
            <Wheel items={items} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SpinAndWin;
