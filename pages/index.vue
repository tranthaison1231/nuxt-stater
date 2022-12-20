<script lang="ts" setup>
const { t } = useLang();
const isShow = ref(false);
</script>
<template>
  <div>
    <h1>{{ t("pages.index.title") }}</h1>
    <div class="q-pa-md q-gutter-sm">
      <h1 v-if="!isShow">Hello</h1>
      <LazyButton v-else />
    </div>
    <button @click="isShow = !isShow">Toggle</button>
    <q-avatar>
      <img src="https://cdn.quasar.dev/img/avatar.png" />
    </q-avatar>
  </div>
</template>
