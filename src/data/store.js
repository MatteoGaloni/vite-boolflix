import { reactive } from "vue";

export const store = reactive({

    prova: "prova",
    apiKey: "88d5ff9ebc9aa6659450ea8f3fdc7586",
    genericMovieUrl: "https://api.themoviedb.org/3/search/movie?api_key=88d5ff9ebc9aa6659450ea8f3fdc7586&query=",
    selectedMovies: [],
    movieFlags:["https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/255px-Flag_of_England.svg.png"]
})