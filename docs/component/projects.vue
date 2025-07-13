<script setup lang="ts">
import { ref } from "vue";
import { NCard, NFlex, NGradientText, NButton, NIcon, NTag } from "naive-ui";
import VideoModal from "./projectDetail.vue";
import { Github, Youtube } from "@vicons/fa";
const projects = [
  {
    title: "Nutribanner",
    content:
      "Chrome extension that shows nutrition, processing, environmental impact labels to food producsts on Canadian grocery websites",
    img: "/portfolio/nutribanner/nutriscore.svg",
    serviceLink:
      "https://chromewebstore.google.com/detail/nutribanner/hhjijdgkgbpiaicjkeodipbhoefocnja",
    iframeSrc:
      "https://www.youtube.com/embed/RuyosdHKNRg?si=zk2SbJQ0McT_XgkQ/mute=1&cc_load_policy=1&autoplay=1&playsinline=1https://www.youtube.com/embed/RuyosdHKNRg?si=zk2SbJQ0McT_XgkQ&mute=1&cc_load_policy=1&autoplay=1&playsinline=1playsinline=1",
    github: "https://github.com/bom1215/nutribanner",
    techStack: ["Typescript", "Vuejs", "HTML", "CSS"],
  },
  {
    title: "Woorinara",
    content: "LLM Chatbot application specialized in Korean VISA",
    img: "/portfolio/woorinara/logo.svg",
    serviceLink: "https://apps.apple.com/us/app/woorinara/id6741319366?uo=4",
    iframeSrc:
      "https://www.youtube.com/embed/rpjli4bFfv0?si=WBH0zMMofvqmpj8R&mute=1&autoplay=1&playsinline=1",
    github: "https://github.com/bom1215/woorinara-chatbot-sample",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Docker", "AWS"],
  },
  {
    title: "ToiletKorea",
    content: "Application that shows public toilet nearby in Korea",
    img: "/portfolio/toiletKorea/logo.svg",
    serviceLink:
      "https://play.google.com/store/apps/details?id=com.codeJP.toiletkorea&hl=en_CA",
    iframeSrc: "",
    github: "https://github.com/bom1215/ToiletKorea",
    techStack: ["Kotlin", "Android"],
  },
];
const showModal = ref(false);
const selectedProject = ref<(typeof projects)[0] | null>(null);

function openVideoModal(project: (typeof projects)[0]) {
  if (!project.iframeSrc) {
    // iframeSrc가 없으면 모달 열지 말고 바로 링크로 이동
    window.open(project.serviceLink, "_blank");
    return;
  }
  selectedProject.value = project;
  showModal.value = true;
}
function openWindow(link: Text) {
  window.open(link, "_blank");
}
</script>
<template>
  <div style="text-align: center; line-height: 1.4">
    <n-gradient-text :size="40" type="info"> Projects </n-gradient-text>
  </div>
  <project-detail />

  <n-flex justify="space-around" size="large">
    <n-card
      v-for="(project, index) in projects"
      :key="index"
      :title="project.title"
      hoverable
      style="max-width: 350px"
    >
      <template #cover>
        <img :src="project.img" class="project-img" alt="project image" />
      </template>
      {{ project.content }}
      <template #footer>
        <n-flex>
          <n-tag v-for="(tech, index) in project.techStack" :key="index">{{
            tech
          }}</n-tag>
        </n-flex>
      </template>
      <template #action>
        <n-flex justify="space-around" size="small"
          ><n-button
            quaternary
            icon-placement="left"
            @click="openVideoModal(project)"
          >
            <template #icon>
              <NIcon>
                <Youtube />
              </NIcon> </template
            >Demo video
          </n-button>
          <n-button
            quaternary
            icon-placement="left"
            @click="openWindow(project.github)"
          >
            <template #icon>
              <NIcon>
                <Github />
              </NIcon> </template
            >View Code
          </n-button></n-flex
        >
      </template>
    </n-card>
  </n-flex>
  <VideoModal
    v-if="selectedProject"
    v-model:show="showModal"
    :title="selectedProject.title"
    :iframeSrc="selectedProject.iframeSrc"
    :buttonLink="selectedProject.serviceLink"
  />
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
