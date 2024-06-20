<template>
  <v-card>
    <v-layout>
      <v-app-bar
        scroll-behavior="elevate"
        scroll-threshold="0"
        title="Artisthong"
        theme="dark"
        elevation="0"
      >
        <!-- <div class="text-center"> -->
        <v-text-field
          label="Looking for..."
          variant="outlined"
          color="green"
          density="compact"
          hide-details
          single-line
          v-model="search"
        >
          <template v-slot:append-inner>
            <v-btn color="green" variant="text">Search</v-btn>
          </template>
        </v-text-field>

        <v-spacer />
      </v-app-bar>
      <ClientOnly>
        <v-navigation-drawer theme="dark" permanent>
          <v-list nav>
            <v-list-item
              title="Home"
              @click="navigateTo('/', { replace: true })"
            ></v-list-item>
            <v-list-item
              title="About"
              @click="navigateTo('/about', { replace: true })"
            ></v-list-item>
            <v-list-group value="Posts">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Posts"></v-list-item>
              </template>
              <v-list-item title="Vue.js / Nuxt.js"></v-list-item>
              <v-list-item title="Java"></v-list-item>
              <v-list-item title="Linux / Unix"></v-list-item>
              <v-list-item title="Windows"></v-list-item>
              <v-list-item title="Tool tips"></v-list-item>
            </v-list-group>
          </v-list>
        </v-navigation-drawer>
      </ClientOnly>
      <v-main style="height: auto">
        {{ res }}
        <NuxtPage />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script lang="ts" setup>
const search = ref('');
const res = ref();
watch(search, async (n, o) => {
  if (n.trim() === '') {
    res.value = '';
  } else if (n != o) {
    res.value = await searchContent(search);
  }
});
// const keywordSearch = async () => {
//   return await searchContent(search);
// };
</script>

<style lang="scss" scoped></style>
