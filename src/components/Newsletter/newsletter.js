import React, { Component } from "react";

export default class Newsletter extends Component{
   
    
    render(){
        return(
            <div className="Newsletter">
                <h1>Signup newsletter</h1>
                <p>Get news about our sevices and discounts now.</p>
                <input placeholder="Name"></input>
                <input id="email" placeholder="Email"></input>
                <button>Send</button>

            </div>
        )
    }
}
