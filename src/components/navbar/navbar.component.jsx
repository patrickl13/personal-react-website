import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Alert, NavItem } from 'react-bootstrap';



export const NavigationBar = () => (
<>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Patrick Leduc</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/experience">Experience</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/education">Education</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
        </Nav>
    </Navbar>
    <Alert variant="primary">
        <p> Placeholder </p>
    </Alert>
</>
);