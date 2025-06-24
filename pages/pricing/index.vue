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
    title: `Pricing Plan | Nomo Render Visualization`,
    meta: [
        {
            name: "description",
            content: `Explore flexible pricing for photorealistic 3D rendering services. Find the perfect plan for interior, exterior, and product visualizations. Stunning visuals that tell your story.`,
        },
        { name: 'robots', content: 'index, follow' }
    ],
});
</script>