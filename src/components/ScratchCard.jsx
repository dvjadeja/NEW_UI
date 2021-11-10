import React from "react";
import ScratchCard from "react-scratchcard";
import image from "../assests/scrachcard.png";
import scimg from "../assests/scimg.png";
import close from "../assests/popclose.png";
import { Image } from "react-bootstrap";

const settings = {
  width: 285,
  height: 346,
  image,
  finishPercent: 80,
  onComplete: () => console.log("The card is now clear!"),
};

const ScratchCardModal = ({ onclick }) => {
  return (
    <>
      <div
        className="p-0"
        style={{
          textAlign: "left",
          marginTop: "40px",
          marginLeft: "80px",
          position: "relative",
        }}
      >
        <Image
          src={close}
          alt="close"
          className="modal-close"
          style={{ right: 48, cursor: "pointer" }}
          onClick={onclick}
        />
        <ScratchCard {...settings}>
          <div className="text-center">
            <Image src={scimg} alt="scimg" className="mt-3" />
            <p className="mt-1 mb-0">You Win</p>
            <p
              className="mt-1 mb-0 text-bold"
              style={{ fontSize: "1.5rem", color: "#DC7832" }}
            >
              ₹200
            </p>
            <p className="mt-1 mb-0" style={{ fontStyle: "1.5rem" }}>
              Malguddi's Voucher
            </p>
            <hr />
            <span className="text-grey">
              For transferring Money on April 02, 2021, Malgudi's Voucher will
              be credited within 24 hours
            </span>
          </div>
        </ScratchCard>
      </div>
    </>
  );
};

export default ScratchCardModal;
