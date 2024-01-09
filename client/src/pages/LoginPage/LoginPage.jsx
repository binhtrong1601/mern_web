import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
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
import { useMutationHook } from "../../hooks/useMutationHook";
import LoadingComponent from "../../components/loadingComponent/loadingComponent";
import * as Message from '../../components/message/message'
import { jwtDecode } from "jwt-decode";
import {useDispatch} from 'react-redux'
import { updateUser } from "../../redux/slides/userSlides";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch  =useDispatch()

  const mutation = useMutationHook((data) => UserService.loginUser(data));
  const navigate = useNavigate();

  const { data,isSuccess,isError,error} = mutation;

  useEffect(() => {
     if(isSuccess) {
      Message.success();
      navigate("/");
      localStorage.setItem('access_token', JSON.stringify(data?.access_token));
      if(data?.access_token){
        const decoded = jwtDecode(data?.access_token);
        if(decoded?.id){
          hanleGetDetailsUser(decoded?.id,data?.access_token)
        }
      }
    }
  },[isSuccess])

  const hanleGetDetailsUser = async (id,token)=>{
    const res = await UserService.getDetailUser(id,token);
    dispatch(updateUser({...res?.data,access_token:token}))
  }

  const handleOnchangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnchangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    mutation.mutate({
      email,
      password,
    });
  };
  return (
    <div>
      <div className="spacer" id="forms-component" style={{paddingBottom:'30px'}}>
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center" >
              <h1 className="title font-bold">LOGIN</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col md="12" style={{ width: "50%" }}>
            <Form className="col">
              <FormGroup>
                <Label htmlFor="name">Email</Label>
                <Input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email"
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
                <Link to="">Forgot password ?</Link>
              </FormGroup>
              <FormGroup>
                <Label>
                  Do not have an account ?{" "}
                  <Link to="/signup">Create Account ?</Link>{" "}
                </Label>
              </FormGroup>
              {isError && <FormGroup style={{color:"#c0392b"}}>{error.response.data.message.message}</FormGroup>}
              <Col md="12">
              {mutation.isPending ? <LoadingComponent></LoadingComponent>:<Button
                    type="submit"
                    className="btn btn-success waves-effect waves-light m-r-10"
                    disabled={!email.length || !password.length}
                    onClick={handleLogin}
                  >
                    Submit
                  </Button>}
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

export default LoginPage;
