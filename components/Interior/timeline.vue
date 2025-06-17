<template>
    <TimeLine subtitle="Timeline of" title="3D Interior Rendering Project"
        paragraph='The process takes around <span class="font-[500]">5-7 days</span>, carefully shaping everything from structure to decor to create a life-like, stunning experience.'
        :timeline="timeline" />
</template>

<script setup>
const timeline = [
    {
        id: 1,
        title: "Modeling",
        description: "The 3D structure of the interior space is built, including walls, ceilings, floors, and main architectural elements.",
        active: false,
        image: '/Interior/In01.jpg',
    },
    {
        id: 2,
        title: "Lighting Setup",
        description: "Natural light sources (like sunlight through windows) and artificial lighting (lamps, chandeliers, LED strips) are positioned and adjusted. The right lighting enhances realism and sets the mood of the space.",
        active: true,
        image: '/Interior/In02.1.jpg',
    },
    {
        id: 3,
        title: "Texturing & Materials",
        description: "Materials and texture such as wood, marble, fabric, glass, and metal are applied to walls, floors, furniture, and decor. Realistic reflections, roughness, and transparency settings are fine-tuned.",
        active: true,
        image: '/Interior/In03.jpg',
    },
    {
        id: 4,
        title: "Interior Decoration & Furnishing",
        description: "Furniture, decor, and accessories are placed to complete the scene, ensuring a cozy and visually appealing layout.",
        active: true,
        image: '/Interior/In04.jpg',
    },
    {
        id: 5,
        title: "Final Rendering",
        description: "The scene is processed in high resolution, where rendering engines calculate light, shadows, and reflections to create a photorealistic image. This step can take several hours, depending on complexity.",
        active: true,
        image: '/Interior/In06.jpg',
    }
];
</script>