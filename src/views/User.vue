<template>
  <div class="fill-height pa-5">
    <h2 class="subtitle-2 grey--text">User</h2>
    <v-container class="my-6">
      <v-card>
        <v-card-title>
          <v-text-field
              v-model="search"
              filled
              rounded
              placeholder="Search"
              clearable
              dense
              hide-details
              append-icon="mdi-magnify"
          >
          </v-text-field>
        </v-card-title>
        <v-card-text>
          <v-data-table
              :headers="headers"
              :items="team"
              :loading="loading"
              :search="search"
              :items-per-page="5"
              loading-text="Plz wait"
              no-data-text="no date"
              :header-props="{
                sortByText:'Sort'
              }"
              :footer-props="{
                pageText:'{2} a {1}b{0}',
                itemsPerPageText:'',
                itemsPerPageAllText:'--',
                itemsPerPageOptions:[3,6,12,-1],
              }"
          >
            <template v-slot:item.avatar="{item}">
              <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                  <v-avatar
                      size="30"
                      v-bind="attrs"
                      v-on="on"
                  >
                    <img :src="item.avatar">
                  </v-avatar>
                </template>
                <span v-text="item.name"></span>
              </v-tooltip>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      search: null,
      loading: false,
      headers: [
        {
          text: 'Name',
          value: 'name',
        },
        {text: 'Role', value: 'role'},
        {text: 'Bio', value: 'bio'},
        {text: '', value: 'avatar', sortable: false},
      ],
      team: [],
    }
  },
  mounted() {
    this.loading = true;
    setInterval(() => {
      this.team = [
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
        {
          name: 'Evan You',
          role: 'software developer',
          bio: 'creator of the open source JavaScript framework Vue.js.',
          avatar: './image/avatar/evan_you.jpg'
        },
        {
          name: 'Eduardo San Martin Morote',
          role: 'software developer',
          bio: 'Member of the @vuejs',
          avatar: './image/avatar/eduardo.jpg'
        },
        {
          name: 'Sarah Drasner',
          role: 'software developer',
          bio: 'comprehension over configuration',
          avatar: './image/avatar/sarah.jpg'
        },
      ];
      this.loading = false;
    }, 3000)
  }
}
</script>

<style scoped>

</style>