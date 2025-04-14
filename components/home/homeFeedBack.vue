<script setup lang="ts">
interface CarouselItem {
    name: string
    position: string
    star: number
    description: string
    ava: string
    img: string
    content1: any
    content2: any
    picDes: any,
    projectName: string
}

const items: CarouselItem[] = [
    {
        name: 'John S',
        projectName: 'Lumea Living',
        position: 'Architect from USA',
        star: 5,
        description: `I appreciated how quick they are; they’ve always met our deadlines without sacrificing quality. Definitely a go-to for any architects like me`,
        img: `/Feedback/1.jpg`,
        ava: '/Avatar/1.jpg',
        content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Exterior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">Luxembourg</span>
          <br/>Client: <span class = "font-[500]">IMMO SOOO Service</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        Located in the heart of Luxembourg, this home design redefines modern luxury with its minimalist yet bold architectural approach. <br/>
      </div>

      <div class = "font-[300] my-4">
        Designed for IMMO SOOO Service, it harmonizes natural elements with contemporary elegance, featuring: <span class = "italic font-[500]">clean lines, expansive glass facades, a refined palette of brick and dark metal.</span> The structured and inviting composition ensures privacy while allowing open indoor-outdoor living.
      </div>
    </div>
  `,
        content2: `
      <div class = "font-[300] my-4">
          Having a chance joining this project, we as Nomo Render, pay attention to detail in materiality and spatial dynamics, to deliver a final product that shows sophistication and urban serenity.
      </div>
  `,
        picDes: {
            pic1: `/Feedback/UserFeedback/1.jpg`,
            pic2: `/Feedback/UserFeedback/2.jpg`,
            pic3: '/Feedback/UserFeedback/3.jpg',
        }
    },
    {
        name: 'Emma J',
        projectName: 'Coastal Vibe',
        position: 'Visualization Studio from the UK',
        star: 5,
        description: `Team really understands the demands of visualization. The renders are crisp, vivid, and come through faster than expected. We’ve partnered on multiple projects and I’m always impressed with their work.`,
        img: `/Feedback/2.webp`,
        ava: '/Avatar/2.jpg',
        content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Interior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">South Florida, USA</span>
          <br/>Client: <span class = "font-[500]">Firefinish Interiors</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        Let’s discover a sculptural dining room with artistic Coastal style designed by Nomo Render in collaboration with Firefinish Interiors. <br/>
      </div>

      <div class = "font-[300] my-4">
        This is a masterclass of aesthetics and practically featuring standout elements: <span class ="font-[500] italic">Smooth organic curves and creamy white finish dining table, Modern wooden chairs with plush white cushions, and Light wood tones in a neutral colour palette</span> that create a cohesive look of warmth and inviting. Every element in this dining room is carefully curated to elevate the overall experience. The 3D renderings provided a photorealistic preview of the space and allowed our design team to experiment with different layouts, material, and lighting options
      </div>
    </div>
  `,
        content2: `
      <div class = "font-[300] my-4">
        This cozy atmosphere extends beyond the dining room, and we bring it into the laid-back beach inspired bedroom with: <span class="font-[500] italic">Wood platform bed anchors, Matching nightstands, A light wood dressers, Full-length double doors</span>. <br/>
      </div>
      <div class = "font-[300] my-4">
        Designed with calm tones, soft textures and just the right amount of sunshine, every detail adds to the effortless and airy feel - from the natural wood finishes to the woven chair and relaxed lighting. Very warm, easy-going and full of charm.
      </div>
  `,
        picDes: {
            pic1: `/Feedback/UserFeedback/4.jpg`,
            pic2: `/Feedback/UserFeedback/5.webp`,
            pic3: '/Feedback/UserFeedback/7.jpg',
            pic4: '/Feedback/UserFeedback/6.webp',
            pic5: '/Feedback/UserFeedback/8.webp',
        }
    },
    {
        name: 'Lucas Müller',
        position: 'Product Designer',
        projectName: 'The Lounge',
        star: 5,
        description: `The renders they produce are sharp and lifelike, making it so much easier to present our ideas to clients. They’re always quick to respond and easy to work with.`,
        img: `/Feedback/HCR0603.png`,
        ava: '/Avatar/3.jpg',
        content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Interior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">London, UK</span>
          <br/>Client: <span class = "font-[500]">Disa Interior</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        A balance between comfort and elegance, The Lounge is an example to Disa Interior’s mastery of high-end residential design. Tasked with their vision, Nomo Render brought this space with precision, ensuring every texture, reflection, and tracing light was shown flawlessly.
      </div>
    </div>
  `,
        content2: `
      <div class = "font-[300] my-4">
        The design blends contemporary style with natural coziness: <span class ="font-[500] italic">Plush seating in deep black velvet sofa, Neutral tone of soft textiles, Custom-built cabinetry</span> to enhance depth and elegance adding to the room’s ambient atmosphere. Moreover, a bespoke circular chandelier acts as a focal point, casting a soft, diffused glow that compliments the natural daylight streaming. <br/>
      </div>

      <div class = "font-[300] my-4">
        Both realism and emotion is the focus of a stunning, immersive visualization when it combines the rich wood grain of shelving, the quality of fabrics, and the reflection room lighting to set a new benchmark for photorealistic rendering experience. 
      </div>
  `,
        picDes: {
            pic1: `/Feedback/UserFeedback/9.png`,
            pic2: `/Feedback/TheLounge1.png`,
            pic3: '/Feedback/TheLounge2.png',
        }
    },
    {
        name: 'Maria Gonzalez',
        position: 'Architect',
        projectName: 'Rustic Elegance',
        star: 5,
        description: `I’ve worked with a lot of companies for my real estate projects, and Nomo Render is by far the best. The renders they create are incredibly detailed and look like actual photographs. This makes a huge difference in showing our properties to potential buyers.`,
        img: `/Feedback/4.webp`,
        ava: '/Avatar/4.jpg',
        content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Interior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">Atlanta, USA</span>
          <br/>Client: <span class = "font-[500]">Kristin Wadsworth Interior</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        At Nomo Render, working with Kristin Wadsworth Interior on this project was an enriching experience. The lodge is a mixture of warmth and sophistication, bringing together rustic textures, earthy tones, and curated furnishings to create an inviting and cozy atmosphere.
      </div>
    </div>
  `,
        content2: `
      <div class = "font-[300] my-4">
        From a rendering perspective, an attention to materiality and lighting was important to keep: <span class ="font-[500] italic">the depth of natural wood grains, the softness textiles, and the subtle of metal accents</span>. We emphasize the exposed beams of the high ceilings by strategic lighting to ensure the space feels more grand and spatial. 
      </div>

      <div class = "font-[300] my-4">
        A key challenge was to deliver the tactile richness of hand-selected materials to a highly realistic visualization from the aged leather armchairs to the textured stone fireplace. 
      </div>

      <div class = "font-[300] my-4">
        Advancing rendering techniques, including lighting and ray tracing, allowed us to achieve an accurate interplay of natural and professional light and keep staying true to the design intent.
      </div>
  `,
        picDes: {
            pic1: `/Feedback/UserFeedback/12.webp`,
            pic2: `/Feedback/UserFeedback/13.webp`,
            pic3: '/Feedback/UserFeedback/14.webp',
        }
    },
    {
        name: 'David Lee',
        position: 'Marketing Manager',
        projectName: 'Frame & Ridge',
        star: 5,
        description: `Their team is always on time, and the quality is exactly what we need. I wouldn’t hesitate to recommend them for any commercial project.`,
        img: `/Feedback/5.jpg`,
        ava: '/Avatar/5.jpg',
        content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Exterior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">San Francisco, USA</span>
          <br/>Client: <span class = "font-[500]">Elephant Town Studio</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        This project explores how structural precision and environmental integration create a home that feels both grounded and creative. Elephant Town Studio designed a residence that adapts to nature while standing out, brought to life by Nomo Render’s blend of form and function.
      </div>
    </div>
  `,
        content2: `
      <div class = "font-[300] my-3">
          The steel-framed overhangs are an aesthetic choice for us, which optimize shading angles for seasonal efficiency. Floor-to-ceiling glazing is not only about openness, but also strategically frames the landscape, turning every window into a living portrait of San Francisco’s terrain: <span class ="font-[500] italic">The material (including raw stone, warm wood and industrial steel), Lighting simulation and texture mapping</span> create a touchable contrast and contribute a dynamic interplay of light and shadow. 
      </div>
  `,
        picDes: {
            pic1: `/Feedback/UserFeedback/15.jpg`,
            pic2: `/Feedback/UserFeedback/16.jpg`,
            pic3: '/Feedback/UserFeedback/17.jpg',
        }
    },
]
const carousel = ref();
const isOpen = ref<boolean>(false);
const selectedItem = ref<CarouselItem | null>(null);
const selectedIndex = ref<number | null>(null);
const totalPage = ref(0);
const currentPage = ref(0);

const openModal = (item: CarouselItem): void => {
    selectedItem.value = item;
    isOpen.value = true;
    selectedIndex.value = items.findIndex(i => i === item);
};

const scrollToModal = () => {
    const modal = document.querySelector('.modal-container');
    if (modal) {
        modal.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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

const goToNextItem = () => {
    if (selectedIndex.value !== null) {
        selectedIndex.value = (selectedIndex.value + 1) % items.length;
        selectedItem.value = items[selectedIndex.value];
        scrollToModal();
    }
};

const goToPrevItem = () => {
    if (selectedIndex.value !== null) {
        selectedIndex.value = (selectedIndex.value - 1 + items.length) % items.length;
        selectedItem.value = items[selectedIndex.value];
        scrollToModal();
    }
};

const isLastItem = computed(() => {
    return currentPage.value === totalPage.value;
});

</script>

<template>
    <div class="my-[5rem]">
        <div class="bg-[#FAF8F5] pt-[55px] pb-[58px]">
            <div class="">
                <p class="text-center text-xl md:text-3xl uppercase mb-5">Feedbacks</p>
                <h2 class="text-center font-semibold text-3xl md:text-6xl mb-5 md:pb-[40px] text-[#8D7662]">
                    What partners talk about us
                </h2>
            </div>
            <div class="relative bg-[#FAF8F5]">
                <div class="relative max-w-[1112px] pt-5 mx-auto">
                    <!-- BUTTON PREVIOUS PC -->
                    <UButton
                        class="hidden md:flex items-center justify-center p-2 absolute left-[-5rem] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-2xl"
                        :class="['hidden md:flex items-center justify-center p-2 absolute left-[-5rem] top-1/2 -translate-y-1/2 z-10  rounded-full shadow-2xl',
                            isLastItem ? 'bg-[#8D7662] hover:bg-[#8D7662]' : 'bg-white/80 hover:bg-white']"
                        @click="carousel.prev()">
                        <div :class="[
                            ' flex justify-center',
                            isLastItem ? 'text-[#FFFFFF]' : 'text-[#8D7662]']">
                            <UIcon name="mdi-light:arrow-left" class="size-10" />
                        </div>
                    </UButton>

                    <!-- BUTTON NEXT PC -->
                    <UButton :class="[
                        'hidden md:flex items-center justify-center p-2 absolute right-[-5rem] top-1/2 -translate-y-1/2 z-10 rounded-full shadow-2xl',
                        isLastItem ? 'bg-[#FFFFFF] hover:bg-[#FFFFFF]' : 'bg-[#8D7662] hover:bg-[#8D7662]'
                    ]" @click="carousel.next()">
                        <!-- <div class="text-[#FFFFFF] flex justify-center">
                            <UIcon name="mdi-light:arrow-right" class="size-10" />
                        </div> -->
                        <div :class="[
                            ' flex justify-center',
                            isLastItem ? 'text-[#8D7662]' : 'text-[#FFFFFF]'
                        ]">
                            <UIcon name="mdi-light:arrow-right" class="size-10" />
                        </div>
                    </UButton>


                    <UCarousel :items="items" arrows :ui="{
                        item: 'basis-full lg:basis-1/2 lg:basis-1/3',
                        arrows: {
                            wrapper: 'flex items-center justify-center mt-2 sm:hidden gap-3 pb-10'
                        }
                    }" ref="carousel">
                        <template #default="{ item }">
                            <div class="flex justify-center w-full pb-1">
                                <div>
                                    <div class="max-w-[360px] w-full">
                                        <NuxtImg :src="item.img" alt="img"
                                            class="w-[360px] h-[250px] rounded-[8px] object-cover object-center"
                                            draggable="false" />
                                    </div>
                                    <div class="mt-[30px] flex gap-5">
                                        <div class="flex items-center justify-center">
                                            <UAvatar :src="item.ava" alt="Avatar"
                                                class="!w-fit !h-fit [&>img]:!w-[70px] [&>img]:!h-[70px] [&>img]:object-cover [&>img]:object-center" />
                                        </div>
                                        <div>
                                            <div class="text-[20px] font-[600] leading-[150%]">
                                                {{ item.name }}
                                            </div>
                                            <div class="text-[16px] font-[400] italic leading-[150%]">
                                                {{ item.position }}
                                            </div>
                                            <div class="flex items-start text-left gap-1 pt-2">
                                                <UIcon v-for="n in item.star" :key="n" name="streamline:star-1-solid"
                                                    class="text-[#FFC300] size-[15px]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            class="text-justify max-w-[340px] text-[20px] leading-[150%] font-[300] md:h-[220px] italic mt-5">
                                            {{ item.description }}
                                        </div>
                                    </div>
                                    <div class="mt-5">
                                        <UButton variant="ghost"
                                            class="outline outline-1 outline-[#980C0C] hover:bg-[#D9D9D9] py-2"
                                            @click="openModal(item)">
                                            <div class="text-[#980C0C] flex justify-center">
                                                <UIcon name="cuida:arrow-right-outline" class="size-5" />See more
                                            </div>
                                        </UButton>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template #prev="{ onClick, disabled }">
                            <UButton
                                class="rounded-full bg-[#FFFFFF] hover:bg-white text-[#8D7662] text-2xl shadow-lg p-2 h-[41px] w-[41px] flex items-center justify-center"
                                color="white" :disabled="disabled" @click="onClick" square>
                                <UIcon name="mingcute:arrow-left-fill" class="size-5" />
                            </UButton>
                        </template>
                        <template #next="{ onClick, disabled }">
                            <UButton
                                class="md:hidden rounded-full bg-[#8D7662] disabled:text-[#8D7662] hover:bg-[#8D7662] text-[#FFFFFF] shadow-lg p-2 h-[41px] w-[41px] flex items-center justify-center"
                                color="white" :disabled="disabled" @click="onClick" square>
                                <UIcon name="mingcute:arrow-right-fill" class="size-5" />
                            </UButton>
                        </template>
                    </UCarousel>

                    <UModal v-model="isOpen"
                        :ui="{ overlay: { background: 'bg-[#000000] opacity-[80%]' }, background: '!shadow-none bg-transparent', container: 'border-none flex items-center justify-center !shadow-none modal-container', width: '' }">
                        <div class="flex gap-2.5 mb-8">
                            <div class="fixed translate-x-[64.1rem] -translate-y-[-30px] hidden md:flex flex-col gap-7">
                                <UButton variant="ghost" size="xl" class="" @click="isOpen = false"
                                    :ui="{ base: '!p-[15px] !focus:outline-none hover:none border-none !bg-[#8D7662] !rounded-full hover:bg-none !ring-0' }">
                                    <UIcon name="i-heroicons-x-mark-20-solid" class="size-7 text-white" />
                                </UButton>
                            </div>
                            <div class="flex items-center justify-center gap-12">
                                <div class="p-5 bg-[#FAF8F5] rounded-full">
                                    <nuxt-img alt="Logo" class="size-[81px]" src="/Logo3.svg" />
                                </div>
                                <div>
                                    <p class="text-[25px] text-[#FAF8F5] font-[500] leading-[200%]">{{
                                        selectedItem?.projectName }}</p>
                                    <p class="font-[300] text-[25px] leading-[200%] text-[#FAF8F5]">Nomo Render - 3D
                                        Visualization Studio
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-[#FAF8F5] rounded-[8px] w-[960px]">
                            <div class="px-[4rem] pt-10 pb-5">
                                <p class="text-[#8D7662] text-[32px] font-[600] mb-5 uppercase leading-[150%]">{{
                                    selectedItem?.projectName
                                }}</p>
                                <div class="text-[25px] leading-[200%] font-[300] text-justify"
                                    v-html="selectedItem?.content1"></div>
                            </div>
                            <div class="bg-[#FAF8F5]">
                                <div class="w-[960px] h-full">
                                    <NuxtImg :src="selectedItem?.picDes.pic1" alt="img"
                                        class="w-full h-auto object-cover object-center" />
                                </div>
                            </div>
                            <div class="px-[4rem] py-5">
                                <div class="text-[25px] leading-[200%] font-[300] text-justify"
                                    v-html="selectedItem?.content2"></div>
                            </div>
                            <div v-if="Object.keys(selectedItem?.picDes || {}).length === 3" class="flex gap-1">
                                <div class="w-[50%]" alt="img des">
                                    <NuxtImg :src="selectedItem?.picDes.pic2" class="w-full h-auto object-cover" />
                                </div>
                                <div class="w-[50%]" alt="img des">
                                    <NuxtImg :src="selectedItem?.picDes.pic3" class="w-full h-auto object-cover" />
                                </div>
                            </div>
                            <div v-if="Object.keys(selectedItem?.picDes || {}).length === 4"
                                class="grid grid-cols-2 gap-2">
                                <div class="col-span-2">
                                    <NuxtImg :src="selectedItem?.picDes.pic2" alt="img des"
                                        class="w-full h-auto object-cover" />
                                </div>
                                <div class="col-span-1">
                                    <NuxtImg :src="selectedItem?.picDes.pic4" alt="img des"
                                        class="w-full h-auto object-cover" />
                                </div>
                                <div class="col-span-1">
                                    <NuxtImg :src="selectedItem?.picDes.pic3" alt="img des"
                                        class="w-full h-auto object-cover" />
                                </div>
                            </div>
                            <div v-if="Object.keys(selectedItem?.picDes || {}).length === 5"
                                class="grid grid-cols-2 gap-2">
                                <div class="col-span-2">
                                    <NuxtImg :src="selectedItem?.picDes.pic2" alt="img des"
                                        class="w-full h-auto object-cover" />
                                </div>
                                <div class="col-span-1">
                                    <NuxtImg :src="selectedItem?.picDes.pic3" class="w-full max-h-[357px] object-cover"
                                        alt="img des" />
                                </div>
                                <div class="col-span-1">
                                    <NuxtImg :src="selectedItem?.picDes.pic4" alt="img des"
                                        class="w-full h-auto object-cover" />
                                </div>
                                <div class="col-span-2">
                                    <NuxtImg :src="selectedItem?.picDes.pic5" alt="img des"
                                        class="w-full h-auto object-cover" />
                                </div>
                            </div>
                            <div class="flex w-full justify-center items-center py-10">
                                <UButton color="gray" variant="solid" type="submit" form="contactForm"
                                    class="bg-gradient-to-r from-[#8D7662] to-[#27211B] lg:px-8 lg:py-5 px-10 hover:bg-[#90755e] rounded-[8px] w-[390px] md:w-auto">
                                    <div
                                        class="w-full flex justify-center items-center uppercase text-[#F5F5F5] leading-[16px] font-[600] text-[28px]">
                                        see more our projects
                                    </div>
                                </UButton>
                            </div>
                        </div>
                        <!-- TWO BUTTON SOCIAL -->
                        <div class="fixed -translate-x-[-1000px] -translate-y-[-140px] hidden md:flex flex-col gap-7">
                            <div class="flex flex-col items-center justify-center">
                                <UButton
                                    class="bg-[#FFFFFF] p-[20px] rounded-full shadow-lg hover:bg-[#FFFFFF] hover:scale-105 transition">
                                    <UIcon name="material-symbols:mail" class="size-12 text-[#8D7662]" />
                                </UButton>
                                <div class="font-[300] text-[20px] leading-[150%] text-[#FAF8F5]">Message</div>
                            </div>
                            <div class="flex flex-col items-center justify-center">
                                <UButton
                                    class="bg-[#FFFFFF] p-[20px] rounded-full shadow-lg hover:bg-[#FFFFFF] hover:scale-105 transition">
                                    <UIcon name="hugeicons:flowchart-02" class="size-12 text-[#8D7662]" />
                                </UButton>
                                <div
                                    class="font-[300] text-[20px] leading-[150%] text-[#FAF8F5] items-center justify-center">
                                    Our workflow
                                </div>
                            </div>
                        </div>
                        <!-- Next Previous -->
                        <div class="fixed translate-x-[60.7rem] translate-y-[30rem] hidden md:flex flex-col gap-7">
                            <UButton
                                class="hidden md:flex items-center justify-center p-2 absolute right-[-7rem] top-1/2 -translate-y-1/2 z-10 bg-[#8D7662] hover:bg-[#8D7662] rounded-full shadow-2xl"
                                @click="goToNextItem">
                                <div class="text-[#FFFFFF] flex justify-center">
                                    <UIcon name="mdi-light:arrow-right" class="size-10" />
                                </div>
                            </UButton>
                        </div>
                        <div class="fixed translate-x-[-0.7rem] translate-y-[30rem] hidden md:flex flex-col gap-7">
                            <UButton
                                class="hidden md:flex items-center justify-center p-2 absolute left-[-7rem] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-2xl"
                                @click="goToPrevItem">
                                <div class="text-[#8D7662] flex justify-center">
                                    <UIcon name="mdi-light:arrow-left" class="size-10" />
                                </div>
                            </UButton>
                        </div>
                    </UModal>
                </div>
            </div>
        </div>
    </div>
</template>