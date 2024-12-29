<script setup>
import {
    ref
} from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import {
    onMounted
} from 'vue';
import convertMd from '../utils/mdToHtml'

const htmlContent = ref('')

onMounted(async () => {
    const response = await convertMd('/about/aboutMe.md')
    htmlContent.value = response
})
</script>

<template>
<Header class="container" />

<body class="container">
    <div class="row">
        <div class="col">
            <img src="../assets/images/presentation2.jpg" class="img-fluid equal-height" alt="presentation image">
        </div>
        <div class="col">
        <img src="../assets/images/livingLab.jpg" class="img-fluid equal-height" alt="livingLab image">
        </div>
    </div>
    <div>
        <div v-html="htmlContent"></div>
    </div>
</body>
<Footer class="container" />
</template>

<style scoped>
.img-fluid {
    max-height: 500px;
    object-fit: cover; /* 이미지가 영역을 채우면서 왜곡되지 않도록 설정 */
}

.equal-height {
    height: 400px; /* 동일한 높이 설정 */
}
</style>
