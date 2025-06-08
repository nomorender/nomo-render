<script lang="ts" setup>
const isOpen = ref(false)
</script>

<template>
    <div
        class="md:bg-[url(/banner-interior.png)] bg-[url(/HAR03.png)] h-screen overflow-hidden w-screen justify-center flex items-center bg-cover bg-center relative">
        <div class="text-[#FAF8F5] w-full relative z-10 flex flex-col items-center justify-center">
            <div
                class="text-[30px] md:text-[72px] font-[600] mb-[15px] md:leading-[100%] leading-[130%] text-[#FAF8F5] [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]">
                3D INTERIOR RENDERING
            </div>
            <div
                class="text-[15px] font-[400] md:text-[32px] leading-[150%] italic md:font-[300] text-[#FAF8F5] [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]">
                Bringing design concepts to life with stunning realism
            </div>
            <UButton class="mt-[34px] px-7 hidden sm:block hover:bg-[#1e1e1e] transition-all !inset-ring-[#FAF8F5]"
                color="white" variant="outline" size="xl" @click="isOpen = true">
                <div class="text-[#FAF8F5]">REQUEST A QUOTE</div>
            </UButton>
            <UButton class="sm:hidden mt-[34px]" @click="isOpen = true" color="white" variant="outline">REQUEST A QUOTE
            </UButton>
        </div>
        <ModalQuote v-model="isOpen" />
    </div>
</template>
