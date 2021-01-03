import React, { Component, PureComponent } from 'react'

/**
 * 
 */
export default class LifeCycle extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      nams: '生命周期'
    }
    console.log('constructor构造函数');
  }
  componentWillMount() {
    console.log('componentWillMount组件挂载之前')
  }
  componentDidMount() {
    console.log('componentDidMount组件挂载之后');
  }
  // shouldComponentUpdate(props, state) {
    // console.log(props, state);
    // console.log('shouldComponentUpdate: 返回一个布尔值，false停止渲染');
    // if(state.nams === '生命周期') {
      // return true;
    // }
    // return false;
  // }
  componentWillUpdate() {
    console.log('componentWillUpdate：更新组件以后渲染更新之前');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate: 更新组件以后渲染更新之后');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount：组件卸载之后')
  }
  OnBtn = () => {
    this.setState({
      nams: this.state.nams + '更改以后数据'
    })
  }
  render() {
    const {nams} = this.state;
    console.log('render渲染时候');
    return (
      <div>
        生命周期: 渲染之后值：{nams} - 组件state更新
        <button onClick={this.OnBtn}>点击更改值</button>
      </div>
    )
  }
}
