<template>
  <div class="fill-height pa-5">

    <v-dialog
        v-model="dialog"
        persistent
        transition="dialog-bottom-transition"
    >
      <v-card>
        <v-card-title>Add New Project</v-card-title>
        <v-card-text>
          Form
        </v-card-text>
        <v-card-actions>
          <v-btn @click="dialog = false" outlined>Cancel</v-btn>
          <v-btn @click="dialog = false" color="blue">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <h2 class="subtitle-2 grey--text">Project</h2>
    <v-container class="my-6">
      <v-btn class="mb-3" color="primary" @click="dialog = !dialog">New Project</v-btn>
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="project in projects" :key="project.title">
          <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
          <v-expansion-panel-content class="grey--text">
            <div class="font-weight-bold">Date by: {{ project.date }}</div>
            <div class="caption" v-text="project.content"></div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Project",
  data: () => ({
    dialog: true,
    projects: [
      {
        title: 'Design a new website',
        person: 'Hamed Taherpour',
        date: '1st Jan 2019',
        status: 'ongoing',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
      },
      {
        title: 'Code up the homepage',
        person: 'John Leider',
        date: '10th Jan 2019',
        status: 'complete',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
      },
      {
        title: 'Design video thumbnails',
        person: 'Maggie Appleton',
        date: '20th Dec 2018',
        status: 'complete',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
      },
      {
        title: 'Create a community forum',
        person: 'Gouken',
        date: '20th Oct 2018',
        status: 'overdue',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
      },
    ]
  }),
}
</script>

<style scoped>

</style>