import React, { Component } from "react";
import Switch from "react-switch";

class SwitchComponent extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }
  render() {
    return (
      <Switch
        checked={this.state.checked}
        onChange={this.handleChange}
        onColor="#EEC4A9"
        onHandleColor="#DC7832"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={19}
        width={43}
        className="react-switch"
        id="material-switch"
      />
    );
  }
}

export default SwitchComponent;
