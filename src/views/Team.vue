<template>
  <div class="fill-height pa-5">
    <h2 class="subtitle-2 grey--text">Team</h2>
    <v-container class="my-6">
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
          <v-card outlined class="text-center">
            <v-avatar class="mt-5" size="100">
              <v-img
                  :src="person.avatar"
                  :alt="person.name"
              ></v-img>
            </v-avatar>
            <v-card-title class="d-block" v-text="person.name"></v-card-title>
            <v-card-subtitle v-text="person.role"></v-card-subtitle>
            <v-card-text v-text="person.bio"></v-card-text>
            <v-card-actions>
              <v-btn outlined>
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Team",
  data: () => ({
    team: [
      {
        name: 'Hamed Taherpour',
        role: 'Web developer',
        bio: 'I love Vue ❤️',
        avatar: './image/avatar/hamed_taherpour.jpg'
      },
      {
        name: 'Maggie Appleton',
        role: 'Graphic designer',
        bio: 'Art Director & Illustrator',
        avatar: './image/avatar/maggie_appleton.png'
      },
      {
        name: 'John Leider',
        role: 'Web developer',
        bio: 'CEO and Author of Vuetify',
        avatar: './image/avatar/john_leider.png'
      },
      {
        name: 'Gouken',
        role: 'Social media maverick',
        bio: 'Enjoy life',
        avatar: './image/avatar/gouken.jpg'
      },
      {
        name: 'Yoshi',
        role: 'Sales guru',
        bio: '💻💰⚖️',
        avatar: './image/avatar/yoshi.jpg'
      },
    ]
  })
}
</script>

<style scoped>

</style>