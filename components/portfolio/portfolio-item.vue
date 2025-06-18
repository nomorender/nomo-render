<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Portfolio } from '~/types/portfolio/portfolio'

const props = defineProps<Portfolio & { items: Portfolio[] }>()
const isOpen = ref(false)
const selectedIndex = ref<number | null>(null)
const selectedItem = computed(() =>
    props.items.find((item) => item.id === props.id)
)
</script>

<template>
    <div>
        <div class="w-full flex flex-col gap-[25px] hover:cursor-pointer"
            @click="() => { isOpen = true; selectedIndex = props.items.findIndex(i => i.id === props.id) }">
            <NuxtImg format="webp" :src="props.cover_url" loading="lazy"
                class="lg:w-[360px] lg:h-[515px] md:w-full md:h-[515px] w-full h-[520px] object-cover object-center" />
            <div class="flex flex-col items-center">
                <div class="font-[300] lg:text-[16px] md:text-[16px] leading-[150%]">{{ props.founded }} | {{
                    props.location }}</div>
                <div class="font-[600] lg:text-[25px] md:text-[25px] leading-[200%]">{{ props.title }}</div>
            </div>
        </div>

        <ModalItem v-model="isOpen" :items="props.items" :selectedIndex="selectedIndex" :project="selectedItem"
            :id="selectedItem?.id" @update:modelValue="isOpen = $event"
            @update:selectedIndex="selectedIndex = $event" />
    </div>
</template>
