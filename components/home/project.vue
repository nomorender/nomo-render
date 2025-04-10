<script setup lang="ts">
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
          Typology: <span class = "font-[500]">Interior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">New York, USA </span>
          <br/>Client: <span class = "font-[500]">Islyn Studio </span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300]">
        This project is an architectural fusion blending historic charm of classic New York City with innovation, to preserve the character of the brick element while introducing a bold, geometric extension.
      </div>
    </div>
  `,
    content2: `
      <div class = "font-[300]">
          At street level, the restored arches and brickwork honor the fabric of the neighborhood, maintaining a sense of familiarity. Above a sleek geometric addition made by metal, creates a dynamic interplay of light and shadow.

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

      <div class = "font-[300]">
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
    name: 'Elevate NY',
    location: 'The Gilded Entrance',
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

      <div class = "font-[300]">
        This project is an architectural fusion blending historic charm of classic New York City with innovation, to preserve the character of the brick element while introducing a bold, geometric extension.
      </div>
    </div>
  `,
    content2: `
      <div class = "font-[300]">
          Steeped in elegance, this design shows the threshold between the bustling city and a sanctuary of sophistication. Designed to present grandeur and intimacy, the entrance blended Art Deco influences with contemporary refinement.
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
      :ui="{ background: '!shadow-none bg-transparent', container: 'border-none flex items-center justify-center !shadow-none', width: 'w-fit !max-w-none' }">
      <div class="relative">
        <div class="flex gap-2.5 mb-8">
          <UButton variant="ghost" size="xl" class="absolute right-[-90px] top-4" @click="isOpen = false" :ui="{
            base: '!p-[15px] !focus:outline-none hover:none border-none !bg-[#8D7662] !rounded-full hover:bg-none !ring-0',
          }">
            <UIcon name="i-heroicons-x-mark-20-solid" class="size-7 text-white" />
          </UButton>
          <div class="flex items-center justify-center gap-12">
            <div class="p-5 bg-[#FAF8F5] rounded-full">
              <nuxt-img class="size-[81px]" src="/Logo3.svg" />
            </div>
            <div>
              <p class="text-[25px] text-[#FAF8F5] font-[500] leading-[200%]">{{ selectedItem?.name }}</p>
              <p class="font-[300] text-[25px] leading-[200%] text-[#FAF8F5]">Nomo Render - 3D Visualization Studio</p>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-[8px] w-[960px]">
          <div class="px-[4rem] pt-10 pb-5">
            <p class="text-[#8D7662] text-[32px] font-[600] mb-5 uppercase leading-[150%]">{{ selectedItem?.name }}</p>
            <div class="text-[25px] leading-[200%] font-[300] text-justify" v-html="selectedItem?.content1"></div>
          </div>
          <div class="bg-white">
            <div class="w-[960px] h-full">
              <NuxtImg :src="selectedItem?.picDes.pic1" class="w-full h-auto object-cover object-center" />
            </div>
          </div>
          <div class="px-[4rem] py-5">
            <div class="text-[25px] leading-[200%] font-[300] text-justify" v-html="selectedItem?.content2"></div>
          </div>


          <div v-if="Object.keys(selectedItem?.picDes || {}).length === 3" class="flex gap-1">
            <div class="w-[50%]">
              <NuxtImg :src="selectedItem?.picDes.pic2" class="w-full h-auto object-cover" />
            </div>
            <div class="w-[50%]">
              <NuxtImg :src="selectedItem?.picDes.pic3" class="w-full h-auto object-cover" />
            </div>
          </div>

          <div v-if="Object.keys(selectedItem?.picDes || {}).length === 4" class="grid grid-cols-2 gap-2">
            <div class="col-span-2">
              <NuxtImg :src="selectedItem?.picDes.pic2" class="w-full h-auto object-cover" />
            </div>
            <div class="col-span-1">
              <NuxtImg :src="selectedItem?.picDes.pic4" class="w-full h-auto object-cover" />
            </div>
            <div class="col-span-1">
              <NuxtImg :src="selectedItem?.picDes.pic3" class="w-full h-auto object-cover" />
            </div>
          </div>

          <div v-if="Object.keys(selectedItem?.picDes || {}).length === 5" class="grid grid-cols-2 gap-2">
            <div class="col-span-2">
              <NuxtImg :src="selectedItem?.picDes.pic2" class="w-full h-auto object-cover" />
            </div>
            <div class="col-span-1">
              <NuxtImg :src="selectedItem?.picDes.pic3" class="w-full max-h-[357px] object-cover" />
            </div>
            <div class="col-span-1">
              <NuxtImg :src="selectedItem?.picDes.pic4" class="w-full h-auto object-cover" />
            </div>
            <div class="col-span-2">
              <NuxtImg :src="selectedItem?.picDes.pic5" class="w-full h-auto object-cover" />
            </div>
          </div>

          <div class="flex w-full justify-center items-center py-10">
            <UButton color="gray" variant="solid" type="submit" form="contactForm"
              class="bg-gradient-to-r from-[#8D7662] to-[#27211B] lg:px-8 lg:py-5 px-10 hover:bg-[#90755e] rounded-[8px] w-[390px] md:w-auto">
              <div
                class="w-full flex justify-center items-center uppercase text-[#F5F5F5] leading-[16px] font-[600] text-[28px]">
                see more our projects
              </div>
            </UButton>
          </div>

        </div>
        <div class="absolute top-[200px] right-[-130px] -translate-y-[12%] hidden md:flex flex-col gap-7">
          <div class="flex flex-col items-center justify-center">
            <UButton class="bg-[#FFFFFF] p-[20px] rounded-full shadow-lg hover:bg-[#FFFFFF] hover:scale-105 transition">
              <UIcon name="material-symbols:mail" class="size-12 text-[#8D7662]" />
            </UButton>
            <div class="font-[300] text-[20px] leading-[150%] text-[#FAF8F5]">Message</div>
          </div>

          <div class="flex flex-col items-center justify-center">
            <UButton class="bg-[#FFFFFF] p-[20px] rounded-full shadow-lg hover:bg-[#FFFFFF] hover:scale-105 transition">
              <UIcon name="material-symbols:ios-share" class="size-12 text-[#8D7662]" />
            </UButton>
            <div class="font-[300] text-[20px] leading-[150%] text-[#FAF8F5]">Share</div>
          </div>

          <div class="flex flex-col items-center justify-center">
            <UButton class="bg-[#FFFFFF] p-[20px] rounded-full shadow-lg hover:bg-[#FFFFFF] hover:scale-105 transition">
              <UIcon name="hugeicons:flowchart-02" class="size-12 text-[#8D7662]" />
            </UButton>
            <div class="font-[300] text-[20px] leading-[150%] text-[#FAF8F5] items-center justify-center">Our workflow
            </div>
          </div>
        </div>
        <div class="absolute top-[25%] right-[0px] -translate-y-[12%] hidden md:flex flex-col gap-7">
          <UButton
            class="hidden md:flex items-center justify-center p-2 absolute right-[-7rem] top-1/2 -translate-y-1/2 z-10 bg-[#8D7662] hover:bg-[#8D7662] rounded-full shadow-2xl"
            @click="">
            <div class="text-[#FFFFFF] flex justify-center">
              <UIcon name="mdi-light:arrow-right" class="size-10" />
            </div>
          </UButton>
        </div>

        <div class="absolute top-[25%] left-[0px] -translate-y-[12%] hidden md:flex flex-col gap-7">
          <UButton
            class="hidden md:flex items-center justify-center p-2 absolute left-[-7rem] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-2xl"
            @click="">
            <div class="text-[#8D7662] flex justify-center">
              <UIcon name="mdi-light:arrow-left" class="size-10" />
            </div>
          </UButton>
        </div>
      </div>
    </UModal>
  </div>
</template>