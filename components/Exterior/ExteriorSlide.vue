<template>
  <div class="my-20">
    <div class="relative h-fit w-full md:pb-[50px] md:pt-[55px] pt-[45px] pb-[40px] bg-[#FAF8F5]">
      <div class="flex flex-col items-center justify-center">
        <div class="font-[400] md:text-[32px] text-[16px] md:leading-[150%] text-[#000000]">
          Who can benefit from
        </div>
        <div class="text-center font-[600] md:text-[64px] text-[30px] md:leading-[150%] text-[#8D7662]">
          3D Exterior Rendering Service?
        </div>
      </div>
      <div class="md:flex hidden gap-8 items-center justify-center">
        <div class="relative w-full h-[420px] flex justify-center items-center mt-[10rem]">
          <div v-for="(slide, slideIndex) in orderedSlides" :key="slide.id"
            class="absolute w-[calc(80vw)] max-w-[1200px] rounded-[8px] h-full shadow-[0_4px_13.5px_rgba(0,0,0,0.42)] transition-all duration-300 ease-in-out"
            :style="{
              zIndex: slide.zIndex,
              opacity: 1,
              transform: `translate(-50%, ${-(slides.length - 1 - slide.zIndex) * 30}px)`,
            }" :class="['left-1/2']">
            <div class="flex justify-center items-center h-full bg-white rounded-[8px]">
              <div class="w-1/2 px-[calc(2vw+1rem)] py-[calc(3vw+1rem)] sm:px-[50px] sm:py-[60px]">
                <div class="text-[32px] font-semibold text-[#8D7662]">{{ slide.name }}</div>
                <div class="text-[25px] leading-[200%] font-light text-justify mt-6">{{ slide.desc }}</div>
              </div>
              <div class="w-1/2">
                <NuxtImg :src="slide.img" class="w-full h-[420px] object-cover object-center rounded-[8px]"
                  loading="lazy" placeholder="/placeholder.jpg" @load="onImageLoad" />
              </div>
            </div>
          </div>
          <!-- Button Next and Prev -->
          <div class="z-[10] flex flex-col justify-center items-center absolute top-1/2 -translate-y-1/2" :class="{
            'gap-[calc(0.5vw+0.5rem)]': true,
            'md:gap-[calc(1vw+0.75rem)]': true,
          }" :style="{
              left: `calc(50% - min(40vw, 600px) - 7rem)`,
              top: 'calc(50% - 80px)'
            }">
            <UButton @click="nextSlide" variant="ghost"
              class="flex items-center justify-center bg-white hover:bg-white shadow-2xl rounded-full p-[calc(0.75rem+0.5vw)] sm:p-[18px]"
              :disabled="isAnimating">
              <Icon name="material-symbols:arrow-upward-rounded" class="size-5 sm:size-6 text-[#8D7662]" />
            </UButton>
            <UButton @click="prevSlide" variant="ghost"
              class="flex items-center justify-center bg-[#8D7662] disabled:bg-[#947b65] hover:bg-[#8D7662] shadow-2xl rounded-full p-[calc(0.75rem+0.5vw)] sm:p-[18px]"
              :disabled="isAnimating">
              <Icon name="material-symbols:arrow-downward-rounded" class="size-5 sm:size-6 text-white" />
            </UButton>
          </div>
        </div>
      </div>



      <!-- Slide for Mobile -->
      <div class="md:hidden block">
        <div class="relative pt-5 mx-auto">
          <UCarousel :items="slides" arrows :ui="{
            item: 'basis-full px-3',
            arrows: {
              wrapper: 'flex items-center justify-center md:mt-2 mt-8 sm:hidden gap-[15px] md:pb-10'
            }
          }" ref="carousel">
            <template #default="{ item }">
              <div class="flex justify-center w-full bg-[#ffffff] rounded-[8px]">
                <div class="">
                  <div class="w-full md:mb-0 mb-[40px]">
                    <NuxtImg :src="item.img" alt="img"
                      class="w-full h-[280px] rounded-[8px] object-cover object-center" draggable="false" />
                  </div>
                  <div class="mx-5 flex gap-5">
                    <div>
                      <div class="text-[18px] text-[#8D7662] font-[600]">
                        {{ item.name }}
                      </div>
                    </div>
                  </div>
                  <div class="mx-5 mt-[15px] mb-[35px]">
                    <div
                      class="text-justify text-[15px] leading-[180%] font-[300]">
                      {{ item.desc }}
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template #prev="{ onClick, disabled }">
              <UButton
                class="shadow-[0_4px_4px_rgba(0,0,0,0.25)] !ring-0 !focus:ring-0 !focus-visible:ring-0 rounded-full outline-none border-0 bg-[#FFFFFF] hover:bg-white text-[#8D7662] text-2xl p-2 h-[41px] w-[41px] flex items-center justify-center"
                color="white" :disabled="disabled" @click="onClick" square>
                <UIcon name="mingcute:arrow-left-fill" class="size-5" />
              </UButton>
            </template>
            <template #next="{ onClick, disabled }">
              <UButton
                class="shadow-[0_4px_4px_rgba(0,0,0,0.25)] !ring-0 !focus:ring-0 !focus-visible:ring-0 rounded-full outline-none border-0 bg-[#8D7662] disabled:text-[#8D7662] hover:bg-[#8D7662] text-[#FFFFFF] p-2 h-[41px] w-[41px] flex items-center justify-center"
                color="white" :disabled="disabled" @click="onClick" square>
                <UIcon name="mingcute:arrow-right-fill" class="size-5" />
              </UButton>
            </template>
          </UCarousel>
        </div>
      </div>


      <div class="flex justify-center items-center md:pt-[70px] pt-[25px]">
        <div class="md:w-[calc(80vw)] md:max-w-[1200px] md:text-[25px] text-[15px] font-[300] md:leading-[200%] leading-[180%] text-justify px-9">
          By integrating 3D exterior visualization into their workflow, these professionals
          <span class="font-[500]">can reduce misinterpretations, accelerate decision-making</span>, and achieve more
          refined, market-ready project outcomes.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const slides = ref([
  {
    id: 1,
    name: 'Architects & Designers',
    desc: 'Strengthen project proposals with highly detailed, photorealistic visuals, ensuring clients and stakeholders fully understand the architectural vision before construction begins.',
    img: '/benefits/HCP01.jpg',
    zIndex: 5,
  },
  {
    id: 2,
    name: 'Real Estate Developers',
    desc: 'Present properties with immersive, market-ready renderings that captivate potential buyers and investors, driving pre-sales and project funding.',
    img: '/benefits/HAM01.png',
    zIndex: 4,
  },
  {
    id: 3,
    name: 'Construction & Engineering Agency',
    desc: 'Facilitate efficient project execution with technical renderings that minimize design discrepancies, optimize material selection, and streamline planning.',
    img: '/benefits/HCP02.png',
    zIndex: 3,
  },
  {
    id: 4,
    name: 'Landscapers & Urban Planners',
    desc: 'Design and visualize outdoor spaces such as parks, gardens, and public areas to ensure functionality and aesthetic appeal.',
    img: '/benefits/HCP03.png',
    zIndex: 2,
  },
  {
    id: 5,
    name: 'Marketing & Advertising Professionals',
    desc: 'Leverage compelling, photorealistic visuals for real estate promotions, advertising campaigns, and digital content strategies that enhance audience engagement.',
    img: '/benefits/HCP04.png',
    zIndex: 1,
  },
  {
    id: 6,
    name: 'Travel Agencies',
    desc: 'Showcase destinations with immersive, visually appealing renderings to enhance tourism marketing.',
    img: '/benefits/HCP05.png',
    zIndex: 0,
  },
]);

const isAnimating = ref(false);
const imagesLoaded = ref(false);

const orderedSlides = computed(() => {
  return [...slides.value].sort((a, b) => b.zIndex - a.zIndex);
});

const nextSlide = () => {
  if (isAnimating.value || !imagesLoaded.value) return;
  isAnimating.value = true;

  const maxZIndexSlide = slides.value.find((slide) => slide.zIndex === slides.value.length - 1);
  maxZIndexSlide.zIndex = 0;
  slides.value.forEach((slide) => {
    if (slide.id !== maxZIndexSlide.id) {
      slide.zIndex += 1;
    }
  });

  setTimeout(() => {
    isAnimating.value = false;
  }, 300);
};

const prevSlide = () => {
  if (isAnimating.value || !imagesLoaded.value) return;
  isAnimating.value = true;

  const minZIndexSlide = slides.value.find((slide) => slide.zIndex === 0);
  minZIndexSlide.zIndex = slides.value.length - 1;
  slides.value.forEach((slide) => {
    if (slide.id !== minZIndexSlide.id) {
      slide.zIndex -= 1;
    }
  });
  setTimeout(() => {
    isAnimating.value = false;
  }, 300);
};

const onImageLoad = () => {
  imagesLoaded.value = true;
};
</script>