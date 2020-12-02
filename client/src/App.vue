<template>
  <v-app>
    <NavBar />
    <router-view v-if="IS_LOGGED"></router-view>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  data: () => {
    page: 2;
  },

  components: {
    NavBar,
  },
  computed: mapGetters(["IS_LOGGED"]),

  data: () => ({
    //
  }),
};
</script>
