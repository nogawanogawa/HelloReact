import React, {Component} from 'react';
import Rect from "./Rect";
import './App.css';

class App extends Component {
  msgstyle1 = {
    fontSize:"24pt",
    color:"#900",
    margin : "20px 20px",
    padding: "5px",
    borderBottom: "2px solid #900"
  }
  msgstyle2 = {
    fontSize:"20pt",
    color:"white",
    backgroundColor: "#900",
    margin : "20px 0px",
    padding: "5px",
    borderBottom: "2px solid #900"
  }
  btnstyle = {
    fontSize: "16pt",
    padding: "0px 10px"
  }
  constructor(props){
    super(props);
    this.state = {
      counter : 0,
      msg : "connt start",
      flg : true
    };
    this.doAction = this.doAction.bind(this)
  }

  doAction(e) {
    this.setState((state) => ({
      counter: state.counter + 1,
      msg: "count: " + state.counter,
      flg: !state.flg 
    }))
  }

  render(){
    return <div>
      <h1>React</h1>
      {this.state.flg ? 
        <p style={this.msgstyle1}>{this.state.msg}</p>
      :
        <p style={this.msgstyle2}>{this.state.msg}</p>
      }
      <button style={this.btnstyle} onClick={this.doAction}>Click</button>
    </div>;
  }
}

export default App;
