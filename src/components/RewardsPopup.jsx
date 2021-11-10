import React from "react";

import popupbg from "../assests/popupbg.png";
import close from "../assests/popclose.png";
import { Button, Image } from "react-bootstrap";

const RewardsPopup = ({ data, onclick }) => {
  return (
    <>
      <div
        style={{ padding: 50, width: "28vw", height: "75vh", paddingLeft: 80 }}
      >
        <div
          style={{
            backgroundImage: `url(${popupbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "150%",
            height: "100%",
            margin: 0,
            padding: 0,
            textAlign: "left",
            position: "relative",
          }}
        >
          <span className="modal-close">
            <Image
              src={close}
              onClick={onclick}
              style={{ cursor: "pointer" }}
            />
          </span>

          <div className="text-center">
            <span className="mt-5 popup-image">
              <Image src={data.image} />
            </span>

            <p className="mt-1 mb-0" style={{ fontSize: 24, fontWeight: 500 }}>
              {data.text}
            </p>
            <p className="mt-1 mb-0" style={{ fontSize: 17 }}>
              Load, shoot, repeat
            </p>
            <div
              className="mt-4 mb-4"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button className="btn-style">Gift to a freind</Button>
            </div>
            <p className="mt-1 mb-1" style={{ fontSize: 12 }}>
              Why is it great gift to a freind?
            </p>
            <p className="mt-1 mb-1" style={{ fontSize: 12, color: "#DC7832" }}>
              Learn More
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RewardsPopup;
