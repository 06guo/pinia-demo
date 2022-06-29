import { defineStore } from 'pinia'
export const testStore = defineStore('testStore', {
  state: () => {
    return {
      list: ['张三', '李四', '王五']
    }
  },
  getters: {},
  actions: {}
})