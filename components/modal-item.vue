<script setup lang="ts">
import { computed } from 'vue'
import { NuxtImg } from '#components'

interface PicDes {
    pic1: string
    pic2?: string
    pic3?: string
    pic4?: string
    pic5?: string
}
interface CarouselItem {
    projectName?: string
    content1: string
    content2: string
    picDes: PicDes
}

const isOpen = defineModel<boolean>('modelValue', { default: false })
const props = defineProps<{
    items: CarouselItem[]
    selectedIndex: number | null
}>()

const emit = defineEmits(['update:modelValue', 'update:selectedIndex'])

const selectedItem = computed(() =>
    props.selectedIndex !== null ? props.items[props.selectedIndex] : null
)
const goToNextItem = () => {
    if (props.selectedIndex !== null) {
        const modal = document.querySelector('.modal-container');
        const nextIndex = (props.selectedIndex + 1) % props.items.length
        if (modal) {
            modal.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        emit('update:selectedIndex', nextIndex)
    }
}

const goToPrevItem = () => {
    if (props.selectedIndex !== null) {
        const modal = document.querySelector('.modal-container');
        const prevIndex = (props.selectedIndex - 1 + props.items.length) % props.items.length
        if (modal) {
            modal.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        emit('update:selectedIndex', prevIndex)
    }
}
</script>
<template>
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
                        {{ selectedItem?.projectName }}</p>
                    <p class="font-[300] md:text-[25px] text-[15px] md:leading-[200%] leading-[180%] text-[#FAF8F5]">
                        Nomo Render - 3D Visualization Studio</p>
                </div>
            </div>

            <div class="fixed md:translate-x-[64.1rem] md:-translate-y-[-30px] -translate-x-[-19.5rem]">
                <UButton variant="ghost" size="xl" class=" " @click="isOpen = false" :ui="{
                    base: 'md:!p-[15px] !p-[10px] !focus:outline-none hover:none border-none md:!bg-[#8D7662] !bg-[#D9D9D9] !rounded-full hover:bg-none !ring-0',
                }">
                    <UIcon name="i-heroicons-x-mark-20-solid" class="size-7 md:text-white text-[#1D1B20]" />
                </UButton>
            </div>
        </div>

        <div class="bg-[#FAF8F5] rounded-[8px] md:w-[960px] w-[355px]">
            <div class="md:px-[4rem] px-[35px] md:pt-[55px] pt-[40px] md:pb-5 pb-3">
                <p class="text-[#8D7662] md:text-[32px] text-[16px] font-[600] mb-5 uppercase leading-[150%]">
                    {{ selectedItem?.projectName }}</p>
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
                    <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic4"
                        class="w-full h-[131px]  md:h-[357px] object-cover" />
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

        <div class="fixed -translate-x-[-1000px] -translate-y-[-140px] hidden md:flex">
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
                    <UButton
                        class="bg-[#FFFFFF] p-[20px] rounded-full shadow-lg hover:bg-[#FFFFFF] hover:scale-105 transition">
                        <UIcon name="hugeicons:flowchart-02" class="size-12 text-[#8D7662]" />
                    </UButton>
                    <div class="font-[300] text-[20px] leading-[150%] text-[#FAF8F5] items-center justify-center">
                        Our
                        workflow
                    </div>
                </div>
            </div>
        </div>

        <!-- BAR FOR MODAL MOBILE  -->
        <div class="w-full fixed bottom-0 left-0 py-3 md:hidden bg-[#D9D9D9]">
            <!-- TWO BUTTON SOCIAL -->
            <div class="flex w-full justify-center items-center gap-10">
                <div class="flex flex-col items-center justify-center gap-1">
                    <UButton
                        class="flex items-center justify-center p-3 bg-white/80 hover:bg-white rounded-full shadow-2xl"
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
                    <div class="font-[300] text-[10px] leading-[150%] text-[#000000] items-center justify-center">
                        Our
                        workflow
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
        <div class="fixed translate-x-[-0.7rem] translate-y-[30.5rem] hidden md:flex flex-col gap-7">
            <UButton
                class="hidden md:flex items-center justify-center p-2 absolute left-[-7rem] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-2xl"
                @click="goToPrevItem">
                <div class="text-[#8D7662] flex justify-center">
                    <UIcon name="mdi-light:arrow-left" class="size-10" />
                </div>
            </UButton>
        </div>
    </UModal>
</template>
