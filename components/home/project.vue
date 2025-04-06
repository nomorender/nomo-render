<script setup lang="ts">
const items = [
  '/mobile-background.png',
  '/mobile-background.png',
  '/mobile-background.png',
]
const isOpen = ref(false)
</script>

<template>
  <div class="py-20 mx-auto">
    <UCarousel :items="items" arrows :ui="{
      item: 'basis-full md:basis-1/2 lg:basis-1/3', arrows: {
        wrapper: 'flex items-center justify-center gap-2 mt-2 sm:hidden'
      },
    }">
      <template #default="{ item }">
        <div class="relative w-full mr-2 cursor-pointer" @click="isOpen = true">
          <div
            class="absolute bottom-[60px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg py-3 w-[330px] h-[115px] text-center">
            <div class="flex flex-col justify-center items-center w-full h-full">
              <p class="font-[600] leading-[200%] text-[25px]">Project’s Name</p>
              <p class="font-[300] leading-[200%] text-[25px]">Location</p>
            </div>
          </div>
          <NuxtImg :src="item" class="w-full h-full  rounded-lg" draggable="false" />
        </div>
      </template>
      <template #prev="{ onClick, disabled }">
        <UButton class="rounded-full" color="white" :disabled="disabled" @click="onClick" icon="i-heroicons-arrow-left"
          square>
        </UButton>
      </template>

      <template #next="{ onClick, disabled }">
        <UButton class="rounded-full" color="white" :disabled="disabled" @click="onClick" icon="i-heroicons-arrow-right"
          square>
        </UButton>
      </template>
    </UCarousel>

    <UModal v-model="isOpen">
      <div class="p-4 relative">
        <UButton color="gray" square size="xl" icon="i-heroicons-x-mark-20-solid"
          class="absolute rounded-full right-4 top-4" @click="isOpen = false" />
        <div class="flex gap-2.5 mb-8">
          <NuxtImg class="w-[50px] h-[50px]" src="/logo-tron.png"></NuxtImg>
          <div>
            <p class="text-lg font-semibold">Project’s Name</p>
            <p class="font-light">Nomo Render - 3D Visualization Studio</p>
          </div>
        </div>
        <p class="text-[#8D7662] font-semibold mb-5 uppercase">Project’s Name</p>
        <div class="h-48">This is body</div>
      </div>
    </UModal>
  </div>

</template>
