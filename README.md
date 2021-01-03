#### React 新特性

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

> `memo`

- 优化渲染性能

