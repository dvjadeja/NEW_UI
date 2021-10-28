import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

import Topbar from "../components/Topbar";
import back from "../assests/images/back.svg";
import styled from "styled-components";

const states = [
  { stateid: 1, statename: "Andhra Pradesh" },
  { stateid: 2, statename: "Arunachal Pradesh" },
  { stateid: 3, statename: "Assam" },
  { stateid: 4, statename: "Bihar" },
  { stateid: 5, statename: "Chhattisgarh" },
  { stateid: 6, statename: "Goa" },
  { stateid: 7, statename: "Gujarat" },
  { stateid: 8, statename: "Haryana" },
  { stateid: 9, statename: "Himachal Pradesh" },
  { stateid: 10, statename: "Jarkhand" },
  { stateid: 11, statename: "Karnataka" },
  { stateid: 12, statename: "Kerela" },
  { stateid: 13, statename: "Madhya Pradesh" },
  { stateid: 14, statename: "Maharashtra" },
  { stateid: 15, statename: "Manipur" },
  { stateid: 16, statename: "Meghalaya" },
  { stateid: 17, statename: "Mizoram" },
  { stateid: 18, statename: "Nagaland" },
  { stateid: 19, statename: "Odisha" },
  { stateid: 20, statename: "Punjab" },
  { stateid: 21, statename: "Rajasthan" },
  { stateid: 22, statename: "Sikkim" },
  { stateid: 23, statename: "Tamil Nadu" },
  { stateid: 24, statename: "Telangana" },
  { stateid: 25, statename: "Tripura" },
  { stateid: 26, statename: "Uttar Pradesh" },
  { stateid: 27, statename: "Uttarakhand" },
  { stateid: 28, statename: "West Bengal" },
];

const EditProfile = () => {
  const Extra = () => (
    <p style={{ marginTop: 7, marginBottom: 0, cursor: "pointer" }}>Save</p>
  );
  const [onBack, setOnBack] = useState("/profile");
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
            onBack={() => setOnBack("/profile")}
            extra={Extra}
          />
          <Form style={{ textAlign: "left", padding: 20 }}>
            <FormGroup>
              <StyledFormLabel for="name">
                Name <span style={{ color: "red" }}>*</span>
              </StyledFormLabel>
              <CustomStyledInput
                required={true}
                type="text"
                name="username"
                id="name"
              />
            </FormGroup>
            <FormGroup>
              <StyledFormLabel for="mobile">
                Mobile no. <span style={{ color: "red" }}>*</span>
              </StyledFormLabel>
              <CustomStyledInput
                required={true}
                type="text"
                name="mobile"
                id="mobile"
              />
            </FormGroup>
            <FormGroup>
              <StyledFormLabel for="email">Email ID</StyledFormLabel>
              <CustomStyledInput
                required={true}
                type="email"
                name="email"
                id="email"
              />
            </FormGroup>
            <FormGroup>
              <StyledFormLabel for="dob">
                Birth Date<span style={{ color: "red" }}>*</span>
              </StyledFormLabel>
              <CustomStyledInput
                required={true}
                type="date"
                name="dob"
                id="dob"
              />
            </FormGroup>
            <FormGroup>
              <StyledFormLabel for="anniversary">
                Anniversary Date
              </StyledFormLabel>
              <CustomStyledInput
                required={true}
                type="date"
                name="anniversary"
                id="anniversary"
              />
            </FormGroup>
            <FormGroup>
              <StyledFormLabel for="gender">Gender</StyledFormLabel>
              <CustomStyledInput type="select" name="gender" id="gender">
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </CustomStyledInput>
            </FormGroup>

            <FormGroup>
              <StyledFormLabel for="state">State</StyledFormLabel>
              <CustomStyledInput type="select" name="state" id="state">
                {states &&
                  states.map((data, index) => (
                    <option key={index} value={data.stateid}>
                      {data.statename}
                    </option>
                  ))}
              </CustomStyledInput>
            </FormGroup>

            <FormGroup>
              <StyledFormLabel for="city">City</StyledFormLabel>
              <CustomStyledInput type="select" name="city" id="city">
                <option>Ahmedabad</option>
                <option>Baroda</option>
                <option>Kutch</option>
                <option>Surat</option>
                <option>Anand</option>
              </CustomStyledInput>
            </FormGroup>
            <FormGroup>
              <StyledFormLabel for="pincode">Pincode</StyledFormLabel>
              <CustomStyledInput
                required={true}
                type="text"
                name="pincode"
                id="pincode"
              />
            </FormGroup>
            <FormGroup>
              <StyledFormLabel for="address">Address</StyledFormLabel>
              <CustomStyledInput
                required={true}
                type="text"
                name="address"
                id="address"
              />
            </FormGroup>
          </Form>
        </div>
      </div>
    </>
  );
};

const StyledFormLabel = styled(Label)`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 8px;
`;

const CustomStyledInput = styled(Input)`
  border: 0;
  background-color: #fafafc;
  font-weight: 500;
  font-size: 18px;
  border-radius: 8px;
  margin-bottom: 18px;
  appearance: auto;
  -webkit-appearance: auto;
  -moz-appearance: auto;
`;

export default EditProfile;
