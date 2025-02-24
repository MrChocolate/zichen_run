# 原理：

computed 的核心原理基于 Vue 的响应式系统和依赖收集机制。当一个 computed 属性被定义时，Vue 会为其创建一个 Watcher 实例。在访问 computed 属性时，会触发其 getter 函数，在 getter 函数执行过程中，会收集依赖（即该 computed 属性所依赖的数据）。当依赖的数据发生变化时，会通知 Watcher 更新，从而重新计算 computed 属性的值。

# 1. 初始化 computed 属性

在 Vue 实例初始化阶段，会对 computed 选项进行处理。Vue 会遍历 computed 对象中的每个属性，为每个属性创建一个 Watcher 实例。

```javascript
// 简化的初始化 computed 属性的代码示例
function initComputed(vm, computed) {
  const watchers = (vm._computedWatchers = Object.create(null))
  for (const key in computed) {
    const userDef = computed[key]
    const getter = typeof userDef === 'function' ? userDef : userDef.get
    // 创建 Watcher 实例
    watchers[key] = new Watcher(vm, getter, () => {}, { lazy: true })
    // 将 computed 属性定义到 vm 实例上
    if (!(key in vm)) {
      defineComputed(vm, key, userDef)
    }
  }
}
```

# 2. 定义 computed 属性的 getter 和 setter

通过 Object.defineProperty 方法将 computed 属性定义到 Vue 实例上，同时为其设置 getter 和 setter。

```javascript
function defineComputed(target, key, userDef) {
  const setter = typeof userDef === 'function' ? () => {} : userDef.set
  Object.defineProperty(target, key, {
    get: createComputedGetter(key),
    set: setter
  })
}

function createComputedGetter(key) {
  return function computedGetter() {
    const watcher = this._computedWatchers && this._computedWatchers[key]
    if (watcher) {
      if (watcher.dirty) {
        // 计算新值
        watcher.evaluate()
      }
      if (Dep.target) {
        // 收集依赖
        watcher.depend()
      }
      return watcher.value
    }
  }
}
```

# 3. 依赖收集

当访问 computed 属性时，会触发其 getter 函数。在 getter 函数中，会调用 watcher.evaluate() 方法来计算 computed 属性的值。在计算过程中，如果访问了其他响应式数据，会触发这些数据的 getter，从而将 computed 的 Watcher 实例添加到这些数据的依赖列表中，完成依赖收集。

```javascript
class Watcher {
  constructor(vm, expOrFn, cb, options) {
    this.vm = vm
    this.getter = expOrFn
    this.cb = cb
    this.dirty = options.lazy
    this.value = this.dirty ? undefined : this.get()
  }

  get() {
    Dep.target = this
    const value = this.getter.call(this.vm, this.vm)
    Dep.target = null
    return value
  }

  evaluate() {
    this.value = this.get()
    this.dirty = false
  }

  depend() {
    if (this.deps.length) {
      for (let i = 0; i < this.deps.length; i++) {
        this.deps[i].depend()
      }
    }
  }
}
```

# 4. 缓存机制

computed 属性具备缓存机制，通过 watcher.dirty 标志来实现。当 watcher.dirty 为 true 时，表示 computed 属性的值需要重新计算；当 watcher.dirty 为 false 时，表示 computed 属性的值是最新的，直接返回缓存的值，避免重复计算。

# 5. 依赖更新

当依赖的数据发生变化时，会触发这些数据的 setter，从而通知所有依赖的 Watcher 更新。对于 computed 的 Watcher，会将 watcher.dirty 标志设置为 true，表示下次访问 computed 属性时需要重新计算。

```javascript
class Dep {
  constructor() {
    this.subs = []
  }

  depend() {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  notify() {
    const subs = this.subs.slice()
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}

class Watcher {
  // ...
  update() {
    if (this.lazy) {
      this.dirty = true
    } else {
      this.run()
    }
  }
  // ...
}
```

# 总结

computed 的实现主要依赖于 Vue 的响应式系统和 Watcher 机制。通过依赖收集和缓存机制，确保 computed 属性在依赖数据未发生变化时可以直接返回缓存值，提高了性能。当依赖数据发生变化时，会重新计算 computed 属性的值，并更新相关的 DOM。
