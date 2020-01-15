import React, { Component } from "react";

export default class About extends Component{
   
    state={
        paragraphs:["Vegano Restaurant","No Meat!!","No Animal's products!!","Green everywhere"],
        index:0
    }
    changeParagraph(){


        setTimeout(()=>{
            this.state.index===this.state.paragraphs.length-1?this.setState({index:0}):
            
            this.setState({index:this.state.index+1})

          
          },2000)

    }
    render(){
        this.changeParagraph()
        return(
            <div className="About">
    <h2>{this.state.paragraphs[this.state.index]}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                
            </div>
        )
    }
}
