<template>
  <div class="text-center text-h1">
    Home Page

    <br>
    <v-btn color="red" class="white--text">Normal</v-btn>
    <v-btn color="blue" dark>Normal</v-btn>
    <br>
    <v-btn depressed color="red" class="white--text">depressed</v-btn>
    <v-btn color="blue" dark>Normal</v-btn>
    <br>
    <v-btn outlined color="red" class="white--text">outlined</v-btn>
    <v-btn color="blue" dark>Normal</v-btn>
    <br>
    <v-btn outlined color="red">
      <v-icon>mdi-send</v-icon>
    </v-btn>
    <v-btn color="blue" dark>
      <v-icon left>mdi-send</v-icon>
      Send
    </v-btn>
    <br>
    <v-btn icon color="blue" dark>
      <v-icon>mdi-send</v-icon>
    </v-btn>
    <v-btn fab color="pink" dark>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <br>
    <v-btn small color="pink" dark>
      <v-icon small>mdi-plus</v-icon>
    </v-btn>
    <v-btn large color="pink" dark>
      <v-icon large>mdi-plus</v-icon>
    </v-btn>
    <div style="width: 250px">
      <v-btn large block color="pink" dark>
        block
      </v-btn>
    </div>
    <v-btn loading depressed color="pink" dark>
      loading
    </v-btn>
    <v-btn loading depressed color="pink" class="elevation-24" dark>
      loading
    </v-btn>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>
