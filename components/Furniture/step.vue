<template>
    <div class="md:my-20 my-10">
        <div class="w-full md:pt-[50px] md:pb-[60px] pb-[45px] pt-[40px] md:bg-[#FAF8F5] bg-[#D9D9D9]">
            <div class="flex flex-col items-center justify-center">
                <div
                    class="lg:text-[32px] md:text-[25px] text-[16px] font-normal md:leading-[150%] leading-[100%] mb-[5px]">
                    From Sketch Request to
                </div>
                <div
                    class="md:w-full w-[306px] text-center text-[#8D7662] md:leading-[150%] font-semibold leading-[130%] lg:text-[64px] md:text-[50px] text-[30px] md:tracking-[2%]">
                    High-quality 3D Model
                </div>
            </div>
            <div class="flex flex-col items-center justify-center my-3">
                <div
                    class="pl-0 lg:w-[1200px] md:w-[700px] md:text-[25px] text-[15px] md:leading-[200%] leading-[180%] font-light mx-[35px] md:mt-[30px] my-5 md:my-0 md:mb-[18px] text-justify">
                    <div>
                        A well-structured 3D furniture modeling workflow ensures efficiency, precision, and high-quality
                        output. This streamlined workflow helps Nomo Render transform basic sketches into <span
                            class="font-[500]">stunning
                            3D
                            models</span>, ready for visualization, marketing, & production.
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center mx-auto md:pl-0 md:ml-0 ml-[35px]">
                <div class="lg:block md:hidden hidden md:w-fit w-full relative">
                    <UCarousel ref="carousel" v-model="activeStep" :items="timeline" :ui="{
                        wrapper: 'md:pointer-events-none overflow-x-scroll snap-x snap-mandatory pl-0 md:pl-0 no-scrollbar',
                        item: 'flex flex-col items-start gap-9 w-[300px] md:w-[400px] snap-start shrink-0'
                    }" class="w-full">
                        <template #default="{ item, index }">
                            <div class="flex flex-col items-start gap-5 w-[300px] md:w-[460px]" :key="index"
                                :ref="el => registerItemRef(el, index)">
                                <div class="flex items-center w-full">
                                    <div :class="[
                                        'md:border border-[#8D7662] flex items-center justify-center w-7 h-7 md:w-[60px] md:h-[60px] rounded-full',
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
                                        <div v-if="item.id !== timeline.length" class="h-px flex-grow bg-black"></div>
                                    </div>
                                </div>
                                <div class="w-[300px] md:w-[350px]">
                                    <NuxtImg format="webp" :src="item.image" :alt="item.title"
                                        class="w-[280px] h-[200px] md:w-[3500px] md:h-[350px] object-cover rounded-lg"
                                        loading="lazy" sizes="sm:280px md:620px" />
                                    <div
                                        class="w-[280px] md:w-[350px] font-light md:text-[25px] text-[15px] md:leading-[200%] leading-[180%] mt-10 text-justify">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </div>
                        </template>
                    </UCarousel>
                    <div class="md:hidden flex items-center gap-5 md:mt-[20px] mt-[10px]">
                        <button @click="scrollLeft" id="watch-previous-project"
                            class="w-10 h-10 md:w-[59.08px] md:h-[59.08px] rounded-full bg-[#FFFFFF] shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
                            <UIcon id="watch-previous-project" name="material-symbols-light:arrow-left-alt-rounded"
                                class="size-7 md:size-10 text-[#8D7662]" />
                        </button>
                        <button @click="scrollRight" id="watch-next-project"
                            class="w-10 h-10 md:w-[59.08px] md:h-[59.08px] rounded-full bg-[#8D7662] shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
                            <UIcon id="watch-next-project" name="material-symbols-light:arrow-right-alt-rounded"
                                class="size-7 md:size-10 text-white" />
                        </button>
                    </div>
                </div>

                <!-- Mobile -->
                <div class="block md:block lg:hidden lg:w-fit w-full relative md:ml-20 mt-0 lg:mt-0">
                    <UCarousel ref="carousel" v-model="activeStep" :items="timeline" :ui="{
                        wrapper: 'overflow-x-scroll snap-x snap-mandatory pl-0 md:pl-0 no-scrollbar',
                        item: 'flex flex-col items-start gap-9 w-[300px] md:w-[400px] snap-start shrink-0'
                    }" class="w-full">
                        <template #default="{ item, index }">
                            <div class="flex flex-col items-start gap-5 w-[300px] md:w-[460px]" :key="index"
                                :ref="el => registerItemRef(el, index)">
                                <div class="flex items-center w-full">
                                    <div :class="[
                                        'md:border border-[#8D7662] flex items-center justify-center w-7 h-7 md:w-[60px] md:h-[60px] rounded-full bg-[#8D7662]',
                                    ]">
                                        <span :class="[
                                            'text-[15px] md:text-[25px] leading-[180%] md:leading-[200%] font-medium text-[#FAF8F5]',
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
                                <div class="w-[300px] md:w-[350px]">
                                    <NuxtImg format="webp" :src="item.image" :alt="item.title"
                                        class="w-[280px] h-[200px] md:w-[3500px] md:h-[350px] object-cover rounded-lg"
                                        loading="lazy" sizes="sm:280px md:620px" />
                                    <div
                                        class="w-[280px] md:w-[350px] font-light md:text-[25px] text-[15px] md:leading-[200%] leading-[180%] mt-10 text-justify">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </div>
                        </template>
                    </UCarousel>
                    <div class="lg:hidden flex items-center gap-5 md:mt-[20px] mt-[10px]">
                        <button @click="scrollLeft" id="watch-previous-project"
                            class="w-10 h-10 md:w-[59.08px] md:h-[59.08px] rounded-full bg-[#FFFFFF] shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
                            <UIcon id="watch-previous-project" name="mingcute:arrow-left-fill"
                                class="size-5 md:size-10 text-[#8D7662]" />
                        </button>
                        <button @click="scrollRight" id="watch-next-project"
                            class="w-10 h-10 md:w-[59.08px] md:h-[59.08px] rounded-full bg-[#8D7662] shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
                            <UIcon id="watch-next-project" name="mingcute:arrow-right-fill"
                                class="size-5 md:size-10 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
const timeline = [
    {
        id: 1,
        title: "Modeling",
        description: "Constructing an accurate digital model based on sketches, reference images, and specified dimensions.",
        active: false,
        image: '/Furniture/ChairStep1.jpg',
    },
    {
        id: 2,
        title: "Texture",
        description: "Applying realistic materials, finishes, and textures to enhance visual authenticity.",
        active: true,
        image: '/Furniture/ChairStep2.jpg',
    },
    {
        id: 3,
        title: "Final Rendering",
        description: "Producing high-resolution and photorealistic images with optimized lighting and refined details.",
        active: true,
        image: '/Furniture/ChairStep3.jpg',
    },
];

const carousel = ref(null);
const activeStep = ref(0);
const itemRefs = ref([]);

const registerItemRef = (el, index) => {
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
        activeStep.value = Math.min(activeStep.value + 1, timeline.length - 1);
    }
};




</script>