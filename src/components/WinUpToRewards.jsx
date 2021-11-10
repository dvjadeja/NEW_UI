import React from "react";
import { Image } from "react-bootstrap";

import c1r1 from "../assests/images/rewards/c1r1.png";
import c1r2 from "../assests/images/rewards/c1r2.png";
import c1r3 from "../assests/images/rewards/c1r3.png";
import c1r4 from "../assests/images/rewards/c1r4.png";

import c2r1 from "../assests/images/rewards/c2r1.png";
import c2r2 from "../assests/images/rewards/c2r2.png";
import c2r3 from "../assests/images/rewards/c2r3.png";
import c2r4 from "../assests/images/rewards/c2r4.png";

import c3r1 from "../assests/images/rewards/c3r1.png";
import c3r2 from "../assests/images/rewards/c3r2.png";
import c3r3 from "../assests/images/rewards/c3r3.png";
import c3r4 from "../assests/images/rewards/c3r4.png";

import c4r1 from "../assests/images/rewards/c4r1.png";
import c4r2 from "../assests/images/rewards/c4r2.png";
import c4r3 from "../assests/images/rewards/c4r3.png";
import c4r4 from "../assests/images/rewards/c4r4.png";

import ofy1bg from "../assests/images/rewards/ofy1.png";
import ofy2bg from "../assests/images/rewards/ofy2.png";
import ofy3bg from "../assests/images/rewards/ofy3.png";

import RewardCard from "./RewardCard";
import OfyCard from "./OfyCard";
import { useState } from "react";
import RewardsPopup from "./RewardsPopup";
import GiftCard from "./GiftCard";

const card1 = [
  {
    text: "Gulaal",
    image: c1r1,
    active: "gulaal",
  },
  {
    text: "Chandan",
    image: c1r2,
    active: "chandan",
  },
  {
    text: "Glitter",
    image: c1r3,
    active: "glitter",
  },
  {
    text: "Muddy Puddle",
    image: c1r4,
    bodyMargin: 23,
    active: "muddy",
  },
];

const card2 = [
  {
    text: "Pichkari",
    image: c2r1,
    active: "pichkari",
  },
  {
    text: "Balloons",
    image: c2r2,
    active: "balloons",
  },
  {
    text: "Eggs",
    image: c2r3,
    active: "eggs",
  },
  {
    text: "Water Bucket",
    image: c2r4,
    bodyMargin: 23,
    active: "bucket",
  },
];

const card3 = [
  {
    text: "Gujiya",
    image: c3r1,
    active: "gujiya",
  },
  {
    text: "Thandai",
    image: c3r2,
    active: "thandai",
  },
  {
    text: "Puranpoli",
    image: c3r3,
    active: "puranpoli",
  },
  {
    text: "Coconut Burfi",
    image: c3r4,
    bodyMargin: 23,
    active: "barfi",
  },
];

const card4 = [
  {
    text: "Holi Wali Selfie",
    image: c4r1,
    active: "selfie",
  },
  {
    text: "Holika Dehan",
    image: c4r2,
    active: "holika dehan",
  },
  {
    text: "Holi Party",
    image: c4r3,
    active: "holi party",
  },
  {
    text: "Rain Dance",
    image: c4r4,
    active: "rain dance",
  },
];

const ofy = [
  {
    text1: "1/8",
    text2: "COLORS",
    text3: "Collect 'Colors' cards and win up to ₹1000.",
    color: "white",
    image: ofy1bg,
  },
  {
    text1: "5/8",
    text2: "Mid Way Delights",
    text3: "Collect 'Colors' cards and win up to ₹1000.",
    color: "black",
    image: ofy2bg,
  },
  {
    text1: "8/8",
    text2: "Celebration",
    text3: "Collect 'Colors' cards and win up to ₹1000.",
    color: "white",
    image: ofy3bg,
  },
];

const WinUpToRewards = () => {
  const [active, setActive] = useState("mainPage");
  const [rewardsData, setRewardsData] = useState(false);
  const [giftCardData, setGiftCardData] = useState(false);
  return (
    <>
      <div className="m-3 mt-0">
        {active === "mainPage" && (
          <div>
            <p
              className="primary"
              style={{ fontSize: 20, marginBottom: 0, textAlign: "left" }}
            >
              Collect all Cards & win up to ₹10,000
            </p>
            <div
              className="mt-1"
              style={{
                background: "#e4b66c",
                borderRadius: 15,
                textAlign: "center",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              {card1.map((data, index) => (
                <RewardCard
                  key={index}
                  text={data.text}
                  bodyStyle={{
                    marginBottom: 45,
                    color: "#484848",
                    padding: 0,
                    textAlign: "center",
                    marginTop: 10,
                  }}
                  cardStyle={{
                    width: "8vw",
                    margin: "20px 3px 25px 3px",
                    borderRadius: 10,
                  }}
                  cardImageStyle={{
                    position: "absolute",
                    bottom: -12,
                    left: 0,
                    right: 0,
                    margin: "0 auto",
                  }}
                  cardImage={data.image}
                  bottomtextStyle={{ color: "#484848", fontSize: 15 }}
                  onclick={() => {
                    setActive(`${data.active}`);
                    setRewardsData(data);
                  }}
                />
              ))}
            </div>

            <div
              className="mt-3"
              style={{
                background: "#6812A2",
                borderRadius: 15,
                textAlign: "center",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              {card2.map((data, index) => (
                <RewardCard
                  key={index}
                  text={data.text}
                  bodyStyle={{
                    marginBottom: 45,
                    color: "#484848",
                    padding: 0,
                    textAlign: "center",
                    marginTop: 10,
                  }}
                  cardStyle={{
                    width: "8vw",
                    margin: "20px 3px 25px 3px",
                    borderRadius: "10px",
                  }}
                  cardImageStyle={{
                    position: "absolute",
                    bottom: -12,
                    left: 0,
                    right: 0,
                    margin: "0 auto",
                  }}
                  cardImage={data.image}
                  bottomtextStyle={{ color: "#484848", fontSize: 15 }}
                />
              ))}
            </div>

            <div
              className="mt-3"
              style={{
                background: "#31E3A1",
                borderRadius: 15,
                textAlign: "center",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              {card3.map((data, index) => (
                <RewardCard
                  key={index}
                  text={data.text}
                  bodyStyle={{
                    marginBottom: 45,
                    color: "#484848",
                    padding: 0,
                    textAlign: "center",
                    marginTop: 10,
                  }}
                  cardStyle={{
                    width: "8vw",
                    margin: "20px 3px 25px 3px",
                    borderRadius: "10px",
                  }}
                  cardImageStyle={{
                    position: "absolute",
                    bottom: -12,
                    left: 0,
                    right: 0,
                    margin: "0 auto",
                  }}
                  cardImage={data.image}
                  bottomtextStyle={{ color: "#484848", fontSize: 15 }}
                />
              ))}
            </div>

            <div
              className="mt-3"
              style={{
                background: "#EB4CA1",
                borderRadius: 15,
                textAlign: "center",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              {card4.map((data, index) => (
                <RewardCard
                  text={data.text}
                  key={index}
                  bodyStyle={{
                    marginBottom: data.bodyMargin ? data.bodyMargin : 45,
                    color: "#484848",
                    padding: 0,
                    textAlign: "center",
                    marginTop: 10,
                  }}
                  cardStyle={{
                    width: "8vw",
                    margin: "20px 3px 25px 3px",
                    borderRadius: "10px",
                  }}
                  cardImageStyle={{
                    position: "absolute",
                    bottom: -12,
                    left: 0,
                    right: 0,
                    margin: "0 auto",
                  }}
                  cardImage={data.image}
                  bottomtextStyle={{ color: "#484848", fontSize: 15 }}
                />
              ))}
            </div>
          </div>
        )}

        {active === "chandan" && (
          <RewardsPopup
            data={rewardsData}
            onclick={() => setActive("mainPage")}
          />
        )}

        {active === "giftCard" && (
          <GiftCard data={giftCardData} onclick={() => setActive("mainPage")} />
        )}

        <div className="mt-3 d-flex align-items-left">
          <Image
            src={require("../assests/images/rewards/bt0.png").default}
            alt=""
            style={{ width: "25%" }}
          />
          <Image
            src={require("../assests/images/rewards/bt1.png").default}
            alt=""
            style={{ marginRight: 20, marginLeft: 20, width: "25%" }}
          />
          <Image
            src={require("../assests/images/rewards/bt2.png").default}
            alt=""
            style={{ width: "25%" }}
          />
        </div>

        <p
          className="primary"
          style={{
            fontSize: 20,
            marginBottom: 0,
            textAlign: "left",
            marginTop: 10,
          }}
        >
          Offer for you
        </p>

        <div className="horizontal-scroll mt-2 d-flex">
          {ofy.map((data, index) => (
            <OfyCard
              {...data}
              key={index}
              textStyle={{
                color: data.color,
                fontSize: 12,
                whiteSpace: "normal",
              }}
              titleStyle={{
                color: data.color,
                fontSize: 15,
                whiteSpace: "normal",
                marginRight: 20,
                marginBottom: 10,
              }}
              onclick={() => {
                setActive("giftCard");
                setGiftCardData(data);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default WinUpToRewards;
