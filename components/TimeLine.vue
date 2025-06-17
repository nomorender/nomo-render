<script lang="ts" setup>

const props = defineProps<{
    subtitle?: string
    title?: string
    paragraph?: string
    timeline: {
        id: number
        title: string
        description: string
        active: boolean
        image: string
    }[]
}>();

const carousel = ref<any>(null);
const activeStep = ref(0);
const itemRefs = ref<HTMLElement[]>([]);
const totalPage = ref(0);
const currentPage = ref(0);

function registerItemRef(el: any, index: any) {
    if (el) itemRefs.value[index] = el;
}

const scrollLeft = () => {
    if (carousel.value) {
        carousel.value.prev();
        activeStep.value = Math.max(activeStep.value - 1, 0);
    }
};

const scrollRight = () => {
    if (carousel.value) {
        carousel.value.next();
        activeStep.value = Math.min(activeStep.value + 1, props.timeline.length - 1);
    }
};

onMounted(() => {
    nextTick(() => {
        watch(
            () => [carousel.value?.pages, carousel.value?.page],
            ([pages, page]) => {
                if (pages > 0) {
                    totalPage.value = pages;
                }
                currentPage.value = page ?? 0;
            },
            { immediate: true }
        );
    });
});
const isLastItem = computed(() => {
    return currentPage.value === totalPage.value;
});
</script>


<template>
    <div class="md:my-20 my-10">
        <div class="w-full md:pt-[60px] md:pb-[70px] pt-[40px] pb-[40px] bg-[#D9D9D9]">
            <div class="flex flex-col items-center justify-center">
                <div
                    class="md:text-[32px] text-[16px] font-normal md:leading-[150%] leading-[100%] md:tracking-[2%] mb-[5px]">
                    {{ props.subtitle }}
                </div>
                <div
                    class="md:w-full w-[306px] text-center text-[#8D7662] md:leading-[50px] font-semibold leading-[100%] md:text-[64px] text-[30px] md:tracking-[2%]">
                    {{ props.title }}
                </div>
            </div>
            <div class="flex flex-col items-center justify-center my-5">
                <div
                    class="pl-0 md:mx-[calc(10vw-20px)] md:text-[25px] text-[15px] md:leading-[200%] leading-[180%] font-light mx-[35px] md:mt-[50px] md:mb-[18px] text-justify">
                    <div v-html="props.paragraph">
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center mx-auto md:pl-[calc(10vw-20px)] md:ml-0 ml-[35px]">
                <div class="w-full relative">
                    <UCarousel ref="carousel" v-model="activeStep" :items="props.timeline" :ui="{
                        wrapper: 'overflow-x-scroll snap-x snap-mandatory pl-0 md:pl-0 no-scrollbar',
                        item: 'flex flex-col items-start gap-9 w-[300px] md:w-[655px] snap-start shrink-0'
                    }" class="w-full">
                        <template #default="{ item, index }">
                            <div class="flex flex-col items-start gap-5 w-[300px] md:w-[655px]" :key="index"
                                :ref="el => registerItemRef(el, index)">
                                <div class="flex items-center w-full">
                                    <div :class="[
                                        'flex items-center justify-center w-7 h-7 md:w-[60px] md:h-[60px] rounded-full',
                                        activeStep === index ? 'bg-[#FAF8F5]' : 'bg-[#8D7662]'
                                    ]">
                                        <span :class="[
                                            'text-[15px] md:text-[25px] leading-[180%] md:leading-[200%] font-medium',
                                            activeStep === index ? 'text-[#8D7662]' : 'text-[#FAF8F5]'
                                        ]">
                                            {{ item.id }}
                                        </span>
                                    </div>
                                    <div class="flex items-center flex-grow">
                                        <div class="w-[25.54px] h-px bg-black opacity-50"></div>
                                        <div
                                            class="font-medium mx-3 text-black md:text-[25px] text-[15px] leading-[180%] md:leading-[200%] whitespace-nowrap">
                                            {{ item.title }}
                                        </div>
                                        <div class="h-px flex-grow bg-black"></div>
                                    </div>
                                </div>
                                <div class="w-[300px] md:w-[655px]">
                                    <NuxtImg :src="item.image"
                                        class="w-[280px] h-[200px] md:w-[620px] md:h-[400px] object-cover rounded-lg"
                                        loading="lazy" sizes="sm:280px md:620px" />
                                    <div
                                        class="w-[280px] md:w-[600px] font-light md:text-[25px] text-[15px] md:leading-[200%] leading-[180%] mt-10 text-justify">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </div>
                        </template>
                    </UCarousel>
                    <div class="md:flex hidden items-center gap-5 md:mt-[20px] mt-[10px]">
                        <button @click="scrollLeft"
                            :class="['w-10 h-10 md:w-[59.08px] md:h-[59.08px] rounded-full shadow-[0px_4px_4px_#00000040] flex items-center justify-center', isLastItem ? 'bg-[#8D7662] hover:bg-[#8D7662]' : 'bg-white/80 hover:bg-white']">
                            <UIcon name="material-symbols-light:arrow-left-alt-rounded"
                                :class="['size-7 md:size-10', isLastItem ? 'text-white' : 'text-[#8D7662]']" />
                        </button>
                        <button @click="scrollRight"
                            :class="['w-10 h-10 md:w-[59.08px] md:h-[59.08px] rounded-full shadow-[0px_4px_4px_#00000040] flex items-center justify-center', isLastItem ? 'bg-white/80 hover:bg-white' : 'bg-[#8D7662]']">
                            <UIcon name="material-symbols-light:arrow-right-alt-rounded"
                                :class="['size-7 md:size-10', isLastItem ? 'text-[#8D7662]' : 'text-[#FFFFFF]']" />
                        </button>
                    </div>
                    <div class="md:hidden flex items-center gap-5 md:mt-[20px] mt-[10px]">
                        <UButton @click="scrollLeft"
                            class="w-10 h-10 md:w-[59.08px] md:h-[59.08px] rounded-full shadow-[0px_4px_4px_#00000040] flex items-center justify-center  bg-white active:bg-white focus:bg-white">
                            <UIcon name="mingcute:arrow-left-fill" class="size-5" />
                        </UButton>
                        <UButton @click="scrollRight" :disabled="isLastItem"
                            class="disabled:text-[#8D7662] w-10 h-10 md:w-[59.08px] md:h-[59.08px] rounded-full shadow-[0px_4px_4px_#00000040] flex items-center justify-center disabled:bg-white/80 bg-[#8D7662] hover:bg-[#8D7662] focus:bg-[#8D7662]">
                            <UIcon name="mingcute:arrow-right-fill" class="size-5" />
                        </UButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>