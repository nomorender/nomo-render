<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Portfolio } from '~/types/portfolio/portfolio'

const props = defineProps<Portfolio & { items: Portfolio[] }>()
const isOpen = ref(false)
const selectedIndex = ref<number | null>(null)
const selectedItem = computed(() =>
    props.items.find((item) => item.id === props.id)
)

const errorPicture = ref(false);
</script>

<template>
    <div>
        <div :id="'see-detail-portfolio-' + props.title"
            class="w-full lg:w-full md:max-w-[343px] max-w-[346px] lg:max-w-full flex flex-col gap-[25px] hover:cursor-pointer group relative overflow-hidden"
            @click="() => { isOpen = true; selectedIndex = props.items.findIndex(i => i.id === props.id) }">
            <div :id="'see-detail-portfolio-' + props.title" class="relative">
                <div :id="'see-detail-portfolio-' + props.title"
                    class="absolute bg-black/40 inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex items-center justify-center">
                    <span :id="'see-detail-portfolio-' + props.title"
                        class="text-white text-[25px] italic leading-[150%]">See
                        more</span>
                </div>
                <NuxtImg @error="errorPicture = true" v-if="props.cover_url && !errorPicture" id="see-detail-portfolio"
                    format="webp" :src="props.cover_url" loading="lazy" :alt="props.title"
                    class="lg:w-[360px] lg:h-[515px] md:w-full md:h-[515px] w-full h-[520px] object-cover object-center z-0" />
                <NuxtImg v-else src="/NoImg.jpg" format="webp" alt="fallback picture"
                    class="lg:w-[360px] lg:h-[515px] md:w-full md:h-[515px] w-full h-[520px] object-cover object-center z-0" />
            </div>
            <div
                class="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none">
            </div>

            <div class="flex flex-col items-center z-10 relative">
                <div class="font-[300] lg:text-[16px] md:text-[16px] leading-[150%]">
                    {{ props.founded }} | {{ props.location }}
                </div>
                <div class="font-[600] lg:text-[25px] md:text-[25px] leading-[200%]">
                    {{ props.title }}
                </div>
            </div>
        </div>

        <ModalItem v-model="isOpen" :items="props.items" :selectedIndex="selectedIndex" :project="selectedItem"
            :id="selectedItem?.id" @update:modelValue="isOpen = $event"
            @update:selectedIndex="selectedIndex = $event" />
    </div>
</template>
