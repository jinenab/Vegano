import React, { Component } from "react";

export default class Animation extends Component{
    state={
        imgs:["/images/salad1.jpg","/images/salad2.jpg","/images/salad3.jpg","/images/salad4.jpg"],
        index:0
    }

    previous(){
        if(this.state.index>0){
            this.setState({index:this.state.index-1})

        }
        else{
            this.setState({index:this.state.imgs.length-1})

        }
    }
    next(){        
        if(this.state.index<this.state.imgs.length-1){
            this.setState({index:this.state.index+1})

        }
        else{
            this.setState({index:0})

        }
    }
    animation(){
        setTimeout(()=>{
            this.next()

          
          },4000)
    }
    
    render(){
        return(
            <div className="Animation">
                <img  src={this.state.imgs.length===0?"":this.state.imgs[this.state.index]} alt="salad"></img>
                <img onClick={()=>{this.previous()}} id="previous" src="/images/next.png" alt="previos"></img>
                <img onClick={()=>this.next()} id="next" src="/images/next.png" alt="next"></img>
            </div>
        )
    }
}
