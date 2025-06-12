<script setup lang="ts">
import { NuxtLink } from '#components'

interface CarouselItem {
  projectName: string
  location: string
  mainPic: string
  content1: any
  content2: any
  picDes: any
}

const items: CarouselItem[] = [
  {
    projectName: 'Elevate NY',
    location: 'New York, USA',
    mainPic: '/HAR011.png',
    content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Exterior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">New York, USA</span>
          <br/>Client: <span class = "font-[500]">DEMO Arch</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        This project is an architectural fusion blending historic charm of classic New York City with innovation, to preserve the character of the brick element while introducing a bold, geometric extension.
      </div>
    </div>
  `,
    content2: `
      <div class = "font-[300]">
          At street level, the restored arches and brickwork honor the fabric of the neighborhood, maintaining a sense of familiarity. Above a sleek geometric addition made by metal, creates a dynamic interplay of light and shadow.
      </div>

      <div class = "font-[300] my-4">
          While working with Demo Arch, we as Nomo Render follow their vision as a signature design on urban visualization, where heritage meets forward-thinking design to redefine contemporary city living.
      </div>
  `,
    picDes: {
      pic1: `/Service1Pic1.png`,
      pic2: `/HAR01.jpg`,
      pic3: '/HAR02.jpg',
    }
  },
  {
    projectName: 'The Warmth Within',
    location: 'New York, USA',
    mainPic: '/Service02.png',
    content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Interior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">New York, USA</span>
          <br/>Client: <span class = "font-[500]">The Mib Project</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        In collaboration with The Mib Project, we reimagine dining with an organic and modern aesthetic. This space is designed with a perfect balance of comfort and elegance, with soft earth stone and refined textures.
      </div>
    </div>
  `,
    content2: `
      <div class = "font-[300]">
          The Warmth Within is a combination of understated luxury and special artistic style, having:
          Woven rattan chairs, Sculptural lighting, Abstract artwork, Warm wood tones, The shape composition enhanced the sense of depth and character, making the space feel both timeless and deeply personal with artisanal craftsmanship.
      </div>
  `,
    picDes: {
      pic1: `/HAR03.png`,
      pic2: '/HAR04.png',
      pic3: '/HAR05.png',
      pic4: '/HAR06.png',
    }
  },
  {
    projectName: 'The Gilded Entrance',
    location: 'San Francisco, USA',
    mainPic: '/Service03.png',
    content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Exterior & Interior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">San Francisco, USA</span>
          <br/>Client: <span class = "font-[500]">frenchCALIFORNIA</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        Steeped in elegance, this design shows the threshold between the bustling city and a sanctuary of sophistication. Designed to present grandeur and intimacy, the entrance blended Art Deco influences with contemporary refinement.
      </div>
    </div>
  `,
    content2: `
      <div class = "font-[300]">
        A tribute to luxury and urban living, The Gilded Entrance sets the tone for an experience, capturing the essences of San Francisco's element through the timeless mindset of frenchCALIFORNIA: <span class = "font-[500] italic">The striking black canopy, Geometric lighting, Intricate glass and metal work on the doors</span> 
      </div>
      <div class = "font-[300] mt-4">
        All reflect in the polished surfaces, invite guests into space and have the best experience of history and modernity. 
      </div>
      <div class = "font-[300] mt-4">
        frenchCALIFORNIA also partnered up with us in rendering the interior for this luxury project. Inside, the lobby unfolds as a welcoming space with <span class="font-[500] italic">Plush, Sculptural furnishings, Warm lightings, A palette of rich textures</span>
      </div>
      <div class = "font-[300] mt-4">
        Every detail, from the intricate floor patterns to artworks, offer a colourful yet chic retreat in the heart of the city.
      </div>
  `,
    picDes: {
      pic1: `/HAR07.png`,
      pic2: '/HAR08.jpg',
      pic3: '/HAR9.jpg',
      pic4: '/HAR10.jpg',
      pic5: '/HAR11.jpg',
    }
  },
]

const isOpen = ref<boolean>(false)
const selectedItem = ref<CarouselItem | null>(null)

const selectedIndex = ref<number | null>(null)

const openModal = (item: CarouselItem): void => {
  selectedItem.value = item
  selectedIndex.value = items.findIndex(i => i === item)
  isOpen.value = true
}

const goToNextItem = () => {
  if (selectedIndex.value !== null) {
    selectedIndex.value = (selectedIndex.value + 1) % items.length
    selectedItem.value = items[selectedIndex.value]
    const modal = document.querySelector('.modal-container')
    if (modal) {
      modal.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}

const goToPrevItem = () => {
  if (selectedIndex.value !== null) {
    selectedIndex.value = (selectedIndex.value - 1 + items.length) % items.length
    selectedItem.value = items[selectedIndex.value]

    const modal = document.querySelector('.modal-container')
    if (modal) {
      modal.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<template>
  <div class="md:py-20 py-[45px] flex items-center justify-center gap-4 w-full">
    <UCarousel :items="items" arrows :ui="{
      item: 'basis-full md:basis-1/2 lg:basis-1/3',
      arrows: { wrapper: 'outline-none flex gap-[15px] items-center justify-center mt-5 sm:hidden' }
    }">
      <template #default="{ item }: { item: CarouselItem }">
        <div class="relative w-auto cursor-pointer max-h-[725px] mx-2" @click="openModal(item)">
          <div
            class="absolute bottom-[60px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg py-3 md:w-[330px] w-[220px] md:h-[115px] h-[76px] text-center">
            <div class="flex flex-col justify-center items-center w-full h-full">
              <p class="md:font-[600] font-[700] leading-[200%] md:text-[25px]">{{ item.projectName }}</p>
              <p class="font-[300] leading-[200%] md:text-[25px] text-[15px]">{{ item.location }}</p>
            </div>
          </div>
          <NuxtImg loading="lazy" :src="item.mainPic" alt="main img"
            class="object-cover object-center w-[472px] h-[725px] rounded-lg" draggable="false" />
        </div>
      </template>

      <template #prev="{ onClick, disabled }: { onClick: () => void, disabled: boolean }">
        <UButton
          class="shadow-[0_4px_4px_rgba(0,0,0,0.25)] !ring-0 !focus:ring-0 !focus-visible:ring-0 rounded-full outline-none border-0 bg-[#FFFFFF] hover:bg-white text-[#8D7662] text-2xl p-2 h-[41px] w-[41px] flex items-center justify-center"
          color="white" :disabled="disabled" @click="onClick" square>
          <UIcon name="mingcute:arrow-left-fill" class="size-5" />
        </UButton>
      </template>

      <template #next="{ onClick, disabled }: { onClick: () => void, disabled: boolean }">
        <UButton
          class="shadow-[0_4px_4px_rgba(0,0,0,0.25)] !ring-0 !focus:ring-0 !focus-visible:ring-0 rounded-full outline-none border-0 bg-[#8D7662] disabled:text-[#8D7662] hover:bg-[#8D7662] text-[#FFFFFF] p-2 h-[41px] w-[41px] flex items-center justify-center"
          color="white" :disabled="disabled" @click="onClick" square>
          <UIcon name="mingcute:arrow-right-fill" class="size-5" />
        </UButton>
      </template>
    </UCarousel>
    <ModalItem v-model="isOpen" :items="items" :selectedIndex="selectedIndex" @update:modelValue="isOpen = $event"
      @update:selectedIndex="selectedIndex = $event" />
  </div>
</template>