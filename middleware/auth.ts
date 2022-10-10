export default defineNuxtRouteMiddleware(() => {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    return navigateTo("/login");
  }
});
