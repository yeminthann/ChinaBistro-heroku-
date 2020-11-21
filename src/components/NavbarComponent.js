import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import {  NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class NavBar extends Component {
        state = {
            isNavOpen: false
        };

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    blurNav = () => {
        this.setState({
            isNavOpen: false
        })
    }

    render() {
        return (
            <>
            <Navbar dark expand = "md">
                <div className = "container">
                    <NavbarBrand>
                        <Link to = "/home">
                        <img src = "/assets/images/logo.png" width = "80" height = "80" alt = "logo.png"/>
                        </Link>
                        <p className = "d-none d-md-block"> <img src = "/assets/images/star.png" alt = "kosher"/>Kohser Certified</p>
                    </NavbarBrand>
                    <NavbarToggler onClick = {this.toggleNav} onBlur = {this.blurNav} />
                    <Collapse navbar isOpen = {this.state.isNavOpen} className = "text-center">
                    <hr className = "bg-info" />
                    <Nav navbar>
                        <NavItem>
                            <NavLink className = "nav-link" to = "/home">
                                <span className = "fa fa-home fa-lg"></span>
                                 Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className = "nav-link" to = "/menu">
                                <span className = "fa fa-list fa-lg">
                                </span> Menu
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className = "nav-link" to = "/about">
                                <span className = "fa fa-info-circle fa-lg">
                                </span> About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className = "nav-link" to = "/awards">
                                <span className = "fa fa-certificate fa-lg"></span>
                                 Awards
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className = "nav-link" to = "/contact">
                                <span className = "fa fa-address-card fa-lg"></span>
                                 Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </div>
            </Navbar>
            </>
        );
    }
}

export default NavBar;