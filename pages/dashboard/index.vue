<template>
    <div class="">
        <DashboardTable />
    </div>
</template>

<script setup>
definePageMeta({
    middleware: 'auth',
    layout: 'dashboard',
})
</script>