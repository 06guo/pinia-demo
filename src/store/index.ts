// 这个文件的代码，只做三件事
// 1、定义状态容器（仓库）
// 2、修改容器中的state
// 3、仓库中action的使用
import { defineStore } from 'pinia'
import { testStore } from './test'
// defineStore第一个参数相当于为容器起了一个名字，唯一不重复，第二个参数可以理解为配置对象，
export const mainStore = defineStore('main', {
  // 用来存储全局的状态
  state: () => {
    return {
      helleWord: 'hello world',
      count: 0,
      phone: '12020220201'
    }
  },
  // 用来监视或者说计算状态的变化，有缓存的功能
  getters: { // getters是有缓存性，可以看到，方法只调用了一次
    // getter会自动正常，会清空以前的数据缓存
    phoneHidden(state): string {
      console.log('phoneHidden 被调用了')
      // return state.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
      // getters里也可以使用this进行操作
      return this.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
    }
  },
  // 对state里数据变化的业务逻辑，需求不同，编写逻辑不同，说白了就是修改state的全局状态数据
  actions: { // 在用actions的时候，不能使用箭头函数，因为箭头函数绑定的是外部的this
    // 修改复杂的过程，可以在actions里定义函数，然后在组件里再调用函数
    changeState () {
      this.count++
      this.helleWord = 'hello html'
    },
    getList () {
      console.log(testStore().list)
    }
  }
})