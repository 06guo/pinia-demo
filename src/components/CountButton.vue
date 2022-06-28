<template>
  <div>
    <button @click="handleClick">点击增加</button>
    <button @click="handleClickPatch">修改数据（$patch）</button>
    <button @click="handleClickMethod">修改数据（传递箭头函数）</button>
  </div>
</template>

<script setup>
import { mainStore } from '../store/index'
const store= mainStore()
const handleClick = () => {
  store.count++
  store.helleWord = store.helleWord === 'hello html' ? 'hello world' : 'hello html'
}
const handleClickPatch = () => {
  // $Patch 修改多条数据
  // $patch 加快修改速度，对程序的性能有很大的好处，所以如果多条数据同时更新，推荐使用$patch
  store.$patch({
    // 可以通过store.count++直接修改，但是如果同时修改多条数据，建议使用$patch方法
    count: store.count + 2,
    helleWord: store.helleWord === 'hello html' ? 'hello world' : 'hello html'
  })
}
const handleClickMethod = () => {
  // $patch方法，参数使用的是一个对象，还有一种方式是传递函数，这种方法适合复杂数据的修改，比如对象，数组的修改
  store.$patch((state) => {
    // state就是store仓库里的state，可以直接在函数里修改任何状态数据的值
    state.count++,
    state.helleWord = state.helleWord === 'hello html' ? 'hello world' : 'hello html'
  })
}
</script>

<style lang="scss" scoped>

</style>