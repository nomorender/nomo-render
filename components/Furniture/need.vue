<script lang="ts" setup>
const data = [
    { title: 'Technical Drawings', description: 'Clear photographs of the actual product or similar designs.' },
    { title: 'Accurate Dimensions', description: 'Detailed measurements to maintain correct proportions.' },
    { title: 'Material & Finish Specifications', description: 'Details on materials, textures, & finishes for realism.' },
    { title: 'Alternative References', description: ' If actual images are unavailable, please provide annotated sketches or references to comparable products' },
]
</script>

<template>
    <div class="mb-20">
        <div class="bg-[#D9D9D9] md:pt-[50px] md:pb-[60px] mx-auto flex flex-col items-center justify-center">
            <div class="w-[1200px]">
                <div class="flex flex-col items-center justify-center">
                    <div class="md:text-[32px] text-[16px] font-normal md:leading-[150%] leading-[100%]">
                        What do we need
                    </div>
                    <div
                        class="md:w-full w-[306px] text-center text-[#8D7662] md:leading-[150%] font-semibold leading-[100%] md:text-[64px] text-[30px] md:tracking-[2%]">
                        Before Crafting?
                    </div>
                </div>

                <div
                    class="bg-[#FAF8F5] w-full mt-[60px] px-[75px] py-[40px] rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    <div v-for="(data, index) in data" :key="index">
                        <div class="flex gap-[20px] items-start">
                            <icon name="material-symbols-light:crop-square-outline"
                                class="md:size-7 size-4 flex-shrink-0 mt-[10px]" />
                            <div class="text-[25px] leading-[200%] font-[300] text-justify">
                                <span class="font-[500]">{{ data.title }}:</span> {{ data.description }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center">
                    <UButton color="gray" variant="solid"
                        class="bg-[#8D7662] uppercase text-[#F5F5F5] md:text-[20px] text-[16px] font-[600] md:px-6 px-6 py-2 hover:bg-[#90755e] md:mt-[3rem] mt-[30px]">
                        See our
                        workflow
                    </UButton>
                </div>
            </div>
        </div>
    </div>
</template>