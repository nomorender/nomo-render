<template>
    <TimeLine subtitle="Timeline of" title="3D Exterior Rendering Project"
        paragraph='On average, adding exterior renderings requires <span class="font-[500]">7-10 days</span>, as it involves refining surroundings like landscaping, streets, lighting, and atmospheric effects.'
        :timeline="timeline" />
</template>


<script setup>
const timeline = [
    {
        id: 1,
        title: "Modeling",
        description: "Build the main 3D structure of the building and terrain, defining overall shape, proportions, and layout.",
        active: false,
        image: '/slide/Ex01.jpg',
    },
    {
        id: 2,
        title: "Initial environment setup",
        description: "Add basic surrounding elements like roads, sidewalks, trees, fences, and neighboring buildings to provide context.",
        active: true,
        image: '/slide/Ex02.jpg',
    },
    {
        id: 3,
        title: "Lighting",
        description: "Adjust natural and artificial lighting based on time of day (daylight, sunset, night) to create realistic shadows and reflections",
        active: true,
        image: '/slide/Ex03.jpg',
    },
    {
        id: 4,
        title: "Texturing & Materials",
        description: "Apply high-quality meterials and textures to surfaces such as walls, glass, roofing, pavement, and greenery for a lifelike appearance.",
        active: true,
        image: '/slide/Ex04.jpg',
    },
    {
        id: 5,
        title: "Final environment refinements",
        description: "Refine landscaping, water features, urban furniture, and additional elements like people, vehicles, and weather effects for a complete scene.",
        active: true,
        image: '/slide/Ex05.jpg',
    },
    {
        id: 6,
        title: "Final Rendering",
        description: "Define camera angles and perspectives (eye-level, aerial, close-up) to capture the best views of the design. Process high-resolution images or animations using rendering software, optimizing settings for quality and speed.",
        active: true,
        image: '/slide/Ex06.jpg',
    },
    {
        id: 7,
        title: "Post-Processing (Optional)",
        description: "Enhance the final render in Photoshop or other tools with color correction, contrast adjustments, and additional effects for a polished look.",
        active: true,
        image: '/slide/Ex08.jpg',
    },
];
</script>