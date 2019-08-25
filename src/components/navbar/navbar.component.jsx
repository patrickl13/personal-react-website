import React from 'react';
import { Nav, Navbar, Alert } from 'react-bootstrap';


export const NavigationBar = () => (
<>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Patrick Leduc</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
    </Navbar>
    <Alert variant="primary">
        <p> This website runs on a Kubernetes Cluster! </p>
    </Alert>
</>
);