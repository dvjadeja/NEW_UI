import React from "react";
import { Button } from "react-bootstrap";
import "../components/Wheel.css";

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
    this.selectItem = this.selectItem.bind(this);
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
      setTimeout(this.selectItem, 500);
    }
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
      <div>
        <div className="wheel-container">
          <div className={`wheel ${spinning}`} style={wheelVars}>
            {items.map((item, index) => (
              <div
                className="wheel-item"
                key={index}
                style={{ "--item-nb": index }}
              >
                {item}
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
            onClick={this.selectItem}
          >
            SPIN THE WHEEL
          </Button>
        </div>
      </div>
    );
  }
}
