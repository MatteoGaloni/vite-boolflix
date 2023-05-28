<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import axios from 'axios';


import { store } from './data/store';

export default {
  components: {
    AppHeader,
    AppMain,

  },

  data() {
    return {
      store,
    }
  },
  methods: {
    search(query) {
      console.log("ora l'url è", this.store.genericMovieUrl)
      axios.get(this.store.genericMovieUrl + query).then(r => {
        this.store.selectedMovies = r.data.results;
        console.log(this.store.selectedMovies)
        // store.loading = true
      })
      console.log("ora l'url è", this.store.genericTvUrl)
      axios.get(this.store.genericTvUrl + query).then(r => {
        this.store.selectedTv = r.data.results;
        console.log(this.store.selectedTv)
        // store.loading = true
      })
    },
  },
}
</script>

<template>
  <AppHeader :inputSearch="search" />
  <AppMain />
</template>

<style scoped lang="scss">
h2 {
  color: orange;
}
</style>
