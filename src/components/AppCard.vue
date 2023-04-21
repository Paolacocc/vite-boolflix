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
    <div class="card-bkg pt-4">
        <div class="container">
            <div class="row">
                <h2 class="p-4">MOVIES</h2>
                <div class="ms_col col-movie">


                    <!-- /CARD-MOVIE -->

                    <div class="_ms-card card-movie" v-for="card in store.movies">
                        <img :src="`${store.imgPath}${card.poster_path}`" alt="" v-if="card.poster_path">
                        <div v-else>sorry no image</div>
                        <h3>{{ card.title }}</h3>
                        <h4>{{ card.original_title }}</h4>
                        <h4>
                            <img class="img-flag" src="../assets/img/Flag_of_Italy_Flat_Wavy-64x49.png" alt=""
                                v-if="card.original_language === 'it'">
                            <img class="img-flag" v-else-if="card.original_language === 'en'"
                                src="../assets/img/Flag_of_United_Kingdom_Flat_Wavy-64x37.png" alt="">
                            <img class="img-flag" v-else-if="card.original_language === 'fr'"
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
                </div>
                </div>

                <!-- /CARD-MOVIE -->


                <!-- CARD-TV-SERIE -->
                <div class="row">
                    <h2 class="p-4">TV SERIES</h2>
                    <div class="ms_col col-tv">

                        <div class="_ms-card card-tv " v-for="card in store.tvSeries">
                            <img :src="`${store.imgPath}${card.poster_path}`" alt="" v-if="card.poster_path">
                            <div v-else>sorry no image</div>
                            <h3>{{ card.name }}</h3>
                            <h4>{{ card.original_name }}</h4>
                            <h4>
                                <img class="img-flag" src="../assets/img/Flag_of_Italy_Flat_Wavy-64x49.png" alt=""
                                    v-if="card.original_language === 'it'">
                                <img class="img-flag" v-else-if="card.original_language === 'en'"
                                    src="../assets/img/Flag_of_United_Kingdom_Flat_Wavy-64x37.png" alt="">
                                <img class="img-flag" v-else-if="card.original_language === 'fr'"
                                    src="../assets/img/Flag_of_France_Flat_Wavy-64x49.png" alt="">
                                <h4 v-else>{{ card.original_language }}</h4>
                            </h4>

                            <h4>
                                <span v-for="star in store.stars">
                                    <i
                                        :class="[(star <= Math.ceil(card.vote_average / 2)) ? 'fa-solid fa-star' : 'fa-regular fa-star']"></i>
                                </span>
                            </h4>
                        </div>

                        <!-- /CARD-TV-SERIE -->

                    </div>
                </div>
           
        </div>
    </div>
</template>

<style scoped>
.card-bkg {
    background-color: black;
    height: calc(100vh - 80px);
    overflow-y: auto;

}

.ms_col {

    display: flex;
    overflow-x: auto;
    gap: 5px;

}

._ms-card {
    text-align: center;
    width: 200px;
    height: 300px;
    padding: 10px;

    border-color: white;
    background-color: darkgray;
}


h2 {
    color: grey;
}

h3 {
    font-size: 1rem;
}

h4 {
    font-size: .8rem;
}
img {
    max-width: 100%;
}

.img-flag {
    width: 30px;
}
</style>