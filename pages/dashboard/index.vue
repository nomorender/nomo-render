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

useHead({
    title: `Dashboard | Nomo Render | 3D visualization
studio`,
    meta: [
        {
            name: "description",
            content: `Nomadic Creativity, Timeless Renders, More than just blueprints, it’s about storytelling`,
        },
    ],
});
</script>