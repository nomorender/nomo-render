<script>
const value = ref('');
</script>

<template>
  <div class="flex items-center justify-center py-20">
    <div class="bg-[#eeeeee] md:p-8 text-center rounded-xl md:px-20 py-5 md:w-[1360px] w-[345px] h-fit">
      <div class="px-8 md:px-0  mx-auto lg:flex lg:items-center lg:justify-between">
        <div class="mt-5 mb-5 lg:w-[50%]">
          <div class="text-left">
            <div class="flex gap-4 md:mb-0">
              <div class="md:text-[32px] text-[15px]">Subscribe to</div>
              <nuxt-img src="/Plane.svg" class="md:w-[136px] md:h-[62px] w-[67px] h-[30px] rotate-2" />
            </div>
            <div class="md:text-[64px] text-[30px] font-semibold text-[#8d7661] md:mb-5 mb-3">Nomo Render</div>
            <div class="flex md:block">
              <p class="italic md:text-[20px] text-[15px] font-light">Subscribe now & start creating
                stunning visuals with ease!</p>
            </div>
          </div>
          <div class="flex md:mt-10 mt-5">
            <div class="flex items-start">
              <UAvatar src="" size="2xl"
                class="bg-black border-2 border-white md:w-[100px] md:h-[100px] w-[50px] h-[50px]" />
              <UAvatar src="" size="2xl"
                class="md:-ml-8 -ml-4 bg-black border-2 border-white md:w-[100px] md:h-[100px] w-[50px] h-[50px]" />
              <UAvatar src="" size="2xl"
                class="md:-ml-8 -ml-4 bg-black border-2 border-white md:w-[100px] md:h-[100px] w-[50px] h-[50px]" />
            </div>
            <div class="md:ml-5 ml-3">
              <div class="flex">
                <UIcon name="ic:baseline-star" class="text-[#FFE100] w-6 h-6 md:w-12 md:h-12" />
                <UIcon name="ic:baseline-star" class="text-[#FFE100] w-6 h-6 md:w-12 md:h-12" />
                <UIcon name="ic:baseline-star" class="text-[#FFE100] w-6 h-6 md:w-12 md:h-12" />
                <UIcon name="ic:baseline-star" class="text-[#FFE100] w-6 h-6 md:w-12 md:h-12" />
                <UIcon name="ic:baseline-star" class="text-[#FFE100] w-6 h-6 md:w-12 md:h-12" />
              </div>
              <div class="flex items-start">
                <p class="font-[300] mt-2 items-start text-[15px]">200+ reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-[50%]">
          <div class="md:text-[25px] text-[15px] font-light text-justify leading-[200%]">
            <span class="font-medium">FREE CHECKLIST AND GOODIES</span> including pricing guides, templates, checklists,
            and exclusive freebies - to streamline your workflow and enhance your 3D projects.
          </div>
          <div class="italic md:text-[25px] text-[15px] font-light text-justify mt-2">No fluff, just the good stuff
          </div>
          <div class="flex items-center justify-center md:block">
            <div class="mt-10 flex items-center bg-[#D9D9D9] md:p-2 px-2 py-2 rounded-lg shadow-lg w-full md:w-full">
              <UInput padded required color="white" variant="none" placeholder="Your email"
                size="xl" class="!bg-none px-2 rounded-[8px] w-full"
                :ui="{ placeholder: 'placeholder-[#000000] font-[300] text-[15px] md:text-[25px] md:leading-[43px] leading-[180%]' }" />
              <UButton class="md:px-5 md:py-6 bg-[#8D7662] text-white uppercase rounded-[8px] px-4 py-3">
                <div class="text-[#F5F5F5] font-semibold md:text-[28px] text-[16px]">Subscribe</div>
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>