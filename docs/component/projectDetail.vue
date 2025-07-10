<script setup lang="ts">
import { ref, defineProps } from "vue";
import { NButton, NModal } from "naive-ui";

// 받아올 props 정의
const props = defineProps<{
  title: string;
  iframeSrc: string;
  buttonLink: string;
}>();

const showModal = ref(false);

// 모달 스타일
const segmented = {
  content: "soft",
  footer: "soft",
} as const;
</script>

<template>
  <!-- 모달 -->
  <n-modal
    v-model:show="showModal"
    class="responsive-modal"
    preset="card"
    :title="props.title"
    :bordered="false"
    size="huge"
    :segmented="segmented"
  >
    <div class="modal-content">
      <!-- YouTube 영상 -->
      <div class="responsive-video">
        <iframe
          :src="props.iframeSrc"
          title="Demo Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <!-- 버튼 -->
      <n-button tag="a" :href="props.buttonLink" target="_blank">
        🔗 Visit Service Page
      </n-button>
    </div>

    <template #footer />
  </n-modal>
</template>

<style scoped>
.responsive-modal {
  width: 90vw;
  max-width: 600px;
}

.modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.responsive-video {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
}

.responsive-video iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 12px;
}
</style>
