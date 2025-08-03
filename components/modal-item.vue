<script setup lang="ts">
import { NuxtImg } from '#components'
import type { Portfolio } from '~/types/portfolio/portfolio';
import type { Project } from '~/types/project/project';

const isOpen = defineModel<boolean>('modelValue', { default: false })
const props = defineProps<{
    items: Project[] | Portfolio[]
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
        :ui="{ overlay: { background: 'bg-black/80' }, background: '!shadow-none bg-transparent', container: 'border-none flex items-center justify-center !shadow-none modal-container lg:pb-[120px] md:pb-[200px] pb-[120px]', width: '' }">
        <div class="flex md:gap-2.5 mb-8 justify-between">
            <div class="flex items-center justify-center md:gap-12 gap-3">
                <div class="md:p-5 p-2 bg-[#FAF8F5] rounded-full">
                    <nuxt-img class="md:size-[81px] size-[33px]" src="/Logo3.svg" alt="Logo" />
                </div>
                <div>
                    <p
                        class="md:text-[25px] text-[18px] text-[#FAF8F5] md:font-[500] font-[600] md:leading-[200%] leading-[100%]">
                        {{ selectedItem?.title }}</p>
                    <p class="font-[300] md:text-[25px] text-[15px] md:leading-[200%] leading-[180%] text-[#FAF8F5]">
                        Nomo Render - 3D Visualization Studio</p>
                </div>
            </div>

            <div
                class="fixed lg:translate-x-[64.1rem] md:translate-x-[43rem] md:-translate-y-[-30px] md:fixed lg:-translate-y-[-30px] -translate-x-[-19.5rem]">
                <UButton id="close-modal-project" variant="ghost" size="xl" class=" " @click="isOpen = false" :ui="{
                    base: 'md:!p-[15px] !p-[10px] !focus:outline-none hover:none border-none md:!bg-[#8D7662] !bg-[#D9D9D9] !rounded-full hover:bg-none !ring-0',
                }">
                    <UIcon id="close-modal-project" name="i-heroicons-x-mark-20-solid"
                        class="size-7 md:text-white text-[#1D1B20]" />
                </UButton>
            </div>
        </div>

        <div
            class="bg-[#FAF8F5] rounded-[8px] lg:w-[960px] md:max-w-[750px] md:w-full lg:max-w-[960px] w-[355px] max-w-[355px]">
            <div class="md:px-[50px] md:py-[40px] md:pb-2 px-[25px] pt-[28px] pb-[10px]">
                <p class="text-[#8D7662] md:text-[32px] text-[16px] font-[600] uppercase leading-[150%]">
                    {{ selectedItem?.title }}
                </p>
            </div>
            <div v-html="selectedItem?.content"
                class="md:text-[25px] leading-[200%] font-[300] text-justify editor-content">
            </div>
            <div class="md:pt-10 pt-5">
                <div v-if="selectedItem?.pics?.length">
                    <template v-if="selectedItem.pics.length === 1">
                        <div class="grid grid-cols-2 gap-2">
                            <div class="col-span-2">
                                <NuxtImg format="webp" :src="selectedItem.pics[0]"
                                    class="w-full h-auto object-cover transition-opacity duration-500"
                                    alt="project image" />
                            </div>
                        </div>
                    </template>

                    <template v-else-if="selectedItem.pics.length === 2">
                        <div class="flex gap-1">
                            <div class="w-[50%]">
                                <NuxtImg format="webp" :src="selectedItem.pics[0]"
                                    class="w-full md:h-[500px] h-[200px] object-cover" alt="project image" />
                            </div>
                            <div class="w-[50%]">
                                <NuxtImg format="webp" :src="selectedItem.pics[1]"
                                    class="w-full md:h-[500px] h-[200px] object-cover" alt="project image" />
                            </div>
                        </div>
                    </template>

                    <template v-else-if="selectedItem.pics.length === 3">
                        <div class="grid grid-cols-2 gap-2">
                            <div class="col-span-2">
                                <NuxtImg format="webp" :src="selectedItem.pics[0]" class="w-full h-auto object-cover"
                                    alt="project image" />
                            </div>
                            <div class="col-span-1">
                                <NuxtImg format="webp" :src="selectedItem.pics[2]"
                                    class="w-full md:h-[500px] h-[200px] object-cover" alt="project image" />
                            </div>
                            <div class="col-span-1">
                                <NuxtImg format="webp" :src="selectedItem.pics[1]"
                                    class="w-full md:h-[500px] h-[200px] object-cover" alt="project image" />
                            </div>
                        </div>
                    </template>

                    <template v-else-if="selectedItem.pics.length === 4">
                        <div class="grid grid-cols-2 gap-2">
                            <div class="col-span-2">
                                <NuxtImg format="webp" :src="selectedItem.pics[0]" class="w-full h-auto object-cover"
                                    alt="project image" />
                            </div>
                            <div class="col-span-1 md:h-[357px] h-[131px]">
                                <NuxtImg format="webp" :src="selectedItem.pics[1]"
                                    class="w-full md:h-[500px] h-[200px] object-cover" alt="project image" />
                            </div>
                            <div class="col-span-1">
                                <NuxtImg format="webp" :src="selectedItem.pics[2]"
                                    class="w-full md:h-[500px] h-[200px]  object-cover" alt="project image" />
                            </div>
                            <div class="col-span-2">
                                <NuxtImg format="webp" :src="selectedItem.pics[3]" class="w-full h-auto object-cover"
                                    alt="project image" />
                            </div>
                        </div>
                    </template>
                </div>
            </div>

            <div class="flex w-full justify-center items-center py-10">
                <UButton id="see-more-project" aria-label="Click to see more our projects" color="gray" variant="solid"
                    type="submit" form="contactForm" to="/portfolio"
                    class="bg-gradient-to-r from-[#8D7662] to-[#27211B] lg:px-8 lg:py-5 px-6 py-4 hover:bg-[#90755e] rounded-[8px] md:w-auto">
                    <span id="see-more-project"
                        class="w-full flex justify-center items-center uppercase text-[#F5F5F5] leading-[16px] font-[600] md:text-[28px] text-[16px]">
                        see more our projects
                    </span>
                </UButton>
            </div>
        </div>

        <div class="fixed -translate-x-[-1000px] -translate-y-[-140px] hidden lg:flex">
            <div class="lg:flex flex-col gap-7">
                <div class="flex flex-col items-center justify-center">
                    <NuxtLink aria-label="Click here to send message to Nomorender"
                        to="https://m.me/team.nomorender" target="_blank">
                        <UButton id="open-chatting"
                            aria-label="Click here to send message to Nomorender"
                            class="bg-[#FFFFFF] p-[20px] rounded-full shadow-lg hover:bg-[#FFFFFF] hover:scale-105 transition">
                            <UIcon id="open-chatting" name="material-symbols:mail"
                                class="size-12 text-[#8D7662]" />
                        </UButton>
                    </NuxtLink>
                    <div class="font-[300] text-[20px] leading-[150%] text-[#FAF8F5]">Message</div>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <UButton id="go-to-workflow-page" to="/workflow"
                        aria-label="Click here to see Nomorender's workflow"
                        class="bg-[#FFFFFF] p-[20px] rounded-full shadow-lg hover:bg-[#FFFFFF] hover:scale-105 transition">
                        <UIcon id="go-to-workflow-page" name="hugeicons:flowchart-02" class="size-12 text-[#8D7662]" />
                    </UButton>
                    <div class="font-[300] text-[20px] leading-[150%] text-[#FAF8F5] items-center justify-center">
                        Our workflow
                    </div>
                </div>
            </div>
        </div>

        <!-- BAR FOR MODAL MOBILE  -->
        <div class="w-full fixed bottom-0 left-0 py-3 lg:hidden bg-[#D9D9D9]">
            <!-- TWO BUTTON SOCIAL -->
            <div class="flex w-full justify-center items-center gap-10">
                <div class="flex flex-col items-center justify-center gap-1">
                    <UButton aria-label="Click here to see previous project" id="watch-previous-project"
                        class="lg:p-[20px] md:p-[18px] flex items-center justify-center p-3 bg-white/80 hover:bg-white rounded-full shadow-2xl"
                        @click="goToPrevItem">
                        <div id="watch-previous-project" class="text-[#8D7662] flex justify-center">
                            <UIcon id="watch-previous-project" name="mdi-light:arrow-left"
                                class="md:size-11 lg:size-4 size-4" />
                        </div>
                    </UButton>
                    <div class="font-[300] lg:text-[10px] md:text-[20px] text-[10px] leading-[150%] text-[#000000]">Back
                    </div>
                </div>

                <div class="flex flex-col items-center justify-center gap-1">
                    <NuxtLink to="https://m.me/team.nomorender" target="_blank"
                        aria-label="Click here to send message to Nomorender">
                        <UButton id="open-chatting"
                            aria-label="Click here to send message to Nomorender"
                            class="bg-[#FFFFFF] lg:p-[20px] md:p-[18px] p-[10px] rounded-full shadow-lg hover:bg-[#FFFFFF] hover:scale-105 transition">
                            <UIcon id="open-chatting" name="material-symbols:mail"
                                class="lg:size-11 md:size-12 size-5 text-[#8D7662]" />
                        </UButton>
                    </NuxtLink>
                    <div class="font-[300] lg:text-[10px] md:text-[20px] text-[10px] leading-[150%] text-[#000000]">
                        Message
                    </div>
                </div>
                <div class="flex flex-col items-center justify-center gap-1">
                    <UButton aria-label="Click here to see Nomorender's workflow" id="go-to-workflow-page"
                        to="/workflow"
                        class="bg-[#FFFFFF] lg:p-[20px] md:p-[18px] p-[10px] rounded-full shadow-lg hover:bg-[#FFFFFF] hover:scale-105 transition">
                        <UIcon id="go-to-workflow-page" name="hugeicons:flowchart-02"
                            class="lg:size-12 md:size-11 size-5 text-[#8D7662]" />
                    </UButton>
                    <div
                        class="font-[300] lg:text-[10px] md:text-[20px] text-[10px] leading-[150%] text-[#000000] items-center justify-center">
                        Our
                        workflow
                    </div>
                </div>

                <div class="flex flex-col items-center justify-center gap-1">
                    <UButton aria-label="Click here to see next project" id="watch-next-project"
                        class="lg:p-[20px] md:p-[18px] flex items-center justify-center p-3 bg-[#8D7662] hover:bg-[#8D7662] rounded-full shadow-2xl"
                        @click="goToNextItem">
                        <div id="watch-next-project" class="text-[#FFFFFF] flex justify-center">
                            <UIcon id="watch-next-project" name="mdi-light:arrow-right"
                                class="md:size-11 lg:size-4 size-4" />
                        </div>
                    </UButton>
                    <div class="font-[300] lg:text-[10px] md:text-[20px] text-[10px] leading-[150%] text-[#000000]">Next
                    </div>
                </div>
            </div>
        </div>
        <!-- Next Previous -->
        <div class="fixed translate-x-[60.7rem] translate-y-[30rem] hidden lg:flex flex-col gap-7">
            <UButton id="watch-next-project" aria-label="Click here to see next project"
                class="hidden md:flex items-center justify-center p-2 absolute right-[-7rem] top-1/2 -translate-y-1/2 z-10 bg-[#8D7662] hover:bg-[#8D7662] rounded-full shadow-2xl"
                @click="goToNextItem">
                <div id="watch-next-project" class="text-[#FFFFFF] flex justify-center">
                    <UIcon id="watch-next-project" name="mdi-light:arrow-right" class="size-10" />
                </div>
            </UButton>
        </div>
        <div class="fixed translate-x-[-0.7rem] translate-y-[30.5rem] hidden lg:flex flex-col gap-7">
            <UButton id="watch-previous-project" aria-label="Click here to see previous project"
                class="hidden md:flex items-center justify-center p-2 absolute left-[-7rem] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-2xl"
                @click="goToPrevItem">
                <div id="watch-previous-project" class="text-[#8D7662] flex justify-center">
                    <UIcon id="watch-previous-project" name="mdi-light:arrow-left" class="size-10" />
                </div>
            </UButton>
        </div>
    </UModal>
</template>
