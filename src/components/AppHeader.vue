<script>

export default {
    name: "AppHeader",
    props: {
        inputSearch: Function,
    },
    data() {
        return {
            userSearch: "",
            flagPath: ""
        }
    },
    methods: {
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
