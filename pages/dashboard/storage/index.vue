<template>
    <div class="">
        <DashboardGalleryUpload />
    </div>
</template>

<script setup>
definePageMeta({
    middleware: 'auth',
    layout: 'dashboard',
})
</script>