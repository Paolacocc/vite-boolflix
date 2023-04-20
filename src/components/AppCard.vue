<script>
import { store } from '../store';
export default {
    name: 'AppCard',
    data() {
        return {
            store,
        }
    },
    methods: {

    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">


                <!-- /CARD-MOVIE -->
                <div class="card card-movie" v-for="card in store.movies">
                    <img :src="`${store.imgPath}${card.poster_path}`" alt="" v-if="card.poster_path">
                    <div v-else>sorry no image</div>
                    <h3>{{ card.title }}</h3>
                    <h4>{{ card.original_title }}</h4>
                    <h4>
                        <img src="../assets/img/Flag_of_Italy_Flat_Wavy-64x49.png" alt=""
                            v-if="card.original_language === 'it'">
                        <img v-else-if="card.original_language === 'en'"
                            src="../assets/img/Flag_of_United_Kingdom_Flat_Wavy-64x37.png" alt="">
                        <img v-else-if="card.original_language === 'fr'"
                            src="../assets/img/Flag_of_France_Flat_Wavy-64x49.png" alt="">
                        <h4 v-else>{{ card.original_language }}</h4>
                    </h4>

                    <h4>
                        <span v-for="i in store.stars">
                            <i
                                :class="[(i <= Math.floor(card.vote_average / 2)) ? 'fa-solid fa-star' : 'fa-regular fa-star']"></i>
                        </span>
                    </h4>
                </div>
                <!-- /CARD-MOVIE -->


                <!-- CARD-TV-SERIE -->
                <div class="card card-tv" v-for="card in store.tvSeries">
                    <img :src="`${store.imgPath}${card.poster_path}`" alt="" v-if="card.poster_path">
                    <div v-else>sorry no image</div>
                    <h3>{{ card.name }}</h3>
                    <h4>{{ card.original_name }}</h4>
                    <h4>
                        <img src="../assets/img/Flag_of_Italy_Flat_Wavy-64x49.png" alt=""
                            v-if="card.original_language === 'it'">
                        <img v-else-if="card.original_language === 'en'"
                            src="../assets/img/Flag_of_United_Kingdom_Flat_Wavy-64x37.png" alt="">
                        <img v-else-if="card.original_language === 'fr'"
                            src="../assets/img/Flag_of_France_Flat_Wavy-64x49.png" alt="">
                        <h4 v-else>{{ card.original_language }}</h4>
                    </h4>

                    <h4>
                        <span v-for="star in store.stars">
                            <i
                                :class="[(star <= Math.floor(card.vote_average / 2)) ? 'fa-solid fa-star' : 'fa-regular fa-star']"></i>
                        </span>
                    </h4>
                </div>
                <!-- /CARD-TV-SERIE -->

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

}

.card-movie {
    background-color: lightpink;
}

.card-tv {
    background-color: lightblue;
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