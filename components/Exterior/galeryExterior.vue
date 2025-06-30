<template>
  <div class="flex justify-center items-center lg:mb-20 mb-10 mt-10">
    <div>
      <div class="lg:columns-3 md:columns-2 columns-2 gap-1 space-y-1">
        <div id="watch-project-exterior" class="relative group md:w-full md:h-[706.98828125px] h-[265px] cursor-pointer"
          @click="openModal(1)">
          <NuxtImg id="watch-project-exterior" loading="lazy" format="webp" v-if="getProjectByStt(1)?.cover_url"
            :alt="getProjectByStt(1)?.title" :src="getProjectByStt(1)?.cover_url"
            class="w-full md:h-[706.98828125px] h-[265px] object-cover object-center" />
          <div
            class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
            <div>
              <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                <div class="flex justify-between">
                  <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(1)?.title }}</div>
                  <div class="flex justify-center items-center">
                    <Icon name="heroicons:arrows-pointing-out-16-solid" class="md:size-5 size-[15px] text-[#F97316]" />
                  </div>
                </div>
                <div class="font-[300] leading-[180%] md:leading-[120%]">Location: {{ getProjectByStt(1)?.location }}
                </div>
                <div class="flex justify-between">
                  <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(1)?.client }}</div>
                  <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                    {{ getProjectByStt(1)?.founded }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Project 5 -->
        <div id="watch-project-exterior" class="relative group md:w-full md:h-[592px] cursor-pointer"
          @click="openModal(5)">
          <NuxtImg id="watch-project-exterior" loading="lazy" format="webp" v-if="getProjectByStt(5)?.cover_url"
            :src="getProjectByStt(5)?.cover_url" :alt="getProjectByStt(5)?.title"
            class="md:w-full md:h-[592px] w-full h-[169px] break-inside-avoid object-cover object-center" />
          <div
            class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
            <div>
              <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                <div class="flex justify-between">
                  <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(5)?.title }}</div>
                  <div class="flex justify-center items-center">
                    <Icon name="heroicons:arrows-pointing-out-16-solid" class="size-5 text-[#F97316]" />
                  </div>
                </div>
                <div class="font-[300] leading-[180%] md:leading-[120%]">Location: {{ getProjectByStt(5)?.location }}
                </div>
                <div class="flex justify-between">
                  <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(5)?.client }}</div>
                  <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                    {{ getProjectByStt(5)?.founded }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Project 2 -->
        <div id="watch-project-exterior" class="relative group md:w-full md:h-[467px] w-full h-[152px] cursor-pointer"
          @click="openModal(2)">
          <NuxtImg id="watch-project-exterior" loading="lazy" format="webp" v-if="getProjectByStt(2)?.cover_url"
            :src="getProjectByStt(2)?.cover_url" :alt="getProjectByStt(2)?.title"
            class="md:w-full md:h-[467px] w-full h-[152px] break-inside-avoid object-cover object-center" />
          <div
            class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
            <div>
              <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                <div class="flex justify-between">
                  <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(2)?.title }}</div>
                  <div class="flex justify-center items-center">
                    <Icon name="heroicons:arrows-pointing-out-16-solid" class="size-5 text-[#F97316]" />
                  </div>
                </div>
                <div class="font-[300] leading-[180%] md:leading-[120%]">Location: {{ getProjectByStt(2)?.location }}
                </div>
                <div class="flex justify-between">
                  <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(2)?.client }}</div>
                  <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                    {{ getProjectByStt(2)?.founded }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 4 -->
        <div id="watch-project-exterior" class="relative group md:w-full md:h-[396px] w-full h-[110px] cursor-pointer"
          @click="openModal(4)">
          <NuxtImg id="watch-project-exterior" loading="lazy" format="webp" v-if="getProjectByStt(4)?.cover_url"
            :src="getProjectByStt(4)?.cover_url" :alt="getProjectByStt(4)?.title"
            class="md:w-full md:h-[396px] w-full h-[110px] break-inside-avoid object-cover object-center" />
          <div
            class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
            <div>
              <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                <div class="flex justify-between">
                  <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(4)?.title }}</div>
                  <div class="flex justify-center items-center">
                    <Icon name="heroicons:arrows-pointing-out-16-solid" class="size-5 text-[#F97316]" />
                  </div>
                </div>
                <div class="font-[300] leading-[180%] md:leading-[120%]">Location: {{ getProjectByStt(4)?.location }}
                </div>
                <div class="flex justify-between">
                  <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(4)?.client }}</div>
                  <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                    {{ getProjectByStt(4)?.founded }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 9 -->
        <div id="watch-project-exterior"
          class="relative group md:w-full md:h-[432px] h-[163.5px] w-full cursor-pointer">
          <NuxtImg id="watch-project-exterior" loading="lazy" format="webp" v-if="getProjectByStt(9)?.cover_url"
            :src="getProjectByStt(9)?.cover_url" :alt="getProjectByStt(9)?.title"
            class="md:w-full md:h-[432px] h-[163.5px] w-full break-inside-avoid object-cover object-center" />
          <div
            class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
            <div>
              <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                <div class="flex justify-between">
                  <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(9)?.title }}</div>
                  <div class="flex justify-center items-center">
                    <Icon name="heroicons:arrows-pointing-out-16-solid" class="size-5 text-[#F97316]" />
                  </div>
                </div>
                <div class="font-[300] leading-[180%] md:leading-[120%]">Location: {{ getProjectByStt(9)?.location }}
                </div>
                <div class="flex justify-between">
                  <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(9)?.client }}</div>
                  <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                    {{ getProjectByStt(9)?.founded }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div id="watch-project-exterior" class="relative group md:w-full md:h-[353px] h-[155px] w-full cursor-pointer"
          @click="openModal(3)">
          <NuxtImg id="watch-project-exterior" loading="lazy" format="webp" v-if="getProjectByStt(3)?.cover_url"
            :src="getProjectByStt(3)?.cover_url" :alt="getProjectByStt(3)?.title"
            class="md:w-full md:h-[353px] h-[155px] w-full break-inside-avoid object-cover object-center" />
          <div
            class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
            <div>
              <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                <div class="flex justify-between">
                  <div class="font-[600] md:leading-[200%]]">{{ getProjectByStt(3)?.title }}</div>
                  <div class="flex justify-center items-center">
                    <Icon name="heroicons:arrows-pointing-out-16-solid" class="size-5 text-[#F97316]" />
                  </div>
                </div>
                <div class="font-[300] leading-[180%] md:leading-[120%]">Location: {{ getProjectByStt(3)?.location }}
                </div>
                <div class="flex justify-between">
                  <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(3)?.client }}</div>
                  <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                    {{ getProjectByStt(3)?.founded }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 6 -->
        <div id="watch-project-exterior"
          class="relative group md:w-full md:h-[588.2685546875px] h-[170px] w-full cursor-pointer"
          @click="openModal(6)">
          <NuxtImg id="watch-project-exterior" loading="lazy" format="webp" v-if="getProjectByStt(6)?.cover_url"
            :src="getProjectByStt(6)?.cover_url" :alt="getProjectByStt(6)?.title"
            class="md:w-full md:h-[588.2685546875px] h-[170px] w-full break-inside-avoid object-cover object-center" />
          <div
            class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
            <div>
              <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                <div class="flex justify-between">
                  <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(6)?.title }}</div>
                  <div class="flex justify-center items-center">
                    <Icon name="heroicons:arrows-pointing-out-16-solid" class="size-5 text-[#F97316]" />
                  </div>
                </div>
                <div class="font-[300] leading-[180%] md:leading-[120%]">Location: {{ getProjectByStt(6)?.location }}
                </div>
                <div class="flex justify-between">
                  <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(6)?.client }}</div>
                  <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                    {{ getProjectByStt(6)?.founded }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 7 -->
        <div id="watch-project-exterior"
          class="relative group md:w-full md:h-[353.488px] h-[186px] w-full cursor-pointer" @click="openModal(7)">
          <NuxtImg id="watch-project-exterior" loading="lazy" format="webp" v-if="getProjectByStt(7)?.cover_url"
            :src="getProjectByStt(7)?.cover_url" :alt="getProjectByStt(7)?.title"
            class="md:w-full md:h-[353.488px] w-full h-[186px] break-inside-avoid object-cover object-center" />
          <div
            class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
            <div>
              <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                <div class="flex justify-between">
                  <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(7)?.title }}</div>
                  <div class="flex justify-center items-center">
                    <Icon name="heroicons:arrows-pointing-out-16-solid" class="size-5 text-[#F97316]" />
                  </div>
                </div>
                <div class="font-[300] leading-[180%] md:leading-[120%]">Location: {{ getProjectByStt(7)?.location }}
                </div>
                <div class="flex justify-between">
                  <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(7)?.client }}</div>
                  <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                    {{ getProjectByStt(7)?.founded }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Chua co CONTENT -->
        <div id="watch-project-exterior"
          class="lg:hidden md:block block relative group md:w-full lg:h-[480px] md:h-[430px] h-[180px] cursor-pointer"
          @click="openModal(9)">
          <NuxtImg id="watch-project-exterior" loading="lazy" format="webp" v-if="getProjectByStt(9)?.cover_url"
            :src="getProjectByStt(9)?.cover_url" :alt="getProjectByStt(9)?.title"
            class="md:w-full lg:h-[480px] md:h-[430px] h-[180px] break-inside-avoid object-cover object-center" />
          <div
            class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
            <div>
              <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                <div class="flex justify-between">
                  <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(9)?.title }}</div>
                  <div class="flex justify-center items-center">
                    <Icon name="heroicons:arrows-pointing-out-16-solid" class="size-5 text-[#F97316]" />
                  </div>
                </div>
                <div class="font-[300] leading-[180%] md:leading-[120%]">Location: {{ getProjectByStt(9)?.location }}
                </div>
                <div class="flex justify-between">
                  <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(9)?.client }}</div>
                  <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                    {{ getProjectByStt(9)?.founded }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="watch-project-exterior"
          class="md:hidden block relative group md:w-full md:h-[480px] h-[168.5px]  cursor-pointer"
          @click="openModal(8)">
          <NuxtImg id="watch-project-exterior" loading="lazy" format="webp" v-if="getProjectByStt(8)?.cover_url"
            :src="getProjectByStt(8)?.cover_url" :alt="getProjectByStt(8)?.title"
            class="md:w-full md:h-[480px] h-[168.5px] break-inside-avoid object-cover object-center" />
          <div
            class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
            <div>
              <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                <div class="flex justify-between">
                  <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(8)?.title }}</div>
                  <div class="flex justify-center items-center">
                    <Icon name="heroicons:arrows-pointing-out-16-solid" class="size-5 text-[#F97316]" />
                  </div>
                </div>
                <div class="font-[300] leading-[180%] md:leading-[120%]">Location: {{ getProjectByStt(8)?.location }}
                </div>
                <div class="flex justify-between">
                  <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(8)?.client }}</div>
                  <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                    {{ getProjectByStt(8)?.founded }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex mt-[1.2px] gap-1">
        <!-- Project 10 -->
        <div class="w-[60%]">
          <div id="watch-project-exterior"
            class="hidden md:block relative group md:w-full md:h-[480px] h-[180px] cursor-pointer"
            @click="openModal(10)">
            <NuxtImg id="watch-project-exterior" loading="lazy" format="webp" v-if="getProjectByStt(10)?.cover_url"
              :src="getProjectByStt(10)?.cover_url" :alt="getProjectByStt(10)?.title"
              class="md:w-full md:h-[480px] h-[180px] break-inside-avoid object-cover object-center" />
            <div
              class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
              <div>
                <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                  <div class="flex justify-between">
                    <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(10)?.title }}</div>
                    <div class="flex justify-center items-center">
                      <Icon name="heroicons:arrows-pointing-out-16-solid" class="size-5 text-[#F97316]" />
                    </div>
                  </div>
                  <div class="font-[300] leading-[180%] md:leading-[120%]">Location: {{ getProjectByStt(10)?.location }}
                  </div>
                  <div class="flex justify-between">
                    <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(10)?.client }}</div>
                    <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                      {{ getProjectByStt(10)?.founded }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[40%]">
          <!-- Project 8 -->
          <div id="watch-project-exterior" class="hidden md:block relative group md:w-full md:h-[480px] cursor-pointer"
            @click="openModal(8)">
            <NuxtImg id="watch-project-exterior" loading="lazy" format="webp" v-if="getProjectByStt(8)?.cover_url"
              :src="getProjectByStt(8)?.cover_url" :alt="getProjectByStt(8)?.title"
              class="w-full h-[480px] break-inside-avoid object-cover object-center" />
            <div
              class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
              <div>
                <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                  <div class="flex justify-between">
                    <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(8)?.title }}</div>
                    <div class="flex justify-center items-center">
                      <Icon name="heroicons:arrows-pointing-out-16-solid" class="size-5 text-[#F97316]" />
                    </div>
                  </div>
                  <div class="font-[300] leading-[180%] md:leading-[120%]">Location: {{ getProjectByStt(8)?.location }}
                  </div>
                  <div class="flex justify-between">
                    <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(8)?.client }}</div>
                    <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                      {{ getProjectByStt(8)?.founded }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div id="see-more-project" class="flex w-full justify-center items-center pt-10">
          <UButton color="gray" variant="solid" id="see-more-project" to="/portfolio"
            class="bg-gradient-to-r from-[#8D7662] to-[#27211B] lg:px-8 lg:py-5 px-6 py-4 hover:bg-[#90755e] rounded-[8px] md:w-auto">
            <div id="see-more-project"
              class="w-full flex justify-center items-center uppercase text-[#F5F5F5] leading-[16px] font-[600] md:text-[28px] text-[16px]">
              see more our projects
            </div>
          </UButton>
        </div>
      </div>
    </div>

    <ModalItem v-model="isOpen" :items="items" :selectedIndex="selectedIndex" :project="selectedItem"
      :id="selectedItem?.id" @update:modelValue="isOpen = $event" @update:selectedIndex="selectedIndex = $event" />
  </div>
</template>


<script setup lang="ts">
import { useProjectExterior } from '~/stores/project/useProjectExterior'
import type { Project } from '~/types/project/project'

const isOpen = ref(false)
const selectedItem = ref<Project | undefined>(undefined)
const selectedIndex = ref<number | null>(null)
const store = useProjectExterior();

const fetchData = () => {
  store.load();
};

onMounted(() => {
  fetchData()
})

const items = computed(() => store.res)
const openModal = (stt: number): void => {
  const item = items.value.find(i => i.stt === stt)
  selectedItem.value = item
  selectedIndex.value = items.value.findIndex(i => i.stt === stt)
  isOpen.value = true
}

const getProjectByStt = (stt: number): Project | undefined => {
  return items.value.find(i => i.stt === stt)
}
</script>