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
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import { NavLink } from "react-router-dom";
import { URL } from "../shared/baseURL";
import { connect } from "react-redux";

import { loginUser, logoutUser } from "../Redux/Action/Actions";
/**
 * @param {userData} auth user state
 * @param {function} login login action creator
 * @param {function} logoutUser logout action creator
 */
function Header({ login, auth, logoutUser }) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [rememberMe, setremmeburMe] = useState(false);
  const [showpass, toggelpass_visiabilty] = useState(false);
  const [state, toggleNavState] = useState(() => {
    return { isNavOpen: false };
  });
  const [modal, toggleModalState] = useState(() => {
    return { isModalOpen: false };
  });
  /**
   * @description at the mobile screen toggle the navbar navigations on or off
   */
  const toggleNav = () => {
    toggleNavState({ isNavOpen: !state.isNavOpen });
  };
  /**
   * @description toggel the modal when user want to login
   */
  const toggleModal = () => {
    toggleModalState({ isModalOpen: !modal.isModalOpen });
  };
  const reset = () => {
    setusername("");
    setpassword("");
    setremmeburMe(false);
    toggleModal();
  };
  /**
   * @description run login action creator with { username, password, rememberMe } af user sumbit loging form
   * @param {HTMLElement} e
   */
  const handelLogin = (e) => {
    e.preventDefault();
    const creds = { username, password, rememberMe };
    login(creds);
    reset();
  };
  const handleLogout = () => {
    logoutUser();
  };
  return (
    <React.Fragment>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={() => toggleNav()} />
          <NavbarBrand className="mr-auto" href="/">
            <img
              src={`${URL}images/logo.png`}
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
                <NavLink className="nav-link" to="/favorites">
                  <i className="fa fa-heart fa-lg"></i> My Favorites
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
                {/* display loging if user not loged in , Logout if user logged in  */}
                {!auth.isAuthenticated ? (
                  <Button outline onClick={toggleModal}>
                    <span className="fa fa-sign-in fa-lg"></span> Login
                    {auth.isFetching ? (
                      <span className="fa fa-spinner fa-pulse fa-fw"></span>
                    ) : null}
                  </Button>
                ) : (
                  <div>
                    <div className="navbar-text mr-3">{auth.user.username}</div>
                    <Button outline onClick={handleLogout}>
                      <span className="fa fa-sign-out fa-lg"></span> Logout
                      {auth.isFetching ? (
                        <span className="fa fa-spinner fa-pulse fa-fw"></span>
                      ) : null}
                    </Button>
                  </div>
                )}
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
      {/* login modal */}
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
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">User password</Label>
              <InputGroup>
                <Input
                  type={!showpass ? "password" : "text"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <InputGroupAddon addonType="prepend">
                  <Button
                    color="primary"
                    className="border-0"
                    onClick={(e) => toggelpass_visiabilty(!showpass)}
                  >
                    {showpass ? (
                      <i class="fa fa-eye"></i>
                    ) : (
                      <i class="fa fa-eye-slash"></i>
                    )}
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
            <FormGroup check>
              <Label htmlFor="rememberMe" check>
                <Input
                  type="checkbox"
                  name="rememberMe"
                  value={rememberMe}
                  onChange={(e) => setremmeburMe(e.target.value)}
                />
                Remember Me
              </Label>
            </FormGroup>
            {/* TODO add register user */}
            <Button type="submit" value="submit" color="primary" block>
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}
const MapStateToProps = (state) => ({
  auth: state.auth,
});
const MapDispachToProps = (dispatch) => ({
  login: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
});
export default connect(MapStateToProps, MapDispachToProps)(Header);
