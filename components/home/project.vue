<script setup lang="ts">
import { NuxtLink } from '#components'

interface CarouselItem {
  name: string
  location: string
  mainPic: string
  content1: any
  content2: any
  picDes: any
}

const items: CarouselItem[] = [
  {
    name: 'Elevate NY',
    location: 'New York, USA',
    mainPic: '/mobile-background.png',
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
    name: 'The Warmth Within',
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
    name: 'The Gilded Entrance',
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
              <p class="md:font-[600] font-[700] leading-[200%] md:text-[25px]">{{ item.name }}</p>
              <p class="font-[300] leading-[200%] md:text-[25px] text-[15px]">{{ item.location }}</p>
            </div>
          </div>
          <NuxtImg :src="item.mainPic" alt="main img" class="object-cover object-center w-[472px] h-[725px] rounded-lg"
            draggable="false" />
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


    <UModal v-model="isOpen"
      :ui="{ overlay: { background: 'bg-black/80' }, background: '!shadow-none bg-transparent', container: 'border-none flex items-center justify-center !shadow-none modal-container pb-[120px]', width: '' }">
      <div class="flex md:gap-2.5 mb-8 justify-between">
        <div class="flex items-center justify-center md:gap-12 gap-3">
          <div class="md:p-5 p-2 bg-[#FAF8F5] rounded-full">
            <nuxt-img class="md:size-[81px] size-[33px]" src="/Logo3.svg" alt="Logo" />
          </div>
          <div>
            <p
              class="md:text-[25px] text-[18px] text-[#FAF8F5] md:font-[500] font-[600] md:leading-[200%] leading-[100%]">
              {{ selectedItem?.name }}</p>
            <p class="font-[300] md:text-[25px] text-[15px] md:leading-[200%] leading-[180%] text-[#FAF8F5]">Nomo Render
              -
              3D Visualization Studio</p>
          </div>
        </div>

        <div class="fixed md:translate-x-[64.1rem] md:-translate-y-[-30px] -translate-x-[-19.5rem]">
          <UButton variant="ghost" size="xl" class=" " @click="isOpen = false" :ui="{
            base: 'md:!p-[15px] !p-[6px] !focus:outline-none hover:none border-none md:!bg-[#8D7662] !bg-[#D9D9D9] !rounded-full hover:bg-none !ring-0',
          }">
            <UIcon name="i-heroicons-x-mark-20-solid" class="size-7 md:text-white text-[#1D1B20]" />
          </UButton>
        </div>
      </div>

      <div class="bg-[#FAF8F5] rounded-[8px] md:w-[960px] w-[355px]">
        <div class="md:px-[4rem] px-[35px] md:pt-[55px] pt-[40px] md:pb-5 pb-3">
          <p class="text-[#8D7662] md:text-[32px] text-[16px] font-[600] mb-5 uppercase leading-[150%]">{{
            selectedItem?.name }}</p>
          <div class="md:text-[25px] text-[15px] leading-[200%] font-[300] text-justify"
            v-html="selectedItem?.content1">
          </div>
        </div>
        <div class="bg-[#FAF8F5]">
          <div class="md:w-[960px] h-full w-[355px]">
            <NuxtImg alt="PicHouse" :src="selectedItem?.picDes.pic1"
              class=":w-full h-auto object-cover object-center" />
          </div>
        </div>
        <div class="md:px-[4rem] px-[35px] py-[30px]">
          <div class="md:text-[25px] text-[15px] md:leading-[200%] leading-[180%] font-[300] text-justify"
            v-html="selectedItem?.content2"></div>
        </div>


        <div v-if="Object.keys(selectedItem?.picDes || {}).length === 3" class="flex gap-1">
          <div class="w-[50%]">
            <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic2" class="w-full h-auto object-cover" />
          </div>
          <div class="w-[50%]">
            <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic3" class="w-full h-auto object-cover" />
          </div>
        </div>

        <div v-if="Object.keys(selectedItem?.picDes || {}).length === 4" class="grid grid-cols-2 gap-2">
          <div class="col-span-2">
            <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic2" class="w-full h-auto object-cover" />
          </div>
          <div class="col-span-1">
            <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic4" class="w-full h-auto object-cover" />
          </div>
          <div class="col-span-1">
            <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic3" class="w-full h-auto object-cover" />
          </div>
        </div>

        <div v-if="Object.keys(selectedItem?.picDes || {}).length === 5" class="grid grid-cols-2 gap-2">
          <div class="col-span-2">
            <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic2" class="w-full h-auto object-cover" />
          </div>
          <div class="col-span-1 md:h-[357px] h-[131px]">
            <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic3" class="w-full h-full object-cover" />
          </div>
          <div class="col-span-1 ">
            <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic4" class="w-full h-auto object-cover" />
          </div>
          <div class="col-span-2">
            <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic5" class="w-full h-auto object-cover" />
          </div>
        </div>

        <div class="flex w-full justify-center items-center py-10">
          <UButton color="gray" variant="solid" type="submit" form="contactForm"
            class="bg-gradient-to-r from-[#8D7662] to-[#27211B] lg:px-8 lg:py-5 px-6 py-4 hover:bg-[#90755e] rounded-[8px] md:w-auto">
            <div
              class="w-full flex justify-center items-center uppercase text-[#F5F5F5] leading-[16px] font-[600] md:text-[28px] text-[16px]">
              see more our projects
            </div>
          </UButton>
        </div>

      </div>


      <!-- 2 BUTTON NEXT TO THE MODAL PC -->
      <div class="fixed -translate-x-[-1000px] -translate-y-[-140px] hidden md:flex">
        <!-- TWO BUTTON SOCIAL -->
        <div class="md:flex flex-col gap-7">
          <div class="flex flex-col items-center justify-center">
            <NuxtLink to="https://wa.me/84967563407" target="_blank">
              <UButton
                class="bg-[#FFFFFF] p-[20px] rounded-full shadow-lg hover:bg-[#FFFFFF] hover:scale-105 transition">
                <UIcon name="material-symbols:mail" class="size-12 text-[#8D7662]" />
              </UButton>
            </NuxtLink>
            <div class="font-[300] text-[20px] leading-[150%] text-[#FAF8F5]">Message</div>
          </div>
          <div class="flex flex-col items-center justify-center">
            <UButton class="bg-[#FFFFFF] p-[20px] rounded-full shadow-lg hover:bg-[#FFFFFF] hover:scale-105 transition">
              <UIcon name="hugeicons:flowchart-02" class="size-12 text-[#8D7662]" />
            </UButton>
            <div class="font-[300] text-[20px] leading-[150%] text-[#FAF8F5] items-center justify-center">Our workflow
            </div>
          </div>
        </div>
      </div>

      <!-- BAR FOR MODAL MOBILE  -->
      <div v-if="isOpen" class="w-full fixed bottom-0 left-0 py-3 md:hidden bg-[#D9D9D9]">
        <!-- TWO BUTTON SOCIAL -->
        <div class="flex w-full justify-center items-center gap-10">
          <div class="flex flex-col items-center justify-center gap-1">
            <UButton class="flex items-center justify-center p-3 bg-white/80 hover:bg-white rounded-full shadow-2xl"
              @click="goToPrevItem">
              <div class="text-[#8D7662] flex justify-center">
                <UIcon name="mdi-light:arrow-left" class="size-4" />
              </div>
            </UButton>
            <div class="font-[300] text-[10px] leading-[150%] text-[#000000]">Back</div>
          </div>

          <div class="flex flex-col items-center justify-center gap-1">
            <NuxtLink to="https://wa.me/84967563407" target="_blank">
              <UButton
                class="bg-[#FFFFFF] md:p-[20px] p-[10px] rounded-full shadow-lg hover:bg-[#FFFFFF] hover:scale-105 transition">
                <UIcon name="material-symbols:mail" class="md:size-12 size-5 text-[#8D7662]" />
              </UButton>
            </NuxtLink>
            <div class="font-[300] text-[10px] leading-[150%] text-[#000000]">Message</div>
          </div>
          <div class="flex flex-col items-center justify-center gap-1">
            <UButton
              class="bg-[#FFFFFF] md:p-[20px] p-[10px] rounded-full shadow-lg hover:bg-[#FFFFFF] hover:scale-105 transition">
              <UIcon name="hugeicons:flowchart-02" class="md:size-12 size-5 text-[#8D7662]" />
            </UButton>
            <div class="font-[300] text-[10px] leading-[150%] text-[#000000] items-center justify-center">Our workflow
            </div>
          </div>

          <div class="flex flex-col items-center justify-center gap-1">
            <UButton
              class="flex items-center justify-center p-3 bg-[#8D7662] hover:bg-[#8D7662] rounded-full shadow-2xl"
              @click="goToNextItem">
              <div class="text-[#FFFFFF] flex justify-center">
                <UIcon name="mdi-light:arrow-right" class="size-4" />
              </div>
            </UButton>
            <div class="font-[300] text-[10px] leading-[150%] text-[#000000]">Next</div>
          </div>
        </div>
      </div>

      <!-- Next Previous -->
      <div class="fixed translate-x-[60.7rem] translate-y-[30rem] hidden md:flex flex-col gap-7">
        <UButton
          class="hidden md:flex items-center justify-center p-2 absolute right-[-7rem] top-1/2 -translate-y-1/2 z-10 bg-[#8D7662] hover:bg-[#8D7662] rounded-full shadow-2xl"
          @click="goToNextItem">
          <div class="text-[#FFFFFF] flex justify-center">
            <UIcon name="mdi-light:arrow-right" class="size-10" />
          </div>
        </UButton>
      </div>
      <div class="fixed translate-x-[-0.7rem] translate-y-[30rem] hidden md:flex flex-col gap-7">
        <UButton
          class="hidden md:flex items-center justify-center p-2 absolute left-[-7rem] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-2xl"
          @click="goToPrevItem">
          <div class="text-[#8D7662] flex justify-center">
            <UIcon name="mdi-light:arrow-left" class="size-10" />
          </div>
        </UButton>
      </div>

      <!-- 2 BUTTON NEXT TO THE MODAL MOBILE -->
    </UModal>
  </div>
</template>