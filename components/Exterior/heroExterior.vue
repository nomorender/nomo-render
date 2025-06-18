<template>
  <div class="pb-20">
    <div class="md:pb-[80px] pb-[20px] pt-[90px] md:flex justify-center items-center w-full">
      <div
        class="px-10 md:px-0 md:flex items-center justify-center gap-[30px] md:w-[81vw] md:max-w-[1200px] transition-all">
        <div class="flex flex-col md:w-[50%]">
          <div class="">
            <div class="font-[700] lg:text-[72px] md:text-[40px] text-[34px] w-fit text-[#8D7662] uppercase">
              3d exterior
            </div>
            <div class="font-[600] lg:text-[60px] md:text-[30px] text-[30px] w-fit leading-[150%] text-[#000000]">
              Rendering Service
            </div>
          </div>
          <div class="md:mt-7 mt-5">
            <UButton class="hidden sm:block hover:bg-[#1e1e1e] hover:text-white transition-all" color="white"
              variant="outline" size="xl" @click="isOpen = true">REQUEST A
              QUOTE</UButton>
            <UButton class="sm:hidden" @click="isOpen = true" color="white" variant="outline"><span
                class="text-[13px] font-[400]">REQUEST A QUOTE</span></UButton>
          </div>
        </div>
        <div class="">
          <p
            class="md:pt-0 mt-7 lg:text-[25px] md:text-[17px] text-[15px] lg:w-[480px] md:w-[300px] font-[300] md:leading-[200%] leading-[180%] text-justify">
            <span class="font-[500]">Top-notch
              quality</span>
            3D exterior visualizations bring architectural concepts to life with photorealistic
            renderings of buildings, landscapes, and urban spaces.
          </p>
        </div>
      </div>
    </div>
    <NuxtImg format="webp" preload alt="heroPic" src="Extorior/HTL01.png"
      class="w-full lg:h-[700px] md:h-[400px] h-[266px] object-cover object-center" draggable="false" />
  </div>
  <ModalQuote v-model="isOpen" />
</template>

<script lang="ts" setup>
const isOpen = ref(false)
</script>