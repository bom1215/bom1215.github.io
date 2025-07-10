<script setup lang="ts">
import { NFlex } from "naive-ui";
// imports
// import { useColorMode } from "vitepress";
import { darkTheme, lightTheme, NConfigProvider } from "naive-ui";
// import { computed } from "vue";
// import { useData } from "vitepress";
// const { isDark } = useData();

// const theme = computed(() => (isDark.value ? darkTheme : lightTheme));

import about from "./component/about.vue";
import skills from "./component/skills.vue";
import projects from "./component/projects.vue";
import contactMe from "./component/contactMe.vue";
</script>
<template>
  <n-config-provider :theme="darkTheme">
    <n-flex vertical :size="30">
      <about />
      <skills />
      <projects />
      <contactMe />
    </n-flex>
  </n-config-provider>
</template>
