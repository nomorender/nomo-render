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

useSeoMeta({
    title: 'Pricing | Nomo Render Visualization',
    ogTitle: 'Pricing | Nomo Render Visualization',
    description: 'Get high-quality 3D rendering services by Nomo Render. Stunning visuals that tell your story.',
    ogDescription: 'Get high-quality 3D rendering services by Nomo Render. Stunning visuals that tell your story.',
    ogImage: 'https://www.nomorender.com/banner-interior.png',
    twitterTitle: 'Pricing | Nomo Render Visualization',
    twitterCard: 'summary_large_image',
    twitterDescription: "Get high-quality 3D rendering services by Nomo Render. Stunning visuals that tell your story.",
    twitterImage: 'https://www.nomorender.com/banner-interior.png',
    ogSiteName: 'Nomo Render',
    robots: 'index, follow',
})
</script>