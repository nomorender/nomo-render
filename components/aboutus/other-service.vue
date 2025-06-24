<script setup>
const services = [
    {
        title: '3D Interior Rendering',
        description: '<span class = "font-[500]">Photorealistic and immersive spaces</span> are at the core of 3D interior rendering, a vital tool in architectural visualization that transforms design concepts into highly detailed, lifelike environments.',
        image1: '/HAR03.png',
        link: '/interior'
    },
    {
        title: '3D Furniture Modeling',
        description: 'Our precision-crafted CGI models let manufacturers and designers showcase products flawlessly - no physical prototypes or costly shoots needed - perfect for catalogs, promotions, and virtual showrooms.',
        image1: '/Chair.jpg',
        image2: '/services/10.jpg',
        link: '/furniture'
    },
    {
        title: '3D Exterior Rendering',
        description: '<span class = "font-[500]">Top-notch quality</span> of 3D exterior visualization services, transforming architectural concepts into vivid, lifelike representations',
        image1: '/Interior/Pic9.png',
        link: '/exterior'
    },
]
</script>

<template>
    <OtherService subheading="Explore" heading="Our Services" :services="services" color_background="bg-[#D9D9D9]"
        headingColor="text-[#8D7662]" />
</template>
