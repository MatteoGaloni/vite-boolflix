<script>
import { store } from '../data/store';
import axios from 'axios';

export default {
    name: "AppHeader",
    props: {
        inputSearch: Function,
    },
    data() {
        return {
            store,
            userSearch: "",
            flagPath: ""
        }
    },
    methods: {
        // search() {
        //     console.log("ora l'url è", this.store.genericMovieUrl)
        //     axios.get(this.store.genericMovieUrl + this.userSearch).then(r => {
        //         this.store.selectedMovies = r.data.results;
        //         console.log(this.store.selectedMovies)
        //         // store.loading = true
        //     })
        //     console.log("ora l'url è", this.store.genericTvUrl)
        //     axios.get(this.store.genericTvUrl + this.userSearch).then(r => {
        //         this.store.selectedTv = r.data.results;
        //         console.log(this.store.selectedTv)
        //         // store.loading = true
        //     })
        // },
    },
}
</script>

<template>
    <div class="input-group m-3" style="width: 18rem;">
        <div class="input-group-prepend">
            <button @click="inputSearch(this.userSearch)" class="btn btn-secondary" type="button">Search
                Movie</button>
        </div>
        <input @keyup.enter="inputSearch(this.userSearch)" v-model="userSearch" type="text" class="form-control"
            placeholder="" aria-label="" aria-describedby="basic-addon1">
    </div>
</template>

<style scoped lang="scss">
.flag_img {
    width: 50px;
}
</style>
