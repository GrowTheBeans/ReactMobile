##### Hooks

- 使用函数式组件，有数据状态，和生命周
- 函数式组件中没有`this`

- 优化组件的三大问题
    - 函数组件无 `this` 问题
    - 自定义`Hook`方便复用状态逻辑
    - 副作用的关注点分离

> 副作用

- 发起网络请求
- 访问原型`DOM`元素
- 写入本地持久化缓存
- 解绑事件

> 定义规则

- 使用插件`eslint-plugin-react-hooks`

- `eslint` 配置安装

> useState() 设定状态

- 两个数组成员，第一个参数是本身，第二个是方法

> useEffect()

- 在挂载之后，更新之后，卸载之前

> useContext()

- 在 `hooks` 中有`Consumer` 并没有`ContextType`
- 使用`useState` 

> useMemo() 和 Callback Hooks

- Callback 是 Memo变种

> Ref Hooks（两种使用场景）

- 获取子组件或`DOM`节点的句柄
- 渲染周期之间共享数据的存储

> 自定义 Hooks

> Hooks 常见问题




