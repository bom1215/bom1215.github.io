<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import {
    onMounted
} from 'vue';
import PortfolioCard from '@/components/PortfolioCard.vue'
import {
    ref
} from 'vue';

const cards = ref([])
const isLoaded = ref(false); // 로딩 상태 관리

onMounted(async () => {
  try {
    // JSON 파일 가져오기
    const response = await fetch('/portfolio/cards.json');
    cards.value = await response.json(); // JSON 데이터를 cards에 저장
    console.log(cards.value);
  } catch (error) {
    console.error('Failed to load cards.json:', error); // 에러 로그 출력
  } finally {
    isLoaded.value = true; // 로딩 완료 후 상태 업데이트
  }
});
</script>
<template>
<Header class="container" />

<body class="container">
    <div v-if="isLoaded">
        <!-- <img src="../assets/images/data.jpg" class="img-fluid" alt="presentation image"> -->
        <PortfolioCard v-for="card in cards" :id="card.id" :title="card.title" :imagePath="card.image" :highlights="card.highlights" :tags="card.tags" :links="card.links" />
    </div>

</body>
<Footer class="container" />
</template>

<style>
.img-fluid {
    max-height: 500px;
    align-items: center;
    /* 세로 가운데 정렬 */
}
</style>
