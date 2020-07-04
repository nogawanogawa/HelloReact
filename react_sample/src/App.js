import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render(){
    return <div>
      <h1>React</h1>
      <Rect x="50" y="50" w="150" h="150" color="cyan"></Rect>
      <Rect x="150" y="100" w="150" h="150" color="magenta"></Rect>
      <Rect x="100" y="150" w="150" h="150" color="black"></Rect>
    </div>;
  }
}

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

export default App;
