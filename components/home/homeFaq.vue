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
    <div class="bg-[#FAF8F5] md:px-[130px] px-10 py-20 md:grid grid-cols-[auto,1fr] h-fit gap-20 mt-20">
        <h2 class="md:text-[64px] text-[30px] text-[#8D7662] font-[600] leading-tight text-center">FAQ</h2>
        <div class="space-y-4">
            <UAccordion :collapsible="false" :items="items" :ui="{
                item: {
                    color: 'text-black',
                    padding: 'py-2 ml-2',
                    size: 'md:text-[15px] text-[13px]',
                    icon : 'w-[48px] h-[48px]',
                },
                container: 'bg-transperent',
                indicators: {
                    wrapper: 'relative bottom-0 mt-4',
                },
                base: 'text-black whitespace-normal! break-words! w-full',
                default: {
                    variant: 'bg-transperent',
                    class: 'md:text-[25px] text-[15px] font-medium py-3 whitespace-normal! break-words! w-full overflow-visible!',
                },
            }" />
        </div>
    </div>
</template>
