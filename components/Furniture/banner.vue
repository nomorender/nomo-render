<script lang="ts" setup>
const isOpen = ref(false)
</script>
<template>
    <div
        class="relative flex h-[700px] lg:h-screen md:h-screen overflow-hidden bg-cover bg-center md:items-center justify-center">
        <NuxtImg src="/Furniture/Banner.jpg"
            class="hidden lg:block md:block absolute inset-0 w-full h-full object-cover object-center z-0"
            alt="Interior Rendering Banner" preload />
        <NuxtImg src="/Furniture/BannerMobile.jpg"
            class="md:block lg:hidden block absolute inset-0 w-full h-full object-cover object-center z-0"
            alt="Interior Rendering Banner" preload />
        <div class="md:w-[1150px] relative">
            <div class="md:w-[600px] lg:mt-0 md:mt-0 mt-[90px] lg:ml-0 md:ml-10 ml-0">
                <div>
                    <h1
                        class="md:text-[72px] text-[34px] font-[700] leading-[100%] uppercase text-[#8D7662] mb-[10px] md:mb-0">
                        3D
                        Furniture</h1>
                    <h1 class="md:text-[64px] text-[30px] font-[600] leading-[150%] text-black">Rendering Service</h1>
                </div>
                <p
                    class="w-[300px] md:w-full md:text-[32px] text-[15px] md:italic leading-[180%] md:leading-[150%] mt-[14px] font-[300] text-justify text-black">
                    Showcase your products with stunning and precision-crafted CGI – no prototypes or costly photo
                    shoots
                    needed
                </p>
                <UButton
                    class="mt-[25px] px-6 hidden sm:block hover:bg-black hover:text-white transition-all !inset-ring-[#000000]"
                    color="black" variant="outline" size="xl" @click="isOpen = true">
                    <div class=" font-[500] text-[18px]">REQUEST A QUOTE</div>
                </UButton>
                <UButton
                    class="sm:hidden mt-[15px] hover:bg-black hover:text-white transition-all !inset-ring-[#000000]"
                    @click="isOpen = true" size="xl" color="black" variant="outline">
                    <div class=" font-[400] leading-[100%] text-[13px]">REQUEST A QUOTE</div>
                </UButton>
            </div>
        </div>
        <ModalQuote v-model="isOpen" />
    </div>
</template>