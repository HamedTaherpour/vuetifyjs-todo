<template>
  <div class="fill-height pa-5">
    <h2 class="subtitle-2 grey--text">تیم</h2>
    <v-container class="my-6">
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
          <v-hover v-slot:={hover}>
            <v-card outlined class="text-center">
              <v-avatar class="mt-5" size="100">
                <v-img
                    :src="person.avatar"
                    :alt="person.name"
                ></v-img>
              </v-avatar>
              <v-card-title class="d-block" v-text="person.name"></v-card-title>
              <v-card-subtitle v-text="person.role"></v-card-subtitle>
              <v-card-text>
                <div class="caption" v-text="person.bio"></div>
                <div class="flex flex-row mt-3" :class="hover ? 'show' : 'hide'">
                  <v-btn icon small>
                    <v-icon small>mdi-email-outline</v-icon>
                  </v-btn>
                  <v-btn icon small class="mx-3">
                    <v-icon small>mdi-phone</v-icon>
                  </v-btn>
                  <v-btn icon small>
                    <v-icon small>mdi-map</v-icon>
                  </v-btn>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn outlined>
                  <v-icon small left>mdi-message</v-icon>
                  <span>پیام</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
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
.hide {
  opacity: 0;
}

.show {
  opacity: 1;
}
</style>