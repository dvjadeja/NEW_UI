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
                width: "95%",
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
                    colors: ["#DC7832", "#ccc"],
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
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "20px",
                width: "20px",
                borderRadius: "1px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA",
              }}
            >
              <div
                style={{
                  height: "16px",
                  width: "5px",
                  backgroundColor: isDragged ? "#DC7832" : "#CCC",
                }}
              />
            </div>
          )}
        />
        <div
          style={{
            color: "#DC7832",
            fontSize: "1.2em",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          <StyledPara>{this.state.values[0]}</StyledPara>
        </div>
      </div>
    );
  }
}

const StyledPara = styled.p`
  margin: 0;
`;

export default RangeFeedback;
