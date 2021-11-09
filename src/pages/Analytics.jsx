import React, { useState } from "react";
import { Badge, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Topbar from "../components/Topbar";
import back from "../assests/images/back.svg";
import DonutChart from "../components/DonutChart";

const optfilter = [
  {
    title: "Ending Soon",
  },
  {
    title: "In Progress",
  },
  {
    title: "Upcoming",
  },
];

const Analytics = () => {
  const history = useHistory();
  const [show, setShow] = useState(true);
  const [activeOptFilter, setActiveOptFilter] = useState(0);
  return (
    <>
      <Modal
        show={show}
        fullscreen={true}
        // dialogClassName="custom-modal"
        style={{ paddingLeft: "0 !important", paddingRight: "0 !important" }}
        backdrop={false}
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
            title="Analytics"
            link=""
            onBack={() => {
              setShow(false);
              history.push("/");
            }}
          />
        </Modal.Header>
        <Modal.Body style={{ marginTop: 20 }}>
          <div className="horizontal-scroll d-flex justify-content-center">
            {optfilter.map((data, index) => (
              <Badge
                key={index}
                onClick={() => setActiveOptFilter(index)}
                pill
                className={
                  index === activeOptFilter ? "badgeActive badge" : "badge"
                }
                style={{
                  background:
                    index === activeOptFilter
                      ? "#fad6a5 !important"
                      : "white !important",
                  margin: 5,
                  fontSize: 18,
                  borderRadius: 30,
                }}
              >
                {data.title}
              </Badge>
            ))}
          </div>

          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 30 }}
          >
            <DonutChart />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Analytics;
