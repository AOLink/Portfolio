import { Typography } from "@material-ui/core";
import React from 'react'
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'
import resumeData from '../../utils/resumeData'
// import PersonOutlineOutlinedIcon from '@material-ui-/icons/PersonOutlineOutlined'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import profilepic from '/Users/Student/Desktop/repos/Portfolio/folio/src/components/Profile/profilepic.jpg'
// import timeline from '../Timeline/Timeline'
import "./Profile.css"
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomButton from '../Button/Button'
import GetAppIcon from '@material-ui/icons/GetApp';


const CustomTimelineItem = ({title, text, link}) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className="timeline_content">
        {/* // this duplicated code lead to some odd double errors  */}

            {/* <span> {title} </span> */}
            {link ? (<Typography className="timeline_text">
                        <span>{title}</span>
                        <a href ={link} target='_blank'>{text}</a>       
                     </Typography>) : (
                <Typography className="timeline_text">
                    <span>{title}:</span> {text}
                </Typography>
            )}
        </TimelineContent>
        
    </TimelineItem>
);

const Profile = () => {
    return (  
        <div className="profile container_shadow">

            <div className="profile_name">
              <Typography className="name">{resumeData.name}</Typography>
              <Typography className="title">{resumeData.title}</Typography>            
            </div>
            {/* Fix Via https://create-react-app.dev/docs/adding-images-fonts-and-files/ */}
            {/* import React from 'react';
import logo from './logo.png'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Header; */}

            <figure className="profile_image">
                <img src={profilepic} />
                {/* <img src={require('/Users/Student/Desktop/repos/Portfolio/folio/src/components/Profile/profilepic.js')} alt="" /> */}
                 {/* <img src={require('../../assets/images/profilePic.jpg')} alt=""/>      */}
                     {/* //just use require() = src={require("image path")}  */}

                {/* <img  alt="" src={require('./profilepic.jpg')} /> */}
            </figure>

            <div className="profile_information">
                 <CustomTimeline icon={<PersonOutlineIcon />}>
                    <CustomTimelineItem title="Name" text={resumeData.name} />
                    <CustomTimelineItem title="Title" text={resumeData.title} />
                    <CustomTimelineItem title="Email" text={resumeData.email}/>
                    {/* <CustomTimelineItem title="name" text={resumeData.name}></CustomTimelineItem> */}
                    
                 {Object.keys(resumeData.socials).map((key) => (
                    <CustomTimelineItem title={key + ": "}  text={resumeData.socials[key].text} link={resumeData.socials[key].link}></CustomTimelineItem>

                    ))}
                 </CustomTimeline>
                 <div className="button_container">
                    <CustomButton text={'Resume'} icon={<GetAppIcon />} /> 

                 </div>
            </div>     
        </div>
    )
}

export default Profile
