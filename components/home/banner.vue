<script setup>
const isOpen = ref(false)

</script>

<template>
    <div class="h-screen overflow-hidden w-screen justify-center flex items-center relative">
        <NuxtImg format="webp" src="/bg2.jpg"
            class="hidden md:block absolute  bg-cover inset-0 w-full h-full object-cover object-center z-0"
            alt="Interior Rendering Banner desktop" preload />
        <NuxtImg format="webp" src="/bg2.jpg"
            class="md:hidden block absolute bg-cover inset-0 w-full h-full object-cover object-right z-0"
            alt="Interior Rendering Banner mobile" preload />
        <div class="absolute inset-0 bg-black opacity-[20%] z-0"></div>
        <div class="w-full relative text-white mx-8 z-10 lg:px-[180px] md:px-[20px]">
            <h1 class="text-4xl md:text-7xl font-bold mb-8">
                3D Visualization <br> Studio
            </h1>
            <UButton id="open-quote-modal" aria-label="Click here to send quote to Nomorender desktop"
                class="hidden sm:block hover:bg-[#1e1e1e] transition-all" color="white" variant="outline" size="xl"
                @click="isOpen = true; triggerEvent()">REQUEST A
                QUOTE</UButton>
            <UButton id="open-quote-modal" aria-label="Click here to send quote to Nomorender mobile" class="sm:hidden"
                @click="isOpen = true; triggerEvent()" color="white" variant="outline">REQUEST A QUOTE</UButton>
        </div>
        <ModalQuote v-model="isOpen" />
    </div>
</template>
