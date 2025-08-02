<script setup>
import { ref } from 'vue'

const text = ref('一句話')

const num =ref(0)

setInterval(()=>{
  num.value = num.value+1 //a=a+1;a+=1;a++;++a
  console.log(num.value)
},500)


</script>

<template>
<h1>Vue 的資料建構</h1>
<h2>{{ text }}</h2>
{{ num }}<input type="number" v-model="num">


</template>

<style scoped>

</style>
