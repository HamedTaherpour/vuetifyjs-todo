<template>
  <div class="fill-height pa-5">

    <v-dialog
        v-model="dialog"
        persistent
        :max-width="500"
        transition="dialog-bottom-transition"
    >
      <v-card>
        <v-card-title>Add New Project</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="title" prepend-icon="mdi-folder" label="Title"></v-text-field>
            <v-textarea v-model="content" prepend-icon="mdi-grease-pencil" label="Content" rows="3"></v-textarea>
            <v-menu
                v-model="datePickerMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    :value="formattedDate"
                    label="Date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" @input="datePickerMenu = false"></v-date-picker>
            </v-menu>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn small outlined @click="dialog = false">Cancel</v-btn>
          <v-btn small depressed dark color="blue" @click="add">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <h2 class="subtitle-2 grey--text">Project</h2>
    <v-container class="my-6">
      <v-btn depressed small class="mb-3" color="primary" @click="dialog = !dialog">New Project</v-btn>
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
import moment from "moment";

export default {
  name: "Project",
  data: () => ({
    dialog: false,
    datePickerMenu: false,
    title: null,
    content: null,
    date: null,
    projects: [
      {
        title: 'Design a new website',
        date: '1st Jan 2019',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
      },
      {
        title: 'Code up the homepage',
        date: '10th Jan 2019',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
      },
      {
        title: 'Design video thumbnails',
        date: '20th Dec 2018',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
      },
      {
        title: 'Create a community forum',
        date: '20th Oct 2018',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
      },
    ]
  }),
  computed: {
    formattedDate() {
      return this.date ? moment(this.date).format('Do MMM YYYY') : '';
    }
  },
  methods: {
    add() {
      this.projects.push({
        title: this.title,
        content: this.content,
        date: this.formattedDate,
      })
      this.dialog = false;
    }
  }
}
</script>

<style scoped>

</style>