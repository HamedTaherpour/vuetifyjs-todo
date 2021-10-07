<template>
  <div class="fill-height pa-5">

    <v-dialog
        v-model="dialog"
        persistent
        :max-width="500"
        transition="dialog-bottom-transition"
    >
      <v-card>
        <v-card-title>اضافه کردن پروژه جدید</v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-text-field
                v-model="title"
                prepend-icon="mdi-folder"
                label="عنوان"
                :rules="inputRules"
            >
            </v-text-field>
            <v-textarea
                v-model="content"
                prepend-icon="mdi-grease-pencil"
                label="محتوا"
                rows="3"
                :rules="inputRules"
            >
            </v-textarea>
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
                    label="تاریخ"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :rules="inputRules"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" @input="datePickerMenu = false"></v-date-picker>
            </v-menu>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn small outlined @click="dialog = false">لغو</v-btn>
          <v-btn small depressed dark color="blue" @click="add">اضافه کردن</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <h2 class="subtitle-2 grey--text">پروژه</h2>
    <v-container class="my-6">
      <v-btn depressed small class="mb-3" color="primary" @click="dialog = !dialog">اضافه کردن پروژه جدید</v-btn>
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
    ],
    inputRules: [
      v => !!v || 'این فیلد اجباری است',
      v => (!!v && v.length >= 3) || 'حداقل سه کاراکتر باشد',
    ]
  }),
  computed: {
    formattedDate() {
      return this.date ? moment(this.date).format('Do MMM YYYY') : '';
    }
  },
  methods: {
    add() {
      if (this.$refs.form.validate()) {
        this.projects.push({
          title: this.title,
          content: this.content,
          date: this.formattedDate,
        })
        this.$refs.form.reset();
        this.dialog = false;
      }
    }
  }
}
</script>

<style scoped>

</style>