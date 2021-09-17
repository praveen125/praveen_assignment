import React, { Component } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateEmail } from "../actions/detailActions";

class Homepage extends Component {
  state = {
    text: "",
  };
  onchange = (e) => {
    this.setState({ text: e.target.value });
  };
  nextClickHandler = () => {
    // this.props.onChangeHandler("email", this.state.text);
    this.props.updateEmail(this.state.text);
    //  window.location.href = "http://localhost:3000/table";
  };
  render() {
    return (
      <div className="form">
        <h1>ENTER YOUR MAIL</h1>
        <label className="label">Email</label>{" "}
        <div>
          <input
            type="email"
            className="input"
            value={this.state.text}
            onChange={this.onchange}
            placeholder="example@test.com"
          />
        </div>
        <div className="button" onClick={this.nextClickHandler}>
          <Link to="/details">Next</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.detail.email,
  };
};

export default connect(mapStateToProps, { updateEmail })(Homepage);
