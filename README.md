#### 一：React 生命周期

- **定义：** 从初始化到渲染到页面中到组件更新最后组件销毁

> `16.3` **之前**的生命周期

##### 1：组件初始化

- [x] 在构造函数`constructor`进行`state`和`props`

##### 2：组件挂载阶段（三个阶段）

- [x] 组件挂载之前`componentWillMount`

- [x] `render`渲染阶段

- [x] 组件挂载之后`componentDidMount`挂载`DOM`之后

##### 3: 页面进行修改，组件更新阶段（两种情况）

- 父组件发生改变子组件跟着发生改变

    - 父子组件更新，发生`componentWillReceiveProps`
    - 后面发生过程和下面一样

- 组件本身`states`发生改变重新渲染

    - `shouldComponentUpdate` 且接收两个参数（props | state） 返回一个布尔值 （false停止渲染）
    - `componentWillUpdate` 组件在更新之前
    - `render`
    - `componentDidUpdate` 组件在更新之后

##### 4：组件销毁阶段
- [x] 使用`componentWillUnmount` 

> `16.3` **之后** 的生命周期

- 在 **挂载时** 和 **更新时** 加入了

- [x] `getDerivedStateFromProps(props, state)` 静态函数用`static` 且接收两个参数，且动态修改`state`值

- [x] `getSnapshotBeforUpdate()`  且和 `componentDidUpdate(prevProps, prevState, snapshot)` 配合一起使用

#### 二：React 新特性

> 组件之间通信

- 使用 `props` 进行通信

- 使用 `Context` 进行通信

- 使用数据状态管理插件进行通信

- [x] 父子组件通信

- [x] 兄弟组件通信

- [x] 组件跨页面通信

> `Context` 

- 上下文，共享一个组件树是**全局**的数据，能够让数据在组件树中传递而不必一级级手动传递

- [x] `React.createContext(defaultValue?)` 创建唯一方式，参数可选

- [x] `Context.Provider` 并且提供一个变量值

- [x] `Context.Consumer` 消费者，接收`Provider`变量值

> `ContextType`

- 是`Context`一种语法糖

> `lazy`

- 懒加载，减少线性流量。需要和`Suspense`结合起来一起使用

> `Suspense`

> `ErrorBoundry`

- 错误边界，捕获错误信息

> `CreatePortal` 

- 创建自定义弹窗，根节点之外进行操作

> Ref API

- 操作`DOM`和组件

> `React.PureComponent` 浅层比较

- 还可以使用 `shouldComponentUpdate` 进行阻止渲染

> `memo`

- 优化渲染性能

