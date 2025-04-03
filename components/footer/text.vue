<script setup lang="ts">
const items = [
    {
        name: 'Name',
        position: 'Position',
        star: 4,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
        img: `/services/1.png`,
        ava: ''
    },
    {
        name: 'Name',
        position: 'Position',
        star: 5,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
        img: `/services/2.png`,
        ava: ''
    },
    {
        name: 'Name',
        position: 'Position',
        star: 5,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
        img: `/services/3.png`,
        ava: ''
    },
    {
        name: 'Name',
        position: 'Position',
        star: 5,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
        img: `/services/1.png`,
        ava: ''
    },
    {
        name: 'Name',
        position: 'Position',
        star: 5,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
        img: `/services/1.png`,
        ava: ''
    },
    {
        name: 'Name',
        position: 'Position',
        star: 5,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
        img: `/services/1.png`,
        ava: ''
    },
]
</script>

<template>
    <div class="py-20">
        <div class="bg-[#FAF8F5]">
            <div class="pt-20">
                <p class="text-center text-xl md:text-3xl uppercase mb-5">Feedbacks</p>
                <h2 class="text-center font-semibold text-3xl md:text-6xl mb-5 md:mb-20 text-[#8D7662]">
                    What partners talk about us
                </h2>
            </div>
            <div class="h-fit flex justify-center items-center relative">
                <UCarousel v-slot="{ item }" :items="items" :ui="{
                    item: 'basis-full md:basis-1/3 md:w-[200px] w-[80px]',
                    default: {
                        prevButton: {
                            color: '',
                            class: 'hidden',
                            icon: '',
                        },
                        nextButton: {
                            color: '',
                            class: 'hidden',
                            icon: '',
                        },
                    },
                }" arrows class="w-fit h-fit flex items-center justify-center">
                    <div class="flex items-center justify-center w-full pb-20">
                        <div>
                            <div>
                                <NuxtImg :src=item.img class="w-[360px] h-[250px] rounded-[8px]" draggable="false" />
                            </div>
                            <div class="mt-[30px] flex gap-5">
                                <div>
                                    <UAvatar src="" class="bg-[#D9D9D9] h-[60px] w-[60px]" />
                                </div>
                                <div>
                                    <div class="text-[18px]">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-[14px] font-[400] italic">
                                        {{ item.position }}
                                    </div>
                                    <div class="flex items-start text-left">
                                        <UIcon v-for="n in item.star" :key="n" name="ic:baseline-star"
                                            class=" text-[#FFE100] size-[22px]" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="max-w-[340px] font-[300] italic mt-5 overflow-hidden"
                                    style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 4;">
                                    {{ item.description }}
                                </div>
                            </div>
                            <div class="mt-5">
                                <UButton variant="ghost" class="outline outline-1 outline-[#980C0C]">
                                    <div class="text-[#980C0C] flex justify-center">
                                        <UIcon name="cuida:arrow-right-outline" class="size-5" /> See more
                                    </div>
                                </UButton>
                            </div>
                        </div>
                    </div>
                </UCarousel>
            </div>
        </div>
    </div>

</template>