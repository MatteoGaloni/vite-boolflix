<script>
import CardMovie from '../components/CardMovie.vue'
import CardTv from '../components/CardTv.vue'


import { store } from '../data/store';
import axios from 'axios';

export default {
    name: "AppMain",
    components: {
        CardMovie,
        CardTv,
    }

    // data() {
    //     return {
    //         store,
    //         userSearch: "",
    //         flagPath: ""
    //     }
    // },
    // methods: {
    //     languageFlag(language) {
    //         let flag = "";
    //         store.movieFlags.forEach(item => {
    //             if (language == item.language) {
    //                 flag = item.link
    //             }
    //         });
    //         return flag
    //     },

    //     getBoolean(language) {
    //         store.movieFlags.forEach(item => {
    //             if (language == item.language) {
    //                 return true
    //             }
    //         });
    //         return false
    //     },

    //     getImgPath(path) {
    //         if (path == null) {
    //             return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019"
    //         }
    //         return this.store.postersUrl + path
    //     },



    // },
}
</script>

<template>
    <div class="container d-flex">
        <CardMovie />
        <CardTv />
    </div>

    <!-- <div class="container d-flex">
                                <div class="movie_card_container">
                                    <h2>MOVIES</h2>
                                    <div v-for="movie in store.selectedMovies" class="movie_card card m-3" style="width: 18rem;">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">TITOLO = {{ movie.title }}</li>
                                            <li class="list-group-item">TITOLO ORIGINALE = {{ movie.original_title }}</li>
                                            <li class="list-group-item">
                                                <span v-if="!getBoolean(movie.original_language)">Language = {{ movie.original_language }}</span>
                                                <img class="flag_img" :src="languageFlag(movie.original_language)" alt="flag">
                                            </li>
                                            <li><img :src="getImgPath(movie.poster_path)" :alt="movie.original_title"> </li>

                                            <li class="list-group-item">VOTO = {{ movie.vote_average }}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="series_card_container">
                                    <h2>TV SHOW</h2>
                                    <div v-for="show in store.selectedTv" class="movie_card card m-3" style="width: 18rem;">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">TITOLO = {{ show.original_name }}</li>
                                            <li class="list-group-item">
                                                <span v-if="!getBoolean(show.original_language)">Language = {{ show.original_language }}</span>
                                                <img class="flag_img" :src="languageFlag(show.original_language)" alt="flag">
                                            </li>
                                            <li><img :src="getImgPath(show.poster_path)" :alt="show.original_name"> </li>
                                            <li class="list-group-item">VOTO = {{ show.vote_average }}</li>
                                        </ul>
                                    </div>
                                </div> -->
</template>

<style scoped lang="scss">
.flag_img {
    width: 50px;
}
</style>
