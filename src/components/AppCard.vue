<script>
import { store } from '../store';
export default {
    name: 'AppCard',
    data() {
        return {
            store,
            it: ''
            
           
        }
    },
    methods:{
        flagFilter() {
            if (this.card.original_language === it) {
                this.card.original_language = this.img
            }
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card" v-for="card in store.movies">
                    <h3>{{ card.title }}</h3>
                    <h4>{{ card.original_title }}</h4>
                    <h4>
                        <img src="../assets/img/Flag_of_Italy_Flat_Wavy-64x49.png" alt="" v-if="card.original_language === 'it'">
                        <img v-else-if="card.original_language === 'en'" src="../assets/img/Flag_of_United_Kingdom_Flat_Wavy-64x37.png" alt="">
                        <img v-else-if="card.original_language === 'fr'" src="../assets/img/Flag_of_France_Flat_Wavy-64x49.png" alt="">
                        <h4 v-else>{{ card.original_language }}</h4>
                    </h4>
                    
                    <h4>{{ card.vote_average }}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.col {
   
    display: flex;
    flex-wrap: wrap;
    
}
.card {
    text-align: center;
    width: calc(100% / 6 - 10px);
    height: 200px;
    margin: 5px;
    padding: 10px;
    background-color: lightpink;
}
h3 {
    font-size: 1rem;
}
h4 {
    font-size: .8rem;
}
img {
    width: 30px;
}
</style>