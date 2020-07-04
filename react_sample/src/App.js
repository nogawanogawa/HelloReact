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
  btnstyle = {
    fontSize: "20pt",
    padding: "0px 10px"
  }
  constructor(props){
    super(props);
    this.state = {
      msg : "Hello Component"
    };
    let timer = setInterval(() => {
      this.setState((state) => ({
        msg: state.msg + "!"
      }))
    }, 1000);
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
