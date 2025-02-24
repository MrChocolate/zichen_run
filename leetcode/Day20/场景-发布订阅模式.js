class EventEmit{
  constructor() {
    this.events={}
  }

  // 订阅
  on(event,callback) {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(callback)
  }

  // 发布
  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(callback => {
        callback.apply(this,args)
      })
    }
  }

  // 取消订阅
  off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(l =>l!==callback)
    }
  }
}

const emitter = new EventEmit()
const callback1 = (msg) => {
  console.log(`message1 received ${msg}`)
}
const callback2 = (msg) => {
  console.log(`message2 received ${msg}`)
}

emitter.on('message',callback1)
emitter.on('message', callback2)
emitter.emit('message', 'apple')
emitter.off('message', callback1)
emitter.emit('message','orange')