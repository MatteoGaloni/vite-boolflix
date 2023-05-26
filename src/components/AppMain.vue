<script>
import CardMovie from '../components/CardMovie.vue'
import CardTv from '../components/CardTv.vue'

export default {
    name: "AppMain",
    components: {
        CardMovie,
        CardTv,
    }
}
</script>

<template>
    <div class="container d-flex">
        <CardMovie />
        <CardTv />
    </div>
</template>

<style scoped lang="scss"></style>
