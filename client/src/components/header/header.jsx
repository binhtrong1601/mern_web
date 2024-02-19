/* eslint-disable */
import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./header.scss";
import {
  Container,
  NavbarBrand,
  Nav,
  NavItem,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Dropdown,
  Row,
  Col,
} from "reactstrap";
import {
  MenuOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import * as UserService from "../../services/UserServices";
import { resetUser } from "../../redux/slides/userSlides";

import logo from "../../assets/images/logos/brandy_2.png";
import logo2 from "../../assets/images/logos/united-states-flag.svg";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../loadingComponent/loadingComponent";
import { useNavigate } from "react-router-dom";
import { Flex } from "antd";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userAvatar, setUserAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const toggles = () => setIsOpen(!isOpen);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  useEffect(() => {
    setUserName(user?.name);
    setUserAvatar(user?.avatar);
  }, [user.name, user?.avatar]);

  const handleLogout = async () => {
    setLoading(true);
    await UserService.logoutUser();
    dispatch(resetUser());
    setLoading(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <div
      className="headers"
      id="top"
      style={{
        backgroundColor: "#fff",
      }}
    >
      <div className="header6">
        <Container className="po-relative">
          {/* <Navbar className="navbar-expand-lg h6-nav-bar"> */}
          <Row xs="3">
            <Col>
              <NavbarBrand href="/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                  alt="wrapkit"
                  style={{ maxWidth: "50px" }}
                />
              </NavbarBrand>
            </Col>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <NavbarBrand href="/">
                <img src={logo} alt="wrapkit" style={{ maxWidth: "300px" }} />
              </NavbarBrand>
            </Col>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <div
                navbar
                className="hover-dropdown font-14 justify-content-end"
                id="h6-info"
              >
                {loading ? (
                  <LoadingComponent></LoadingComponent>
                ) : (
                  <div>
                    {user?.name ? (
                      <div className="header-icon">
                        <Nav navbar className="ms-auto" style={{ gap: "22px" }}>
                          <NavItem>
                            <Link className="nav-link button-cart" to={"/"}>
                              <SearchOutlined
                                style={{ fontSize: "20px", color: "#b1b0ab" }}
                              />
                            </Link>
                          </NavItem>
                          <NavItem>
                            <Link
                              to="#"
                              className="nav-link"
                              style={{
                                fontWeight: 500,
                                textTransform: "uppercase",
                              }}
                            >
                              HEY, {user.name}!
                            </Link>
                          </NavItem>
                          <NavItem>
                            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                              <DropdownToggle
                                style={{
                                  backgroundColor: "transparent",
                                  border: "none",
                                  padding: "0px",
                                  boxShadow: "none",
                                }}
                              >
                                <MenuOutlined
                                  style={{ fontSize: "20px", color: "#b1b0ab" }}
                                />
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem>GIFT CARDS</DropdownItem>
                                <DropdownItem>GIFT CARDS</DropdownItem>
                                <DropdownItem>GIFT CARDS</DropdownItem>
                                <DropdownItem>GIFT CARDS</DropdownItem>
                                <DropdownItem className="dropdown-item">
                                  <Link to="/profile-user" style={{color:"#b1b0ab"}}>USER INFO</Link>
                                </DropdownItem>
                                <DropdownItem
                                  className="dropdown-item"
                                  onClick={handleLogout}
                                >
                                  LOGOUT
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </NavItem>
                          <NavItem>
                            <ShoppingOutlined
                              style={{ fontSize: "25px", color: "#b1b0ab" }}
                            />
                          </NavItem>
                        </Nav>
                      </div>
                    ) : (
                      <div className="header-icon">
                        <Nav navbar className="ms-auto" style={{ gap: "22px" }}>
                          <NavItem>
                            <Link className="nav-link button-cart" to={"/"}>
                              <SearchOutlined
                                style={{ fontSize: "20px", color: "#b1b0ab" }}
                              />
                            </Link>
                          </NavItem>
                          <NavItem>
                            <Link to="/login" className="nav-link">
                              LOGIN
                            </Link>
                          </NavItem>
                          <NavItem>
                            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                              <DropdownToggle
                                style={{
                                  backgroundColor: "transparent",
                                  border: "none",
                                  padding: "0px",
                                  boxShadow: "none",
                                }}
                              >
                                <MenuOutlined
                                  style={{ fontSize: "20px", color: "#b1b0ab" }}
                                />
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem>GIFT CARDS</DropdownItem>
                                <DropdownItem>GIFT CARDS</DropdownItem>
                                <DropdownItem>GIFT CARDS</DropdownItem>
                                <DropdownItem>GIFT CARDS</DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </NavItem>
                          <NavItem>
                            <ShoppingOutlined
                              style={{ fontSize: "25px", color: "#b1b0ab" }}
                            />
                          </NavItem>
                        </Nav>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Col>
          </Row>
          <Row
            xs="3"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Nav navbar className="menu-categories">
              <NavItem className="menu-categories-item">JUST IN</NavItem>
              <NavItem className="menu-categories-item">JUST IN</NavItem>
              <NavItem className="menu-categories-item">JUST IN</NavItem>
              <NavItem className="menu-categories-item">JUST IN</NavItem>
              <NavItem className="menu-categories-item">JUST IN</NavItem>
            </Nav>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Header;
