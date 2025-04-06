<template>
  <div class="bg-[#FAF8F5]">
    <div class="py-10 md:py-20 max-w-7xl mx-auto mb-20">
      <p class="text-center text-xl md:text-3xl">SERVICES</p>
      <h2 class="text-center font-semibold text-3xl md:text-6xl mb-5 md:mb-20 text-[#8D7662]">
        What we do?
      </h2>
      <div
        v-for="(item, index) in services"
        :key="item.name"
        class="flex flex-col md:flex-row gap-[45px] md:gap-[120px] mb-8 mt-20"
        :class="{ 'md:flex-row-reverse': index % 2 }"
      >
        <div>
          <UCarousel
            :items="item.image"
            :ui="{
              item: 'basis-full',
              container: 'rounded-lg',
              indicators: {
                wrapper: 'relative bottom-0 mt-4',
              },
              default : {
                prevButton : {
                  class : 'md:hidden flex p-3 bg-[#FFFFFF] text-[#8D7662]',
                  icon : 'material-symbols:arrow-left-alt-rounded'
                },
                nextButton : {
                  class : 'md:hidden flex p-3 bg-[#8D7662] text-[#FFFFFF]',
                  icon : 'material-symbols:arrow-left-alt-rounded'
                }
              }
            }"
            indicators
            arrows
            class="w-full max-w-[720px] mx-auto"
          >
            <template #default="{ item }">
              <NuxtImg :src="item" class="w-full" draggable="false" />
            </template>

            <template #indicator="{ onClick, page, active }">
              <UButton
                color="white"
                :label="String(page)"
                variant="ghost"
                :class="active ? 'text-[#8D7662CC] bg-white rounded-full min-w-8 justify-center hidden md:block shadow-lg hover:bg-white' : 'bg-[#8D7662CC] hover:bg-[#8D7662CC] text-[#FFFFFF] rounded-full min-w-8 justify-center hidden md:block shadow-lg'"
                @click="onClick(page)"
              />
            </template>
          </UCarousel>
        </div>

        <div class="fex-grow flex-1 mx-8">
          <p class="mb-8 md:text-5xl text-[40px] font-[600] md:w-[480px]">{{ item.name }}</p>
          <div
            class="md:text-2xl text-sm font-light mb-6 "
            v-html="item.content"
          ></div>
          <div class="hidden md:block">
            <UButton
              v-if="item.link"
              :to="item.link"
              size="xl"
              variant="outline"
              :trailing="false"
              color="red"
              icon="i-heroicons-arrow-right"
              >See more</UButton
            >
          </div>
          <UButton
            class="md:hidden"
            v-if="item.link"
            :to="item.link"
            variant="outline"
            :trailing="false"
            color="red"
            icon="i-heroicons-arrow-right"
            >See more</UButton
          >
        </div>
      </div>
      <div class="flex justify-center">
        <UButton color="gray" size="xl" variant="solid" class="bg-[#8D7662] uppercase text-[#F5F5F5] text-[20px] px-6 py-3 hover:bg-[#90755e]"
          >See our workflow</UButton
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const services = [
  {
    name: "Exterior Rendering",
    link: "/exterior",
    image: ["/services/1.png", "/services/2.png", "/services/3.png"],
    content: `<p class="leading-[200%]">We provide detailed and accurate representations of:</p>
<ul class="list-disc pl-4 leading-[200%]">
    <li>Buildings</li>
    <li>Landscapes</li>
    <li>Surroundings</li>
</ul>
<p class="leading-[200%]">by showcasing realistic lighting, textures, weather conditions, & environmental elements to ensure clients experience a realistic preview of their project before it’s completed.</p>`,
  },
  {
    name: "Interior Rendering",
    link: "/exterior",
    image: ["/services/1.png", "/services/2.png", "/services/3.png","/services/3.png"],
    content: `<p class="leading-[200%]">We enhance interior visualization by creating highly detailed, photorealistic images inside:</p>
<ul class="list-disc pl-4 leading-[200%]">
    <li>Apartments</li>
    <li>Houses</li>
    <li>Restaurants</li>
    <li>Offices</li>
</ul>
<p class = "leading-[200%]">that seamlessly blend atmosphere, mood, and design elements while carefully selecting the perfect décor to bring the space to life.</p>`,
  },
  {
    name: "Furniture Modeling",
    link: "/exterior",
    image: ["/services/1.png", "/services/2.png", "/services/3.png"],
    content: `<p class = "leading-[200%]">We ensure precise proportions, realistic textures, and manufacturing accuracy through processes by transforming:</p>
<ul class="list-disc pl-4 leading-[200%]">
    <li>Sketches</li>
    <li>Blueprints</li>
    <li>Concepts</li>
</ul>
<p class = "leading-[200%]">into highly detailed, production-ready models, which are refined to meet industry standards for execution.</p>`,
  },
  {
    name: "Customized Request",
    link: "/exterior",
    image: ["/services/1.png", "/services/2.png", "/services/3.png","/services/3.png"],
    content: `<p class="leading-[200%]">At Nomo Render, every detail matters. From minor tweaks to full-scale conceptual transformations, our customized 3D rendering services ensure accuracy by adjusting scale, proportions, and real-world materiality.</p>`,
  },
  
];
</script>
