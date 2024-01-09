/* eslint-disable */
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
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
import {resetUser} from '../../redux/slides/userSlides'

import logo from "../../assets/images/logos/white-text.png";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()

  const toggles = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleLogout = async () =>{
    await UserService.logoutUser()
    dispatch(resetUser())
  }

  return (
    <div className="topbar" id="top">
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
              {user?.name ? (
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>

                    <DropdownToggle style={{ padding: "0px", border: "none" }}>
                      <div
                        className="btn btn-success-gradiant font-14"
                        style={{
                          display: "flex",
                          gap: "10px",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        <UserOutlined />
                        <div>{user.name}</div>
                      </div>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
                      <DropdownItem>User Info</DropdownItem>
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
                        }}
                      >
                        <ShoppingCartOutlined style={{ fontSize: "23px" }} />
                        Cart
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link className="nav-link" to="/signup">
                        Sign Up
                      </Link>
                    </NavItem>
                  </Nav>
                  <div className="act-buttons">
                    <Link
                      to="/login"
                      className="btn btn-success-gradiant font-14"
                    >
                      Log In
                    </Link>
                  </div>
                </Collapse>
              )}
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};
export default Header;
