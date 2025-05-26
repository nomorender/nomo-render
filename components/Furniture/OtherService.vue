<script setup>
const services = [
    {
        title: '3D Interior Rendering',
        description: '<span class = "font-[500]">Photorealistic and immersive spaces</span> are at the core of 3D interior rendering, a vital tool in architectural visualization that transforms design concepts into highly detailed, lifelike environments.',
        image1: '/HAR03.png',
    },
    {
        title: '3D Exterior Rendering',
        description: '<span class = "font-[500]">Top-notch quality</span> of 3D exterior visualization services, transforming architectural concepts into vivid, lifelike representations',
        image1: '/Furniture/Nha1.png',
        image2: '/Furniture/Nha2.png'
    }
]
</script>

<template>
    <OtherService subheading="Our other" heading="Services" :services="services" color_background="bg-[#FAF8F5]"
        headingColor="text-[#8D7662]" />
</template>
