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
            v-model="$vuetify.theme.dark"
            inset
            dense
            color="blue"
            class="mr-5"
            append-icon="mdi-weather-night"
            prepend-icon="mdi-white-balance-sunny"
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

      <div class="d-flex flex-column fill-height justify-space-between">
        <div>
          <v-list dense>
            <v-list-item>
              <v-list-item-avatar size="25">
                <v-img
                    src="https://toplearn.com/img/user/250x259/4937_66d215c4-ab74-ce7c-587c-39f39a129d68_%D8%AD%D8%A7%D9%85%D8%AF_%D8%B7%D8%A7%D9%87%D8%B1%D9%BE%D9%88%D8%B1.jpg"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="subtitle-2">Hamed Taherpour</v-list-item-title>
                <v-list-item-subtitle class="caption">toplearn</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list dense shaped>
            <v-list-item-group color="primary">
              <v-list-item v-for="item in items" :key="item.link" :to="item.link">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
        <div>
          <v-list dense>
            <v-list-item-group color="primary">
              <v-list-item @click="toggleMin = !toggleMin">
                <v-list-item-icon>
                  <v-icon v-text="minIcon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Collapse Menu</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
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
    items: [
      {text: 'Dashboard', icon: 'mdi-view-dashboard', link: '/'},
      {text: 'My Project', icon: 'mdi-folder', link: '/project'},
      {text: 'Team', icon: 'mdi-account', link: '/team'},
    ],
  }),

  created() {
    if (!this.isMobile()) {
      this.drawer = true;
    }
  },

  computed: {
    minIcon() {
      if (this.toggleMin)
        return ' mdi-chevron-right'
      else
        return ' mdi-chevron-left'
    },

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