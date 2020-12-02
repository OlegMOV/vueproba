<template>
  <v-simple-table dense class="mt-7">
    <template v-slot:default>
      <thead>
        <tr>
          <th @click="sortedParam = 'lastName'" class="text-left">
            Прізвище<v-icon v-show="sortedParam == 'lastName'"
              >mdi-arrow-up</v-icon
            >
          </th>
          <th @click="sortedParam = 'firstName'" class="text-left">
            Імя<v-icon v-show="sortedParam == 'firstName'">mdi-arrow-up</v-icon>
          </th>
          <th @click="sortedParam = 'phone'" class="text-left">
            Телефон<v-icon v-show="sortedParam == 'phone'">mdi-arrow-up</v-icon>
          </th>
          <th @click="sortedParam = 'group'" class="text-left">
            Група<v-icon v-show="sortedParam == 'group'">mdi-arrow-up</v-icon>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in sortedList" :key="item.name">
          <td>
            <v-btn text color="teal accent-4" @click="goEditAbonent(item.id)"
              >{{ item.lastName }}
            </v-btn>
          </td>
          <td>{{ item.firstName }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.group }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Home",
  data: () => ({
    sortedParam: "lastName",
    abonents: [],
  }),
  components: {},
  computed: {
    ...mapGetters(["ABONENTS", "IS_LOGGED"]),
    sortedList() {
      return this.abonents.sort((a, b) =>
        a[this.sortedParam] > b[this.sortedParam] ? 1 : -1
      );
    },
  },
  methods: {
    ...mapActions(["GET_ABONENTS"]),
    ...mapMutations(["SELECT_ABONENT"]),

    goEditAbonent(id) {
      this.GET_ABONENTS({ id });
      this.$router.push({ name: "EditAbonent", query: { id: id } });
    },
  },
  mounted() {
    console.log("loaded mount home");
    this.GET_ABONENTS({ page: 0, nRows: 10 }).then(
      (res) => (this.abonents = this.ABONENTS)
    );
  },
};
</script>
