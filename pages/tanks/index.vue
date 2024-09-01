<template>
  <v-container>
    <v-row>
      <v-col v-for="item in items" :key="item.name" cols="12" md="4">
        <v-card>
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-text>
            <p>Species: {{ item.species }}</p>
            <p>Diet: {{ item.diet }}</p>
            <p>Habitat: {{ item.habitat }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
const items = [
  {
    name: 'African Elephant',
    species: 'Loxodonta africana',
    diet: 'Herbivore',
    habitat: 'Savanna, Forests',
  },
  {
    name: 'African Wild Dog',
    species: 'Lycaon pictus',
    diet: 'Carnivore',
    habitat: 'Savanna',
  },
  {
    name: 'African Penguin',
    species: 'Spheniscus demersus',
    diet: 'Carnivore',
    habitat: 'Coastal',
  },
];

</script>