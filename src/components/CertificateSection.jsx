import React from "react";

import blue from "../assests/certificate-blue.svg";
import yellow from "../assests/certificate-yellow.svg";
import green from "../assests/certificate-green.svg";
import styled from "styled-components";

const cerificateData = [
  { name: "Learner", blocks: 150, color: "#73C3F9", icon: blue },
  { name: "Pro", blocks: 450, color: "#EFCD1B", icon: yellow },
  { name: "Expert", blocks: 700, color: "#91D571", icon: green },
];

const CertificateSection = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <p style={{ textAlign: "center" }}>
        we issue certificates as you progress through the challenge
      </p>

      <div
        style={{
          display: "flex",
          flexdirection: "row",
          justifyContent: "space-between",
          marginTop: "40px",
        }}
      >
        {cerificateData.map((item, idx) => (
          <div key={idx}>
            <img src={item.icon} alt="icon" />
            <div style={{ textAlign: "center" }}>
              <h5>{item.name}</h5>
              <h6>
                <span style={{ color: item.color, fontWeight: "300" }}>
                  {item.blocks}
                </span>{" "}
                Blocks
              </h6>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          backgroundColor: "#FFFEF2",
          borderRadius: "5px",
          height: "150px",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <h6 style={{ fontWeight: "400", paddingTop: "15px" }}>
          You can download your certificate in electronic
        </h6>
        <h5>Certificates Issued</h5>
        <DisplayNumber numbers="28706" />
      </div>
    </div>
  );
};

const DisplayNumber = ({ numbers }) => {
  const numArr = numbers.split("");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "15px",
      }}
    >
      {numArr.map((num, idx) => (
        <StyledDigitDiv key={idx}>{num}</StyledDigitDiv>
      ))}
    </div>
  );
};

const StyledDigitDiv = styled.div`
  width: 29px;
  height: 34px;
  background: transparent
    radial-gradient(closest-side at 50% 50%, #dc7832 0%, #fad6a5 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 15px;
  margin-right: 15px;
  color: white;
  padding-top: 5px;
`;

export default CertificateSection;
