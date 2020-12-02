<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn dark v-bind="attrs" v-on="on" text>
        <v-icon>mdi-login</v-icon></v-btn
      >
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Авторизація</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="email"
                @focus="error = ''"
                label="Електонна адреса*"
                :rules="rulesEmail"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="password"
                @focus="error = ''"
                label="Пароль*"
                :rules="rulesPass"
                :type="showPass ? 'text' : 'password'"
                required
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPass = !showPass"
                counter
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-alert v-if="error" dense border="left" type="warning">
          {{ error }}
        </v-alert>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Закрити
        </v-btn>
        <v-btn color="blue darken-1" text @click="auth" :disabled="!isReady">
          ВВІЙТИ
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AuthDlg",
  data: () => ({
    error: "",
    email: "",
    rulesEmail: [
      (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Не вірний формат e-mail.";
      },
    ],
    password: "",
    rulesPass: [
      (value) => !!value || "Required.",
      (value) =>
        (value && value.length >= 4) || "Пароль має бути більше 3 символів",
    ],
    isData: false,
    dialog: false,
    showPass: false,
  }),
  methods: {
    ...mapActions(["LOGIN"]),
    auth() {
      this.LOGIN({ email: this.email, password: this.password }).then(
        (isOK) => {
          if (isOK) this.$router.push({ name: "Home" });
          else this.error = "Невірні дані";
        }
      );
    },
  },
  computed: {
    isReady() {
      if (
        this.rulesEmail[0](this.email) === true &&
        this.rulesPass[0](this.password) === true &&
        this.rulesPass[1](this.password) === true
      ) {
        return true;
      }
      return false;
    },
    editData() {
      this.error = "";
    },
  },
};
</script>

<style></style>
