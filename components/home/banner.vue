<script lang="ts" setup>
import { useBanner } from '~/stores/homepage/useBanner'

const isOpen = ref(false)
const bannerStore = useBanner()

onMounted(async () => {
    if (!bannerStore.banner) {
        await bannerStore.load()
    }
})
</script>

<template>
    <div v-if="!bannerStore.loading" :class="{ 'bg-black/20': !bannerStore.banner?.img }"
        :style="bannerStore.banner?.img ? { backgroundImage: `url(${bannerStore.banner.img})` } : {}"
        class="h-screen overflow-hidden w-screen justify-center flex items-center bg-cover bg-right relative">
        <div class="absolute inset-0 bg-black opacity-[20%] z-0"></div>
        <div class="w-full relative text-white mx-8 z-10 md:px-[180px]">
            <h1 class="text-4xl md:text-7xl font-bold mb-8 md:w-[700px]">
                {{ bannerStore.banner?.title }}
            </h1>
            <UButton class="hidden sm:block hover:bg-[#1e1e1e] uppercase transition-all" color="white" variant="outline"
                size="xl" @click="isOpen = true">
                {{ bannerStore.banner?.button_label }}
            </UButton>
            <UButton class="sm:hidden uppercase" @click="isOpen = true" color="white" variant="outline">
                {{ bannerStore.banner?.button_label }}
            </UButton>
        </div>
        <ModalQuote v-model="isOpen" />
    </div>
</template>