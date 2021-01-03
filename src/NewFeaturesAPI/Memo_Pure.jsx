// import React, { Component, PureComponent, memo } from "react";
import React, { Component, memo } from 'react';

/**
 * 运行时问题
 * 数据和视图关联： 重新 render,
 * 使用 PureComponent 
 */
// 子组件
// class Foo extends PureComponent {
  // render() {
    // console.log("foo 子组件");
    // return "父子组件数据 → 视图";
  // }
// }

// 使用函数式组件memo API 来进行运行时优化
const FooComponent = memo(function Foo() {
  console.log('foo 子组件');
  return "父子组件数据 → 视图";
})

//  父组件
export default class Memo_Pure extends Component {
  state = {
    coutt: 10,
  };
  OnCoutton = () => {
    this.setState({
      coutt: this.state.coutt + 1
    })
  };
  render() {
    const {coutt} = this.state;
    console.log("父组件APP");
    return (
      <div>
        <h2>{coutt}</h2>
        <button onClick={this.OnCoutton}>点击+1</button>
        <FooComponent />
      </div>
    );
  }
}
