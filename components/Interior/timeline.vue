<template>
    <div class="md:my-20 my-10">
        <div class="w-full md:pt-[60px] md:pb-[70px] pt-[40px] pb-[40px] bg-[#D9D9D9]">
            <div class="flex flex-col items-center justify-center">
                <div
                    class="md:text-[32px] text-[16px] font-normal md:leading-[150%] leading-[100%] md:tracking-[2%] mb-[5px]">
                    Timeline of
                </div>
                <div
                    class="md:w-full w-[306px] text-center text-[#8D7662] md:leading-[50px] font-semibold leading-[100%] md:text-[64px] text-[30px] md:tracking-[2%]">
                    3D Interior Rendering Project
                </div>
            </div>
            <div class="flex flex-col items-center justify-center my-5">
                <div
                    class="pl-0 md:mx-[calc(10vw-20px)] md:text-[25px] text-[15px] md:leading-[200%] leading-[180%] font-light mx-[35px] md:mt-[50px] md:mb-[18px] text-justify">
                    <div>
                        The process takes around <span class="font-[500]">5-7 days</span>, carefully shaping everything
                        from structure to
                        decor to
                        create a life-like, stunning experience.
                    </div>
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
        description: "The 3D structure of the interior space is built, including walls, ceilings, floors, and main architectural elements.",
        active: false,
        image: '/Interior/Pic45.png',
    },
    {
        id: 2,
        title: "Lighting Setup",
        description: "Natural light sources (like sunlight through windows) and artificial lighting (lamps, chandeliers, LED strips) are positioned and adjusted. The right lighting enhances realism and sets the mood of the space.",
        active: true,
        image: '/Interior/Pic48.png',
    },
    {
        id: 3,
        title: "Texturing & Materials",
        description: "Materials and texture such as wood, marble, fabric, glass, and metal are applied to walls, floors, furniture, and decor. Realistic reflections, roughness, and transparency settings are fine-tuned.",
        active: true,
        image: '/Interior/Pic49.png',
    },
    {
        id: 4,
        title: "Interior Decoration & Furnishing",
        description: "Furniture, decor, and accessories are placed to complete the scene, ensuring a cozy and visually appealing layout.",
        active: true,
        image: '/Interior/Pic46.png',
    },
    {
        id: 5,
        title: "Final Rendering",
        description: "The scene is processed in high resolution, where rendering engines calculate light, shadows, and reflections to create a photorealistic image. This step can take several hours, depending on complexity.",
        active: true,
        image: '/Interior/Pic47.png',
    }
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