<script>

const value = ref('');
</script>

<template>
  <div class="bg-white border-x-[50px] border-y-[65px] border-white">
    <div class="bg-[#eeeeee] p-8 text-center rounded-xl px-20">
      <div class="flex items-center justify-between">
        <div class="ml-10 mt-5 mb-5 w-[50%]">
          <div class="text-left">
            <div class="flex gap-4 mb-5">
              <div class="text-[32px]">Subcribe to</div>
              <nuxt-img src="/Plane.svg" class="w-[136px] h-[62px] rotate-2" />
            </div>
            <div class="text-[64px] font-semibold text-[#8d7661] mb-10">Nomo Render</div>
            <p class="italic text-[20px] font-light">Subscribe now & start creating stunning visuals with ease!</p>
          </div>
          <div class="flex mt-10">
            <div class="flex items-start">
              <UAvatar src="" size="2xl" class="bg-black border-2 border-white w-[100px] h-[100px]" />
              <UAvatar src="" size="2xl" class="-ml-8 bg-black border-2 border-white w-[100px] h-[100px]" />
              <UAvatar src="" size="2xl" class="-ml-8 bg-black border-2 border-white w-[100px] h-[100px]" />
            </div>
            <div class="ml-5">
              <div class="flex">
                <UIcon name="ic:baseline-star" class="text-[#FFE100] size-[48px]" />
                <UIcon name="ic:baseline-star" class="text-[#FFE100] size-[48px]" />
                <UIcon name="ic:baseline-star" class="text-[#FFE100] size-[48px]" />
                <UIcon name="ic:baseline-star" class="text-[#FFE100] size-[48px]" />
                <UIcon name="ic:baseline-star" class="text-[#FFE100] size-[48px]" />
              </div>
              <div class="flex items-start">
                <p class="font-thin mt-2 items-start">200+ reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[50%]">
          <div class="text-[25px] font-light text-justify leading-[200%]">
            <span class="font-medium">FREE CHECKLIST AND GOODIES</span> including pricing guides, templates, checklists, and exclusive freebies - to streamline your workflow and enhance your 3D projects.
          </div>
          <div class="italic text-[25px] font-light text-justify mt-2">No fluff, just the good stuff</div>
          <div class="mt-10 flex items-center bg-[#D9D9D9] p-2 rounded-lg shadow-md">
            <UInput v-model="value" variant="none" placeholder="Your email" size="xl" class="w-full bg-transparent text-gray-700 border-none rounded-l-md focus:outline-none focus:ring-2 focus:ring-brown-500 p-4" />
            <UButton class="px-5 py-6 bg-[#8D7662] text-white uppercase rounded-[8px]">
              <div class="text-[#F5F5F5] font-semibold text-[28px]">Subscribe</div>
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
