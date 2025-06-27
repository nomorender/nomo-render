<script setup lang="ts">
import { useProjectStoreHome } from '~/stores/project/useProjectHome'
import type { Project } from '~/types/project/project'

const isOpen = ref<boolean>(false)
const selectedItem = ref<Project | null>(null)
const selectedIndex = ref<number | null>(null)
const store = useProjectStoreHome();

const fetchData = () => {
  store.load();
};

onMounted(() => {
  fetchData()
})

const items = computed(() => store.res)
const loadedMap = ref<Record<string, boolean>>({})
const mark = (url: string | undefined) => {
  if (typeof url === 'string') {
    loadedMap.value[url] = true
  }
}
const openModal = (item: Project) => {
  selectedIndex.value = items.value.findIndex((i) => i.title === item.title)
  selectedItem.value = item
  isOpen.value = true
}
</script>

<template>
  <div class="md:py-20 py-[45px] flex items-center justify-center gap-4 w-full">
    <UCarousel :items="items" arrows :ui="{
      item: 'basis-full md:basis-1/2 lg:basis-1/3',
      arrows: { wrapper: 'outline-none flex gap-[15px] items-center justify-center mt-5 sm:hidden' }
    }">
      <template #default="{ item }: { item: Project }">
        <div id='watch-project-homepage' class="relative w-auto cursor-pointer max-h-[725px] mx-2"
          @click="openModal(item)">
          <div id='watch-project-homepage'
            class="absolute bottom-[60px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg py-3 md:w-[330px] w-[220px] md:h-[115px] h-[76px] text-center">
            <div id='watch-project-homepage' class="flex flex-col justify-center items-center w-full h-full">
              <p id='watch-project-homepage' class="md:font-[600] font-[700] leading-[200%] md:text-[25px]">{{
                item.title }}</p>
              <p id='watch-project-homepage' class="font-[300] leading-[200%] md:text-[25px] text-[15px]">{{
                item.location }}</p>
            </div>
          </div>
          <USkeleton v-if="!loadedMap[item.cover_url || '']"
            class="absolute inset-0 w-[472px] lg:h-[725px] md:h-[600px] h-[550px] rounded-lg" />
          <NuxtImg id='watch-project-homepage' :src="item.cover_url" alt="main img" loading="lazy" class="object-cover object-center w-[472px] lg:h-[725px] h-[550px] md:h-[600px] rounded-lg
             transition-opacity duration-300" :class="loadedMap[item.cover_url || ''] ? 'opacity-100' : 'opacity-0'"
            draggable="false" @load="mark(item.cover_url)" />
        </div>
      </template>

      <template #prev="{ onClick, disabled }: { onClick: () => void, disabled: boolean }">
        <UButton aria-label="Click here to go to next project" id="watch-previous-project"
          class="shadow-[0_4px_4px_rgba(0,0,0,0.25)] !ring-0 !focus:ring-0 !focus-visible:ring-0 rounded-full outline-none border-0 bg-[#FFFFFF] hover:bg-white text-[#8D7662] text-2xl p-2 h-[41px] w-[41px] flex items-center justify-center"
          color="white" :disabled="disabled" @click="onClick" square>
          <UIcon name="mingcute:arrow-left-fill" class="size-5" />
        </UButton>
      </template>

      <template #next="{ onClick, disabled }: { onClick: () => void, disabled: boolean }">
        <UButton aria-label="Click here to go to previous project" id="watch-next-project"
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