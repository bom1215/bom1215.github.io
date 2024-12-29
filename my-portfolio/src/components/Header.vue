<script setup>
</script>
<template>
<div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <span class="fs-4">Junbeom Lee</span>
        </a>
        <ul class="nav nav-pills">
            <BDropdown text="Lan" class="me-2" variant="outline-danger">
                <BDropdownItem>EN</BDropdownItem>
                <BDropdownItem disabled>KR</BDropdownItem>
            </BDropdown>
            <router-link to="/about" class="nav-link">About</router-link>
            <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
            <router-link to="/post" class="nav-link">Post</router-link>
        </ul>
    </header>
</div>
</template>
