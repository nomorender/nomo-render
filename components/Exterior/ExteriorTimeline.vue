<template>
    <div class="my-20">
        <div class="w-full pt-[70px] pb-[80px] bg-[#D9D9D9]">
            <div class="flex flex-col items-center justify-center">
                <div class="text-[32px] font-[400] leading-[150%] tracking-[2%] mb-5">
                    Timeline of
                </div>
                <div class="text-[#8D7662] leading-[50px] font-[600] text-[64px] tracking-[2%]">
                    3D Exterior Rendering Project
                </div>
            </div>
            <div class="flex flex-col items-center justify-center">
                <div class="text-[25px] leading-[200%] font-[300] w-[calc(75vw-25px)] mt-20 mb-10 text-justify">
                    On average, adding exterior renderings requires <span class="font-[500]">7-10 days</span>, as it
                    involves refining surroundings like landscaping, streets, lighting, and atmospheric effects.
                </div>
            </div>
            <div class="flex flex-col items-center mx-auto pl-[calc(10vw+50px)]">
                <div class="w-full relative">
                    <div ref="scrollContainer"
                        class="overflow-x-auto w-full flex scroll-smooth snap-x snap-mandatory pl-[50px] mr-[0px]">
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
                                        <div class=" text-[#000000] text-[25px] whitespace-nowrap">
                                            {{ step.title }}
                                        </div>
                                        <div class="h-px flex-grow bg-black"></div>
                                    </div>
                                </div>
                                <div class="w-[calc(40vw-25px)]">
                                    <NuxtImg :src="step.image" :class="[
                                        'w-[calc(40vw-25px)] h-[calc(25vw-25px)] object-cover rounded-[8px]',
                                        'max-w-[620px] min-w-[400px]'
                                    ]" />
                                    <div class="font-[300] text-[25px] leading-[200%] mt-10">
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

const timeline = [
    {
        id: 1,
        title: "Modeling",
        description: "Build the main 3D structure of the building and terrain, defining overall shape, proportions, and layout.",
        active: false,
        image: '/slide/TL01.png',
    },
    {
        id: 2,
        title: "Initial environment setup",
        description: "Add basic surrounding elements like roads, sidewalks, trees, fences, and neighboring buildings to provide context.",
        active: true,
        image: '/slide/TL02.png',
    },
    {
        id: 3,
        title: "Modeling",
        description: "Add basic surrounding elements like roads, sidewalks, trees, fences, and neighboring buildings to provide context.",
        active: true,
        image: '/slide/TL03.png',
    },
    {
        id: 4,
        title: "Modeling",
        description: "Add basic surrounding elements like roads, sidewalks, trees, fences, and neighboring buildings to provide context.",
        active: true,
        image: '/slide/PHO01.png',
    },
    {
        id: 5,
        title: "Modeling",
        description: "Add basic surrounding elements like roads, sidewalks, trees, fences, and neighboring buildings to provide context.",
        active: true,
        image: '/slide/TL05.png',
    },
    {
        id: 6,
        title: "Modeling",
        description: "Add basic surrounding elements like roads, sidewalks, trees, fences, and neighboring buildings to provide context.",
        active: true,
        image: '/slide/TL06.png',
    },
    {
        id: 7,
        title: "Modeling",
        description: "Add basic surrounding elements like roads, sidewalks, trees, fences, and neighboring buildings to provide context.",
        active: true,
        image: '/slide/TL07.png',
    },
];
</script>