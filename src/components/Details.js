import axios from "axios";
// import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Col, Row, Button} from 'react-bootstrap'


class Details extends Component {
  state = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  };

  componentDidMount() {
    this.props.currentId
      ? this.setState({
          email: this.props.currentData.email,
          firstName: this.props.currentData.firstName,
          lastName: this.props.currentData.lastName,
          password: this.props.currentData.password,
        })
      : this.setState({ email: this.props.email });
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = () => {
    console.log(this.state);
    const data = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
    };
    this.props.currentId
      ? axios
          .put(
            `https://testapi.webexcellis.in/api/users/${this.props.currentId}`,
            data
          )
          .then((res) => {
            // console.log(res.data);
            window.location.href = "http://localhost:3000/table";
          })
          .catch((err) => console.log(err))
      : axios
          .post("https://testapi.webexcellis.in/api/users/signUp", data)
          .then((res) => {
            // console.log(res.data);
            window.location.href = "http://localhost:3000/table";
          })
          .catch((err) => console.log(err));
  };

  render() {
    const isEdit = this.props.currentId;
    console.log(this.state.email);
    return (
      <div style={{width:'35%', margin:'auto'}}>
        <Form>
          <h1>Let's Create Your account</h1>
          <Form.Group className="mb-3" controlId="emailAddress">
    <Form.Label>Email</Form.Label>
    <Form.Control 
            type="email"
            name="email"
            disabled={!isEdit}
            value={this.state.email}
            onChange={this.onChangeHandler}  />
  </Form.Group>
  <Row className="mb-4">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Firstname</Form.Label>
      <Form.Control type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.onChangeHandler} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Lastname</Form.Label>
      <Form.Control   type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.onChangeHandler} />
    </Form.Group>
  </Row>
         <Form.Group className="mb-3" controlId="emailAddress">
    <Form.Label>Password</Form.Label>
    <Form.Control 
            type="password"
            name="password"
           value={this.state.password}
            onChange={this.onChangeHandler}  />
  </Form.Group>

        
     
         
        
        </Form>
        <Button className="btnCustom" onClick={this.submitHandler}>Next</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.detail.email,
    currentId: state.detail.currentId,
    currentData: state.detail.currentData,
  };
};

export default connect(mapStateToProps, {})(Details);
