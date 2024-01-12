/* eslint-disable */
import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import './header.scss'
import {
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  ButtonDropdown,
  Dropdown,
} from "reactstrap";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import * as UserService from "../../services/UserServices";
import { resetUser } from "../../redux/slides/userSlides";

import logo from "../../assets/images/logos/red-logo-text.jpg";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../loadingComponent/loadingComponent";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const toggles = () => setIsOpen(!isOpen);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  useEffect(() =>{
    setUserName(user?.name);
  },[user.name])

  const handleLogout = async () => {
    setLoading(true);
    await UserService.logoutUser();
    dispatch(resetUser());
    setLoading(false);
    navigate("/")
    window.location.reload();
  };

  return (
    <div className="topbar" id="top" style={{boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",backgroundColor:"#fff"}}>
      <div className="header6">
        <Container className="po-relative">
          <Navbar className="navbar-expand-lg h6-nav-bar">
            <NavbarBrand href="/">
              <img src={logo} alt="wrapkit" />
            </NavbarBrand>
            <NavbarToggler onClick={toggles}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse
              navbar
              className="hover-dropdown font-14 justify-content-end"
              id="h6-info"
            >
              {loading ? (
                <LoadingComponent></LoadingComponent>
              ) : (
                <div>
                  {user?.name ? (
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                      <DropdownToggle
                        style={{ padding: "0px", border: "none" }}
                      >
                        <div
                          className="btn btn-danger-gradiant font-14"
                          style={{
                            display: "flex",
                            gap: "10px",
                            color: "white",
                            cursor: "pointer",
                          }}
                        >
                          <UserOutlined />
                          <div>{userName}</div>
                        </div>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem className="dropdown-item" onClick={handleLogout}>
                          Logout
                        </DropdownItem>
                        <DropdownItem className="dropdown-item">
                          <Link to="/profile-user">User Info</Link>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  ) : (
                    <Collapse
                      isOpen={isOpen}
                      navbar
                      className="hover-dropdown font-14 justify-content-end"
                      id="h6-info"
                    >
                      <Nav navbar className="ms-auto">
                        <NavItem>
                          <Link
                            className="nav-link"
                            to={"/"}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "7px",
                              color: "black"
                            }}
                          >
                            <ShoppingCartOutlined
                              style={{ fontSize: "23px" }}
                            />
                            Cart
                          </Link>
                        </NavItem>
                        <NavItem>
                          <Link className="nav-link" to="/signup" style={{color: "black" }}>
                            Sign Up
                          </Link>
                        </NavItem>
                      </Nav>
                      <div className="act-buttons">
                        <Link
                          to="/login"
                          className="btn btn-danger-gradiant font-14"
                        >
                          Log In
                        </Link>
                      </div>
                    </Collapse>
                  )}
                </div>
              )}
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};
export default Header;
