import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';

export default class Footer extends Component{
   


    
    render(){
        return(
            <div className="Footer">
                <div className="About-us"><h2>About us</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> </div>
                <div className="Hours"><h2>Working Hours</h2>
                <h3>Monday-Satuarday</h3>
                <h4>11:00AM-00:00PM</h4>
                </div>
                <div className="Follow"><h2>Follow</h2>
                <div id="Social">
                <SocialIcon url="http://www.facebook.com"></SocialIcon>
                    <SocialIcon url="http://www.instagram.com"></SocialIcon>
                    <SocialIcon url="http://www.gmail.com"></SocialIcon>
                    <SocialIcon url="http://www.youtube.com"></SocialIcon>
                </div>
                

                </div>
     
            </div>
        )
    }
}
