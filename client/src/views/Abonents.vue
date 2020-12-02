<template>
  <v-container>
    <v-row>
      <Abonent v-for="item of ABONENTS" :abonent="item" :key="item.id" />
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Abonent from "@/views/Abonent";
export default {
  name: "Abonents",
  components: {
    Abonent,
  },
  computed: {
    ...mapGetters(["ABONENTS"]),
  },
  methods: {
    ...mapActions(["GET_ABONENTS"]),
  },
  mounted() {
    console.log("set state");
    this.GET_ABONENTS({ page: 0, nRows: 10 }).then((res) => {
      if (res.data) console.log("loaded");
    });
  },
};
</script>

<style></style>
