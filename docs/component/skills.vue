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
import {
  LogoPython,
  LogoJavascript,
  LogoHtml5,
  LogoCss3,
} from "@vicons/ionicons5";
import { Aws, Docker } from "@vicons/fa";
import { DatabasePostgresql } from "@vicons/carbon";

const skills = [
  { icon: LogoPython, label: "Python" },
  { icon: LogoJavascript, label: "JavaScript" },
  { icon: Aws, label: "AWS" },
  { icon: Docker, label: "Docker" },
  { icon: DatabasePostgresql, label: "PostgreSQL" },
  { icon: LogoHtml5, label: "HTML" },
  { icon: LogoCss3, label: "CSS" },
];
</script>
<template>
  <n-space vertical size="large">
    <n-layout>
      <n-layout-header>
        <div style="text-align: center; line-height: 1.4">
          <n-gradient-text :size="40" type="info">
            Skills & Technologies
          </n-gradient-text>
        </div>
      </n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        <n-row :gutter="[12, 8]">
          <n-col v-for="skill in skills" :key="skill.label" :span="6">
            <div class="skill-pane">
              <n-icon size="3rem">
                <component :is="skill.icon" />
              </n-icon>
              <span>{{ skill.label }}</span>
            </div>
          </n-col>
        </n-row>
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
}
</style>
