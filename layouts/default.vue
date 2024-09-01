<template>
    <v-layout>
      <v-app-bar
          color="primary"
          prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Tabac & More</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>

          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
          v-model="drawer"
          :location="$vuetify.display.mobile ? 'bottom' : undefined"
          temporary
      >
        <v-list
            :items="items"
        ></v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container class="fill-height">
          <slot />
        </v-container>
      </v-main>

      <v-footer app>
        <v-col class="text-center">© 2024 Tabac & More</v-col>
      </v-footer>

  </v-layout>
</template>



<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Welkom',
        value: 'welcome',
      },
      {
        title: 'Alcohol',
        value: 'alcohol',
      },
      {
        title: 'Tabak',
        value: 'tabac',
      }
    ],
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>