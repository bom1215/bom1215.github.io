---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Junbeom Lee
  text: Backend Engineer
  tagline: " "
  image:
    src: /home/profile_new.jpg
    alt: VitePress
    style: "border-radius: 35%;"

  # actions:
  # - theme: brand
  # text: Blog posts
  # link: en/posts/1/content
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

<Home />

<script setup lang="ts">
import Home from "./home.vue"
</script>
