import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header(props) {

    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <Navbar color="light" light expand="lg">
            <div className="container">
                <NavbarBrand className="ml-auto justify-content-start" href="/">
                    <span className='pl-3'><u>Todd Gann</u></span>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar className="ml-auto">
                        <NavItem>
                            <NavLink style={{ fontSize: "25px" }} className="nav-link ml-5 pl-3" to="/about">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ fontSize: "25px" }} className="nav-link ml-5 pl-3" to="/projects">
                                Projects
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ fontSize: "25px" }} className="nav-link ml-5 pl-3" to="/contact">
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    );
}

export default Header;