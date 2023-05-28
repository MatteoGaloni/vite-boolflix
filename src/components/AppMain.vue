<script>
import CardMovie from '../components/CardMovie.vue'

export default {
    name: "AppMain",
    components: {
        CardMovie,
    }
}
</script>

<template>
    <div class="card_movie_container">
        <CardMovie />
    </div>
</template>

<style scoped lang="scss">
.card_movie_container {
    padding-top: 70px;
}
</style>
