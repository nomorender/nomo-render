<template>
  <div class="md:mb-[5rem] mb-[3rem]">
    <div class="bg-[#FAF8F5] flex flex-col justify-center items-center">
      <div class="md:py-10 py-[45px] md:pt-[70px] md:pb-0">
        <div class="md:mb-0 mb-5">
          <p class="text-center text-[16px] lg:text-3xl lg:mb-7">SERVICES</p>
          <h2 class="text-center font-semibold text-[30px] md:text-6xl md:mb-20 text-[#8D7662]">
            What we do?
          </h2>
        </div>
        <div class="flex flex-col md:gap-y-20">
          <div v-for="(item, index) in services" :key="item.name" class="flex flex-col md:flex-col lg:flex-row"
            :class="{ 'lg:flex-row-reverse': index % 2 }">
            <div class="lg:max-w-[720px] h-fit lg:mb-0 mb-0 md:mb-10">
              <UCarousel :items="item.image" :ui="{
                item: 'basis-full',
                container: 'rounded-lg',
                indicators: {
                  wrapper: 'relative bottom-0 mt-4',
                },
                default: {
                  prevButton: {
                    class: 'disabled:bg-white disabled:opacity-100 hover:bg-white active:bg-white absolute !top-[80%] rounded-lg !ring-0 md:hidden flex p-3 bg-[#FFFFFF] text-[#8D7662]',
                    icon: 'material-symbols:arrow-left-alt-rounded'
                  },
                  nextButton: {
                    class: ' absolute !top-[80%] disabled:bg-white disabled:opacity-100 disabled:text-[#8D7662] hover:bg-[#8D7662] active:bg-[#8D7662] rounded-lg !ring-0 md:hidden flex p-3 bg-[#8D7662] text-[#FFFFFF]',
                    icon: '!material-symbols:arrow-left-alt-rounded'
                  }
                }
              }" indicators arrows class="w-full md:max-w-[800px] lg:max-w-[720px] max-w-[720px] mx-auto">
                <template #default="{ item }">
                  <NuxtImg format="webp" :src="item" alt="item pic"
                    class="w-full lg:max-w-[720px] md:max-w-[800px] md:w-[800px] md:h-[617px] h-[322px] max-h-[600px] object-cover object-center"
                    draggable="false" />
                </template>

                <template #indicator="{ onClick, page, active }">
                  <UButton color="white" :label="String(page)" variant="ghost"
                    :class="active ? 'text-[#8D7662CC] bg-white rounded-full min-w-8 justify-center hidden md:block shadow-lg hover:bg-white' : 'bg-[#8D7662CC] hover:bg-[#8D7662CC] text-[#FFFFFF] rounded-full min-w-8 justify-center hidden md:block shadow-lg'"
                    @click="onClick(page)" />
                </template>
              </UCarousel>
            </div>
            <div class="flex-grow justify-center mx-10 md:mx-0 flex-1 lg:max-w-[720px] md:ml-[100px] md:pr-[100px]">
              <p class="mb-5 md:text-[40px] text-[18px] font-[600] mt-[25px] md:mt-0 md:w-[480px]">{{ item.name }}</p>
              <div class="md:text-[25px] text-[15px] font-light mb-6" v-html="item.content"></div>
              <div class="hidden md:block">
                <UButton
                  class="hover:bg-[#D9D9D9] text-[#980C0C] ring-1 ring-[#980C0C] focus:ring-[#980C0C] active:ring-[#980C0C] focus:outline-none transition-all"
                  :class="{ 'md:hidden': index == services.length - 1 }" v-if="item.link" :to="item.link" size="xl"
                  variant="outline" :trailing="false" color="red" icon="i-heroicons-arrow-right">See more</UButton>
              </div>
              <UButton
                class="md:hidden mb-[45px] md:mb-0 text-[#980C0C] hover:bg-[#FAF8F5] ring-1 ring-[#980C0C] focus:ring-[#980C0C] active:ring-[#980C0C] focus:outline-none transition-all"
                v-if="item.link" :to="item.link" variant="outline" :trailing="false"
                :class="{ 'hidden': index == services.length - 1 }" color="red" icon="i-heroicons-arrow-right">See more
              </UButton>
            </div>
          </div>
        </div>



        <div class="flex justify-center md:pb-[75px]">
          <UButton color="gray" size="xl" variant="solid" to="/workflow"
            class="bg-[#8D7662] uppercase text-[#F5F5F5] md:text-[20px] text-[16px] font-[600] md:px-6 md:py-3 px-6 py-2 hover:bg-[#90755e] md:mt-[3rem]">
            See our
            workflow
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const services = [
  {
    name: "Exterior Rendering",
    link: "/exterior",
    image: ["/services/7.png", "/services/2.webp", "/services/3.webp"],
    content: `<div class="leading-[200%] text-justify">We provide detailed and accurate representations of:
   </div>
    <ul class="list-disc pl-6 text-justify leading-[200%]">
    <li>Buildings</li>
    <li>Landscapes</li>
    <li>Surroundings</li>
</ul>
<p class="leading-[200%] text-justify">by showcasing realistic lighting, textures, weather conditions, & environmental elements to ensure clients experience a realistic preview of their project before it’s completed.</p>`,
  },
  {
    name: "Interior Rendering",
    link: "/interior",
    image: ["/services/4.png", "/services/5.webp", "/services/6.png", "/services/7.jpg"],
    content: `<p class="leading-[200%] text-justify">We enhance interior visualization by creating highly detailed, photorealistic images inside:</p>
<ul class="list-disc pl-6 leading-[200%] text-justify">
    <li>Apartments</li>
    <li>Houses</li>
    <li>Restaurants</li>
    <li>Offices</li>
</ul>
<p class = "leading-[200%] text-justify">that seamlessly blend atmosphere, mood, and design elements while carefully selecting the perfect décor to bring the space to life.</p>`,
  },
  {
    name: "Furniture Modeling",
    link: "/furniture",
    image: ["/services/8.jpg", "/services/9.jpg", "/services/10.jpg"],
    content: `<p class = "leading-[200%] text-justify">We ensure precise proportions, realistic textures, and manufacturing accuracy through processes by transforming:</p>
<ul class="list-disc pl-6 leading-[200%] text-justify">
    <li>Sketches</li>
    <li>Blueprints</li>
    <li>Concepts</li>
</ul>
<p class = "leading-[200%] text-justify">into highly detailed, production-ready models, which are refined to meet industry standards for execution.</p>`,
  },
  {
    name: "Customized Request",
    image: ["/services/11.png", "/services/12.webp", "/services/13.png"],
    content: `<p class="leading-[200%]">At Nomo Render, every detail matters. From minor tweaks to full-scale conceptual transformations, our customized 3D rendering services ensure accuracy by adjusting scale, proportions, and real-world materiality.</p>`,
  },
];


const currentIndex = ref(0);
const isLastItem = computed(() => currentIndex.value === services.length - 1);
</script>