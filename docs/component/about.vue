<script setup lang="ts">
import {
  NFlex,
  NSplit,
  NImage,
  NGradientText,
  NIcon,
  NGrid,
  NGi,
} from "naive-ui";
import { ref, onMounted, onBeforeUnmount } from "vue";

const about = {
  aboutMe:
    "I'm a dedicated backend developer with expertise in building robust and scalable server-side applications. I specialize in Python, FastAPI, and database optimization, with a strong foundation in web technologies.",
  experiences: "1+ Years",
  prjects: "3 Completed",
  img: "/about/livingLab.jpg",
};
/* 1) 화면 폭 판단 (직접 구현하거나 vueuse 이용) */
const isMobile = ref(false);
const checkWidth = () => {
  isMobile.value = window.innerWidth < 768; // 임계값은 취향대로
};
onMounted(() => {
  checkWidth();
  window.addEventListener("resize", checkWidth);
});
onBeforeUnmount(() => window.removeEventListener("resize", checkWidth));
</script>
<template>
  <n-split direction="horizontal" style="height: 500px" v-if="!isMobile">
    <template #1>
      <div class="pane">
        <n-image
          object-fit="contain"
          :src="about.img"
          style="width: 85%; height: 60%"
        />
      </div>
    </template>
    <template #2>
      <n-split direction="vertical" style="height: 400px">
        <template #1>
          <div class="pane">
            <n-gradient-text :size="24" type="info"> About me </n-gradient-text>
            <div>
              {{ about.aboutMe }}
            </div>
          </div>
        </template>
        <template #2>
          <n-split direction="horizontal" style="height: 100%">
            <template #1>
              <div class="pane">
                <div>
                  <n-icon size="20">
                    <WorkTwotone />
                  </n-icon>
                </div>
                <n-gradient-text :size="24" type="info">
                  Experiences
                </n-gradient-text>
                <div>{{ about.experiences }}</div>
              </div>
            </template>
            <template #2>
              <div class="pane">
                <div>
                  <n-icon size="20">
                    <ComputerSharp />
                  </n-icon>
                </div>
                <n-gradient-text :size="24" type="info">
                  Projects
                </n-gradient-text>
                <div>{{ about.prjects }}</div>
              </div>
            </template>
          </n-split>
        </template>
      </n-split>
    </template>
  </n-split>
  <n-flex vertical v-if="isMobile">
    <div class="pane">
      <n-image object-fit="fill" :src="about.img" />
    </div>
    <div class="pane">
      <n-gradient-text :size="24" type="info"> About me </n-gradient-text>
      <div>
        {{ about.aboutMe }}
      </div>
    </div>
    <n-grid x-gap="12" :cols="2">
      <n-gi>
        <div class="pane">
          <div>
            <n-icon size="20">
              <WorkTwotone />
            </n-icon>
          </div>
          <n-gradient-text :size="24" type="info">
            Experiences
          </n-gradient-text>
          <div>{{ about.experiences }}</div>
        </div>
      </n-gi>
      <n-gi>
        <div class="pane">
          <div>
            <n-icon size="20">
              <ComputerSharp />
            </n-icon>
          </div>
          <n-gradient-text :size="24" type="info"> Projects </n-gradient-text>
          <div>{{ about.prjects }}</div>
        </div>
      </n-gi>
    </n-grid>
  </n-flex>
</template>
<style scoped>
.pane {
  padding: 1rem;
}
</style>
