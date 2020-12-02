<template>
  <v-container>
    <v-row>
      <Article v-for="article of ABONENTS" :article="article" :key="article.id" />
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Article from "@/components/Article";
export default {
  name: "Articles",
  data: () => ({}),
  components: {
    Article,
  },
  computed: {
    ...mapGetters(["ABONENTS"]),
  },
  methods: {
    ...mapActions(["GET_ABONENTS"]),
  },
  // mounted() {
  //   console.log("set state");
  //   this.GET_ABONENTS().then((res) => {
  //     if (res.data) console.log("loaded");
  //   });
  // },
};
</script>

<style></style>
