<template>
    <div class="">
        <DashboardTableProject />
    </div>
</template>

<script setup>
definePageMeta({
    middleware: 'auth',
    layout: 'dashboard',
})
</script>