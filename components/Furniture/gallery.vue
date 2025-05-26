<script lang="ts" setup>

import { useMediaQuery } from '@vueuse/core'


const data = [
    { src: '/Furniture/Chair1.jpg', alt: 'Pic of Chair1' },
    { src: '/Furniture/Chair2.jpg', alt: 'Pic of chair2' },
    { src: '/Furniture/Chair3.jpg', alt: 'Pic of chair3' },
    { src: '/Furniture/Chair4.jpg', alt: 'Pic of chair4', desktopOnly: true },
    { src: '/Furniture/Shelf1.jpg', alt: 'Pic of chair5', desktopOnly: true },
    { src: '/Furniture/Shelf2.jpg', alt: 'Pic of chair6' },
    { src: '/Furniture/Shelf3.jpg', alt: 'Pic of chair7' },
    { src: '/Furniture/Shelf4.jpg', alt: 'Pic of chair8' },
    { src: '/Furniture/CayTreoTuong.jpg', alt: 'Pic of chair9' },
    { src: '/Furniture/ThuyenGo.jpg', alt: 'Pic of chair10' },
    { src: '/Furniture/KhungTreo.jpg', alt: 'Pic of chair11' },
    { src: '/Furniture/Table1.jpg', alt: 'Pic of Table1', mobileOnly: true },
    { src: '/Furniture/HacDa.jpg', alt: 'Pic of chair12' },
    { src: '/Furniture/Table2.jpg', alt: 'Pic of Table1', mobileOnly: true },

]
</script>
<template>
    <div>
        <div
            class="grid md:grid-cols-4 grid-cols-3 md:gap-2 gap-[3px] md:w-[1150px] w-full md:mx-auto md:mt-[80px] mt-10">
            <div v-for="(image, index) in data" :key="index" class="col-span-1"
                :class="image.desktopOnly ? 'hidden md:block' : (image.mobileOnly ? 'md:hidden block' : '')">
                <NuxtImg :src="image.src" :alt="image.alt"
                    class="w-full h-[123px] md:h-[300px] object-cover object-center" />
            </div>
        </div>

        <div class="w-full flex justify-center items-center md:mt-[50px] mt-[30px]">
            <UButton color="gray" variant="solid"
                class="bg-gradient-to-r from-[#8D7662] to-[#27211B] lg:px-8 lg:py-5 px-6 py-4 hover:bg-[#90755e] rounded-[8px] md:w-auto">
                <div
                    class="w-full flex justify-center items-center uppercase text-[#F5F5F5] leading-[16px] font-[600] md:text-[28px] text-[16px]">
                    see more our projects
                </div>
            </UButton>
        </div>
    </div>
</template>