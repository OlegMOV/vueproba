<template>
  <v-col cols="6">
    <v-card class="mx-auto" max-width="600">
      <v-img src="https://picsum.photos/350/165?random" height="200px"></v-img>

      <v-card-title> {{ article.firstName }} </v-card-title>

      <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange lighten-2" text> Explore </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="showText = !showText">
          <v-icon>{{ showText ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="showText">
          <v-divider></v-divider>

          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a
            way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Article",
  props: {
    article: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data: () => ({
    showText: false,
  }),
};
</script>

<style></style>
