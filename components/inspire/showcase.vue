<script setup lang="ts">
import { useBlogStore } from '~/stores/blog/useBlog';


type Category = { name: string; value: string }
const filterRef = ref<HTMLElement | null>(null)

const category: Category[] = [
    { name: 'All', value: '' },
    { name: 'Crafting', value: 'crafting' },
    { name: 'Tips & Tricks', value: 'tips and tricks' },
    { name: 'Trendy Style', value: 'trendy style' },
    { name: 'Before After', value: 'before after' }
]
const store = useBlogStore();
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
        <div id="filter-inspire"
            class="bg-white lg:py-0 md:py-5 md:top-[70px] py-5 lg:static sticky top-[80px] z-30 w-full flex items-center justify-center lg:my-20 my-5">
            <USelectMenu id="filter-inspire" v-model="tag" :options="category" placeholder="Filter"
                value-attribute="value" option-attribute="name" size="xl" color="white"
                :ui="{ color: { white: { outline: 'bg-[#faf8f6] border border-[#D8C3A5] ring-0' } }, icon: { base: 'lg:mr-4  text-black' }, placeholder: 'text-black', base: 'lg:w-[400px] w-[160px]', rounded: 'rounded-[40px]', padding: { xl: 'lg:px-[40px] px-5 lg:py-4 py-1 lg:text-[25px] text-[15px] leading-[200%] font-[300]' }, }"
                :ui-menu="{ background: 'bg-[#FAF8F5]', width: 'lg:w-[400px] w-[160px]', rounded: 'rounded-[8px]', padding: 'p-0', option: { size: 'lg:text-[25px] text-[15px]', rounded: 'rounded-[8px]', selected: 'bg-[#D9D9D9] hover:bg-[#D9D9D9] transition-all', base: 'gap-0 py-3', active: 'bg-[#D9D9D9]', padding: 'px-6 py-2' } }" />
        </div>
        <div class="flex flex-col items-center justify-center">
            <div v-if="store.loading" class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
                <div v-for="n in 6" :key="n">
                    <SkeletonBlog />
                </div>
            </div>
            <div v-else class="max-w-[1120px] mb-4 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mb-10 lg:grid-cols-2">
                <div v-if="store.res.length" v-for="item in store.res" :key="item.id">
                    <InspireBlog class="h-full" :id="item.id" :slug="item.slug" :tag="item.tag" :title="item.title"
                        :description="item.description" :created_at="item.created_at" :cover_url="item.cover_url"
                        :content="item.content" />
                </div>
                <div v-else class="col-span-2">
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
        </div>
        <div v-if="store.res.length" class="flex justify-center mt-8">
            <UPagination id="move-to-next-page-in-inspire" :active-button="{ variant: 'outline' }"
                :inactive-button="{ color: 'gray' }" :ui="{ default: { activeButton: { color: 'black' } } }"
                v-model="page" size="lg" :max="5" :page-count="LIMIT" :total="store.countTotal">
            </UPagination>
        </div>
    </div>
</template>
