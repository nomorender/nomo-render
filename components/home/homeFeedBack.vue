<script setup lang="ts">
const items = [
    {
        name: 'John S',
        position: 'Architect from USA',
        star: 4,
        description: `I appreciated how quick they are; they’ve always met our deadlines without sacrificing quality. Definitely a go-to for any architects like me`,
        img: `/Feedback/1.jpg`,
        ava: ''
    },
    {
        name: 'Emma J',
        position: 'Visualization Studio from the UK',
        star: 5,
        description: `Team really understands the demands of visualization. The renders are crisp, vivid, and come through faster than expected. We’ve partnered on multiple projects and I’m always impressed with their work.`,
        img: `/Feedback/2.webp`,
        ava: ''
    },
    {
        name: 'Lucas Müller',
        position: 'Product Designer',
        star: 5,
        description: `The renders they produce are sharp and lifelike, making it so much easier to present our ideas to clients. They’re always quick to respond and easy to work with.`,
        img: `/Feedback/3.png`,
        ava: ''
    },
    {
        name: 'Maria Gonzalez',
        position: 'Architect',
        star: 5,
        description: `I’ve worked with a lot of companies for my real estate projects, and Nomo Render is by far the best. The renders they create are incredibly detailed and look like actual photographs. This makes a huge difference in showing our properties to potential buyers.`,
        img: `/Feedback/4.webp`,
        ava: ''
    },
    {
        name: 'David Lee',
        position: 'Marketing Manager',
        star: 5,
        description: `Their team is always on time, and the quality is exactly what we need. I wouldn’t hesitate to recommend them for any commercial project.`,
        img: `/Feedback/5.jpg`,
        ava: ''
    },
]
const carousel = ref()
const isOpen = ref(false)

</script>

<template>
    <div class="pt-20">
        <div class="bg-[#FAF8F5]">
            <div class="pt-20">
                <p class="text-center text-xl md:text-3xl uppercase mb-5">Feedbacks</p>
                <h2 class="text-center font-semibold text-3xl md:text-6xl mb-5 md:mb-20 text-[#8D7662]">
                    What partners talk about us
                </h2>
            </div>
            <div class="relative bg-[#FAF8F5]">
                <UButton
                    class="hidden md:block p-2 absolute md:left-[3rem] md:top-1/2 md:-translate-y-1/2 md:-translate-x-0 z-10 bg-white/80 hover:bg-white rounded-full shadow-2xl"
                    @click="carousel.prev()">
                    <div class="text-[#8D7662] flex justify-center">
                        <UIcon name="mdi-light:arrow-left" class="size-10" />
                    </div>
                </UButton>
                <div class="max-w-[1112px] pt-5 mx-auto md:pb-10">
                    <UCarousel :items="items" arrows :ui="{
                        item: 'basis-full lg:basis-1/2 lg:basis-1/3', arrows: {
                            wrapper: 'flex items-center justify-center mt-2 sm:hidden gap-3 pb-10'
                        },
                    }" ref="carousel">
                        <template #default="{ item }">
                            <div class="flex justify-center w-full pb-10">
                                <div>
                                    <div class="max-w-[360px] w-full">
                                        <NuxtImg :src="item.img"
                                            class="w-full h-[250px] rounded-[8px] object-cover object-center"
                                            draggable="false" />
                                    </div>
                                    <div class="mt-[30px] flex gap-5">
                                        <div>
                                            <UAvatar src="" class="bg-[#D9D9D9] h-[70px] w-[70px]" />
                                        </div>
                                        <div>
                                            <div class="text-[20px] font-[600]">
                                                {{ item.name }}
                                            </div>
                                            <div class="text-[16px] font-[400] italic">
                                                {{ item.position }}
                                            </div>
                                            <div class="flex items-start text-left mt-2 gap-1">
                                                <UIcon v-for="n in item.star" :key="n" name="streamline:star-1-solid"
                                                    class=" text-[#FFC300] size-[20px]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="max-w-[340px] text-[20xp] leading-[150%] font-[300] md:h-[120px] italic mt-5 overflow-hidden">
                                            {{ item.description }}
                                        </div>
                                    </div>
                                    <div class="mt-5">
                                        <UButton variant="ghost"
                                            class="outline outline-1 outline-[#980C0C] hover:bg-[#FAF8F5] py-2"
                                            @click="isOpen = true">
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
                                class="rounded-full bg-[#8D7662] disabled:text-[#8D7662] hover:bg-[#8D7662] text-[#FFFFFF] shadow-lg p-2 h-[41px] w-[41px] flex items-center justify-center"
                                color="white" :disabled="disabled" @click="onClick" square>
                                <UIcon name="mingcute:arrow-right-fill" class="size-5" />
                            </UButton>
                        </template>
                    </UCarousel>

                    <UModal v-model="isOpen">
                        <div class="p-4 relative">
                            <UButton color="gray" square size="xl" icon="i-heroicons-x-mark-20-solid"
                                class="absolute rounded-full right-4 top-4" @click="isOpen = false" />
                            <div class="flex gap-2.5 mb-8">
                                <NuxtImg class="w-[50px] h-[50px]" src="/logo-tron.png"></NuxtImg>
                                <div>
                                    <p class="text-lg font-semibold">Project’s Name</p>
                                    <p class="font-light">Nomo Render - 3D Visualization Studio</p>
                                </div>
                            </div>
                            <p class="text-[#8D7662] font-semibold mb-5">PROJECT’S NAME</p>
                            <div class="h-fit">
                                <div class="text-[15px] leading-[150%] mb-5">Typology: <span
                                        class="font-[500]">Interior</span>
                                    <br />Status:
                                    <span class="font-[500]">Completed</span> <br />Location: <span
                                        class="font-[500]">New York, USA</span>
                                    <br />
                                    Client: <span class="font-[500]">Islyn Studio​​​​​​​​​​​​​</span>​ <br />
                                    Visualization: <span class="font-[500]">Nomo Render</span> <br /> Completion
                                    time: <span class="font-[500]">6 weeks</span>
                                </div>
                                <div class="text-justify leading-[180%]">
                                    Islyn Studio has been our regular client since 2019. Over the years, we’ve completed
                                    about 25 projects
                                    together, some of which have already come to life. Romer Hell’s Kitchen is one such
                                    example - a boutique
                                    hotel that embodies the creative energy of NYC.
                                </div>


                                <div class="">
                                    <NuxtImg src="/Modal.png" class="w-full h-fit" />
                                </div>

                                <div class="text-justify font-[300]">
                                    <p class="leading-[180%]">The design features a mix of custom furniture, bold
                                        artistic choices, and a
                                        strong connection to the
                                        Hell’s Kitchen lifestyle. Spacious rooms with velvet couches and curated local
                                        art create an
                                        atmosphere that feels both stylish and personal.</p>
                                    <p class="leading-[180%]">
                                        Islyn Studio is exceptionally detail-oriented when it comes to rendered
                                        interiors. Their goal is to
                                        present digital images that look as real as possible, with minimal
                                        discrepancies. This high standard
                                        means our work for them takes more time than usual, but the payoff is worth it.
                                        Our precision allows
                                        them to sell their ideas as fully realized, completed designs.
                                    </p>
                                </div>
                                <div class="grid grid-cols-2 gap-2">
                                    <div class="col-span-2">
                                        <NuxtImg src="/Bedroom.png" class="w-full h-auto object-cover" />
                                    </div>
                                    <div class="col-span-1">
                                        <NuxtImg src="/Bedroom2.png" class="w-full h-auto object-cover" />
                                    </div>
                                    <div class="col-span-1">
                                        <NuxtImg src="/Bedroom3.png" class="w-full h-auto object-cover" />
                                    </div>
                                    <div class="col-span-2">
                                        <NuxtImg src="/Bedroom4.png" class="w-full h-auto object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </UModal>
                </div>
                <UButton
                    class="hidden md:block p-2 absolute md:right-[3rem] md:top-1/2 md:-translate-y-1/2 md:-translate-x-0 -translate-y-[-20rem] -translate-x-[-3rem] z-10 bg-[#8D7662] hover:bg-[#8D7662] rounded-full shadow-2xl"
                    @click="carousel.next()">
                    <div class="text-[#FFFFFF] flex justify-center">
                        <UIcon name="mdi-light:arrow-right" class="size-10" />
                    </div>
                </UButton>
            </div>
        </div>
    </div>


</template>