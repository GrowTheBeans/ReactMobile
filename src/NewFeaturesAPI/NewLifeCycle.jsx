import React, { Component } from "react";

export default class NewLifeCycle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: 10
    }
    console.log('constructor：构造函数');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps: 挂载之前');
    console.log(props, state);
    return state;
  }
  componentDidMount() {
    console.log('componentDidMount：挂载之后');
  }
  getSnapshotBeforUpdate() {
    console.log('getSnapshotBeforUpdate');
    return 'getSnapshotBeforUpdate'
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
  }
  OnBtn = () => {
    this.setState({
      age: this.state.age + 10
    })
  }
  render() {
    const {age} = this.state;
    return (
      <div>
        <h2>新版本16.3以后的{age}生命周期</h2>
        <button onClick={this.OnBtn}>渲染之后</button>
      </div>
    );
  }
}
