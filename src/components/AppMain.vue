<script>
import { store } from '../data/store';
import axios from 'axios';

export default {
    name: "AppMain",

    data() {
        return {
            store,
            userSearch: "",
            flagPath: ""
        }
    },
    methods: {
        searchMovie() {
            this.store.genericMovieUrl = "https://api.themoviedb.org/3/search/movie?api_key=88d5ff9ebc9aa6659450ea8f3fdc7586&query=",
                this.store.genericMovieUrl += this.userSearch
            console.log("ora l'url è", this.store.genericMovieUrl)
            axios.get(this.store.genericMovieUrl).then(r => {
                this.store.selectedMovies = r.data.results;
                console.log(this.store.selectedMovies)
                store.loading = true
            })
        },
        languageFlag(language) {

            if (language == "en") {
                console.log("la lingua è", language);
                return this.store.movieFlags
            }

        },
    },

}
</script>

<template>
    <input v-model="userSearch" type="text">
    <button @click="searchMovie()">CLICCAMI</button>
    <div class="d-flex">
        <div>
            <div v-for="movie in store.selectedMovies">
                <li>TITOLO =-------------------------- {{ movie.title }}</li>
                <li>TITOLO ORIGINALE =---------------- {{ movie.original_title }}</li>
                <!-- <li v-if="movie.original_language != 'en'">LINGUA ORIGINALE =---------------- {{ movie.original_language }}
                                                            </li> -->
                <img :src="languageFlag(movie.original_language)" alt="flag">
                <li>VOTO =---------------------------- {{ movie.popularity }}</li>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
h2 {
    color: yellow;
}
</style>
