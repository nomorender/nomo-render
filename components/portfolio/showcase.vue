<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { usePortfolio } from '~/stores/portfolio/usePortfolio'

const category = [
    { name: 'Interior', value: 'interior' },
    { name: 'Furniture', value: 'furniture' },
    { name: 'Exterior', value: 'exterior' },
]

const page = ref(1)
const LIMIT = 9
const activeCategoryFilter = ref<string>(category[0].value)
const loadingInitial = ref(true)
const loadingMore = ref(false)

const store = usePortfolio()
const wrapperRef = ref<HTMLElement | null>(null)

const loadFirstPage = async () => {
    loadingInitial.value = true
    page.value = 1
    await store.load({ category: activeCategoryFilter.value, page: 1, limit: LIMIT })
    loadingInitial.value = false
}

onMounted(loadFirstPage)

const setFilter = async (value: string) => {
    activeCategoryFilter.value = value
    await loadFirstPage()
    wrapperRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const loadMore = async () => {
    loadingMore.value = true
    page.value += 1
    await store.load(
        { category: activeCategoryFilter.value, page: page.value, limit: LIMIT },
        true
    )
    loadingMore.value = false
}

const items = computed(() => store.res)
</script>

<template>
    <div ref="wrapperRef"
        class="flex flex-col items-center justify-center lg:max-w-screen-xl mx-auto lg:mb-20 md:mb-20 mb-10">
        <div class="flex flex-col">
            <div id="filter portfolio"
                class="sticky top-20 z-30 lg:w-full md:w-full w-screen bg-white py-2 mb-4 flex flex-row flex-wrap gap-2 md:gap-20 lg:gap-[120px] lg:top-12 md:top-12 md:py-2 md:mb-10 lg:my-10 -mx-4 px-4 sm:mx-0 sm:px-0">
                <div id="filter-project-portfolio" v-for="item in category" :key="item.value">
                    <div class="font-[300] lg:leading-[200%] md:leading-[200%] leading-[180%] lg:text-[25px] md:text-[20px] text-[15px] hover:cursor-pointer text-black bg-transparent hover:bg-transparent px-2 py-3 rounded-none"
                        :class="activeCategoryFilter === item.value ? 'border-b border-black' : 'border-b border-transparent'"
                        @click="setFilter(item.value)" :id="'filter-portfolio -' + item.name">
                        {{ item.name }}
                    </div>
                </div>
            </div>

            <div v-if="loadingInitial" class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                <SkeletonPortfolio v-for="n in 9" :key="n" />
            </div>
            <div v-else class="">
                <div v-if="store.res.length"
                    class="mb-4 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mb-10 lg:grid-cols-3">
                    <div v-for="item in store.res" :key="item.id">
                        <PortfolioItem class="h-full" :items="items" :id="item.id" :founded="item.founded"
                            :pics="item.pics" :category="item.category" :cover_url="item.cover_url" :title="item.title"
                            :content="item.content" :location="item.location" />
                    </div>
                    <template v-if="loadingMore" class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                        <SkeletonPortfolio v-for="n in 3" :key="'more-' + n" />
                    </template>
                </div>

                <div v-else class="lg:w-[1160px] lg:max-w-[1160px] md:w-[730px] md:max-w-[730px] w-[350px]">
                    <div class="flex flex-col items-center justify-center">
                        <h1 class="text-[25px]">There's nothing to display</h1>
                        <p class="md:text-xl text-center text-md text-[#c8c7c7]">Currently, we are preparing more
                            content to
                            display.
                            Please
                            check it later !
                        </p>
                        <div>
                            <NuxtImg src="/inspire/no-data.jpg" alt="no data picture" class="w-[300px] h-[300px]" />
                        </div>
                    </div>
                </div>
            </div>
            <UButton id="see-more-projects" color="gray" variant="ghost" v-if="store.res.length < store.countTotal"
                class="mx-auto bg-[#8D7662] mt-5 uppercase hover:text-white transition-all text-[#F5F5F5] md:text-[20px] text-[16px] font-[600] md:px-6 px-6 py-2 hover:bg-[#90755e] border-none"
                @click="loadMore" :loading="store.loading">
                See more
            </UButton>
        </div>
    </div>
</template>
