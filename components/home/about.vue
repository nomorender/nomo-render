<template>
  <div class="bg-[#D9D9D9] md:px-[100px] md:py-[70px] py-[45px] px-10">
    <div class="flex items-center flex-col lg:flex-row justify-center max-w-7xl mx-auto gap-5 lg:gap-14 md:gap-10">
      <h1 class="text-[#8D7662] lg:text-6xl md:text-[50px] font-semibold text-3xl text-nowrap">About Us</h1>
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
          <UButton id="see-more-aboutus" aria-label="Click here to see more information about Nomorender"
            class="text-[#980C0C] hover:bg-[#FAF8F5] ring-1 ring-[#980C0C] focus:ring-[#980C0C] active:ring-[#980C0C] focus:outline-none transition-all"
            to="/about" variant="outline" size="xl" :trailing="false" color="red" icon="i-heroicons-arrow-right">
            <span id="see-more-aboutus">See more</span>
            <span>
              <span class="sr-only">See more about our team Nomo Render</span>
            </span>
          </UButton>
        </div>
      </div>
      <div class="md:hidden lg:hidden block">
        <UButton id="see-more-aboutus" aria-label="Click here to see more information about Nomorender"
          class=" text-[#980C0C] hover:bg-[#FAF8F5] ring-1 ring-[#980C0C] focus:ring-[#980C0C] active:ring-[#980C0C] focus:outline-none transition-all lg:hidden"
          to="/about" variant="outline" :trailing="false" color="red" icon="i-heroicons-arrow-right">
          <span id="see-more-aboutus">See
            more</span>
          <span>
            <span id="see-more-aboutus" class="sr-only">See more about our team Nomo Render</span>
          </span>
        </UButton>
      </div>

      <div class="md:block lg:hidden hidden">
        <UButton id="see-more-aboutus" aria-label="Click here to see more information about Nomorender"
          class="text-[#980C0C] hover:bg-[#FAF8F5] ring-1 ring-[#980C0C] focus:ring-[#980C0C] active:ring-[#980C0C] focus:outline-none transition-all flex items-center justify-center"
          to="/about" variant="outline" size="xl" :trailing="false" color="red" icon="i-heroicons-arrow-right">
          <span class="text-[20px]" id="see-more-aboutus">See more</span>
          <span>
            <span class="sr-only">See more about our team Nomo Render</span>
          </span>
        </UButton>
      </div>
    </div>
  </div>
</template>
