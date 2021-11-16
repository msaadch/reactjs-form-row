import React from "react";
import { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }
  render() {
    return (
      <div>
        <select
          name="memType"
          // id={memType}
          // data-id={idx}
          ref={this.inputRef}
          className="form-select"
          defaultValue="Choose Type"
        >
          <option value="Choose Type">Choose Type</option>
          <option value="Member Type">Member Type</option>
          <option value="Member Type">Member Type</option>
          <option value="Member Type">Member Type</option>
        </select>
      </div>
    );
  }
}

export default RefsDemo;
