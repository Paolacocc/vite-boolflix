<script>
import { store } from '../store';
export default {
    name: 'AppCard',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="card" v-for="card in store.movies">
        <h3>{{ card.title }}</h3>
        <h4>{{ card.original_title }}</h4>
        <h4>{{ card.original_language }}</h4>
        <h4>{{ card.vote_average }}</h4>
    </div>
</template>