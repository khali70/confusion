import React, { useState } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function Header() {
  let username, password, rem;
  const [state, toggleNavState] = useState(() => {
    return { isNavOpen: false };
  });
  const [modal, toggleModalState] = useState(() => {
    return { isModalOpen: false };
  });
  const toggleNav = () => {
    toggleNavState({ isNavOpen: !state.isNavOpen });
  };
  const toggleModal = () => {
    toggleModalState({ isModalOpen: !modal.isModalOpen });
  };
  const handelLogin = (e) => {
    e.preventDefault();
    alert(
      `
     User name ${username.value} 
     password is ${password.value}
     remember : ${rem.value}
    `
    );
  };
  return (
    <React.Fragment>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={() => toggleNav()} />
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="assets/images/logo.png"
              height="30"
              width="41"
              alt="Ristorante Con Fusion"
            />
          </NavbarBrand>
          <Collapse isOpen={state.isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <span className="fa fa-info fa-lg"></span> About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg"></span> Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg"></span> Contact Us
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button outline onClick={toggleModal}>
                  <i className="fa fa-sign-in"></i>
                  Login
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante con Fusion</h1>
              <p>
                We take inspiration from the World's best cuisines, and create a
                unique fusion experience. Our lipsmacking creations will tickle
                your culinary senses!
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
      <Modal isOpen={modal.isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={handelLogin}>
            <FormGroup>
              <Label htmlFor="username">User Name</Label>
              <Input
                type="text"
                id="username"
                name="username"
                innerRef={(input) => (username = input)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">User password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                innerRef={(input) => (password = input)}
              />
            </FormGroup>
            <FormGroup check>
              <Label htmlFor="rememberMe" check>
                <Input
                  type="checkbox"
                  name="rememberMe"
                  innerRef={(input) => (rem = input)}
                />
                Remember Me
              </Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary" block>
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

export default Header;
