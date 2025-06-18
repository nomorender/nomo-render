<script lang="ts" setup>
const isOpen = ref(false)
</script>

<template>
    <div class="relative h-screen w-screen overflow-hidden flex justify-center items-center">
        <NuxtImg format="webp" src="/Interior/Pic17.jpg"
            class="hidden md:block absolute inset-0 w-full h-full object-cover object-center z-0"
            alt="Interior Rendering Banner" preload />
        <NuxtImg format="webp" src="/Interior/Pic32.png"
            class="md:hidden absolute inset-0 w-full h-full object-cover object-center z-0"
            alt="Interior Rendering Mobile Banner" preload />
        <div class="text-[#FAF8F5] w-full relative z-10 flex flex-col items-center justify-center">
            <div
                class="uppercase text-[13px] md:text-[32px] lg:text-[32px] tracking-[5px] font-[600] mb-[15px] lg:leading-[150%] md:leading-[150%] leading-[150%] text-[#FAF8F5] [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]">
                nomo render portfolio
            </div>
            <div
                class="font-qochy lg:max-w-[1270px] max-w-[330px] text-center text-[24px] md:text-[25px] font-[400] lg:text-[64px] leading-[150%] md:font-[300] text-[#FAF8F5] [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]">
                We believe great design is more than just visuals - It’s a story waiting to be told
            </div>
            <UButton
                class="mt-[34px] px-7 hidden sm:block bg-[#00000040] hover:bg-[#1e1e1e] transition-all !inset-ring-[#FAF8F5]"
                color="white" variant="outline" size="xl" @click="isOpen = true">
                <div class="text-[#FAF8F5]">REQUEST A QUOTE</div>
            </UButton>
            <UButton class="sm:hidden mt-[34px] bg-[#00000040]" @click="isOpen = true" color="white" variant="outline">
                REQUEST A QUOTE
            </UButton>
        </div>
        <ModalQuote v-model="isOpen" />
    </div>
</template>
