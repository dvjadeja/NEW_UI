import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import close from "../assests/popclose.png";
import VoucherCardDetail from "./VoucherCardDetail";

const VoucherCard = ({ onclick, image }) => {
  const [active, setActive] = useState("voucher");
  return (
    <>
      <div style={{ paddingRight: 20 }}>
        <div
          style={{
            background: "white",
            borderRadius: 10,
            height: active === "viewDetail" ? "87vh" : "70vh",
            //   paddingRight: 20,
          }}
        >
          {active === "voucher" && (
            <div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "20vw", position: "relative" }}>
                  <Image
                    src={close}
                    style={{
                      position: "absolute",
                      right: 28,
                      top: 8,
                      cursor: "pointer",
                    }}
                    onClick={onclick}
                  />
                  <Image
                    src={image}
                    style={{ marginTop: 20, height: "25vh" }}
                  />
                </div>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: 500,
                    textAlign: "center",
                    marginTop: "20px",
                    color: "#000000",
                  }}
                >
                  Gift Card
                </p>
              </div>
              <div style={{ padding: "0px 30px 0px 30px" }}>
                <p
                  style={{
                    color: "#484848",
                    fontSize: "15px",
                    textAlign: "center",
                    marginTop: "10px",
                    marginLeft: "10%",
                    marginRight: "10%",
                  }}
                >
                  Collect colour cards 3 more times to get a scratch card worth
                  upto ₹1000
                </p>
              </div>
              <div>
                <Button className="btn-style">Collect Colour Cards</Button>
              </div>
              <div>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "15px",
                    marginTop: "15px",
                    color: "#484848",
                    cursor: "pointer",
                  }}
                  onClick={() => setActive("viewDetail")}
                >
                  <u>View Details</u>
                </p>
              </div>
              <div>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "15px",
                    marginTop: "15px",
                    color: "#9E9999",
                  }}
                >
                  Valid till 31st Mar 2021
                </p>
              </div>
            </div>
          )}
          {active === "viewDetail" && (
            <VoucherCardDetail
              onclick={() => setActive("voucher")}
              image={image}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default VoucherCard;
