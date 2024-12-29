<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    id: Number,
    title: String,
    imagePath: String,
    highlights: Array,
    tags: Array,
    links: Object
});
</script>
<template>
<div class="post-card">
    <div class="post-content">
        <h2> {{ title }} </h2>
        <img :src= "imagePath" alt="Post Thumbnail" class="post-image" />
        <h3>Highlights</h3>
        <ul>
            <li v-for="(highlight, index) in highlights" :key="index">{{ highlight }}</li>
        </ul>
            <p class="tags">
        <strong>Tags:</strong> {{ tags.join(', ') }}
    </p>
    <div class="post-links">
        <a :href="links.read_more">
            <button type="button" class="btn btn-link">Read More</button>
        </a>
        <a :href="links.github_repo"><button type="button" class="btn btn-link">Github</button></a>
        <a :href="links.blog_post"><button type="button" class="btn btn-link">Blog Post</button></a>
    </div>
    </div>
</div>
</template>

<style scoped>
.post-card {
    display: flex;
    flex-direction: column;
    background-color: white;
    color: black;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: auto;
    font-family: Arial, sans-serif;
    margin-bottom: 20px; 
}

.post-image {
    width: 100%;
    height: auto;
    max-height: 200px;
}

.post-content {
    padding: 16px;
    text-align: left;
}

.post-content h2 {
    margin: 0 0 16px;
    font-size: 1.5rem;
}

.post-content h3 {
    margin: 16px 0;
    font-size: 1.25rem;
}

.post-content ul {
    margin: 0 0 16px;
    padding: 0 16px;
    list-style-type: disc;
}

.tags {
    margin: 16px 0;
    font-style: italic;
}

.post-summary {
    margin-top: 16px;
    background-color: #f9f9f9;
    padding: 16px;
    border-radius: 8px;
}
</style>
