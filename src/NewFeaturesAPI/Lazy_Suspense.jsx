import React, { Component, lazy, Suspense } from 'react'

const LazySuspenseAbout = lazy(() => import(/* webpackChunkName: "about" */ './Lazy_Suspense_About.jsx'));

/**
 * 程序时性能API
 * 滚动再指定区域才进行加载， 延迟加载 （Code Splitting）代码拆分
 * import 静态导入， 动态导入（返回一个promise）
 * 错误边界， 捕获后代组件加载错误， ErrorBoundary, 利用react生命周期方法 componentDidCatch()  或 static getDerivedStateFromError() 进行定义
 * 
 */
export default class Lazy_Suspense extends Component {
  state = {
    hasError: false
  }
  // 方案一
  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }
  // 方案二，静态方法
  // static getDerivedStateFromError() {
    // return {
      // hasError: true
    // }
  // }

  render() {
    // 传递为 jsx 语法
    if(this.state.hasError) {
      return <div>error错误</div>
    }
    return (
      <Suspense fallback={<div>loading</div>}>
        <LazySuspenseAbout/>
      </Suspense>
    )
  }
}
