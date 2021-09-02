<template>
  <nav>
    <v-app-bar app flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span class="font-weight-bold">TopLearn</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="d-flex align-center">
        <v-switch
            inset
            color="blue"
            prepend-icon="mdi-weather-night"
            append-icon="mdi-white-balance-sunny"
            hide-details
        ></v-switch>
        <v-btn icon>
          <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer
        app
        :permanent="permanent"
        :mini-variant.sync="toggleMin"
        v-model="drawer">

      <div class="d-flex flex-column fill-height justify-space-between align-center">
        <div>
          list
        </div>
        <div>
          <v-btn icon @click="toggleMin = !toggleMin">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </div>
      </div>

    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
    toggleMin: false,
  }),

  created() {
    if (!this.isMobile()) {
      this.drawer = true;
    }
  },

  computed: {
    permanent() {
      if (this.isMobile())
        return false
      else
        return this.drawer;
    },
  },

  methods: {
    isMobile() {
      return this.$vuetify.breakpoint.xs;
    }
  }
}
</script>

<style scoped>

</style>