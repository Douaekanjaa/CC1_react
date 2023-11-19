import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import Button_dl from '../dark_light/button_dl';
import { useTheme } from '../dark_light/ThemeContext'; // Import useTheme hook

export default function MyNav() {
  const { darkMode } = useTheme(); // Use the useTheme hook to get darkMode

  return (
    <>
      <Navbar expand="lg" className={`w-100 mx-auto${darkMode ? ' dark-mode' : ''}`}>
        <LinkContainer to="/home">
          <Navbar.Brand>CC1</Navbar.Brand>
        </LinkContainer> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/todolist">
              <Nav.Link>Todo List</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/calculator">
              <Nav.Link>Calculator</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/weather">
              <Nav.Link>Weather</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/slider">
              <Nav.Link>Slider</Nav.Link>
            </LinkContainer>
          </Nav>
          <Button_dl />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
