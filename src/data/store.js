import { reactive } from "vue";

export const store = reactive({

    apiKey: "88d5ff9ebc9aa6659450ea8f3fdc7586",
    genericMovieUrl: "https://api.themoviedb.org/3/search/movie?api_key=88d5ff9ebc9aa6659450ea8f3fdc7586&query=",
    genericTvUrl: "https://api.themoviedb.org/3/search/tv?api_key=88d5ff9ebc9aa6659450ea8f3fdc7586&query=",
    postersUrl: "https://image.tmdb.org/t/p/w342/",
    selectedMovies: [],
    selectedTv: [],
    userSearch: "",
    flagPath: "",
    

    movieFlags: [
        {
            link: "https://unpkg.com/language-icons/icons/en.svg",
            language: "en",
        },
        {
            link: "https://unpkg.com/language-icons/icons/it.svg",
            language: "it",
        }
    ]
})