<template>
    <div class="my-20">
        <div class="w-full pt-[60px] pb-[70px] bg-[#D9D9D9]">
            <div class="flex flex-col items-center justify-center">
                <div
                    class="md:text-[32px] text-[16px] font-normal md:leading-[150%] leading-[100%] md:tracking-[2%] mb-[5px]">
                    Timeline of
                </div>
                <div
                    class="md:w-full w-[306px] text-center text-[#8D7662] md:leading-[50px] font-semibold leading-[100%] md:text-[64px] text-[30px] md:tracking-[2%]">
                    3D Exterior Rendering Project
                </div>
            </div>
            <div class="flex flex-col items-center justify-center my-5">
                <div
                    class="w-[304px] md:w-full md:text-[25px] text-[15px] md:leading-[200%] leading-[180%] font-light md:px-[calc(9%)] md:mt-[70px] md:mb-[18px] text-justify">
                    On average, adding exterior renderings requires <span class="font-medium">7-10 days</span>, as it
                    involves refining surroundings like landscaping, streets, lighting, and atmospheric effects.
                </div>
            </div>
            <div class="flex flex-col items-center mx-auto md:pl-[calc(10vw-20px)] md:ml-0 ml-[35px]">
                <div class="w-full relative">
                    <UCarousel ref="carousel" v-model="activeStep" :items="timeline" :ui="{
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
                    <div class="flex items-center gap-5 md:mt-[20px] mt-[10px]">
                        <button @click="scrollLeft"
                            class="w-10 h-10 md:w-[59.08px] md:h-[59.08px] rounded-full bg-[#FFFFFF] shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
                            <UIcon name="material-symbols-light:arrow-left-alt-rounded"
                                class="size-7 md:size-10 text-[#8D7662]" />
                        </button>
                        <button @click="scrollRight"
                            class="w-10 h-10 md:w-[59.08px] md:h-[59.08px] rounded-full bg-[#8D7662] shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
                            <UIcon name="material-symbols-light:arrow-right-alt-rounded"
                                class="size-7 md:size-10 text-white" />
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
        description: "Build the main 3D structure of the building and terrain, defining overall shape, proportions, and layout.",
        active: false,
        image: '/slide/PHO01.png',
    },
    {
        id: 2,
        title: "Initial environment setup",
        description: "Add basic surrounding elements like roads, sidewalks, trees, fences, and neighboring buildings to provide context.",
        active: true,
        image: '/slide/TL05.png',
    },
    {
        id: 3,
        title: "Lighting",
        description: "Adjust natural and artificial lighting based on time of day (daylight, sunset, night) to create realistic shadows and reflections",
        active: true,
        image: '/slide/TL06.png',
    },
    {
        id: 4,
        title: "Texturing & Materials",
        description: "Apply high-quality meterials and textures to surfaces such as walls, glass, roofing, pavement, and greenery for a lifelike appearance.",
        active: true,
        image: '/slide/TL07.png',
    },
    {
        id: 5,
        title: "Final enviroment refinements",
        description: "Refine landscaping, water features, urban furniture, and additional elements like people, vehicles, and weather effects for a complete scene.",
        active: true,
        image: '/slide/TL03.png',
    },
    {
        id: 6,
        title: "Final Rendering",
        description: "Define camera angles and perspectives (eye-level, aerial, close-up) to capture the best views of the design. Process high-resolution images or animations using rendering software, optimizing settings for quality and speed.",
        active: true,
        image: '/slide/TL02.png',
    },
    {
        id: 7,
        title: "Post-Processing (Optional)",
        description: "Enhance the final render in Photoshop or other tools with color correction, contrast adjustments, and additional effects for a polished look.",
        active: true,
        image: '/slide/TL01.png',
    },
];

const carousel = ref(null);
const activeStep = ref(0);
const itemRefs = ref([]);
let scrollTimeout;

function registerItemRef(el, index) {
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