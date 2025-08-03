<script setup> 
import { ref } from 'vue'

const text = ref('預設文字')

const todos = ref([
    {
        id:1,
        text:'學習Vue啦',
        imageUrl:'https://plus.unsplash.com/premium_photo-1749326817907-80156e81a730?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },    {
        id:2,
        text:'我也想學React',
        imageUrl:'https://images.unsplash.com/photo-1746555697990-3a405a5152b9?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8'
    },    {
        id:3,
        text:'Vue魔法',
        imageUrl:'https://images.unsplash.com/photo-1751149784328-f75fb46c0e8d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D'
    }
])

const tempEdit = ref(
    [
        {
            id:'',
            text:''
    }
    ]
)

// const addtodo =()=>{
//     todo.value.push(
//         {text:text.value,
//             id: new Date().getTime()
//         }
//     )
//     }

function addTodo(){
    todos.value.push(
        {
            text:text.value,
            id:new Date().getTime()
        }
    );
    text.value = '';
}

// const removeTodo = (todo)=>{
//     console.log(todo)
// }

function removeTodo(todo){
    console.log(todo)
    const index = todos.value.findIndex(item => item.id === todo.id)
    console.log(index)

    todos.value.splice(index,1)
}

function prepareEdit(todo){
    tempEdit.value = {...todo}; //拷貝

    console.log(tempEdit.value)
    //物件傳參考，純JS
}

function confirmEdit(){
    const index = todos.value.findIndex(item => item.id === tempEdit.value.id)
    console.log(index,todos.value);
    todos.value[index] = tempEdit.value;
}


</script>

<template>
    <input type="text" v-model="text">
    <button type="button" @click="addTodo">新增</button>
    <hr>
    <div v-for="todo in todos" :key="todo.id">
    {{ todo.text }}<button type="button" @click="removeTodo(todo)">刪除</button>
    <button type="button" @click="prepareEdit(todo)">編輯</button>
    {{ todo.imageUrl }}
    <img :src="todo.imageUrl" alt="">
    </div>
    <hr>
    <div v-if="tempEdit.id">
    <h2>編輯區域</h2>
    <p>當前修改的值:{{ tempEdit.text }}</p>
    <input type="text" v-model="tempEdit.text">
    <button type="button" @click="confirmEdit">確認編輯</button>
     <button type="button" @click="tempEdit={}">取消編輯</button>
    </div>
</template>


