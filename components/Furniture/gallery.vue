<script lang="ts" setup>
import type { Furniture } from '~/types/furniture/furniture'

const { furnitureList, fetchFurnitureList } = useFurniture()
const items = ref<Furniture[]>([])
onMounted(async () => {
    const { success } = await fetchFurnitureList()
    if (success) {
        items.value = furnitureList.value ?? []
    }
})
</script>

<template>
    <div>
        <div
            class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-3 lg:gap-2 md:gap-2 gap-[3px] lg:w-[1150px] w-full lg:mx-auto lg:mt-[80px] mt-10">
            <div v-for="(item, index) in items" :key="index" class="col-span-1" :class="{
                'block md:block': item.mode === 'all',
                'block md:hidden': item.mode === 'mobile',
                'hidden md:block': item.mode === 'desktop',
            }">
                <NuxtImg :src="item.src" :alt="item.alt" loading="lazy" placeholder
                    class="lg:w-full w-full md:w-full h-[123px] md:h-[370px] lg:h-[300px] object-cover object-center" />
            </div>
        </div>

        <div class="w-full flex justify-center items-center md:mt-[50px] mt-[30px]">
            <UButton color="gray" variant="solid"
                class="bg-gradient-to-r from-[#8D7662] to-[#27211B] lg:px-8 lg:py-5 md:px-10 md:py-7 px-6 py-4 hover:bg-[#90755e] rounded-[8px] md:w-auto">
                <div
                    class="w-full flex justify-center items-center uppercase text-[#F5F5F5] leading-[16px] font-[600] md:text-[28px] text-[16px]">
                    see more our projects
                </div>
            </UButton>
        </div>
    </div>
</template>
