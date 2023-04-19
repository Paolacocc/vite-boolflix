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
    <div class="header text-center">
    <h1>HEADER</h1>
    <label for="search"></label>
    <input type="text" id="search" v-model.trim="store.writtenText" @keyup.enter="$emit('filter')">
</div>
    
</template>