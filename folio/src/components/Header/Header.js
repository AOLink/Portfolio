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

import resumeData from '../../utils/resumeData'

import CustomButton from '../Button/Button'

import './Header.css'

const Header = (props) => {

    const pathName = props?.location?.pathname;

    return (
        <Navbar expand="lg" sticky="top" className="header">
             {/* Home */}
             <Nav.Link as={NavLink} to="/" className={'header_navlink'}>
                
                <Navbar.Brand className="header_home"> 
                    <HomeRounded />
                 </Navbar.Brand>

            </Nav.Link> 

            <Navbar.Toggle />

            <Navbar.Collapse>
                <Nav className="header_left">
                    {/* Resume */}
                     {/* <Nav.Link as={NavLink} to="/" className={pathName == "/" ? "header_link_active" : "header_link"}> */}
                         <Nav.Link as={NavLink} to="/" className={pathName == "/" ? "header_link_active" : "header_link"}>
                         Resume

                     </Nav.Link>
                     {/* Portfolio */}
                     <Nav.Link as={NavLink} to="/portfolio" className={pathName == "/portfolio" ? "header_link_active" : "header_link"}>
                        Portfolio

                     </Nav.Link>

                     
                </Nav>
                <div className="header_right">
                    {/* Use Object.keys() to map through objects */}
                    {Object.keys(resumeData.socials).map(key =>  (
                        <a href={resumeData.socials[key].link} target="_blank">{resumeData.socials[key].icon}</a>
                    ))}
                    <CustomButton  className="no_caps" style="text-transform-none" text={'Reach Out'} icon={<Telegram />} />
                </div>
            </Navbar.Collapse>
        </Navbar> 
    )


}

export default withRouter(Header)
