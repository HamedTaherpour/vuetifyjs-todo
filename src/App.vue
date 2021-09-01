<template>
  <v-app>

    <nav>
      <v-toolbar flat>
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
      </v-toolbar>
    </nav>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
