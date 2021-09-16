<template>
  <div class="fill-height pa-5">
    <h2 class="subtitle-2 grey--text">Dashboard</h2>
    <v-container class="my-6">
      <v-card>
        <v-row justify="space-around" class="grey">
          <v-col cols="1" class="red">
            title
          </v-col>
          <v-col cols="1" class="yellow">
            name
          </v-col>
          <v-col cols="1" class="green">
            age
          </v-col>
          <v-col cols="1" class="blue">
            car
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Dashboard"
}
</script>

<style scoped>

</style>