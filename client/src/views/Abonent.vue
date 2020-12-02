<template>
  <v-card class="mx-auto mb-2" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Name group</div>
        <v-list-item-title class="headline mb-1"> {{ abonent.firstName }} </v-list-item-title>
        <v-list-item-subtitle>+(067)225-23-82</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey">
        <v-img contain lazy-src="https://picsum.photos/id/11/10/6" max-height="140" max-width="267" src=""></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn outlined rounded text @click="goToPath(abonent.id)"> Button </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    abonent: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    ...mapMutations(["SELECT_ABONENT"]),
    goToPath(id) {
      this.SELECT_ABONENT(id);
      this.$router.push({ name: "Edit" });
    },
  },
};
</script>

<style></style>
