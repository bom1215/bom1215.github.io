<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    id: Number,
    title: String,
    description: String,
    date: String,
    postPath: String,
    imagePath: String
});
const router = useRouter();

function goToPath() {
    router.push({
        path: `/post/${props.id}`
    });
}
</script>
<template>
<div class="card mb-3" style="max-width: 720px;" @click="goToPath">
    <div class="row g-0">
        <div class="col-md-4 d-flex justify-content-center align-items-center">
            <img :src=imagePath class="img-fluid" alt="living lab logo">
        </div>
        <div class="col-md-8 d-flex align-items-center">
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <p class="card-text">{{ description }}</p>
                <p class="card-text"><small class="text-body-secondary">{{ date }}</small></p>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
img {
    width: 80%;
    height: auto;
}
</style>
