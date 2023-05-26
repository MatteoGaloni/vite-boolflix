<script>
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue'

// import axios from 'axios';
import { store } from './data/store';

export default {
  components: {
    AppHeader,
    AppMain,

  },

  data() {
    return {
      store: store
    }
  },
  methods: {},

}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style scoped lang="scss">
h2 {
  color: orange;
}
</style>
