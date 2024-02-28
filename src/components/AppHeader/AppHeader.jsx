import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import route from "./../../routes/route.json";
import { NavLink } from "react-router-dom";

const AppHeader = () => {
  const { lightToDarkHandler, isDark, darkToLightHandler } =
    useContext(ThemeContext);

  const iconClasses = isDark
    ? "bi bi-brightness-high-fill fs-5"
    : "bi bi-moon-fill fs-5";

  const darkClickHandler = isDark ? darkToLightHandler : lightToDarkHandler;

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Users</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to={route.USERS_FORM} style={{ marginRight: "20px" }}>
              Create User
            </NavLink>
            <NavLink to={route.USERS_FROM_DB}>All User</NavLink>
          </Nav>
        </Container>
        <Button className="ms-3" onClick={darkClickHandler}>
          <i className={iconClasses}></i>
        </Button>
      </Navbar>
    </>
  );
};

export default AppHeader;
