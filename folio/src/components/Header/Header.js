import React from 'react'
// import { Router } from "react-router";

import {
    Button,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    HomeRounded,
    SchoolRounded,
    WorkRounded,
    Facebook,
    Twitter, 
    LinkedIn, 
    GitHub,
    Telegram
} from "@material-ui/icons"; 
import { Link, withRouter, NavLink } from "react-router-dom"

const Header = (props) => {

    const pathName = props?.location?.pathname;



    

    return (
        <Navbar expand="lg" sticky="top" className="header">
             {/* Home */}
             <Nav.Link as={NavLink} to="/">
                
                <Navbar.Brand className="header_home"> 
                    <HomeRounded />
                 </Navbar.Brand>

            </Nav.Link> 

            <Navbar.Toggle />

            <Navbar.Collapse>
                <Nav>
                    {/* Resume */}
                     <Nav.Link as={NavLink} to="/" className={pathName == "/" ? "header_link_active" : "header_link"}>
                         Resume

                     </Nav.Link>
                     {/* Portfolio */}
                     <Nav.Link as={NavLink} to="/portfolio" className={pathName == "/portfolio" ? "header_link_active" : "header_link"}>
                        Portfolio

                     </Nav.Link>

                     
                </Nav>
            </Navbar.Collapse>
        </Navbar> 
    )


}

export default Header
