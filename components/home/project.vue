<script setup lang="ts">
interface CarouselItem {
  name: string
  location: string
  mainPic: string
  content: any
  pic1: string
}

const items: CarouselItem[] = [
  {
    name: 'Elevate NY',
    location: 'New York, USA',
    mainPic: '/mobile-background.png',
    pic1: ``,
    content: `
    <div>
      <div>
          Typology: Interior
          <br/>Status: Completed
          <br/>Location: New York, USA Client: Islyn Studio Visualization: Nomo Render
          <br/>Completion time: 6 weeks
      </div>

      <div>
        This project is an architectural fusion blending historic charm of classic New York City with innovation, to preserve the character of the brick element while introducing a bold, geometric extension.
      </div>
    </div>
  `
  },
  {
    name: 'The Warmth Within',
    location: 'New York, USA',
    mainPic: '/Service02.png',
    pic1: ``,
    content: `<div></div>`
  },
  {
    name: 'The Gilded Entrance',
    location: 'San Francisco, USA',
    mainPic: '/Service03.png',
    pic1: ``,
    content: `<div></div>`
  }
]

const isOpen = ref<boolean>(false)
const selectedItem = ref<CarouselItem | null>(null)

const openModal = (item: CarouselItem): void => {
  selectedItem.value = item
  isOpen.value = true
}
</script>

<template>
  <div class="py-20 flex items-center justify-center gap-4 w-full">
    <UCarousel :items="items" arrows :ui="{
      item: 'basis-full sm:basis-1/2 lg:basis-1/3',
      arrows: { wrapper: 'flex items-center justify-center mt-2 sm:hidden' }
    }">
      <template #default="{ item }: { item: CarouselItem }">
        <div class="relative w-auto cursor-pointer max-h-[725px] mx-2" @click="openModal(item)">
          <div
            class="absolute bottom-[60px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg py-3 md:w-[330px] w-[220px] md:h-[115px] h-[76px] text-center">
            <div class="flex flex-col justify-center items-center w-full h-full">
              <p class="md:font-[600] font-[700] leading-[200%] md:text-[25px]">{{ item.name }}</p>
              <p class="font-[300] leading-[200%] md:text-[25px] text-[15px]">{{ item.location }}</p>
            </div>
          </div>
          <NuxtImg :src="item.mainPic" class="object-cover object-center w-[472px] h-[725px] rounded-lg"
            draggable="false" />
        </div>
      </template>

      <template #prev="{ onClick, disabled }: { onClick: () => void, disabled: boolean }">
        <UButton
          class="rounded-full bg-[#FFFFFF] hover:bg-white text-[#8D7662] text-2xl shadow-lg p-2 h-[41px] w-[41px] flex items-center justify-center"
          color="white" :disabled="disabled" @click="onClick" square>
          <UIcon name="mingcute:arrow-left-fill" class="size-5" />
        </UButton>
      </template>

      <template #next="{ onClick, disabled }: { onClick: () => void, disabled: boolean }">
        <UButton
          class="rounded-full bg-[#8D7662] disabled:text-[#8D7662] hover:bg-[#8D7662] text-[#FFFFFF] shadow-lg p-2 h-[41px] w-[41px] flex items-center justify-center"
          color="white" :disabled="disabled" @click="onClick" square>
          <UIcon name="mingcute:arrow-right-fill" class="size-5" />
        </UButton>
      </template>
    </UCarousel>

    <UModal v-model="isOpen"
      :ui="{ background: 'bg-transparent', container: 'border-none flex items-center justify-center', width: 'w-fit !max-w-none' }">
      <div class="relative">
        <div class="flex gap-2.5 mb-8">
          <UButton color="gray" square size="xl" icon="i-heroicons-x-mark-20-solid"
            class="absolute bg-transparent outline-none border-none right-4 top-4" @click="isOpen = false" />
          <div>
            <div class="bg-[#FAF8F5] rounded-full flex items-center justify-center">
              <NuxtImg class="w-[81px] h-[81px]" src="/logo-tron.png" />
            </div>
          </div>
          <div>
            <p class="text-[25px] text-[#8D7662] font-[600] leading-[200%]">{{ selectedItem?.name }}</p>
            <p class="font-[300] text-[25px] leading-[200%]">Nomo Render - 3D Visualization Studio</p>
          </div>
        </div>
        <div class="bg-white rounded-[8px] w-[960px]">
          <div class="p-5">
            <p class="text-[#8D7662] text-[32px] font-[600] mb-5 uppercase leading-[150%]">{{ selectedItem?.name }}</p>
            <div class="text-[25px] leading-[200%] font-[300] text-justify" v-html="selectedItem?.content"></div>
          </div>
          <div class="bg-white">
            <div class="w-full h-full">
              <NuxtImg src="/Service1Pic1.png" class="w-full h-fit" />
            </div>
          </div>
        </div>



       

        <div class = "absolute top-[170px] right-[-60px] -translate-y-1/2 ">
          <UButton
          class=" bg-[#8D7662] text-white p-3 rounded-full shadow-lg hover:scale-105 transition">
          <UIcon name="heroicons:arrow-right" class="w-5 h-5" />
        </UButton>
        </div>
      </div>
    </UModal>
  </div>
</template>