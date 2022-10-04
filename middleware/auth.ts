export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    return navigateTo('/login');
  }
});
