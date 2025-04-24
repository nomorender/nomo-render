<template>
    <div class="relative w-full">
        <div class="flex gap-20 items-center justify-center ">
            <div class="z-[10] absolute  left-2 h-full flex flex-col gap-5 justify-center items-center"">
                <UButton @click="nextSlide" variant="ghost"
                    class="flex items-center justify-center  bg-[#FFFFFF] hover:bg-[#FFFFFF] shadow-2xl rounded-full p-[18px]">
                    <Icon name="material-symbols:arrow-upward-rounded" class="size-6 text-[#8D7662]" />
                </UButton>
                <UButton @click="prevSlide" variant="ghost"
                    class="flex items-center justify-center  bg-[#8D7662] hover:bg-[#8D7662] shadow-2xl rounded-full p-[18px]">
                    <Icon name="material-symbols:arrow-downward-rounded" class="size-6 text-[#FFFFFF]" />
                </UButton>
            </div>
            <div class="relative w-full h-[420px] flex justify-center items-center">
                <div v-for="(slide, index) in slides" :key="index"
                    class="absolute w-full max-w-[1200px] h-full shadow-lg transition-all duration-300 ease-in-out"
                    :class="[
                        activeSlide === index && !isAnimating ? 'opacity-100 top-0 z-10' : 'opacity-0 top-[20px] z-0',
                        'left-1/2 -translate-x-1/2'
                    ]">
                    <div class="flex justify-center items-center h-full bg-white">
                        <div class="w-[50%] px-[50px] py-[60px]">
                            <div class="text-[32px] font-semibold text-[#8D7662]">{{ slide.name }}</div>
                            <div class="text-[25px] font-light text-justify mt-10">{{ slide.desc }}</div>
                        </div>
                        <div class="w-[50%]">
                            <NuxtImg :src="slide.img" class="w-full h-[420px] object-cover object-center" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const slides = [
  {
    name: 'Architects & Designers',
    desc: 'Strengthen project proposals with highly detailed, photorealistic visuals, ensuring clients and stakeholders fully understand the architectural vision before construction begins.',
    img: '/benefits/HCP01.jpg'
  },
  {
    name: 'aaa',
    desc: 'Slide aaa description',
    img: '/benefits/HCP02.jpg'
  },
  {
    name: 'bbb',
    desc: 'Slide bbb description',
    img: '/benefits/HCP03.jpg'
  }
]

const activeSlide = ref(0)
const isAnimating = ref(false)
const slideDirection = ref('next')

function nextSlide() {
  if (isAnimating.value) return
  isAnimating.value = true
  slideDirection.value = 'next'

  setTimeout(() => {
    activeSlide.value = (activeSlide.value + 1) % slides.length
    isAnimating.value = false
  }, 300)
}

function prevSlide() {
  if (isAnimating.value) return
  isAnimating.value = true
  slideDirection.value = 'prev'

  setTimeout(() => {
    activeSlide.value = (activeSlide.value - 1 + slides.length) % slides.length
    isAnimating.value = false
  }, 300)
}
</script>
