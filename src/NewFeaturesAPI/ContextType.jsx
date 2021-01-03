import React, { Component, createContext } from 'react'

const BatteryContext = createContext();


class Laty extends Component {
  static contextType = BatteryContext;
  render() {
    let batterys = this.context
    return (
      <h3>Batterys显示值：{batterys}</h3>
    )
  }
}

class Middle extends Component {
  render() {
    return (
      <Laty />
    )
  }
}

export default class ContextType extends Component {
  state = {
    battery: 112
  }
  OnBattery = () => {
    this.setState({
      battery: this.state.battery + 2
    })
  }
  render() {
    const {battery} = this.state;
    return (
      <BatteryContext.Provider value={battery}>
        <button type="button" onClick={this.OnBattery}>battery按钮+2</button>
        <Middle />
      </BatteryContext.Provider>
    )
  }
}
