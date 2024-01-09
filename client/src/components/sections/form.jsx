import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import * as UserService from "../../services/UserServices";
import * as Message from "../message/message";
import { useMutationHook } from "../../hooks/useMutationHook";
import LoadingComponent from "../loadingComponent/loadingComponent";
import { Navigate } from "react-router-dom";


const PageForm = ({ name, button }) => {
  const [nameUser, setNameUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const mutation = useMutationHook((data) => UserService.signupUser(data));

  const { data, isSuccess, isError,error } = mutation;

  useEffect(() => {
    if(isSuccess) {
      Message.success();
      navigate("/login");
    }
  }, [ isSuccess]);

  const handleOnchangeName = (e) => {
    setNameUser(e.target.value);
  };

  const handleOnchangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnchangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleOnchangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleOnchangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    mutation.mutate({
      name: nameUser,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      phone: phoneNumber,
    });
  };
  return (
    <div>
      <div className="spacer" id="forms-component" style={{padding:'30px'}}>
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">{name}</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col md="12" style={{ width: "50%" }}>
            <Form className="col">
              <FormGroup>
                <Label htmlFor="name">User Name</Label>
                <Input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Username"
                  value={nameUser}
                  onChange={handleOnchangeName}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleOnchangeEmail}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleOnchangePassword}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="cf-password">Confirm Password</Label>
                <Input
                  type="password"
                  className="form-control"
                  id="cf-password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleOnchangeConfirmPassword}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="phone-number">Phone Number</Label>
                <Input
                  type="number"
                  className="form-control"
                  id="phone-number"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={handleOnchangePhoneNumber}
                />
              </FormGroup>
              <FormGroup className="col-md-12 ml-3">
                <Label>
                  Do not have an account ? <Link to="/login">Login ?</Link>{" "}
                </Label>
              </FormGroup>
              {isError && (
                <FormGroup style={{ color: "#c0392b" }}>
                  {error.response.data.message}
                </FormGroup>
              )}
              <Col md="12">
                {mutation.isPending ? (
                  <LoadingComponent></LoadingComponent>
                ) : (
                  <Button
                    type="submit"
                    className="btn btn-success waves-effect waves-light m-r-10"
                    onClick={handleSignup}
                    disabled={
                      !nameUser.length ||
                      !email.length ||
                      !password.length ||
                      !confirmPassword.length ||
                      !phoneNumber.length
                    }
                  >
                    {button}
                  </Button>
                )}
                <Button
                  type="submit"
                  className="btn btn-inverse waves-effect waves-light"
                >
                  <Link to="/" style={{ color: "white" }}>
                    Cancel
                  </Link>
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageForm;
