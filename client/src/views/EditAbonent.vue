<template>
  <v-container>
    <v-card>
      <v-card-title>
        <span class="headline">User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="12" md="6">
            <v-text-field
              v-model="abonent.firstName"
              label="Прізвище*"
              hint="бажано вказувати дійсне"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-text-field
              v-model="abonent.lastName"
              label="Ім'я"
              hint="бажано вказувати дійсне"
            ></v-text-field>
          </v-col>

          <v-col cols="4">
            <!--<v-img :src="image" aspect-ratio="1.7"></v-img>-->
            <img
              class="text-center"
              :src="image"
              alt="photo"
              width="200"
              height="auto"
            />
          </v-col>
          <v-col cols="8">
            <v-col cols="12">
              <!--<v-file-input @change="onFileChange" :value="fileData" accept="image/*" label="Посилання на фото"></v-file-input>-->
              <input type="file" @change="onFileChange" name="sampleFile" />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="abonent.phone"
                label="Телефон*"
                type="text"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="abonent.group"
                :items="groups"
                label="Група*"
                required
              ></v-select>
            </v-col>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" @click="closeDlg"> Закрити </v-btn>
        <v-btn color="red darken-1" @click="delAbonent"> Видалити </v-btn>
        <v-btn color="yellow darken-1" @click="editAbonent"> Редагувати </v-btn>
        <v-btn color="blue darken-1" @click="addAbonent"> Додати нового </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["id"],
  data: () => ({
    abonent: {
      firstName: "",
      lastName: "",
      phone: "",
      group: "",
      photo: "",
      id: "",
    },
    image: "",
    groups: [],
    fileData: {},
  }),
  computed: mapGetters(["ABONENT", "GROUPS"]),
  // watch: {
  //   "abonent.photo": function (newValue) {
  //     this.image = newValue;
  //   },
  // },
  methods: {
    ...mapActions(["GET_ABONENT", "UPDATE", "ADD", "DELETE"]),
    addAbonent() {
      const formData = new FormData();
      formData.append("sampleFile", this.abonent.photo);
      formData.append("firstName", this.abonent.firstName);
      formData.append("lastName", this.abonent.lastName);
      formData.append("phone", this.abonent.phone);
      formData.append("group", this.abonent.group);
      this.ADD(formData).then((res) => console.log("ADD", res));
    },
    onFileChange(e) {
      this.abonent.photo = e.target.files[0];
      const file = e.target.files[0];
      this.image = URL.createObjectURL(file);
      // this.abonent.photo = URL.createObjectURL(e);
      // const file = e.target.files[0];
      // this.abonent.photo = URL.createObjectURL(file);
      // console.log(file);
    },
    editAbonent() {
      const formData = new FormData();
      formData.append("sampleFile", this.abonent.photo);
      formData.append("firstName", this.abonent.firstName);
      formData.append("lastName", this.abonent.lastName);
      formData.append("phone", this.abonent.phone);
      formData.append("group", this.abonent.group);
      formData.append("id", this.abonent.id);
      this.UPDATE(formData).then((res) => {
        console.log("Update", res);
        this.$router.push({ name: "Home" });
      });
    },
    delAbonent() {
      this.DELETE({ id: this.abonent.id }).then((res) => {
        console.log("delete", res);
        this.$router.push({ name: "Home" });
      });
    },
    closeDlg() {
      this.$router.push({ name: "Home" });
    },
  },
  mounted() {
    console.log("mouted", this.$route.query.id);
    this.GET_ABONENT({ id: this.$route.query.id }).then((res) => {
      this.abonent = res;
      this.image = this.abonent.photo;
    });
    this.groups = this.GROUPS;
  },
};
</script>

<style></style>
