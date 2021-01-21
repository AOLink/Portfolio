import { Grid, Typography } from "@material-ui/core";
import React from 'react';
import resumeData from "../../utils/resumeData"
import './Resume.css';


const Resume = () => {
    return (
        <>
                       {/* // About Me  */}
            <Grid container className="section">
                <Grid item className="section_title">
                    <span></span>
                    <Typography variant="h6">About Me</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography className="aboutme_text">{resumeData.about}</Typography>
                </Grid>
            </Grid>
        {/*Experience/Education  */}        
            <Grid container className="section"></Grid>

        {/*Services  */}
            <Grid container className="section"></Grid>

        {/*Skills  */}
        <Grid container className="section"></Grid>

        {/*Contact */}
            <Grid container className="section"></Grid>    
        </>
        )
};

export default Resume
