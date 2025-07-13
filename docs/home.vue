<script setup lang="ts">
import { NFlex } from "naive-ui";
import { darkTheme, lightTheme, NConfigProvider } from "naive-ui";
import { computed, ref, onMounted } from "vue";
import { useData } from "vitepress";
const mounted = ref(false);
const { isDark } = useData();

onMounted(() => {
  mounted.value = true;
});

const theme = computed(() =>
  mounted.value ? (isDark.value ? darkTheme : lightTheme) : lightTheme
);

import about from "./component/about.vue";
import skills from "./component/skills.vue";
import projects from "./component/projects.vue";
import contactMe from "./component/contactMe.vue";
</script>
<template>
  <n-config-provider :theme="theme">
    <n-flex vertical :size="50">
      <about />
      <skills />
      <projects />
      <contactMe />
    </n-flex>
  </n-config-provider>
</template>
