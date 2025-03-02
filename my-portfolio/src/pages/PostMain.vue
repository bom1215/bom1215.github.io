<script setup>
import {ref, onMounted} from 'vue';

import PostCard from '@/components/PostCard.vue';

const posts = ref([])
const isLoaded = ref(false); // 로딩 상태 관리

onMounted(async () => {
  try {
    // JSON 파일 가져오기
    const response = await fetch('/post/posts.json');
    posts.value = await response.json(); // JSON 데이터를 cards에 저장
    console.log(posts.value);
  } catch (error) {
    console.error('Failed to load posts.json:', error); // 에러 로그 출력
  } finally {
    isLoaded.value = true; // 로딩 완료 후 상태 업데이트
  }
});
</script>
<template>
<Header class="container" />
<div v-if="isLoaded" class="container">
    <PostCard v-for="post in posts" class="container" :id=post.id :title=post.title :description=post.description :date=post.date :postPath=post.postPath :imagePath=post.imagePath />
<Footer class="container" />
</div>

</template>

<style>
</style>
