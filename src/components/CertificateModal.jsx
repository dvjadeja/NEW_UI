import React, { useState } from "react";
import { Image, Modal } from "react-bootstrap";
import Topbar from "./Topbar";
import back from "../assests/images/back.svg";
import { useHistory } from "react-router";

const CertificateModal = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className="main-container"
        style={{
          marginBottom: 10,
          boxShadow: "0px 6px 14px 5px rgba(201,201,201,1)",
          marginTop: 20,
          marginRight: 20,
          borderRadius: 20,
          paddingBottom: 20,
        }}
      >
        <div
          style={{
            width: "100%",
            marginTop: 20,
            marginRight: 20,
            borderRadius: "20px 20px 0px 0px",
            paddingBottom: 20,
          }}
        >
          <Topbar
            back={back}
            title="Bring it Beyond"
            link=""
            onBack={() => {
              setShow(false);
              history.push("/rewards");
            }}
          />
          <div className="home-card pt-5">
            <Image
              src={require("../assests/certification.png").default}
              alt=""
            />

            <p className="mt-5">
              <Image
                src={require("../assests/cloud.png").default}
                alt=""
                style={{ marginRight: 20 }}
              />
              <Image src={require("../assests/share.png").default} alt="" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateModal;
