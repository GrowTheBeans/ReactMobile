import React, { createContext } from "react";
import "./App.css";

// 设置多个 Context
// const BatteryContext = createContext(118); // 默认参数，通常定义使用在单页测试中
const BatteryContext = createContext();
const OnlineContext = createContext();

// 再定义消费者定义两个组件

class Leaf extends React.Component {
  render() {
    return (
      <BatteryContext.Consumer>
        {(battery) => (
          <OnlineContext.Consumer>
            {(onlines) => (
              <>
                <h2>Battery: {battery}</h2>
                <h3>OnLines: {String(onlines)}</h3>
              </>
            )}
          </OnlineContext.Consumer>
        )}
      </BatteryContext.Consumer>
    );
  }
}

class Middle extends React.Component {
  render() {
    return <Leaf />;
  }
}

// 提供生产者
class App extends React.Component {
  state = {
    battery: 110,
    online: false,
  };
  OnBattery = () => {
    this.setState({
      battery: this.state.battery - 1,
    });
  };
  OnLine = () => {
    this.setState({
      online: !this.state.online,
    });
  };
  render() {
    const { battery, online } = this.state;
    // 嵌套Provider,循序没要求, 当没Provider时，createContext 默认参数就发挥作用（一般做单元测试）
    return (
      <BatteryContext.Provider value={battery}>
        <OnlineContext.Provider value={online}>
          <button type="button" onClick={this.OnBattery}>
            Press按钮操作
          </button>
          <button type="button" onClick={this.OnLine}>
            OnLine切换按钮操作
          </button>
          <Middle />
        </OnlineContext.Provider>
      </BatteryContext.Provider>
    );
  }
}

export default App;
