<script setup> 
import { ref } from 'vue'

const text = ref('預設文字')

const todos = ref([
    {
        id:1,
        text:'學習Vue',
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


