<template>
    <DashboardTableFurniture />
</template>

<script>
import { DashboardTableFurniture } from '#components';

definePageMeta({
    middleware: 'auth',
    layout: 'dashboard',
})
</script>