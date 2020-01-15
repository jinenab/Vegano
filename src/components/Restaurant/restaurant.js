import React, { Component } from "react";

export default class Restaurant extends Component{
    state={
        opacity:0.10,
        imgs:["images/restaurant1.jpg",
        "images/restaurant2.jpg",
        "images/restaurant3.jpg",
    ],
        index:0
    }
     changeOpacity(){

        setTimeout(()=>{
                    if(this.state.opacity<=0.90){

                   this.setState({
                
                            opacity:this.state.opacity+0.10})
                    }
                   
          },200)    
        
        }


    changeImage(){
       
  if(this.state.index===this.state.imgs.length-1){
    this.setState({

        index:0})
}
else{
    this.setState({

        index:this.state.index+1,
    })

}
       

  
  }

    

   
   
    render(){
        this.changeOpacity()

        
        return(
            <div className="Restaurant">
                <img onClick={()=>                
                  { this.setState({opacity:0.1})
                       this.changeImage()}} alt="Restaurant" style={{opacity:this.state.opacity}} src={this.state.imgs[this.state.index]}></img>
                <h3>Since 1997 </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            </div>
        )
    
}
}