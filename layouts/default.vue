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
      </v-app-bar>
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
      <v-main style="height: auto">
        <NuxtPage />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
