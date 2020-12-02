<template>
  <v-container fluid>
    <v-app-bar color="blue-grey lighten-2" dense dark fixed>
      <!--<v-app-bar-nav-icon></v-app-bar-nav-icon>-->
      <v-toolbar-title class="mr-2">MOV</v-toolbar-title>

      <!--      <v-btn v-if="IS_LOGGED" :to="{ name: 'Abonents' }" text class="mr-1">
        <v-icon>mdi-format-list-bulleted</v-icon>
        Статті
      </v-btn>-->
      <v-btn v-if="IS_LOGGED" :to="{ name: 'Home' }" text class="mr-1">
        <v-icon>mdi-magnify</v-icon>Список абонентів
      </v-btn>
      <v-btn v-if="IS_LOGGED" :to="{ name: 'Articles' }" text class="mr-1">
        <v-icon>mdi-format-list-bulleted</v-icon>
        Статті
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn v-if="IS_LOGGED" icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn v-if="IS_LOGGED" text @click="LOGOUT"
        ><v-icon>mdi-logout</v-icon></v-btn
      >
      <AuthDlg v-else />
    </v-app-bar>
  </v-container>
</template>

<script>
import AuthDlg from "@/components/AuthDlg";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "NavBar",
  components: {
    AuthDlg,
  },
  methods: {
    ...mapActions(["LOGOUT"]),
    logout() {
      this.LOGOUT.then((res) => {});
    },
  },
  computed: {
    ...mapGetters(["IS_LOGGED"]),
  },
};
</script>

<style></style>
