import React from 'react'
import './Footer.css'
import { Typography } from "@material-ui/core";



const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_left">
                <Typography className="footer_name"></Typography>
            </div>
            <div className="footer_right">
                <Typography className="footer_copyright">
                    Designed and Developed by <a href="" className="">Adebowale Oduwole</a> 

                </Typography>
            </div>
            
        </div>
    )
}


export default Footer
