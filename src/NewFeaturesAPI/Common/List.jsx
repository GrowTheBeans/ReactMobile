import React, { Component } from "react";
// 引入子组件
import ListItem01 from "./List-Item01.jsx";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Age: 20,
    };
  }
  render() {
    const { Age } = this.state;
    return (
      <div>
        <h2>父组件</h2>
        <ListItem01 ListAge={Age} />
      </div>
    );
  }
}
