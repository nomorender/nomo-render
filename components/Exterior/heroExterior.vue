<template>
  <div class="pb-20">
    <div class="p-10 md:py-20">
      <div class="flex items-center flex-col md:flex-row justify-center max-w-7xl mx-auto gap-5 md:gap-14">
        <div class="flex flex-col w-[50%]">
          <div class="font-[700] text-[72px] text-[#8D7662] uppercase">
            3d exterior
          </div>
          <div class="font-[600] text-[64px] leading-[150%] text-[#000000]">
            Rendering Services
          </div>
          <div class="mt-10">
            <UButton class="hidden sm:block" color="white" variant="outline" size="xl">REQUEST A QUOTE</UButton>
          </div>
        </div>

        <div class=" w-[50%]">
          <p class="text-[25px] font-[300] leading-[200%] text-justify"><span class="font-[500]">Top-notch
              quality</span>
            3D exterior visualizations bring architectural concepts to life with photorealistic
            renderings of buildings, landscapes, and urban spaces.</p>
        </div>
      </div>
    </div>
    <NuxtImg alt="heroPic" src="/heroPicture.png" class="w-full h-[600px] rounded-[8px]" draggable="false" />
  </div>
</template>