<script lang="ts" setup>
</script>
<template>
    <div class="relative h-screen overflow-hidden flex justify-center items-center">
        <NuxtImg format="webp" src="/library/banner.jpg"
            class="hidden md:block absolute inset-0 w-full h-full object-cover z-0 object-top"
            alt="Interior Rendering Banner" preload />
        <NuxtImg format="webp" src="/library/banner.jpg"
            class="md:hidden absolute inset-0 w-full h-full object-cover object-center z-0"
            alt="Interior Rendering Mobile Banner" preload />
        <div class="text-[#FAF8F5] w-full relative z-10 flex flex-col items-center justify-center gap-[20px]">
            <h1
                class="uppercase lg:text-[72px] md:text-[72px] text-[30px] lg:leading-[100%] leading-[130%] text-center font-[700] [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]">
                nomo library</h1>
            <div>
                <p
                    class="font-[300] italic lg:text-[32px] md:text-[32px] text-[15px] leading-[150%] text-center [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]">
                    Every great design starts with the right tools</p>
                <p
                    class="font-[400] italic lg:text-[32px] md:text-[32px] text-[15px] leading-[150%] text-center [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]">
                    Click - Download - Create</p>
            </div>
        </div>
    </div>
</template>