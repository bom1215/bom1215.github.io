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

import { ref, computed, onMounted } from "vue";
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

const currentUrl = ref("");

onMounted(() => {
  currentUrl.value = window.location.href;
});
</script>
<template>
  <form action="https://formsubmit.co/g4012s@gmail.com" method="POST">
    <n-card size="huge" hoverable :bordered="false">
      <div style="text-align: center">
        <n-gradient-text :size="40" type="info"> Get in touch </n-gradient-text>
      </div>

      <n-space vertical>
        <div>Your Name</div>
        <n-input
          :input-props="{ name: 'name' }"
          type="text"
          maxlength="100"
          placeholder="Name"
          clearable
          required
        />

        <div>Your Email</div>
        <n-input
          :input-props="{ name: 'email', type: 'email' }"
          maxlength="100"
          placeholder="Email"
          clearable
          required
        />

        <div>Your Subject</div>
        <n-input
          :input-props="{ name: '_subject', type: 'text' }"
          maxlength="1000"
          placeholder="Subject"
          clearable
          required
        />

        <div>Message</div>
        <n-input
          :input-props="{ name: 'message' }"
          type="textarea"
          maxlength="5000"
          placeholder="Message"
          required
        />
      </n-space>

      <template #footer>
        <n-button
          strong
          secondary
          round
          type="info"
          style="width: 100%"
          attr-type="submit"
        >
          Send Message
        </n-button>
        <input type="hidden" name="_next" :value="currentUrl" />
        <input type="hidden" name="_captcha" value="false" />
      </template>
    </n-card>
  </form>
</template>

<style></style>
