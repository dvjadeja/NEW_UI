import React from "react";
import { Button, Image } from "react-bootstrap";
import close from "../assests/popclose.png";

const VoucherCardDetail = ({ onclick, image }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <div className="mt-2">
          <p>Offer Details</p>
        </div>
        <div className="d-flex justify-content-center">
          <div style={{ width: "11vw", position: "relative" }}>
            <Image src={image} style={{ width: "100%" }} />
            <Image
              src={close}
              style={{
                position: "absolute",
                right: -12,
                top: -10,
                cursor: "pointer",
              }}
              onClick={onclick}
            />
          </div>
        </div>
        <div style={{ textAlign: "left", marginTop: 10, marginBottom: 10 }}>
          <p style={{ fontSize: 17, fontWeight: 500, margin: 0 }}>Gift Card</p>
          <p style={{ fontSize: 13, marginBottom: 10 }}>
            Collect colours cards 3 more times to get a scratch card worth upto
            ₹1000
          </p>
          <p style={{ fontSize: 10, color: "#9E9999" }}>
            17 days left to expire
          </p>
          <div className="mb-2">
            <Button className="btn-style">Collect Colour Cards</Button>
          </div>
          <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 7 }}>
            Terms & Conditions
          </p>
          <p style={{ fontSize: 13, marginBottom: 5 }}>
            Offer eligibility & Criteria
          </p>
          <p style={{ fontSize: 12, marginBottom: 5 }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          </p>
          <p style={{ fontSize: 13, marginBottom: 5 }}>Offer Duration</p>
          <p style={{ fontSize: 12, marginBottom: 8 }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </p>
          <p style={{ fontSize: 13, marginBottom: 5 }}>Rules for Rewards</p>
          <p style={{ fontSize: 12, marginBottom: 8 }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </p>
        </div>
      </div>
    </>
  );
};

export default VoucherCardDetail;
