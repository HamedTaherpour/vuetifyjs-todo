<template>
  <div class="fill-height pa-5">
    <h2 class="subtitle-2 grey--text">Dashboard</h2>
    <v-container class="my-6">

      <div class="mb-3">
        <v-btn class="mr-2" small text @click="sortBy('title')">
          <v-icon small left>mdi-folder</v-icon>
          <span class="caption text-lowercase">By project title</span>
        </v-btn>
        <v-btn small text @click="sortBy('developer')">
          <v-icon small left>mdi-account</v-icon>
          <span class="caption text-lowercase">By developer</span>
        </v-btn>
      </div>

      <v-card class="pa-3" v-for="project in projects" :key="project.title">
        <v-row class="project" :class="project.status">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project title</div>
            <div v-text="project.title"></div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Developer</div>
            <div v-text="project.developer"></div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Date</div>
            <div v-text="project.date"></div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div class="float-right">
              <v-chip :class="project.status" class="white--text caption my-2" v-text="project.status"></v-chip>
            </div>
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
  }),

  methods: {
    sortBy(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  }

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

.v-chip.done {
  background: #3cd1c2 !important;
}

.v-chip.doing {
  background: #ffaa2c !important;
}

.v-chip.bugs {
  background: #f83e70 !important;
}
</style>