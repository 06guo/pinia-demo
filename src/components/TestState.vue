<template>
  <div>{{store.helleWord}}</div>
  <div>{{store.count}}</div>
  <div>测试1234</div>
  <div>{{count}}</div>
  <div>{{helleWord}}</div>
</template>

<script setup lang="ts">
import { mainStore } from '../store/index'
// 使解构的数据变成响应式
import { storeToRefs } from 'pinia'
// 通过mainStore得到store实例，就可以在组件里调用store里的state定义的状态数据
const store = mainStore()
console.log(store, 'store====')
// 解构以后就不是响应式的了
// const { helleWord, count } = store
// 所以提供了 storeToRefs()方法
const { helleWord, count} = storeToRefs(store)
</script>

<style lang="scss" scoped>

</style>