<template>
    <div class="my-20">
        <div class="relative h-fit w-full pb-[50px] pt-[55px] bg-[#FAF8F5]">
            <div class="flex flex-col items-center justify-center mb-[50px]">
                <div class="font-[400] text-[32px] leading-[150%] text-[#000000]">
                    Who can benefit from
                </div>
                <div class="font-[600] text-[64px] leading-[150%] text-[#8D7662]">
                    3D Exterior Rendering Service?
                </div>
            </div>
            <div class="flex gap-20 items-center justify-center">
                <div class="z-[10] absolute left-[3rem] h-full flex flex-col gap-5 justify-center items-center">
                    <UButton @click="nextSlide" variant="ghost"
                        class="flex items-center justify-center bg-white hover:bg-white shadow-2xl rounded-full p-[18px]"
                        :disabled="isAnimating">
                        <Icon name="material-symbols:arrow-upward-rounded" class="size-6 text-[#8D7662]" />
                    </UButton>
                    <UButton @click="prevSlide" variant="ghost"
                        class="flex items-center justify-center bg-[#8D7662] disabled:bg-[#947b65] hover:bg-[#8D7662] shadow-2xl rounded-full p-[18px]"
                        :disabled="isAnimating">
                        <Icon name="material-symbols:arrow-downward-rounded" class="size-6 text-white" />
                    </UButton>
                </div>
                <div class="relative w-full h-[420px] flex justify-center items-center">
                    <div v-for="(slide, index) in slides" :key="index"
                        class="absolute w-full rounded-[8px] max-w-[1200px] h-full shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out"
                        :class="[
                            activeSlide === index && !isAnimating ? 'opacity-100 top-0 z-10' : 'opacity-0 top-[20px] z-0',
                            'left-1/2 -translate-x-1/2',
                        ]">
                        <div class="flex justify-center items-center h-full bg-white rounded-[8px]">
                            <div class="w-1/2 px-[50px] py-[60px]">
                                <div class="text-[32px] font-semibold text-[#8D7662]">{{ slide.name }}</div>
                                <div class="text-[25px] font-light text-justify mt-10">{{ slide.desc }}</div>
                            </div>
                            <div class="w-1/2">
                                <NuxtImg :src="slide.img"
                                    class="w-full h-[420px] object-cover object-center rounded-[8px]" loading="lazy"
                                    placeholder="/placeholder.jpg" @load="onImageLoad" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center pt-[70px]">
                <div class="max-w-[1200px] text-[25px] font-[300] leading-[200%] text-justify">
                    By integrating 3D exterior visualization into their workflow, these professionals <span class="font-[500]">can reduce
                    misinterpretations, accelerate decision-making</span>, and achieve more refined, market-ready
                    project
                    outcomes.
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const slides = [
    {
        name: 'Architects & Designers',
        desc: 'Strengthen project proposals with highly detailed, photorealistic visuals, ensuring clients and stakeholders fully understand the architectural vision before construction begins.',
        img: '/benefits/HCP01.jpg',
    },
    {
        name: 'Architects & Designers',
        desc: 'Strengthen project proposals with highly detailed, photorealistic visuals, ensuring clients and stakeholders fully understand the architectural vision before construction begins.',
        img: '/benefits/HAM01.png',
    },
    {
        name: 'Architects & Designers',
        desc: 'Strengthen project proposals with highly detailed, photorealistic visuals, ensuring clients and stakeholders fully understand the architectural vision before construction begins.',
        img: '/benefits/HCP02.png',
    },
    {
        name: 'Architects & Designers',
        desc: 'Strengthen project proposals with highly detailed, photorealistic visuals, ensuring clients and stakeholders fully understand the architectural vision before construction begins.',
        img: '/benefits/HCP03.png',
    },
    {
        name: 'Architects & Designers',
        desc: 'Strengthen project proposals with highly detailed, photorealistic visuals, ensuring clients and stakeholders fully understand the architectural vision before construction begins.',
        img: '/benefits/HCP04.png',
    },
    {
        name: 'Architects & Designers',
        desc: 'Strengthen project proposals with highly detailed, photorealistic visuals, ensuring clients and stakeholders fully understand the architectural vision before construction begins.',
        img: '/benefits/HCP05.png',
    },
];

const activeSlide = ref(0);
const isAnimating = ref(false);
const slideDirection = ref('next');
const imagesLoaded = ref(false);

const router = useRouter();

const nextSlide = () => {
    if (isAnimating.value || !imagesLoaded.value) return;
    isAnimating.value = true;
    slideDirection.value = 'next';

    setTimeout(() => {
        activeSlide.value = (activeSlide.value + 1) % slides.length;
        isAnimating.value = false;
    }, 300);
};

const prevSlide = () => {
    if (isAnimating.value || !imagesLoaded.value) return;
    isAnimating.value = true;
    slideDirection.value = 'prev';

    setTimeout(() => {
        activeSlide.value = (activeSlide.value - 1 + slides.length) % slides.length;
        isAnimating.value = false;
    }, 300);
};
// Image load/error handlers
const onImageLoad = () => {
    imagesLoaded.value = true;
};


onMounted(() => {
    activeSlide.value = 0;
    isAnimating.value = false;
    imagesLoaded.value = false;

    slides.forEach((slide) => {
        const img = new Image();
        img.src = slide.img;
        img.onload = () => {
            imagesLoaded.value = true;
        };
        img.onerror = () => {
            console.error('Failed to preload image:', slide.img);
            imagesLoaded.value = true;
        };
    });
});

router.afterEach(() => {
    activeSlide.value = 0;
    isAnimating.value = false;
    imagesLoaded.value = false;

    slides.forEach((slide) => {
        const img = new Image();
        img.src = slide.img;
        img.onload = () => {
            imagesLoaded.value = true;
        };
        img.onerror = () => {
            console.error('Failed to preload image:', slide.img);
            imagesLoaded.value = true;
        };
    });
});
</script>