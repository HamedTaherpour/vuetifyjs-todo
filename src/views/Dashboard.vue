<template>
  <div class="fill-height pa-5">
    <h2 class="subtitle-2 grey--text">داشبورد</h2>
    <v-container class="my-6">

      <div class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mr-2"
                   small
                   text
                   @click="sortBy('title')"
                   v-bind="attrs"
                   v-on="on">
              <v-icon small left>mdi-folder</v-icon>
              <span class="caption text-lowercase">بر اساس عنوان</span>
            </v-btn>
          </template>
          <span>مرتب سازی بر اساس عنوان</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                small
                text
                @click="sortBy('developer')"
                v-bind="attrs"
                v-on="on">
              <v-icon small left>mdi-account</v-icon>
              <span class="caption text-lowercase">بر اساس توسعه دهنده</span>
            </v-btn>
          </template>
          <span>مرتب سازی بر اساس توسعه دهنده</span>
        </v-tooltip>
      </div>

      <v-card class="pa-3" v-for="project in projects" :key="project.title">
        <v-row class="project" :class="project.status">
          <v-col cols="12" md="6">
            <div class="caption grey--text">عنوان پروژه</div>
            <div v-text="project.title"></div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">توسعه دهنده</div>
            <div v-text="project.developer"></div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">تاریخ</div>
            <div v-text="project.date"></div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div class="float-right">
              <v-chip :class="project.status" class="white--text caption my-2" v-text="project.statusName"></v-chip>
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
      {
        title: 'Design a new website',
        developer: 'Hamed Taherpour',
        date: '1st Jan 2019',
        status: 'doing',
        statusName: 'در حال انجام'
      },
      {
        title: 'Code up the homepage',
        developer: 'Chun Li',
        date: '10th Jan 2019',
        status: 'done',
        statusName: 'انجام شده'
      },
      {
        title: 'Design video thumbnails',
        developer: 'Ryu',
        date: '20th Dec 2018',
        status: 'done',
        statusName: 'انجام شده'
      },
      {
        title: 'Create a community forum',
        developer: 'Gouken',
        date: '20th Oct 2018',
        status: 'bugs',
        statusName: 'باگ'
      },
    ]
  }),

  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
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