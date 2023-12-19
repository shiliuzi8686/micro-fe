
// 自定义元素
class MyElemnt extends HTMLElement {
  // 声明需要监听的属性名
  static get observedAttributes() {
    return ['name', 'url']
  }

  constructor() {
    super()
  }

  connectedCallback() {
    // 元素被插入到DOM时执行，此时去加载子应用的静态资源并渲染
    console.log('micro-app is connected')
  }

  disconnectedCallback() {
    // 元素从DOM中删除时执行，此时进行一些卸载操作
    console.log('micro-app is disconnected')
  }
}