<script>
import AppHeader from "./components/AppHeader.vue"
import { store } from "./store"
import axios from "axios";
import AppCard from "./components/AppCard.vue"


export default {
  
  components: {
    AppHeader,
    AppCard
  },
  data(){
    return {
      store
    }
  },
  methods: {
    handleCall(){
      axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: this.store.ApiKey,
          query: this.store.writtenText
        }
      }).then(resp => {
        console.log(resp);
        this.store.movies = resp.data.results;
        // console.log(this.store.currentText);
      })
    }
  }
}
</script>

<template>
<AppHeader @filter="handleCall"/>
<AppCard />
</template>