<script>

const value = ref('');
</script>

<template>
  <div class="bg-white md:border-x-[50px] border-x-[30px] border-y-[65px] border-white">
    <div class="bg-[#eeeeee] md:p-8 text-center rounded-xl md:px-20 py-5 md:py-0">
      <div class="md:flex md:items-center md:justify-between">
        <div class="ml-10 mt-5 mb-5 md:w-[50%]">
          <div class="text-left">
            <div class="flex gap-4 mb-5">
              <div class="md:text-[32px] text-[15px]">Subcribe to</div>
              <nuxt-img src="/Plane.svg" class="md:w-[136px] md:h-[62px] w-[67px] h-[30px] rotate-2" />
            </div>
            <div class="md:text-[64px] text-[30px] font-semibold text-[#8d7661] mb-10">Nomo Render</div>
            <p class="italic md:text-[20px] text-[15px] font-light pr-10 md:pr-0">Subscribe now & start creating
              stunning visuals with ease!</p>
          </div>
          <div class="flex mt-10">
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
                <UIcon name="ic:baseline-star" class="text-[#FFE100] md:size-[48px] size-[24px]" />
                <UIcon name="ic:baseline-star" class="text-[#FFE100] md:size-[48px] size-[24px]" />
                <UIcon name="ic:baseline-star" class="text-[#FFE100] md:size-[48px] size-[24px]" />
                <UIcon name="ic:baseline-star" class="text-[#FFE100] md:size-[48px] size-[24px]" />
                <UIcon name="ic:baseline-star" class="text-[#FFE100] md:size-[48px] size-[24px]" />
              </div>
              <div class="flex items-start">
                <p class="font-[300] mt-2 items-start text-[15px]">200+ reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-[50%]">
          <div class="md:text-[25px] text-[15px] font-light text-justify leading-[200%] px-10 md:px-0">
            <span class="font-medium">FREE CHECKLIST AND GOODIES</span> including pricing guides, templates, checklists,
            and exclusive freebies - to streamline your workflow and enhance your 3D projects.
          </div>
          <div class="italic md:text-[25px] text-[15px] font-light text-justify mt-2 px-10 md:px-0">No fluff, just the
            good stuff</div>
          <div class="flex items-center justify-center md:block px-10 md:px-0">
            <div class="mt-10 flex items-center bg-[#D9D9D9] md:p-2 px-2 rounded-lg shadow-lg">
              <UInput v-model="value" variant="none" placeholder="Your email"
                class="w-full bg-transparent text-gray-700 border-none rounded-l-md focus:outline-none focus:ring-2 focus:ring-brown-500 p-4" />
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
