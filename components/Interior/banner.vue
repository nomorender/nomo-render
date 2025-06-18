<script lang="ts" setup>
const isOpen = ref(false)
</script>

<template>
    <div class="relative h-screen w-screen overflow-hidden flex justify-center items-center">
        <NuxtImg format="webp" src="/banner-interior.png"
            class="hidden md:block absolute inset-0 w-full h-full object-cover object-center z-0"
            alt="Interior Rendering Banner" preload />
        <NuxtImg format="webp" src="/HAR03.png"
            class="md:hidden absolute inset-0 w-full h-full object-cover object-center z-0"
            alt="Interior Rendering Mobile Banner" preload />
        <div class="text-[#FAF8F5] w-full relative z-10 flex flex-col items-center justify-center">
            <div
                class="text-[30px] md:text-[50px] lg:text-[72px] font-[600] mb-[15px] md:leading-[100%] leading-[130%] text-[#FAF8F5] [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]">
                3D INTERIOR RENDERING
            </div>
            <div
                class="text-[15px] md:text-[25px] font-[400] lg:text-[32px] leading-[150%] italic md:font-[300] text-[#FAF8F5] [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]">
                Bringing design concepts to life with stunning realism
            </div>

            <UButton class="mt-[34px] px-7 hidden sm:block hover:bg-[#1e1e1e] transition-all !inset-ring-[#FAF8F5]"
                color="white" variant="outline" size="xl" @click="isOpen = true">
                <div class="text-[#FAF8F5]">REQUEST A QUOTE</div>
            </UButton>

            <UButton class="sm:hidden mt-[34px]" @click="isOpen = true" color="white" variant="outline">
                REQUEST A QUOTE
            </UButton>
        </div>

        <ModalQuote v-model="isOpen" />
    </div>
</template>
