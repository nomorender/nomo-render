<template>
    <Login />
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
    middleware: 'authenticated'
})
</script>