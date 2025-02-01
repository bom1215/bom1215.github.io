<script setup>
import PostCard from '@/components/PostCard.vue';
const post = {
    id: 0,
    title: "Example title",
    description: "If you want to pass all the properties of an object as props, you can use v-bind without an argument (v-bind instead of :prop-name). For example, given a post object",
    date: "Jan 5, 2025",
    postPath: "/about/aboutMe.md",
    imagePath: "/images/portfolio/livingLabLogo.svg",
}
</script>
<template>
<Header class="container" />
<PostCard class="container" :id=post.id :title=post.title :description=post.description :date=post.date :postPath=post.postPath :imagePath=post.imagePath />
<Footer class="container" />
</template>

<style>
</style>
