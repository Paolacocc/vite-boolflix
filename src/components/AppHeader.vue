<script>
import { store } from "../store"

export default {
    name: "AppHeader",
    emits: ['filter'],
    data() {
        return {
            store,


        }
    }
}
</script>

<template>
    <div class="header">
    <div class="container">
    <div class="d-flex justify-content-between align-items-center p-4">
        <img src="../assets/img/BOOLFLIX.png" alt="">
        <div class="serch-bar ">
            <label for="search"></label>
            <input type="text" id="search" v-model.trim="store.writtenText" >
            <button class="btn-red" @click="$emit('filter')">INVIA</button>
        </div>
    </div>
    </div>
</div>
</template>

<style scoped lang="scss">
.header {
   background-color: black;
   height: 80px;
   .btn-red {
    border: none;
    background-color: red;
    color: white;
    border-radius: 5px;
    margin-left: 10px;
    padding: 3px 10px;
   }

}
</style>
