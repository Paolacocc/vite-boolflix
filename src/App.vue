<script>
import AppHeader from "./components/AppHeader.vue"
import { store } from "./store"
import axios from "axios";


export default {
  
  components: {
    AppHeader,
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
        this.store.currentText = resp.data.results.title;
      })
    }
  }
}
</script>

<template>
<AppHeader @filter="handleCall"/>
</template>