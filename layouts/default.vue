<template>
  <v-theme-provider theme="light" with-background>
    <v-card>
      <v-layout>
        <v-app-bar scroll-behavior="elevate" scroll-threshold="0" title="Artisthong" theme="dark" elevation="0">
          <!-- <div class="text-center"> -->
          <!-- {{ items }} -->
          <v-row>
            <v-col cols="12">
              <v-autocomplete
                placeholder="Looking for..."
                variant="outlined"
                color="green"
                density="compact"
                hide-details
                single-line
                :items="items"
                hide-spin-buttons
                menu-icon=""
                :filter-keys="['title', 'value']"
                @update:search="
                  v => {
                    search = v;
                  }
                "
              >
                <template #append-inner>
                  <v-btn color="green" variant="text">Search</v-btn>
                </template>
                <template #item="{ props, item }">
                  <v-list-item
                    v-bind="props"
                    :subtitle="item.raw.value"
                    :title="item.raw.title"
                    @click="navigateTo(item.raw.id)"
                  ></v-list-item>
                </template>
              </v-autocomplete>
            </v-col>
          </v-row>

          <v-spacer />
        </v-app-bar>
        <!-- <ClientOnly> -->
        <v-navigation-drawer theme="dark" permanent>
          <ContentNavigation v-slot="{ navigation }">
            <!-- {{ navigation }} -->
            <v-list nav>
              <div v-for="(link, index) in navigation" :key="index">
                <v-list-item
                  :title="
                    link._path.replace(/\//g, '') === ''
                      ? 'Home'
                      : link._path.replace(/\//g, '').replace(/^[a-z]/, (char: string) => char.toUpperCase())
                  "
                  @click="navigateTo(link._path, { replace: true })"
                  v-if="(link.children ?? []).length <= 1"
                >
                  <NuxtLink :to="link._path" v-show="false" />
                </v-list-item>
                <v-list-group
                  :value="link._path.replace(/\//g, '').replace(/^[a-z]/, (char: string) => char.toUpperCase())"
                  v-else
                >
                  <template v-slot:activator="{ props }">
                    <v-list-item
                      v-bind="props"
                      :title="link._path.replace(/\//g, '').replace(/^[a-z]/, (char: string) => char.toUpperCase())"
                    >
                      <NuxtLink :to="link._path" v-show="false" />
                    </v-list-item>
                  </template>
                  <div v-for="sub in link.children" :key="sub._path">
                    <v-list-item
                      :title="
                        sub._path
                          // eslint-disable-next-line prettier/prettier
                          .split('/')[sub._path.split('/').length - 1]
                          .replace(/^[a-z]/, (char: string) => char.toUpperCase())+`(${link.children.length - 1})`
                      "
                      @click="navigateTo(sub._path, { replace: true })"
                      v-if="link._path != sub._path"
                    >
                      <NuxtLink :to="sub._path" v-show="false" />
                    </v-list-item>
                  </div>
                </v-list-group>
                <ContentList :path="link._path" v-slot="{ list }">
                  <div v-for="cont in list" :key="cont._path">
                    <NuxtLink :to="cont._path" v-show="false" />
                  </div>
                </ContentList>
              </div>
            </v-list>
          </ContentNavigation>
        </v-navigation-drawer>
        <!-- </ClientOnly> -->

        <v-main style="background-color: #ddd">
          <!-- <div>items: {{ items }}</div> -->
          <NuxtPage />
        </v-main>
      </v-layout>
    </v-card>
  </v-theme-provider>
</template>

<script lang="ts" setup>
const search = ref('');
const items = ref([] as any[]);

watch(search, async (n, o) => {
  if (n.trim() === '') {
    items.value = [];
  } else if (n != o) {
    const response = await searchContent(search);

    items.value = response.value.map((v: any) => {
      return { title: v.title, value: v.content, props: { to: v.id, replace: true } };
    });
    // console.log(items.value);
  }
});
</script>

<style lang="scss" scoped>
.v-overlay-container {
  .v-list-item {
    :deep(.v-list-item__content) {
      display: flex;
      flex-direction: column;
    }
  }

  // :deep(.v-overlay__content) {
  //   :deep(.v-list-item) {
  //     display: block !important;
  //     // flex-direction: column !important;
  //   }
  // }
}
</style>
