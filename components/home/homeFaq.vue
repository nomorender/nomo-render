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
        <div class="md:text-[64px] text-[30px] text-[#8D7662] font-[600] leading-[100%] text-center">FAQ</div>
        <div class="space-y-4">
            <UAccordion :collapsible="false" :items="items">
                <template #default="{ item, index, open }">
                    <div class="relative">
                        <div class="flex items-center justify-between py-2">
                            <div
                                class="font-[500] md:text-[25px] text-[15px] h-fit md:w-full w-[270px] leading-[200%] whitespace-normal break-words">
                                {{ item.label }}
                            </div>
                            <UIcon name="material-symbols:keyboard-arrow-down-rounded"
                                class="w-[48px] h-[48px] transform transition-transform duration-200"
                                :class="{ 'rotate-180': open }" />
                        </div>
                        <span v-if="index !== items.length - 1" class="md:hidden block h-[1px] bg-[#8D7662] w-full mt-2"></span>
                    </div>

                </template>
                <template #item="{ item }">
                    <p>{{ item.content }}</p>
                </template>
            </UAccordion>
        </div>
    </div>
</template>
