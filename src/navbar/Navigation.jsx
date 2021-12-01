import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand to="/">Employee Management</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/">
                            <Nav.Link>List Employees</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/addEmp">
                            <Nav.Link>Add Employees</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Navigation;
