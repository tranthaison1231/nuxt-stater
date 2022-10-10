<template>
  <div>
    <AppHeader />
    <ul>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
      <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
    </ul>
    <slot />
    <AppFooter />
  </div>
</template>
