<template>
    <div class="my-20">
        <div class="w-full pt-[60px] pb-[70px] bg-[#D9D9D9]">
            <div class="flex flex-col items-center justify-center">
                <div class="text-[32px] font-[400] leading-[150%] tracking-[2%] mb-5">
                    Timeline of
                </div>
                <div class="text-[#8D7662] leading-[50px] font-[600] text-[64px] tracking-[2%]">
                    3D Exterior Rendering Project
                </div>
            </div>
            <div class="flex flex-col items-center justify-center">
                <div class="text-[25px] leading-[200%] font-[300] w-[calc(75vw-25px)] mt-[70px] mb-[18px] text-justify">
                    On average, adding exterior renderings requires <span class="font-[500]">7-10 days</span>, as it
                    involves refining surroundings like landscaping, streets, lighting, and atmospheric effects.
                </div>
            </div>
            <div class="flex flex-col items-center mx-auto pl-[calc(10vw-20px)] scrollbar-none">
                <div class="w-full relative">
                    <div ref="scrollContainer"
                        class="scrollbar-none overflow-x-hidden w-full flex scroll-smooth snap-x snap-mandatory pl-[50px] mr-[0px]"
                        @mousedown="startDragging" @mousemove="onDrag" @mouseup="stopDragging"
                        @mouseleave="stopDragging" @touchstart="startDragging" @touchmove="onDrag"
                        @touchend="stopDragging">
                        <div class="flex">
                            <div v-for="step in timeline" :key="step.id"
                                class="flex flex-col items-start gap-[35px] w-[calc(42vw-25px)] snap-start shrink-0">
                                <div class="flex items-center w-full">
                                    <div :class="[
                                        'flex items-center justify-center w-[60px] h-[60px] rounded-[30px]',
                                        step.id === 1 ? 'bg-[#FAF8F5]' : 'bg-[#8D7662]'
                                    ]">
                                        <span :class="[
                                            'text-[25px] leading-[200%] font-[500]',
                                            step.id === 1 ? 'text-[#8D7662]' : 'text-[#FAF8F5]'
                                        ]">
                                            {{ step.id }}
                                        </span>
                                    </div>
                                    <div class="flex items-center flex-grow">
                                        <div class="w-[25.54px] h-px bg-black opacity-50"></div>
                                        <div class="font-[500] mx-3 text-[#000000] text-[25px] whitespace-nowrap">
                                            {{ step.title }}
                                        </div>
                                        <div class="h-px flex-grow bg-black"></div>
                                    </div>
                                </div>
                                <div class="w-[calc(40vw-25px)]">
                                    <NuxtImg :src="step.image" :class="[
                                        'w-[calc(40vw-25px)] h-[calc(min(30vw,400px))] object-cover rounded-[8px] max-w-[620px] min-w-[400px]',
                                    ]" />
                                    <!-- w-[620px] h-[400px] object-cover rounded-[8px] max-h-[620px] -->
                                    <div
                                        class="w-[calc(39vw-25px)] font-[300] text-[25px] leading-[200%] mt-10 text-justify">
                                        {{ step.description }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-5 mt-[50px]">
                        <button @click="scrollLeft"
                            class="w-[59.08px] h-[59.08px] rounded-full bg-[#FFFFFF] shadow-[0px_4px_4px_#00000040] p-0 flex items-center justify-center">
                            <UIcon name="material-symbols-light:arrow-left-alt-rounded"
                                class="size-10 text-[#8D7662]" />
                        </button>
                        <button @click="scrollRight"
                            class="w-[59.08px] h-[59.08px] rounded-full bg-[#8D7662] shadow-[0px_4px_4px_#00000040] p-0 flex items-center justify-center">
                            <UIcon name="material-symbols-light:arrow-right-alt-rounded"
                                class="size-10 text-[#FFFFFF]" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const scrollContainer = ref(null);
const isDragging = ref(false);
const startX = ref(0);
const scrollLeftStart = ref(0);
const scrollLeft = () => {
    if (!scrollContainer.value) return;
    const slideWidth = scrollContainer.value.querySelector('.snap-start').offsetWidth;
    scrollContainer.value.scrollBy({ left: -slideWidth, behavior: 'smooth' });
};

const scrollRight = () => {
    if (!scrollContainer.value) return;
    const slideWidth = scrollContainer.value.querySelector('.snap-start').offsetWidth;
    scrollContainer.value.scrollBy({ left: slideWidth, behavior: 'smooth' });
};


const startDragging = (event) => {
    event.preventDefault();
    isDragging.value = true;
    startX.value = event.pageX || (event.touches && event.touches[0].pageX);
    scrollLeftStart.value = scrollContainer.value.scrollLeft;
    scrollContainer.value.style.cursor = 'grabbing';
    scrollContainer.value.style.userSelect = 'none';
};

const onDrag = (event) => {
    if (!isDragging.value) return;
    event.preventDefault();
    const x = event.pageX || (event.touches && event.touches[0].pageX);
    const walk = (x - startX.value) * 1.5;
    scrollContainer.value.scrollLeft = scrollLeftStart.value - walk;
};

const stopDragging = () => {
    if (isDragging.value) {
        isDragging.value = false;
        scrollContainer.value.style.cursor = 'grab';
        scrollContainer.value.style.userSelect = 'auto';
    }
};

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

</script>