import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * 子组件设置默认值
 */
export default class ListItem01 extends Component {
  static defaultProps = {
    age: 122
  }
  static propTypes = {
    age: PropTypes.number
  }
  render() {
    return (
      <div>
        <h3>子组件~显示值：{this.props.age}</h3>
      </div>
    )
  }
}
