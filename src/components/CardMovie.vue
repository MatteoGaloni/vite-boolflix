<script>
import { store } from '../data/store';

export default {
    name: "CardMovie",

    data() {
        return {
            store,
            userSearch: "",
            flagPath: "",
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
    <div class="d-flex cards_container">
        <div v-for="movie in store.selectedMovies" class="d-flex singleCard_container">
            <div class="my_poster my_card m-3">
                <img class="poster_img" :src="getImgPath(movie.poster_path)" :alt="movie.original_title">
            </div>

            <div class="my_information my_card m-3 p-2">
                <ul>
                    <li class="d-flex align-items-center">
                        <h3>Title:</h3>
                        <span>{{ movie.title }}</span>
                    </li>
                    <li class="d-flex align-items-center">
                        <h3>Original title:</h3>
                        <span>{{ movie.original_title }}</span>
                    </li>
                    <li class="d-flex align-items-center">
                        <h3>Language:</h3>
                        <span v-if="!languageFlag(movie.original_language)">
                            {{ movie.original_language }}
                        </span>
                        <img v-if="languageFlag(movie.original_language)" class="flag_img"
                            :src="languageFlag(movie.original_language)" alt="flag">
                    </li>
                    <li class="d-flex align-items-center">
                        <h3>Vote:</h3>
                        <span v-if="getRate(movie.vote_average) >= 1">
                            <i class="fa-solid fa-star" style="color: #f3ef12;"></i>
                        </span>
                        <span v-if="getRate(movie.vote_average) >= 2">
                            <i class="fa-solid fa-star" style="color: #f3ef12;"></i>
                        </span>
                        <span v-if="getRate(movie.vote_average) >= 3">
                            <i class="fa-solid fa-star" style="color: #f3ef12;"></i>
                        </span>
                        <span v-if="getRate(movie.vote_average) >= 4">
                            <i class="fa-solid fa-star" style="color: #f3ef12;"></i>
                        </span>
                        <span v-if="getRate(movie.vote_average) >= 5">
                            <i class="fa-solid fa-star" style="color: #f3ef12;"></i>
                        </span>
                    </li>
                    <li class="">
                        <h3>Description:</h3>
                        <span>{{ movie.overview }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="d-flex cards_container">
        <div v-for="show in store.selectedTv" class="d-flex singleCard_container">
            <div class="my_poster my_card m-3">
                <img class="poster_img" :src="getImgPath(show.poster_path)" :alt="show.original_name">
            </div>

            <div class="my_information my_card m-3 p-2">
                <ul>
                    <li class="d-flex align-items-center">
                        <h3>Title:</h3>
                        <span>{{ show.original_name }}</span>
                    </li>
                    <li class="d-flex align-items-center">
                        <h3>Original title:</h3>
                        <span>{{ show.original_name }}</span>
                    </li>
                    <li class="d-flex align-items-center">
                        <h3>Language:</h3>
                        <span v-if="!languageFlag(show.original_language)">
                            {{ movie.original_language }}
                        </span>
                        <img v-if="languageFlag(show.original_language)" class="flag_img"
                            :src="languageFlag(show.original_language)" alt="flag">
                    </li>
                    <li class="d-flex align-items-center">
                        <h3>Vote:</h3>
                        <span v-if="getRate(show.vote_average) >= 1">
                            <i class="fa-solid fa-star" style="color: #f3ef12;"></i>
                        </span>
                        <span v-if="getRate(show.vote_average) >= 2">
                            <i class="fa-solid fa-star" style="color: #f3ef12;"></i>
                        </span>
                        <span v-if="getRate(show.vote_average) >= 3">
                            <i class="fa-solid fa-star" style="color: #f3ef12;"></i>
                        </span>
                        <span v-if="getRate(show.vote_average) >= 4">
                            <i class="fa-solid fa-star" style="color: #f3ef12;"></i>
                        </span>
                        <span v-if="getRate(show.vote_average) >= 5">
                            <i class="fa-solid fa-star" style="color: #f3ef12;"></i>
                        </span>
                    </li>
                    <li class="">
                        <h3>Description:</h3>
                        <span>{{ show.overview }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// è

// *************************************************

.cards_container {
    width: 100%;
    overflow-x: auto;
    margin-left: 2rem;
}

.my_card {
    width: 342px;
    height: 342px;
    background-color: rgb(20, 20, 20);
    color: white;

    .poster_img {
        height: 100%;
        object-fit: cover;
    }
}

.my_information {
    overflow-y: auto;

    .flag_img {
        width: 50px;
    }
}
</style>
