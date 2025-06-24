<template>
    <div class="overflow-hidden">
        <FurnitureBanner></FurnitureBanner>
        <FurnitureGallery></FurnitureGallery>
        <FurnitureBenefit></FurnitureBenefit>
        <FurnitureStep></FurnitureStep>
        <FurnitureNeed></FurnitureNeed>
        <FurnitureContactForm></FurnitureContactForm>
        <FurnitureOtherService></FurnitureOtherService>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: '3D Furniture Modeling | Nomo Render Visualization',
    meta: [
        {
            name: 'description',
            content:
                'Get custom 3D furniture renders from Nomo Render. Realistic, high-quality visualizations for designers, architects, and furniture brands.',
        },
        { name: 'robots', content: 'index, follow' }
    ],
});
</script>