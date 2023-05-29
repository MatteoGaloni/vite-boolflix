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
            <div class="d-flex">
                <div class="ml-2">
                    <button @click="inputSearch(this.userSearch)" class="btn btn-secondary" type="button">
                        Search
                    </button>
                </div>
                <input @keyup="inputSearch(this.userSearch)" v-model="userSearch" type="text" class="form-control"
                    placeholder="" aria-label="" aria-describedby="basic-addon1">
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
header {
    background-color: black;
    width: 100%;
}

.nav_wrapper {
    height: 70px;
    width: 80%;
    // position: fixed;
    padding: 1rem;
    margin: auto;

    h1 {
        color: rgb(196, 43, 28);
        text-align: center;
    }
}
</style>
