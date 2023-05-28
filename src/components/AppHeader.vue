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
    <header>
        <div class="nav_wrapper d-flex">
            <h1>BoolFix</h1>
            <div class="input-group">
                <div class="input-group-prepend">
                    <button @click="inputSearch(this.userSearch)" class="btn btn-secondary" type="button">
                        Search Movie
                    </button>
                </div>
                <input @keyup.enter="inputSearch(this.userSearch)" v-model="userSearch" type="text" class="form-control"
                    placeholder="" aria-label="" aria-describedby="basic-addon1">
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
.nav_wrapper {
    background-color: black;
    height: 80px;
    width: 100%;
    position: fixed;
    padding: 2rem;

    h1 {
        color: rgb(196, 43, 28);
        text-align: center;
    }

    .input-group {}
}
</style>
