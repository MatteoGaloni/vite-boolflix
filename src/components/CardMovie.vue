<script>
import { store } from '../data/store';

export default {
    name: "CardMovie",

    data() {
        return {
            store,
        }
    },
    methods: {
        languageFlag(language) {
            if (this.store.movieFlags[language] == undefined) {
                return false
            }
            return this.store.movieFlags[language]
        },

        getImgPath(path) {
            if (path == null) {
                return "https://skydomepictures.com/wp-content/uploads/2018/08/movie-poster-coming-soon-2.png"
            }
            return this.store.postersUrl + path
        },

        getRate(rate) {
            this.stars = rate / 2;
            console.log("il num di stelle è", Math.round(this.stars))
            return Math.round(this.stars)
        }
    },
}
</script>

<template>
    <h2 v-if="this.store.loading" class="text-white cards_container">Movies</h2>
    <div class="d-flex cards_container">
        <div v-for="movie in store.selectedMovies" class="d-flex singleCard_container">
            <div class="my_poster my_card m-3">
                <img class="poster_img" :src="getImgPath(movie.poster_path)" :alt="movie.original_title">
            </div>

            <div class="my_information my_card m-3 p-2">
                <ul>
                    <li class="d-flex align-items-center">
                        <h5>Title: </h5>
                        <span class="ml-2">{{ movie.title }}</span>
                    </li>
                    <li v-if="movie.original_title != movie.title" class="d-flex align-items-center">
                        <h5>Original title: </h5>
                        <span class="ml-2">{{ movie.original_title }}</span>
                    </li>
                    <li class="d-flex align-items-center">
                        <h5>Language: </h5>
                        <span class="ml-2" v-if="!languageFlag(movie.original_language)">
                            {{ movie.original_language }}
                        </span>
                        <img v-if="languageFlag(movie.original_language)" class="flag_img ml-2"
                            :src="languageFlag(movie.original_language)" alt="flag">
                    </li>
                    <li v-if="getRate(movie.vote_average != 0)" class="d-flex align-items-center">
                        <h5>Vote: </h5>
                        <span class="ml-2" v-for="n in getRate(movie.vote_average)">
                            <i class="fa-solid fa-star" style="color: #f3ef12;"></i>
                        </span>
                    </li>
                    <li class="">
                        <h5>Description: </h5>
                        <span v-if="movie.overview">{{ movie.overview }}</span>
                        <span v-else="">Not available...</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <h2 v-if="this.store.loading" class="text-white cards_container">Series</h2>
    <div class="d-flex cards_container">
        <div v-for="show in store.selectedTv" class="d-flex singleCard_container">
            <div class="my_poster my_card m-3">
                <img class="poster_img" :src="getImgPath(show.poster_path)" :alt="show.original_name">
            </div>

            <div class="my_information my_card m-3 p-2">
                <ul>
                    <li class="d-flex align-items-center">
                        <h5>Title: </h5>
                        <span class="ml-2">{{ show.name }}</span>
                    </li>
                    <li v-if="show.original_name != show.name" class="d-flex align-items-center">
                        <h5>Original title: </h5>
                        <span class="ml-2">{{ show.original_name }}</span>
                    </li>
                    <li class="d-flex align-items-center">
                        <h5>Language: </h5>
                        <span class="ml-2" v-if="!languageFlag(show.original_language)">
                            {{ movie.original_language }}
                        </span>
                        <img v-if="languageFlag(show.original_language)" class="flag_img"
                            :src="languageFlag(show.original_language)" alt="flag">
                    </li>
                    <li v-if="getRate(show.vote_average != 0)" class="d-flex align-items-center">
                        <h5>Vote: </h5>
                        <span class="ml-2" v-for="n in getRate(show.vote_average)">
                            <i class="fa-solid fa-star" style="color: #f3ef12;"></i>
                        </span>
                    </li>
                    <li class="">
                        <h5>Description: </h5>
                        <span v-if="show.overview">{{ show.overview }}</span>
                        <span v-else="">Not available...</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.cards_container {
    width: 80%;
    overflow-x: auto;
    margin: auto;
}

.my_card {
    width: 228px;
    height: 342px;
    background-color: rgb(20, 20, 20);
    color: white;
    border-radius: 7px;

    .poster_img {
        height: 100%;
        object-fit: cover;
        border-radius: 7px;
    }
}

.singleCard_container:hover .my_information {
    display: block;
}

.singleCard_container:hover .my_poster {
    display: none;
}

.my_information {
    display: none;
    overflow-y: auto;

    .flag_img {
        width: 30px;
    }
}
</style>
