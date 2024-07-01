<template>
  <!-- <div v-if="$route.path === '/'" style="height: calc(100vh - 64px); overflow: auto">Main</div> -->
  <div
    v-if="calcMergeNaviPath.filter(x => x.includes('/posts')).includes($route.path)"
    style="height: calc(100vh - 64px); overflow: auto; background-color: #0d1117"
  >
    <ContentList :path="$route.path" v-slot="{ list }">
      <v-row class="ma-0">
        <!-- {{ list.filter(v => v.title != '') }} -->
        <v-col v-for="path in list.filter((v: any) => v.title != '')" :key="path._path" cols="12" md="3">
          <TheCard :title="path.title" :description="path" :link="path._path" />
        </v-col>
      </v-row>
    </ContentList>
  </div>
  <div v-else class="markdown-body" style="height: calc(100vh - 64px); overflow: auto">
    <ContentDoc class="mx-2" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation());
const calcMergeNaviPath = computed(() => {
  if (navigation.value != null) {
    const theNavUrl = navigation.value
      .flatMap(v => {
        return v.children;
      })
      .map(w => {
        return w === undefined ? '' : w._path;
      });
    const otherNavUrl = navigation.value.flatMap(v => {
      return v._path;
    });

    return [...new Set([...theNavUrl, ...otherNavUrl])].filter(x => x != '');
  } else {
    return [];
  }
});
</script>

<style scoped></style>
