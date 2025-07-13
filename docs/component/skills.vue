<script setup lang="ts">
import {
  NCard,
  NFlex,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NSplit,
  NImage,
  NGradientText,
  NIcon,
  NRow,
  NCol,
  NGrid,
  NGi,
  NInput,
  NSpace,
  NButton,
} from "naive-ui";

const skills = [
  { icon: "/tech/python.svg", label: "Python" },
  { icon: "/tech/typescript.svg", label: "TypeScript" },
  { icon: "/tech/aws.svg", label: "AWS" },
  { icon: "/tech/docker.svg", label: "Docker" },
  { icon: "/tech/postgreSQL.svg", label: "PostgreSQL" },
  { icon: "/tech/html.svg", label: "HTML" },
  { icon: "/tech/css.svg", label: "CSS" },
  { icon: "/tech/vuejs.svg", label: "vueJS" },
];
</script>
<template>
  <n-space vertical size="large">
    <div style="text-align: center; line-height: 1.4">
      <n-gradient-text :size="40" type="info">
        Skills & Technologies
      </n-gradient-text>
    </div>
    <n-layout>
      <n-layout-content content-style="padding: 1%;">
        <n-row :gutter="[12, 8]">
          <n-col v-for="skill in skills" :key="skill.label" :span="6">
            <div class="skill-pane">
              <n-image width="50" :src="skill.icon" :preview-disabled="true" />
              <span>{{ skill.label }}</span>
            </div>
          </n-col>
        </n-row>
        <StackIcon name="react" />
      </n-layout-content>
    </n-layout>
  </n-space>
</template>
<style>
.skill-pane {
  height: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15%;
}
</style>
