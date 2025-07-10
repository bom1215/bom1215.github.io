<script setup lang="ts">
import { NCard, NFlex, NGradientText } from "naive-ui";

const projects = [
  {
    title: "Nutribanner",
    content:
      "Chrome extension that shows nutrition, processing, environmental impact labels to food producsts on Canadian grocery websites",
    img: "/portfolio/nutribanner/nutriscore.svg",
    serviceUrl:
      "https://chromewebstore.google.com/detail/nutribanner/hhjijdgkgbpiaicjkeodipbhoefocnja",
    videoURL: "https://youtu.be/RuyosdHKNRg",
  },
  {
    title: "Woorinara",
    content: "LLM Chatbot application specialized in Korean VISA",
    img: "/portfolio/woorinara/logo.svg",
    serviceUrl: "https://apps.apple.com/us/app/woorinara/id6741319366?uo=4",
    videoUrl: "https://youtu.be/rpjli4bFfv0",
  },
  {
    title: "ToiletKorea",
    content: "Application that shows public toilest nearby in Korea",
    img: "/portfolio/toiletKorea/logo.svg",
    link: "https://play.google.com/store/apps/details?id=com.codeJP.toiletkorea&hl=en_CA",
    videoUrl: "",
  },
];
function openLink(url: string) {
  window.location.href = url;
}
</script>
<template>
  <div style="text-align: center; line-height: 1.4">
    <n-gradient-text :size="40" type="info"> Projects </n-gradient-text>
  </div>

  <n-flex justify="space-around" size="large">
    <n-card
      v-for="(project, index) in projects"
      :key="index"
      :title="project.title"
      hoverable
      style="max-width: 300px"
      @click="openLink(project.link)"
    >
      <template #cover>
        <img :src="project.img" class="project-img" alt="project image" />
      </template>
      {{ project.content }}
    </n-card>
  </n-flex>
</template>
<style scoped>
.project-img {
  width: 100%;
  height: 180px; /* 원하는 고정 높이 */
  object-fit: contain; /* 또는 cover */
  padding: 12px; /* optional: 이미지가 너무 꽉 차면 여유 있게 */
  box-sizing: border-box;
}
</style>
