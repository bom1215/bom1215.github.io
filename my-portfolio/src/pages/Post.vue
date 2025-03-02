<script setup>
// import { defineProps } from 'vue';
import { useRoute } from 'vue-router'
import {ref, onMounted} from 'vue';
import convertMd from '../utils/mdToHtml'

const route = useRoute()
console.log(route.params.id)

const post = ref()
const isLoaded = ref(false); // 로딩 상태 관리
const htmlContent = ref('')
onMounted(async () => {
    try {
        // JSON 파일 가져오기
        const response = await fetch('/post/posts.json');
        const allPosts = await response.json()
        post.value = allPosts[Number(route.params.id)]
        const mdContent = await convertMd(post.value.postPath)
        htmlContent.value = mdContent
    } catch (error) {
        console.error('Failed to load posts.json:', error); // 에러 로그 출력
    } finally {
        isLoaded.value = true; // 로딩 완료 후 상태 업데이트
    }
    console.log(isLoaded.value)
});
</script>
<template>
<Header class="container" />
<div v-if="isLoaded" class="container">
    <h2 class="spacing"><strong>{{ post.title }}</strong></h2>
    <p class="spacing"><em>{{ post.description }}</em></p>
    <small>{{ post.date }}</small>
    <div v-html="htmlContent"></div>
<Footer class="container" />

</div>


</template>
<style>
.spacing {
    margin-top: 0.2rem; /* 위쪽 간격 */
    margin-bottom: 0.2rem; /* 아래쪽 간격 */
}
</style>
