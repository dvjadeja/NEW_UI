import React from "react";
import { Range, getTrackBackground } from "react-range";
import styled from "styled-components";

const STEP = 1;
const MIN = 1;
const MAX = 10;

class RangeFeedback extends React.Component {
  state = {
    values: [3],
  };
  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Range
            values={this.state.values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(values) => this.setState({ values })}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: "36px",
                  display: "flex",
                  width: "60%",
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: "5px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values: this.state.values,
                      colors: ["#FAD6A5", "#ccc"],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "20px",
                  width: "20px",
                  borderRadius: "4px 4px 20px 20px",
                  backgroundColor: "#DC7832",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  top: 0,
                  boxShadow: "0px 2px 6px #AAA",
                }}
              >
                <div
                  style={{
                    position: "relative",
                  }}
                />
                <span style={{ color: "white" }}>{this.state.values[0]}</span>
              </div>
            )}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              color: "#484848",
              fontSize: 15,
              textAlign: "center",
              fontWeight: "500",
              display: "flex",
              justifyContent: "space-between",
              width: "61%",
            }}
          >
            <StyledPara>1</StyledPara>
            <StyledPara>10</StyledPara>
          </div>
        </div>
      </>
    );
  }
}

const StyledPara = styled.p`
  margin: 0;
`;

export default RangeFeedback;
