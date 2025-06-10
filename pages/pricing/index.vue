<template>
    <div class="overflow-hidden">
        <PricingPlan />
        <PricingRange />
        <PricingContact />
        <PricingService />
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: `3D Rendering Pricing & Plans | Nomo Render Studio`,
    meta: [
        {
            name: "description",
            content: `Explore flexible pricing for photorealistic 3D rendering services. Find the perfect plan for interior, exterior, and product visualizations. Stunning visuals that tell your story.`,
        },
    ],
});
</script>