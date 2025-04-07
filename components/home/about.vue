<template>
  <div class="bg-[#D9D9D9] py-20 md:px-[100px] md:py-20 px-6">
    <div class="flex items-center flex-col lg:flex-row justify-center max-w-7xl mx-auto gap-5 md:gap-14">
      <h1 class="text-[#8D7662] md:text-6xl font-semibold text-3xl text-nowrap">About Us</h1>
      <div class="w-[1px] h-[300px] hidden lg:block bg-black"></div>
      <div>
        <p class="font-[300] text-[15px] md:text-[25px] text-justify md:mb-5 md:leading-[200%] leading-[180%]">
          Before a building stands tall, before a space takes shape, Nomo Render
          makes sure that vision is seen. Think of us as your <span class="font-medium">creative partners
            in turning architectural ideas into vivid, high-quality 3D visuals.</span> 
          With a mix of artistry and cutting-edge technology, we collaborate
          with architects, designers, real estate developers, and manufacturers
          to bring future spaces to life today
        </p>
        <div class="hidden lg:block ">
            <UButton class="hover:bg-[#00a155] text-[#980e0c] transition-all"  to="/about" variant="outline" size="xl" :trailing="false" color="red" icon="i-heroicons-arrow-right">See more</UButton>
        </div>
      </div>
      <div >
        <UButton class="lg:hidden" to="/about" variant="outline"  :trailing="false" color="red" icon="i-heroicons-arrow-right">See more</UButton>
      </div>
    </div>
  </div>
</template>
