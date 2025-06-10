<template>
  <div class="bg-[#D9D9D9] md:px-[100px] md:py-[70px] py-[45px] px-10">
    <div class="flex items-center flex-col lg:flex-row justify-center max-w-7xl mx-auto gap-5 md:gap-14">
      <h1 class="text-[#8D7662] md:text-6xl font-semibold text-3xl text-nowrap">About Us</h1>
      <div class="w-[1px] h-[370px] hidden lg:block bg-black"></div>
      <div>
        <p class="font-[300] text-[15px] md:text-[25px] text-justify md:mb-5 md:leading-[200%] leading-[180%]">
          Before a building stands tall, before a space takes shape, Nomo Render
          makes sure that vision is seen. Think of us as your <span class="font-medium">creative partners
            in turning architectural ideas into vivid, high-quality 3D visuals.</span>
          With a mix of artistry and cutting-edge technology, we collaborate
          with architects, designers, real estate developers, and manufacturers
          to bring future spaces to life today
        </p>
        <div class="hidden lg:block mb-2">
          <UButton
            class="text-[#980C0C] hover:bg-[#FAF8F5] ring-1 ring-[#980C0C] focus:ring-[#980C0C] active:ring-[#980C0C] focus:outline-none transition-all"
            to="/about" variant="outline" size="xl" :trailing="false" color="red" icon="i-heroicons-arrow-right">See
            more</UButton>
        </div>
      </div>
      <div class="">
        <UButton
          class=" text-[#980C0C] hover:bg-[#FAF8F5] ring-1 ring-[#980C0C] focus:ring-[#980C0C] active:ring-[#980C0C] focus:outline-none transition-all lg:hidden"
          to="/about" variant="outline" :trailing="false" color="red" icon="i-heroicons-arrow-right">See more</UButton>
      </div>
    </div>
  </div>
</template>
