---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Junbeom Lee
  text: Enthusiast
  tagline: "Software Engineer"
  image:
    src: /home/profile_new.jpg
    alt: VitePress
    style: "border-radius: 35%;"

  actions:
    - theme: brand
      text: Blog posts
      link: en/posts/1/content
    # - theme: alt
    #   text: API Examples
    #   link: /api-examples
# features:
#   - icon: 🛠️
#     title: Simple and minimal, always
#     details: Lorem ipsum...
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

## Markdown Content

The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>
