<template>
  <div class="my-20">
    <div class="relative h-fit w-full pb-[50px] pt-[55px] bg-[#FAF8F5]">
      <div class="flex flex-col items-center justify-center mb-[50px]">
        <div class="font-[400] text-[32px] leading-[150%] text-[#000000]">
          Who can benefit from
        </div>
        <div class="font-[600] text-[64px] leading-[150%] text-[#8D7662]">
          3D Exterior Rendering Service?
        </div>
      </div>
      <div class="md:flex block gap-8 items-center justify-center">
        <div class="relative w-full h-[420px] flex justify-center items-center mt-[10rem]">
          <div
            v-for="(slide, slideIndex) in orderedSlides"
            :key="slide.id"
            class="absolute w-[calc(80vw)] max-w-[1200px] rounded-[8px] h-full shadow-[0_4px_13.5px_rgba(0,0,0,0.42)] transition-all duration-300 ease-in-out"
            :style="{
              zIndex: slide.zIndex,
              opacity: 1,
              transform: `translate(-50%, ${-(slides.length - 1 - slide.zIndex) * 30}px)`,
            }"
            :class="['left-1/2']"
          >
            <div class="flex justify-center items-center h-full bg-white rounded-[8px]">
              <div class="w-1/2 px-[calc(2vw+1rem)] py-[calc(3vw+1rem)] sm:px-[50px] sm:py-[60px]">
                <div class="text-[32px] font-semibold text-[#8D7662]">{{ slide.name }}</div>
                <div class="text-[25px] leading-[200%] font-light text-justify mt-6">{{ slide.desc }}</div>
              </div>
              <div class="w-1/2">
                <NuxtImg
                  :src="slide.img"
                  class="w-full h-[420px] object-cover object-center rounded-[8px]"
                  loading="lazy"
                  placeholder="/placeholder.jpg"
                  @load="onImageLoad"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- Button Next and Prev -->
        <div
          class="z-[10] flex flex-col justify-center items-center absolute"
          :style="{
            left: 'calc(2vw + 1.5rem)',
            top: 'calc(50% - 80px)',
          }"
          :class="{
            'gap-[calc(0.5vw+0.5rem)]': true,
            'md:gap-[calc(1vw+0.75rem)]': true,
            'bottom-[calc(1rem+1vw)] md:bottom-auto': true,
            'left-[calc(2vw+1rem)] sm:left-[calc(3vw+1.5rem)]': true,
          }"
        >
          <UButton
            @click="nextSlide"
            variant="ghost"
            class="flex items-center justify-center bg-white hover:bg-white shadow-2xl rounded-full p-[calc(0.75rem+0.5vw)] sm:p-[18px]"
            :disabled="isAnimating"
          >
            <Icon name="material-symbols:arrow-upward-rounded" class="size-5 sm:size-6 text-[#8D7662]" />
          </UButton>
          <UButton
            @click="prevSlide"
            variant="ghost"
            class="flex items-center justify-center bg-[#8D7662] disabled:bg-[#947b65] hover:bg-[#8D7662] shadow-2xl rounded-full p-[calc(0.75rem+0.5vw)] sm:p-[18px]"
            :disabled="isAnimating"
          >
            <Icon name="material-symbols:arrow-downward-rounded" class="size-5 sm:size-6 text-white" />
          </UButton>
        </div>
      </div>
      <div class="flex justify-center items-center pt-[70px]">
        <div class="w-[calc(80vw)] max-w-[1200px] text-[25px] font-[300] leading-[200%] text-justify">
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
    name: 'Architects & Designers',
    desc: 'Strengthen project proposals with highly detailed, photorealistic visuals, ensuring clients and stakeholders fully understand the architectural vision before construction begins.',
    img: '/benefits/HAM01.png',
    zIndex: 4,
  },
  {
    id: 3,
    name: 'Architects & Designers',
    desc: 'Strengthen project proposals with highly detailed, photorealistic visuals, ensuring clients and stakeholders fully understand the architectural vision before construction begins.',
    img: '/benefits/HCP02.png',
    zIndex: 3,
  },
  {
    id: 4,
    name: 'Architects & Designers',
    desc: 'Strengthen project proposals with highly detailed, photorealistic visuals, ensuring clients and stakeholders fully understand the architectural vision before construction begins.',
    img: '/benefits/HCP03.png',
    zIndex: 2,
  },
  {
    id: 5,
    name: 'Architects & Designers',
    desc: 'Strengthen project proposals with highly detailed, photorealistic visuals, ensuring clients and stakeholders fully understand the architectural vision before construction begins.',
    img: '/benefits/HCP04.png',
    zIndex: 1,
  },
  {
    id: 6,
    name: 'Architects & Designers',
    desc: 'Strengthen project proposals with highly detailed, photorealistic visuals, ensuring clients and stakeholders fully understand the architectural vision before construction begins.',
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