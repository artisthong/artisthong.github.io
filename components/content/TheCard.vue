<template>
  <v-card class="mx-auto" color="surface-variant" :image="image" max-width="340" subtitle="dfdfd" :title="title">
    <template v-slot:actions>
      <v-btn
        append-icon="mdi-chevron-right"
        color="red-lighten-2"
        text="View"
        variant="outlined"
        block
        @click="navigateTo(link, { replace: true })"
      ></v-btn>
    </template>
  </v-card>
</template>

<script lang="ts" setup>
interface Props {
  title?: string;
  description?: string;
  link?: string;
  image?: string;
}
const { title = '', description = '', link = '', image = '' } = defineProps<Props>();
</script>

<style lang="scss" scoped></style>
