import React from "react";

class CodeNationButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      clickCount: 0
    };
  }

  handleClick() {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  }

  render() {
    return (
      <button onClick={() => this.handleClick()} disabled={this.state.disabled}>
        <font color="green">Click Number {this.state.clickCount}</font>
      </button>
    );
  }
}

export default CodeNationButton;
