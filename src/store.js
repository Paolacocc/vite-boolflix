import { reactive } from "vue";

export const store = reactive({
    movies: [],
    tvSeries: [],
    ApiKey: "aa9abbd4e4154ce38ffe80bc8881d32a",
    writtenText: '',
    imgPath: "https://image.tmdb.org/t/p/w342",
    stars: 5
});