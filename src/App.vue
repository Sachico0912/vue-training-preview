<script setup>
import { ref } from 'vue'

const text = ref('一句話')

const todos = [
  {
    id:1,
    name:'購買雜貨',
    dueDate:'2024-07-30',
    completed:true
  },
  {
    id:2,
    name:'完成報告',
    dueDate:'2024-08-01',
    completed:true
  },
  {
    id:3,
    name:'清理房間',
    dueDate:'2024-07-28',
    completed:true
  },
  {
    id:4,
    name:'計畫假期',
    dueDate:'2024-08-05',
    completed:false
  },
  {
    id:5,
    name:'處裡稅務',
    dueDate:'2024-08-10',
    completed:false
  }
]

</script>

<template>
<h1>目前是 App.vue </h1>
<h2>{{ text }}</h2>
<input type="text" v-model="text">
<hr>
<table>
  <thead>
    <tr>
      <th>待辦事項名稱</th>
      <th>到期日</th>
      <th>是否已完成</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="todo in todos" :key="todo.id">
      <td>{{ todo.name }}</td>
      <td>{{ todo.dueDate }}</td>
      <td>{{ todo.completed ? '是' : '否' }}</td>
    </tr>
  </tbody>
</table>

</template>

<style scoped>

</style>
