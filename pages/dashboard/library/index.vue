<template>
    <DashboardLibrary />
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'auth',
    layout: 'dashboard',
})
</script>