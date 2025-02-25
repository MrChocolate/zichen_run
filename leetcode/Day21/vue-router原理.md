Vue-router 实现路由懒加载主要是利用了 ES6 的动态导入（import()语法）。
原理是在定义路由时，不直接引入组件，而是使用 import()语法将组件的引入包裹起来。例如：

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('./views/Home.vue')
    }
  ]
})
```

当应用启动时，import('./views/Home.vue')并不会立即执行，不会加载 Home.vue 组件的代码。只有当路由切换到/home 路径，需要渲染 Home 组件时，import()函数才会被调用，浏览器会根据这个动态导入语句，异步加载 Home.vue 组件对应的 JavaScript 文件。这样可以将组件的加载延迟到实际需要时，减少初始加载时间，提高应用的性能。在底层，import()返回一个 Promise，当 Promise resolve 时，就获取到了组件的定义，Vue-router 会将其用于渲染对应的路由视图。
