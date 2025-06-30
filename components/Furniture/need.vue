<script lang="ts" setup>
const data = [
    { title: 'Reference Images', description: 'Clear photographs of the actual product or similar designs.' },
    { title: 'Accurate Dimensions', description: 'Detailed measurements to maintain correct proportions.' },
    { title: 'Material & Finish Specifications', description: 'Details on materials, textures, & finishes for realism.' },
    { title: 'Alternative References', description: ' If actual images are unavailable, please provide annotated sketches or references to comparable products' },
]
</script>

<template>
    <div class="md:mb-20 mb-10">
        <div
            class="md:bg-[#D9D9D9] bg-[#FAF8F5] md:pt-[50px] md:pb-[60px] pb-[45px] pt-[40px] mx-auto flex flex-col items-center justify-center">
            <div class="md:w-[1200px]">
                <div class="flex flex-col items-center justify-center">
                    <div class="lg:text-[32px] md:text-[25px] text-[16px] font-normal md:leading-[150%] leading-[100%]">
                        What do we need
                    </div>
                    <div
                        class="md:w-full w-[306px] text-center text-[#8D7662] md:leading-[150%] font-semibold leading-[130%] lg:text-[64px] md:text-[50px] text-[30px]">
                        Before Crafting?
                    </div>
                </div>

                <div
                    class="md:bg-[#FAF8F5] bg-[#FFFFFF] lg:w-full lg:mx-0 mx-auto md:mx-auto md:w-[85vw] w-[85vw] md:mt-[60px] mt-[20px] md:px-[75px] px-[24px] py-10 md:py-[40px] rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    <div v-for="(data, index) in data" :key="index">
                        <div class="flex md:gap-[20px] gap-[10px] items-start">
                            <icon name="material-symbols-light:crop-square-outline"
                                class="md:size-7 size-4 flex-shrink-0 md:mt-[10px] mt-[5px]" />
                            <div
                                class="md:text-[25px] text-[15px] md:leading-[200%] leading-[180%] font-[300] text-justify">
                                <span class="font-[500]">{{ data.title }}:</span> {{ data.description }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center">
                    <UButton color="gray" variant="solid" to="/workflow" id="see-workflow"
                        class="bg-[#8D7662] uppercase text-[#F5F5F5] lg:text-[20px] md:text-[20px] text-[16px] font-[600] md:px-6 px-6 py-2 hover:bg-[#90755e] md:mt-[3rem] mt-[30px]">
                        See our
                        workflow
                    </UButton>
                </div>
            </div>
        </div>
    </div>
</template>