<template>
  <v-app>
    <Navbar/>
    <v-main>
      <transition name="scroll-x-reverse-transition">
        <router-view/>
      </transition>
    </v-main>
  </v-app>
</template>

<script>

import Navbar from "./components/Navbar";

export default {
  name: 'App',
  components: {Navbar},
};
</script>
