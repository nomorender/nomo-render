<script lang="ts" setup>
const isOpen = ref(false)
</script>
<template>
    <div class="relative h-screen overflow-hidden flex justify-center items-center">
        <NuxtImg format="webp" src="/inspire/banner.png"
            class="hidden md:block absolute inset-0 w-full h-full object-cover object-center z-0"
            alt="Interior Rendering Banner" preload />
        <NuxtImg format="webp" src="/inspire/banner.png"
            class="md:hidden absolute inset-0 w-full h-full object-cover object-center z-0"
            alt="Interior Rendering Mobile Banner" preload />
        <div class="text-[#FAF8F5] w-full relative z-10 flex flex-col items-center justify-center gap-[20px]">
            <h1
                class="uppercase lg:text-[72px] md:text-[72px] text-[30px] lg:leading-[100%] leading-[130%] text-center font-[700] [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]">
                inspire space</h1>
            <p
                class="font-[300] italic lg:text-[32px] md:text-[32px] text-[15px] leading-[150%] text-center [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]">
                All you can know about 3D creative
                design</p>
        </div>
    </div>
</template>