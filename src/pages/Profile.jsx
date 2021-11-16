import React from "react";
import { useHistory } from "react-router";
import Topbar from "../components/Topbar";
import back from "../assests/images/back.svg";
import styled from "styled-components";
import profileImg from "../assests/profileImg.png";

const Profile = () => {
  const history = useHistory();
  const Extra = () => (
    <p
      onClick={() => history.push({ pathname: "/edit-profile" })}
      style={{ marginTop: 7, marginBottom: 0, cursor: "pointer" }}
    >
      Edit
    </p>
  );
  return (
    <>
      <div>
        <div
          className="main-container"
          style={{
            marginTop: 20,
            marginRight: 20,
            borderRadius: 20,
            paddingBottom: 10,
            boxShadow: "0px 6px 14px 5px rgba(201,201,201,1)",
          }}
        >
          <Topbar
            back={back}
            title="Profile"
            link=""
            onBack={() => history.push("/")}
            extra={Extra}
          />
          <div
            style={{
              background: "white",
              padding: 10,
              borderRadius: "20px 20px 0 0",
              marginTop: 116,
            }}
          >
            <StyledContainerDiv>
              <img
                style={{
                  boxShadow: "0px 3px 6px #0000001A",
                  marginTop: "-11%",
                }}
                height="100"
                src={profileImg}
                alt="profileImg"
              />
              <h1>Bhavesh Jain</h1>
              <p className="text-muted">Andheri, Mumbai</p>
            </StyledContainerDiv>

            <PointsContainerDiv>
              <PointsDataDiv>
                <h6>2000</h6>
                <h6>Total Points</h6>
              </PointsDataDiv>
              <PointsDataDiv>
                <h6>400</h6>
                <h6>Rank</h6>
              </PointsDataDiv>
              <PointsDataDiv>
                <h6>Bronze</h6>
                <h6>Level</h6>
              </PointsDataDiv>
            </PointsContainerDiv>

            <div
              style={{
                borderBottom: "1px solid #C7C7CC",
                paddingBottom: "15px",
              }}
              className="mt-3"
            >
              <h5
                style={{
                  textAlign: "left",
                  paddingLeft: "15px",
                  marginBottom: "8px",
                }}
              >
                Address Details
              </h5>
              <StyledDataDiv>
                <p>Country</p>
                <p>India</p>
              </StyledDataDiv>
              <StyledDataDiv>
                <p>State</p>
                <p>Gujarat</p>
              </StyledDataDiv>
              <StyledDataDiv>
                <p>City</p>
                <p>Ahmednagar</p>
              </StyledDataDiv>
              <StyledDataDiv>
                <p>Pincode</p>
                <p>384001</p>
              </StyledDataDiv>
              <StyledDataDiv>
                <p>Address</p>
                <p>C11, Shivam flat, Mehsana test</p>
              </StyledDataDiv>
            </div>

            <div
              style={{ borderBottom: "1px solid #C7C7CC", paddingBottom: 15 }}
            >
              <h5
                style={{
                  textAlign: "left",
                  paddingLeft: "15px",
                  marginBottom: "8px",
                }}
              >
                Personal Details
              </h5>
              <StyledDataDiv>
                <p>Mobile No.</p>
                <p>86901111115</p>
              </StyledDataDiv>
              <StyledDataDiv>
                <p>Email</p>
                <p>bhavesh@unomok.com</p>
              </StyledDataDiv>
              <StyledDataDiv>
                <p>Gender</p>
                <p>Male</p>
              </StyledDataDiv>
              <StyledDataDiv>
                <p>Birth Date</p>
                <p>11 Apr, 1996</p>
              </StyledDataDiv>
              <StyledDataDiv>
                <p>Anniversary Date</p>
                <p>23 Sep, 2021</p>
              </StyledDataDiv>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const StyledContainerDiv = styled.div`
  border-radius: 50px 50px 0px 0px;
  margin-top: 50px;
  background-color: white !important;
  margin-top: -5%;
  z-index: 9;
`;
const PointsContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 35px;
  border-bottom: 1px solid #c7c7cc;
  padding-bottom: 20px;
`;
const PointsDataDiv = styled.div`
  h6:nth-child(1) {
    color: #dc7832;
  }
  h6:nth-child(2) {
    color: #000000;
  }
`;

const StyledDataDiv = styled.div`
  p:nth-child(1) {
    color: #959595;
  }
  p:nth-child(odd) {
    margin-bottom: 0;
  }

  p:nth-child(even) {
    margin-bottom: 0;
  }
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 15px 0 15px;
`;

export default Profile;
