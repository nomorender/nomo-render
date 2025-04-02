<script setup lang="ts">
const items = [
    {
        label: 'What is 3D Architectural Visualization?',
        content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    },
    {
        label: 'What are the key stages in the 3D rendering workflow?',
        content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    },
    {
        label: 'What software and technology do Nomo Render use for execution?',
        content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
    },
    {
        label: 'How long does a 3D rendering project usually take?',
        content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
    },
    {
        label: 'What factors influence the pricing of a 3D rendering project?',
        content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
    },
    {
        label: 'What is the process for providing feedback to the project?',
        content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
    },
]
</script>
<template>
    <div class="bg-[#FAF8F5] px-[100px] py-20 grid grid-cols-[auto,1fr] h-fit gap-20 mt-20">
        <h2 class="text-[64px] text-[#8D7662] font-[600] leading-tight">FAQ</h2>
        <div class="space-y-4">
            <UAccordion :collapsible="false" :items="items" :ui="{
                item: {
                    color : 'text-black',
                    padding: 'py-2 ml-2',
                    size : 'text-[20px]'
                },
                container: 'bg-transperent',
                indicators: {
                    wrapper: 'relative bottom-0 mt-4',
                },
                base : 'text-black',
                default :{
                    variant: 'bg-transperent',
                    class : 'text-[25px] font-medium py-3',
                }
            }" />
        </div>
    </div>
</template>
