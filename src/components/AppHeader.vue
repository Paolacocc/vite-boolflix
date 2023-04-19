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
    <h1>header</h1>
    <label for="search"></label>
    <input type="text" id="search" v-model.trim="store.writtenText" @keyup.enter="$emit('filter')">
    
</template>