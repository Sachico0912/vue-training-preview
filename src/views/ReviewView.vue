<template>
    <h1>複習</h1>
    <div>
    <input type="text" v-model="nweName">{{ nweName }}
    <input type="number" v-model="newNumber">{{ newNumber }}
    <button type="button" @click="addProduct">新增到資料集裡面</button>
    </div>
    {{ data }}
    <table>
        <thead>
            <tr>
                <th>標題</th>
                <th>價格</th>
                <th>調整價格</th>
                <th>刪除</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td><input type="number" v-model="item.price"></td>
                <td><button type="button" @click="delItem(item.id)">刪除品項</button></td>
            </tr>
        </tbody>
    </table>
    <h2>總額:{{ sum }}</h2>
</template>


<script setup>

import { computed, ref } from 'vue'

const nweName = ref('');
const newNumber = ref(0);

const data = ref([
    { id:1, name:"珍珠奶茶", price: 50 },
    { id:2, name:"冬瓜檸檬", price: 45 },
    { id:3, name:"翡翠檸檬", price: 55 },
    { id:4, name:"四季春茶", price: 45 },
    { id:5, name:"阿薩姆奶茶", price: 50 },
    { id:6, name:"檸檬冰茶", price: 45 },
    { id:7, name:"芒果綠茶", price: 55 },
    { id:8, name:"抹茶拿鐵", price: 60 },
]);

const addProduct = () => {
    console.log('addProduct',data.value);
    data.value.push({
        id: new Date().getTime(),
        name: nweName.value,
        prcie: newNumber.value,
    });
    nweName.value = '';
    newNumber.value = 0;
}

const delItem = (id) => {
    console.log('delItem', id);
    const index = data.value.findIndex((item)=> item.id === id);
    console.log(index)
    data.value.splice(index,1)
}

const sum = computed(()=>{
console.log('sum', data.value);
let tempSum = 0;
data.value.forEach((item)=>{
    tempSum = item.price + tempSum;
});
console.log(tempSum);
return tempSum

})

</script>


<style>

</style>