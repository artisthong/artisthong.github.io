export default defineNuxtPlugin(nuxtApp => {
  const route = useRoute();
  console.log('rrrrrr', route.path);
  // prerenderRoutes(['/', '/about']);
});
