import React from "react";
import { Button } from "react-bootstrap";
import CelebrationConfetti from "../components/CelebrationConffetti";
import "../components/Wheel.css";

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      active: false,
    };
    this.selectItem = this.selectItem.bind(this);
    this.conffetti = this.conffetti.bind(this);
  }

  selectItem() {
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.props.items.length);
      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }
      this.setState({ selectedItem });
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 100);
    }
  }

  conffetti() {
    return setTimeout(() => {
      this.setState({ active: true });
    }, 2300);
  }

  render() {
    const { selectedItem } = this.state;
    const { items } = this.props;

    const wheelVars = {
      "--nb-item": items.length,
      "--selected-item": selectedItem,
    };
    const spinning = selectedItem !== null ? "spinning" : "";

    return (
      <>
        <CelebrationConfetti active={this.state.active} />
        <div>
          <div className="wheel-container">
            <div className={`wheel ${spinning}`} style={wheelVars}>
              {items.map((item, index) => (
                <div
                  className="wheel-item"
                  key={index}
                  style={{ "--item-nb": index }}
                >
                  <div style={{ width: 60 }}>
                    <img
                      src={item}
                      alt=""
                      style={{ width: item[3] ? "74%" : "100%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Button
              style={{
                background: "#7C0000 0% 0% no-repeat padding-box",
                width: "218px",
                borderRadius: "20px",
              }}
              onClick={() => {
                this.selectItem();
                this.conffetti();
              }}
            >
              SPIN THE WHEEL
            </Button>
          </div>
        </div>
      </>
    );
  }
}
