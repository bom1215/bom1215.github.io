<script setup lang="ts">
import {
  NCard,
  NFlex,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NLayoutSider,
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
  NAutoComplete,
} from "naive-ui";
import { ComputerSharp, WorkTwotone } from "@vicons/material";
import {
  LogoPython,
  LogoJavascript,
  LogoHtml5,
  LogoCss3,
} from "@vicons/ionicons5";
import { Aws, Docker } from "@vicons/fa";
import { DatabasePostgresql } from "@vicons/carbon";
import { ref, onMounted, onBeforeUnmount, computed } from "vue";

const skills = [
  { icon: LogoPython, label: "Python" },
  { icon: LogoJavascript, label: "JavaScript" },
  { icon: Aws, label: "AWS" },
  { icon: Docker, label: "Docker" },
  { icon: DatabasePostgresql, label: "PostgreSQL" },
  { icon: LogoHtml5, label: "HTML" },
  { icon: LogoCss3, label: "CSS" },
];

const projects = [
  {
    title: "Nutribanner",
    content:
      "Chrome extension that shows nutrition, processing, environmental impact labels to food producsts on Canadian grocery websites",
    img: "/portfolio/nutribanner/nutribanner.svg",
    link: "https://chromewebstore.google.com/detail/nutribanner/hhjijdgkgbpiaicjkeodipbhoefocnja",
  },
  {
    title: "Woorinara",
    content: "LLM Chatbot application specialized in Korean VISA",
    img: "/portfolio/woorinara/logo.svg",
    link: "https://apps.apple.com/us/app/woorinara/id6741319366?uo=4",
  },
  {
    title: "ToiletKorea",
    content: "Application that shows public toilest nearby in Korea",
    img: "/portfolio/toiletKorea/logo.svg",
    link: "https://play.google.com/store/apps/details?id=com.codeJP.toiletkorea&hl=en_CA",
  },
];
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

function openLink(url: string) {
  window.location.href = url;
}
</script>
<template>
  <n-flex vertical :size="30">
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
              <n-gradient-text :size="24" type="info">
                About me
              </n-gradient-text>
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
          <img :src="project.img" />
        </template>
        {{ project.content }}
      </n-card>
    </n-flex>
    <n-card size="huge" hoverable :bordered="false">
      <div style="text-align: center">
        <n-gradient-text :size="40" type="info"> Get in touch </n-gradient-text>
      </div>
      <n-flex justify="space-between">
        <div>
          <div>
            Have a project in mind or want to chat? Feel free to reach out using
            the form or contact me directly.
          </div>
        </div>
        <div></div>
      </n-flex>
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
        <n-button strong secondary round type="warning" style="width: 100%">
          Send Message
        </n-button>
      </template>
    </n-card>
  </n-flex>
</template>
<style scoped>
.pane {
  padding: 1rem;
}
.skill-pane {
  height: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
.contact {
  width: 100%;
}
</style>
