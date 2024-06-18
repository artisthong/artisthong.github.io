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
            prepend-icon="mdi-email"
            title="Inbox"
            value="inbox"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-supervisor-circle"
            title="Supervisors"
            value="supervisors"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-clock-start"
            title="Clock-in"
            value="clockin"
          ></v-list-item>
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
