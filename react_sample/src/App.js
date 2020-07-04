import React, {Component} from 'react';
import Rect from "./Rect";
import './App.css';

class App extends Component {
  msgstyle = {
    fontSize:"24pt",
    color:"#900",
    margin : "20px 20px",
    padding: "5px",
    borderBottom: "2px solid #900"
  }
  constructor(props){
    super(props);
    this.state = {
      msg : "Hello Component"
    }
  }
  render(){
    return <div>
      <h1>React</h1>
      <p style={this.msgstyle}>{this.state.msg}</p>
      <p style={this.msgstyle}>{this.props.msg}</p>
    </div>;
  }
}

export default App;
