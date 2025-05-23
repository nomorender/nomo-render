<script setup lang="ts">
const data = [
    { title: 'Residential & Commercial Furniture', description: 'Realistic renders for home, office, and hospitality interiors.', image: '/Furniture/LongChair.jpg' },
    { title: 'Luxury & Custom Designs', description: 'Showcase bespoke pieces with craftsmanship', image: '/Furniture/HacDa.jpg' },
]
</script>
<template>
    <div class="mt-20">
        <div class="bg-[#D9D9D9] md:pt-[50px] md:pb-[60px] mx-auto flex flex-col items-center justify-center">
            <div class="w-[1200px]">
                <div class="flex flex-col items-center justify-center">
                    <div
                        class="md:text-[32px] text-[16px] font-normal md:leading-[150%] leading-[100%] md:tracking-[2%] mb-[5px]">
                        Who can benefit from
                    </div>
                    <div
                        class="md:w-full w-[306px] text-center text-[#8D7662] md:leading-[150%] font-semibold leading-[100%] md:text-[64px] text-[30px] md:tracking-[2%]">
                        3D Furniture Rendering Service?
                    </div>
                </div>

                <div class="py-[20px]">
                    <p class="text-[25px] font-[300] leading-[200%] text-justify">Our 3D Furniture Modeling solutions
                        cater
                        to a wide range of industries, including:</p>
                </div>

                <div class="flex gap-[20px]">
                    <div v-for="(data, index) in data" :key="index"
                        class="bg-[#FFFFFF] w-[590px] rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                        <div class="border-[1.5px] rounded-[8px] border-[#D8C3A5] py-[16px] md:py-0">
                            <div class="text-[#8D7662] text-center text-[32px] py-[16px] font-[600] leading-[150%]">
                                {{ data.title }}
                            </div>
                        </div>
                        <div>
                            <h1 class="font-[300] h-[100px] leading-[200%] text-[25px] text-justify mx-10 my-4">
                                {{ data.description }}</h1>
                        </div>
                        <div>
                            <NuxtImg :src="data.image" alt="Pic of HacDa"
                                class="w-full h-[360px] object-cover rounded-b-[8px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>