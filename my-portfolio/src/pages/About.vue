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
    <div class="d-flex flex-column gap-5">
        <div class="row justify-content-evenly flex-nowrap">
            <div class="col-auto">
                <img src="../assets/images/presentation2.jpg" class="img-fluid img-thumbnail" alt="presentation image">
            </div>
            <div class="col-auto">
                <img src="../assets/images/livingLab.jpg" class="img-fluid img-thumbnail" alt="livingLab image">
            </div>
        </div>
        <div>
            <div v-html="htmlContent"></div>
        </div>
    </div>
</body>
<Footer class="container" />
</template>

<style scoped>
.img-fluid {
    max-height: 500px;
    object-fit: cover;
    height: 450px; /*최대 높이 설정*/
}
</style>
