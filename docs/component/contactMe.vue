<script setup lang="ts">
import {
  NCard,
  NFlex,
  NGradientText,
  NInput,
  NSpace,
  NButton,
  NAutoComplete,
} from "naive-ui";

import { ref, computed } from "vue";
const value = ref("");
const options = computed(() => {
  const prefix = value.value.split("@")[0];
  return [
    "@gmail.com",
    "@naver.com",
    "@hotmail.com",
    "@outlook.com",
    "@hanmail.net",
    "@yahoo.com",
    "@icloud.com",
  ].map((suffix) => {
    return {
      label: prefix + suffix,
      value: prefix + suffix,
    };
  });
});
</script>
<template>
  <n-card size="huge" hoverable :bordered="false">
    <div style="text-align: center">
      <n-gradient-text :size="40" type="info"> Get in touch </n-gradient-text>
    </div>
    <n-space vertical>
      <div>Your Name</div>
      <n-input maxlength="100" placeholder="Name" clearable />
      <div>Your Email</div>
      <n-auto-complete
        v-model:value="value"
        :input-props="{
          autocomplete: 'disabled',
        }"
        :options="options"
        placeholder="Email"
        clearable
      />
      <div>Your Subject</div>
      <n-input maxlength="1000" placeholder="subject" clearable />
      <div>Message</div>
      <n-input type="textarea" maxlength="5000" placeholder="Messsage" />
    </n-space>
    <template #footer>
      <n-button strong secondary round type="info" style="width: 100%">
        Send Message
      </n-button>
    </template>
  </n-card>
</template>
<style></style>
