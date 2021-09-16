<template>
  <div class="fill-height pa-5">
    <h2 class="subtitle-2 grey--text">Dashboard</h2>
    <v-container class="my-6">
      <v-card class="pa-3" v-for="project in projects" :key="project.title">
        <v-row class="project" :class="project.status">
          <v-col cols="12" md="6">
            <div class="caption">Project title</div>
            <div v-text="project.title">vue</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption">Developer</div>
            <div v-text="project.developer">vue</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption">Date</div>
            <div v-text="project.date">vue</div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div class="caption">Status</div>
            <div v-text="project.status">vue</div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data: () => ({
    projects: [
      {title: 'Design a new website', developer: 'Hamed Taherpour', date: '1st Jan 2019', status: 'doing'},
      {title: 'Code up the homepage', developer: 'Chun Li', date: '10th Jan 2019', status: 'done'},
      {title: 'Design video thumbnails', developer: 'Ryu', date: '20th Dec 2018', status: 'done'},
      {title: 'Create a community forum', developer: 'Gouken', date: '20th Oct 2018', status: 'bugs'},
    ]
  })
}
</script>

<style scoped>
.project.done {
  border-left: 4px solid #3CD1C2;
}

.project.doing {
  border-left: 4px solid orange
}

.project.bugs {
  border-left: 4px solid tomato;
}

</style>