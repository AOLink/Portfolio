import { Typography } from "@material-ui/core";
import React from 'react'
import CustomTimeline from '../Timeline/Timeline'
import profilepic from './profilepic.jpg'
import "./Profile.css"


const Profile = () => {
    return (
        <div className="profile container_shadow">

            <div className="profile_name">
            <Typography className="name">Adebowale</Typography>
            <Typography className="title">Software Engineer</Typography>            
            </div>
            
            {/* import React from 'react';
import logo from './logo.png'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Header; */}

            <figure className="profile_image">
                <img src={profilepic} alt="" />
                 {/* <img src={require('../../assets/images/profilePic.jpg')} alt=""/>      */}
                     {/* //just use require() = src={require("image path")}  */}

                {/* <img  alt="" src={require('./profilepic.jpg')} /> */}
            </figure>

            <div className="profile_information">
                 <CustomTimeline />
                 <br />
                 <button>Button</button>    
            </div>    
        </div>
    )
}

export default Profile
