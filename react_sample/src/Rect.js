import React, {Component} from 'react';

class Rect extends Component{
    style = {};
    constructor(props){
      super(props)
      this.style = {
        backgroundColor : props.color,
        position : "absolute",
        left : props.x + "px",
        top : props.y + "px",
        width : props.w + "px",
        height : props.h + "px"
      }
    }
    render(){
      return <div style={this.style}></div>
    }
  }

export default Rect;
