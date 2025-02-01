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
            <RouterLink to="/about" class="nav-link">About</RouterLink>
            <RouterLink to="/portfolio" class="nav-link">Portfolio</RouterLink>
            <RouterLink to="/post" class="nav-link">Post</RouterLink>
        </ul>
    </header>
</div>
</template>
