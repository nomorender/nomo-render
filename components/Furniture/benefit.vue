<script setup lang="ts">
const data = [
    { title: 'Residential & Commercial Furniture', description: 'Realistic renders for home, office, and hospitality interiors.', imagePC: '/Furniture/LongChair.jpg', imageMobile: '/Furniture/LongChair.jpg' },
    { title: 'Luxury & Custom Designs', description: 'Showcase bespoke pieces with craftsmanship', imagePC: '/Furniture/HacDa.jpg', imageMobile: '/Furniture/Table.jpg' },
]
</script>
<template>
    <div class="md:mt-20 mt-10">
        <div
            class="md:bg-[#D9D9D9] bg-[#FAF8F5] md:pt-[50px] md:pb-[60px] pb-[45px] pt-[40px] mx-auto flex flex-col items-center justify-center">
            <div class="md:w-[1150px]">
                <div class="flex flex-col items-center justify-center">
                    <div class="md:text-[32px] text-[16px] font-normal md:leading-[150%] leading-[100%] mb-[5px]">
                        Who can benefit from
                    </div>
                    <div
                        class="lg:w-full md:w-[600px] w-[306px] text-center text-[#8D7662] md:leading-[150%] font-semibold leading-[130%] md:text-[64px] text-[30px]">
                        3D Furniture Rendering Service?
                    </div>
                </div>

                <div class="py-[20px] flex justify-center items-center">
                    <p
                        class="lg:w-full md:w-[600px] w-[310px] md:text-[25px] text-[18px] font-[300] md:leading-[200%] leading-[180%] md:text-justify text-center">
                        Our
                        3D
                        Furniture
                        Modeling solutions
                        cater
                        to a wide range of industries, including:</p>
                </div>

                <div
                    class="flex lg:flex-row flex-col lg:gap-[20px] md:gap-[60px] gap-[30px] items-center justify-center">
                    <div v-for="(data, index) in data" :key="index"
                        class="bg-[#FFFFFF] md:w-[590px] w-[85vw] rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                        <div class="border-[1.5px] rounded-[8px] border-[#D8C3A5] py-[16px] md:py-0">
                            <div
                                class="text-[#8D7662] text-center md:text-[32px] text-[18px] md:py-[16px] font-[600] md:leading-[150%] leading-[100%]">
                                {{ data.title }}
                            </div>
                        </div>
                        <div>
                            <h1
                                class="font-[300] md:h-[100px] md:leading-[200%] leading-[180%] text-[15px] md:text-[25px] text-justify md:mx-10 md:my-4 mx-9 my-6">
                                {{ data.description }}
                            </h1>
                        </div>
                        <div>
                            <NuxtImg format="webp" v-if="data.imagePC" :src="data.imagePC" :alt="data.title"
                                class="w-full h-[360px] object-cover rounded-b-[8px] hidden md:block object-[25%_75%]" />
                            <NuxtImg format="webp" v-if="data.imageMobile" :src="data.imageMobile" :alt="data.title"
                                class="w-full h-[250px] object-cover rounded-b-[8px] block md:hidden object-[100%_85%]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>