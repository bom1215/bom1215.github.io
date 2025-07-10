<script setup lang="ts">
import { ref } from "vue";

const showModal = ref(false);

const bodyStyle = {
  width: "600px",
};

const segmented = {
  content: "soft",
  footer: "soft",
} as const;
</script>

<template>
  <n-button @click="showModal = true"> Start me up </n-button>

  <n-modal
    v-model:show="showModal"
    class="custom-card"
    preset="card"
    :style="bodyStyle"
    title="Modal"
    :bordered="false"
    size="huge"
    :segmented="segmented"
  >
    <template #header-extra> Oops! </template>

    Content

    <template #footer> Footer </template>
  </n-modal>
</template>
