<script setup lang="ts">
import { useLibraryStore } from '~/stores/library/useLibrary';


type Category = { name: string; value: string }
const filterRef = ref<HTMLElement | null>(null)

const category: Category[] = [
    { name: 'All', value: '' },
    { name: 'Handbook 101', value: 'handbook-101' },
    { name: 'Should-have Checklist', value: 'should-have-checklist' },
    { name: 'Visual Style', value: 'visual-style' },
    { name: 'Software Used', value: 'software-used' }
]
const store = useLibraryStore();
const route = useRoute();
const LIMIT = 6;
const tag = ref((route.query.tag as string) || '');
const page = ref(Number(route.query.page) || 1);

const fetchData = () => {
    store.load({
        tag: tag.value,
        limit: LIMIT,
        page: page.value,
    });
};

onMounted(() => {
    fetchData()
})

const updateQueryParams = () => {
    const params = new URLSearchParams(window.location.search);
    page.value = 1;
    tag.value !== '' ? params.set('tag', tag.value) : params.delete('tag');
    const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
    window.history.pushState({}, '', newUrl);
    filterRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    fetchData();
};

watch(tag, () => {
    page.value = 1
    updateQueryParams()
})

watch(page, () => {
    const params = new URLSearchParams(window.location.search)
    page.value !== 1 ? params.set('page', String(page.value)) : params.delete('page')
    fetchData()
})
</script>

<template>
    <div class="lg:mb-20 mb-10" ref="filterRef">
        <div class="lg:static sticky top-[100px] z-30 w-full flex items-center justify-center lg:my-20 my-10">
            <USelectMenu v-model="tag" :options="category" placeholder="Filter" value-attribute="value"
                option-attribute="name" size="xl" color="white"
                :ui="{ color: { white: { outline: 'bg-[#faf8f6] border border-[#D8C3A5] ring-0' } }, icon: { base: 'lg:mr-4  text-black' }, placeholder: 'text-black', base: 'lg:w-[400px] w-[160px]', rounded: 'rounded-[40px]', padding: { xl: 'lg:px-[40px] px-5 lg:py-4 py-1 lg:text-[25px] text-[15px] leading-[200%] font-[300]' }, }"
                :ui-menu="{ background: 'bg-[#FAF8F5]', width: 'lg:w-[400px] w-[160px]', rounded: 'rounded-[8px]', padding: 'p-0', option: { size: 'lg:text-[25px] text-[15px]', rounded: 'rounded-[8px]', selected: 'bg-[#D9D9D9] hover:bg-[#D9D9D9] transition-all', base: 'gap-0 py-3', active: 'bg-[#D9D9D9]', padding: 'px-6 py-2' } }" />
        </div>

        <div class="flex flex-col items-center justify-center">
            <div v-if="store.loading" class="grid grid-cols-1 gap-10 md:grid-cols-1 lg:grid-cols-1">
                <div v-for="n in 6" :key="n">
                    <SkeletonProject />
                </div>
            </div>
            <div v-else class="max-w-[1120px] mb-4 grid grid-cols-1 gap-10 md:grid-cols-1 lg:mb-10 lg:grid-cols-1">
                <div v-if="store.res.length" v-for="item in store.res" :key="item.id">
                    <LibraryProject class="h-full" :id="item.id" :tag="item.tag" :title="item.title"
                        :link_download="item.link_download" :description="item.description"
                        :created_at="item.created_at" :cover_url="item.cover_url" />
                </div>
                <div v-else class="col-span-2">
                    <div class="flex flex-col items-center justify-center">
                        <h1 class="text-[25px]">There's nothing to display</h1>
                        <p class="md:text-xl text-md text-[#c8c7c7]">Currently, we are preparing more content to
                            display.
                            Please
                            check it later !
                        </p>
                        <div>
                            <NuxtImg src="/inspire/no-data.jpg" class="w-[300px] h-[300px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="store.res.length" class="flex justify-center mt-8">
            <UPagination :active-button="{ variant: 'outline' }" :inactive-button="{ color: 'gray' }"
                :ui="{ default: { activeButton: { color: 'black' } } }" v-model="page" size="lg" :max="5"
                :page-count="LIMIT" :total="store.countTotal">
            </UPagination>
        </div>
    </div>
</template>
