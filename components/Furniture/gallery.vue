<script lang="ts" setup>
const data = [
    { src: '/Furniture/Chair1.jpg', alt: 'Pic of chair' },
    { src: '/Furniture/Chair1.jpg', alt: 'Pic of chair' },
    { src: '/Furniture/Chair1.jpg', alt: 'Pic of chair' },
    { src: '/Furniture/Chair1.jpg', alt: 'Pic of chair' },
    { src: '/Furniture/Chair1.jpg', alt: 'Pic of chair' },
    { src: '/Furniture/Chair1.jpg', alt: 'Pic of chair' },
    { src: '/Furniture/Chair1.jpg', alt: 'Pic of chair' },
    { src: '/Furniture/Chair1.jpg', alt: 'Pic of chair' },
    { src: '/Furniture/Chair1.jpg', alt: 'Pic of chair' },
    { src: '/Furniture/Chair1.jpg', alt: 'Pic of chair' },
    { src: '/Furniture/Chair1.jpg', alt: 'Pic of chair' },
    { src: '/Furniture/Chair1.jpg', alt: 'Pic of chair' },
]
</script>
<template>
    <div>
        <div class="grid grid-cols-4 gap-2 w-[1325px] mx-auto mt-[50px]">
            <div v-for="(image, index) in data" :key="index" class="col-span-1">
                <NuxtImg :src="image.src" :alt="image.alt" class="w-full h-[360px] object-cover object-center" />
            </div>
        </div>

        <div class="w-full flex justify-center items-center mt-[50px]">
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