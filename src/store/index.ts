// 这个文件的代码，只做三件事
// 1、定义状态容器（仓库）
// 2、修改容器中的state
// 3、仓库中action的使用
import { defineStore } from 'pinia'
// defineStore第一个参数相当于为容器起了一个名字，唯一不重复，第二个参数可以理解为配置对象，
export const mainStore = defineStore('main', {
  // 用来存储全局的状态
  state: () => {
    return {
      helleWord: 'hello world',
      count: 0
    }
  },
  // 用来监视或者说计算状态的变化，有缓存的功能
  getters: {},
  // 对state里数据变化的业务逻辑，需求不同，编写逻辑不同，说白了就是修改state的全局状态数据
  actions: {}
})