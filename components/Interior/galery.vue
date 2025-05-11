<template>
    <div>
        <div class="my-20">
            <div class="flex flex-col gap-[25px] justify-center items-center">
                <div class="text-[64px] leading-[150%] font-[600] text-[#8D7662]">
                    Some Of Our Works
                </div>
                <div class="text-[32px] leading-[150%] font-[300] w-[1210px] text-center">
                    We leverage physically accurate material simulation, advanced ray tracing, and dynamic lighting
                    algorithms to produce <span class="font-[600] italic">high-resolution, precision-crafted interior
                        visualizations.</span>
                </div>
            </div>

            <div class="flex flex-col items-center justify-center mt-[70px]">
                <div class="flex flex-col gap-2">
                    <div class="grid grid-cols-10 gap-2 w-full">
                        <div class="hidden md:block relative group cursor-pointer col-span-3" @click="openModal(1)">
                            <NuxtImg src="/Interior/Pic17.jpg"
                                class=" w-full h-[420px] object-cover break-inside-avoid object-center" />
                            <div
                                class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">Organic Modern</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location: Florida, USA
                                        </div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: Firefinish Interiors</div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                2024
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="hidden md:block relative group cursor-pointer col-span-4" @click="openModal(2)">
                            <NuxtImg src="/Interior/Pic11.jpg" class=" w-full h-[420px] object-cover" />
                            <div
                                class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">Serene Study</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location:
                                            Massachusetts, USA</div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: Curtis Rowe Interiors</div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                2024
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="hidden md:block relative group cursor-pointer col-span-3" @click="openModal(3)">
                            <NuxtImg src="/Interior/Pic12.png" class=" w-full h-[420px] object-cover" />
                            <div
                                class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">Timber & Stone</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location: Florida, USA
                                        </div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: Maritza Capiro Design</div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                2024
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-2 w-full">
                        <div class="hidden md:block relative group cursor-pointer col-span-4" @click="openModal(4)">
                            <NuxtImg src="/Interior/Pic13.png" class=" w-full h-[420px] object-cover" />
                            <div
                                class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">Tranquil Haven</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location: New York, USA
                                        </div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: Madeleine Blommer Design
                                            </div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                2024
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="hidden md:block relative group cursor-pointer col-span-5" @click="openModal(5)">
                            <NuxtImg src="/Interior/Pic14.png" class="w-full h-[420px] object-cover" />
                            <div
                                class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">Breezy Space</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location: Florida, USA
                                        </div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: David Phoenix Interior Design
                                            </div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                2024
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="hidden md:block relative group cursor-pointer col-span-3" @click="openModal(6)">
                            <NuxtImg src="/Interior/Pic15.png" class="w-full h-[420px] object-cover" />
                            <div
                                class="md:pt-8 md:px-5 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">Azure Serenity</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location: Carolina, USA
                                        </div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: Lauren McKay Interiors</div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                2024
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-9 gap-2 w-full">
                        <div class="hidden md:block relative group cursor-pointer col-span-2 " @click="openModal(7)">
                            <NuxtImg src="/Interior/Pic8.png" class="w-full h-[420px] object-cover" />
                            <div
                                class="md:pt-8 md:px-5 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">Serene Oasis</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location: Weston, USA
                                        </div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: KJ Design Collective</div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                2024
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="hidden md:block relative group cursor-pointer col-span-4 " @click="openModal(8)">
                            <NuxtImg src="/Interior/Pic18.png" class=" w-full h-[420px] object-cover" />
                            <div
                                class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">Ember Lounge</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location: Chicago, USA
                                        </div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: Studio MAK</div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                2024
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="hidden md:block relative group cursor-pointer col-span-3" @click="openModal(9)">
                            <NuxtImg src="/Interior/Pic19.png" class=" w-full h-[420px] object-cover" />
                            <div
                                class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">Olive Haven</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location: Chicago, USA
                                        </div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: Studio MAK</div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                2024
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="flex w-full justify-center items-center pt-10">
                    <UButton color="gray" variant="solid"
                        class="bg-gradient-to-r from-[#8D7662] to-[#27211B] lg:px-8 lg:py-5 px-6 py-4 hover:bg-[#90755e] rounded-[8px] md:w-auto">
                        <div
                            class="w-full flex justify-center items-center uppercase text-[#F5F5F5] leading-[16px] font-[600] md:text-[28px] text-[16px]">
                            see more our projects
                        </div>
                    </UButton>
                </div>
            </div>
        </div>
    </div>

    <UModal v-model="isOpen"
        :ui="{ overlay: { background: 'bg-black/80' }, background: '!shadow-none bg-transparent', container: 'border-none flex items-center justify-center !shadow-none modal-container pb-[120px]', width: '' }">
        <div class="flex md:gap-2.5 mb-8 justify-between">
            <div class="flex items-center justify-center md:gap-12 gap-3">
                <div class="md:p-5 p-2 bg-[#FAF8F5] rounded-full">
                    <nuxt-img class="md:size-[81px] size-[33px]" src="/Logo3.svg" alt="Logo" />
                </div>
                <div>
                    <p
                        class="md:text-[25px] text-[18px] text-[#FAF8F5] md:font-[500] font-[600] md:leading-[200%] leading-[100%]">
                        {{ selectedItem?.name }}</p>
                    <p class="font-[300] md:text-[25px] text-[15px] md:leading-[200%] leading-[180%] text-[#FAF8F5]">
                        Nomo Render
                        -
                        3D Visualization Studio</p>
                </div>
            </div>

            <div class="fixed md:translate-x-[64.1rem] md:-translate-y-[-30px] -translate-x-[-19.5rem]">
                <UButton variant="ghost" size="xl" class=" " @click="isOpen = false" :ui="{
                    base: 'md:!p-[15px] !p-[6px] !focus:outline-none hover:none border-none md:!bg-[#8D7662] !bg-[#D9D9D9] !rounded-full hover:bg-none !ring-0',
                }">
                    <UIcon name="i-heroicons-x-mark-20-solid" class="size-7 md:text-white text-[#1D1B20]" />
                </UButton>
            </div>
        </div>

        <div class="bg-[#FAF8F5] rounded-[8px] md:w-[960px] w-[355px]">
            <div class="md:px-[4rem] px-[35px] md:pt-[55px] pt-[40px] md:pb-5 pb-3">
                <p class="text-[#8D7662] md:text-[32px] text-[16px] font-[600] mb-5 uppercase leading-[150%]">{{
                    selectedItem?.name }}</p>
                <div class="md:text-[25px] text-[15px] leading-[200%] font-[300] text-justify"
                    v-html="selectedItem?.content1">
                </div>
            </div>
            <div class="bg-[#FAF8F5]">
                <div class="md:w-[960px] h-full w-[355px]">
                    <NuxtImg alt="PicHouse" :src="selectedItem?.picDes.pic1"
                        class="w-full h-auto object-cover object-center" />
                </div>
            </div>
            <div class="md:px-[4rem] px-[35px] py-[30px]">
                <div class="md:text-[25px] text-[15px] md:leading-[200%] leading-[180%] font-[300] text-justify"
                    v-html="selectedItem?.content2"></div>
            </div>

            <div v-if="Object.keys(selectedItem?.picDes || {}).length === 3" class="flex gap-1">
                <div class="w-[50%]">
                    <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic2" class="w-full h-auto object-cover" />
                </div>
                <div class="w-[50%]">
                    <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic3" class="w-full h-auto object-cover" />
                </div>
            </div>

            <div v-if="Object.keys(selectedItem?.picDes || {}).length === 4" class="grid grid-cols-2 gap-2">
                <div class="col-span-2">
                    <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic2" class="w-full h-auto object-cover" />
                </div>
                <div class="col-span-1">
                    <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic4" class="w-full h-auto object-cover" />
                </div>
                <div class="col-span-1">
                    <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic3" class="w-full h-auto object-cover" />
                </div>
            </div>

            <div v-if="Object.keys(selectedItem?.picDes || {}).length === 5" class="grid grid-cols-2 gap-2">
                <div class="col-span-2">
                    <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic2" class="w-full h-auto object-cover" />
                </div>
                <div class="col-span-1 md:h-[357px] h-[131px]">
                    <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic3" class="w-full h-full object-cover" />
                </div>
                <div class="col-span-1 ">
                    <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic4" class="w-full h-auto object-cover" />
                </div>
                <div class="col-span-2">
                    <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic5" class="w-full h-auto object-cover" />
                </div>
            </div>

            <div class="flex w-full justify-center items-center py-10">
                <UButton color="gray" variant="solid" type="submit" form="contactForm"
                    class="bg-gradient-to-r from-[#8D7662] to-[#27211B] lg:px-8 lg:py-5 px-6 py-4 hover:bg-[#90755e] rounded-[8px] md:w-auto">
                    <div
                        class="w-full flex justify-center items-center uppercase text-[#F5F5F5] leading-[16px] font-[600] md:text-[28px] text-[16px]">
                        see more our projects
                    </div>
                </UButton>
            </div>

        </div>


        <!-- 2 BUTTON NEXT TO THE MODAL PC -->
        <div class="fixed -translate-x-[-1000px] -translate-y-[-140px] hidden md:flex">
            <!-- TWO BUTTON SOCIAL -->
            <div class="md:flex flex-col gap-7">
                <div class="flex flex-col items-center justify-center">
                    <NuxtLink to="https://wa.me/84967563407" target="_blank">
                        <UButton
                            class="bg-[#FFFFFF] p-[20px] rounded-full shadow-lg hover:bg-[#FFFFFF] hover:scale-105 transition">
                            <UIcon name="material-symbols:mail" class="size-12 text-[#8D7662]" />
                        </UButton>
                    </NuxtLink>
                    <div class="font-[300] text-[20px] leading-[150%] text-[#FAF8F5]">Message</div>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <UButton
                        class="bg-[#FFFFFF] p-[20px] rounded-full shadow-lg hover:bg-[#FFFFFF] hover:scale-105 transition">
                        <UIcon name="hugeicons:flowchart-02" class="size-12 text-[#8D7662]" />
                    </UButton>
                    <div class="font-[300] text-[20px] leading-[150%] text-[#FAF8F5] items-center justify-center">Our
                        workflow
                    </div>
                </div>
            </div>
        </div>

        <!-- BAR FOR MODAL MOBILE  -->
        <div v-if="isOpen" class="w-full fixed bottom-0 left-0 py-3 md:hidden bg-[#D9D9D9]">
            <!-- TWO BUTTON SOCIAL -->
            <div class="flex w-full justify-center items-center gap-10">
                <div class="flex flex-col items-center justify-center gap-1">
                    <UButton
                        class="flex items-center justify-center p-3 bg-white/80 hover:bg-white rounded-full shadow-2xl"
                        @click="">
                        <div class="text-[#8D7662] flex justify-center">
                            <UIcon name="mdi-light:arrow-left" class="size-4" />
                        </div>
                    </UButton>
                    <div class="font-[300] text-[10px] leading-[150%] text-[#000000]">Back</div>
                </div>

                <div class="flex flex-col items-center justify-center gap-1">
                    <NuxtLink to="https://wa.me/84967563407" target="_blank">
                        <UButton
                            class="bg-[#FFFFFF] md:p-[20px] p-[10px] rounded-full shadow-lg hover:bg-[#FFFFFF] hover:scale-105 transition">
                            <UIcon name="material-symbols:mail" class="md:size-12 size-5 text-[#8D7662]" />
                        </UButton>
                    </NuxtLink>
                    <div class="font-[300] text-[10px] leading-[150%] text-[#000000]">Message</div>
                </div>
                <div class="flex flex-col items-center justify-center gap-1">
                    <UButton
                        class="bg-[#FFFFFF] md:p-[20px] p-[10px] rounded-full shadow-lg hover:bg-[#FFFFFF] hover:scale-105 transition">
                        <UIcon name="hugeicons:flowchart-02" class="md:size-12 size-5 text-[#8D7662]" />
                    </UButton>
                    <div class="font-[300] text-[10px] leading-[150%] text-[#000000] items-center justify-center">Our
                        workflow
                    </div>
                </div>

                <div class="flex flex-col items-center justify-center gap-1">
                    <UButton
                        class="flex items-center justify-center p-3 bg-[#8D7662] hover:bg-[#8D7662] rounded-full shadow-2xl"
                        @click="">
                        <div class="text-[#FFFFFF] flex justify-center">
                            <UIcon name="mdi-light:arrow-right" class="size-4" />
                        </div>
                    </UButton>
                    <div class="font-[300] text-[10px] leading-[150%] text-[#000000]">Next</div>
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
</template>


<script setup lang="ts">

interface Item {
    id: number
    name: string
    content1: any
    content2: any
    picDes: any
}

const items: Item[] = [
    {
        id: 1,
        name: 'Organic Modern',
        content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Interior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">Florida, USA</span>
          <br/>Client: <span class = "font-[500]">Firefinish Interiors</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        Introducing Organic Modern, a design project focusing on interior spaces with a blend of organic textures and contemporary minimalism from Firefinish Interiors. The living room features a curved grey sofa, light wooden armchairs, and abstract artworks, all harmonized by warm wood tones and natural lighting. A sculptural arc lamp and wood wall art add depth to the space
      </div>
    </div>
  `,
        content2: `
      <div class = "font-[300]">
          We, Nomo Render, brought this vision to life through photorealistic 3D visuals, optimizing layouts and material selections. The kitchen extends the aesthetic with marble countertops, wicker bar stools, and brass accents, creating a light and airy atmosphere.
      </div>

      <div class = "font-[300] my-4">
          Every element is curated for cohesion - from the earthy living room palette to the kitchen’s gold and wood finishes. The result is a timeless, inviting space where organic forms meet modern sophistication.
      </div>
  `,
        picDes: {
            pic1: `/Service1Pic1.png`,
            pic2: `/HAR01.jpg`,
            pic3: '/HAR02.jpg',
        }
    },
    {
        id: 2,
        name: 'Serene Study',
        content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Interior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">Massachusetts, USA</span>
          <br/>Client: <span class = "font-[500]">Curtis Rowe Interiors</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        Serene Study is all about creating a space that feels as good as it looks. A design project focusing on interior spaces with a blend of modern elegance and refined comfort from Curtis Rowe Interiors. The space balances aesthetics and function with key features like curved-top bookshelves, a muted teal-green palette, and curated decorative elements. These details reflect a sense of luxury and calm.
      </div>
    </div>
  `,
        content2: `
       <div class = "font-[300]">
          We at Nomo Render brought the vision to life with photorealistic 3D renders, helping fine-tune the layout and materials. The home office maintains cohesion with the same wall color and design ethos, featuring a dark wooden desk, open shelving, and golden accents.
      </div>

      <div class = "font-[300] my-4">
          Every element, from the sculptural furnishings to the warm lighting, enhances the inviting atmosphere. It’s a perfect blend of style and comfort - ideal for getting focused or simply enjoying the view.
      </div>
  `,
        picDes: {
            pic1: `/HAR07.png`,
            pic2: '/HAR08.jpg',
            pic3: '/HAR9.jpg',
            pic4: '/HAR10.jpg',
            pic5: '/HAR11.jpg',
        }
    },
    {
        id: 3,
        name: 'Tranquil Haven',
        content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Interior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">New York, USA</span>
          <br/>Client: <span class = "font-[500]">Madeleine Blommer Design</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        Step inside Tranquil Haven - a calming, modern retreat designed by Madeleine Blommer Design, with a blend of organic warmth and modern elegance. The serene bedroom features soft muted green walls, crisp white trim, and warm amber lighting, creating a cozy retreat. Key elements include a sculptural drum pendant, a creamy upholstered bed, and natural bamboo shades that enhance the room’s calming essence.
      </div>
    </div>
  `,
        content2: `
      <div class = "font-[300] my-4">
        We at Nomo Render helped bring it all to life with photorealistic 3D visuals, dialing in the layout and materials for a space that flows beautifully. The vibe carries into the adjacent living room too - minimal, airy, and filled with soft neutrals, clean lines, and a paper lantern that keeps things feeling light and effortless.
      </div>

      <div class = "font-[300] my-4">
        Every piece, from the cozy rug to the curated art, works together to create a peaceful, polished space that feels just as good as it looks.
      </div>
  `,
        picDes: {
            pic1: `/Extorior/6.png`,
            pic2: `/Extorior/EX1.png`,
            pic3: '/Extorior/EX2.png',
        }
    },
    {
        id: 4,
        name: 'The Stonehaven',
        content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Exterior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">New York, USA</span>
          <br/>Client: <span class = "font-[500]">Parlato Development Group</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        Standing as a design for luxury living in New York Residence, this design is a perfect mixture of natural stone, rich wood accents and expansive glass elements.
      </div>
    </div>
  `,
        content2: `
      <div class = "font-[300] my-4">
        The residence features a balanced composition of central entrance and a gravel driveway with structured landscaping. Floor-to-ceiling windows and sliding glass doors, which blur the boundary between interior and exterior to optimize views and daylighting.
      </div>

      <div class = "font-[300] my-4">
        Designed in partnership with Parlato Development Group, this stunning 2-story estate showcases: <span class = "font-[500]">Symmetrical facade with dual chimneys, Gabled rooflines, A spacious outdoor living area with poolside and large windows</span> which connects every detail reflecting its creator and the lifestyle of those who will call it home.
      </div>
  `,
        picDes: {
            pic1: `/Extorior/5.png`,
            pic2: `/Extorior/EX3.jpg`,
            pic3: '/Extorior/EX4.jpg',
        }
    },
    {
        id: 5,
        name: 'Brightnest',
        content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Exterior & Interior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">West Sussex, UK</span>
          <br/>Client: <span class = "font-[500]">Platform 3 Studio</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        What an experience! BrightNest is our design project in collaboration with Platform 3. It is a vibrant and engaging elementary school classroom design, crafted to nurture young minds in a dynamic learning environment.
      </div>
    </div>
  `,
        content2: `
      <div class = "font-[300] my-4">
        This project is a perfect blend of creativity, functionality and warmth, which we use playful colours, natural light and interactive elements as the foundation. 
      </div>

      <div class = "font-[300] my-4">
        From cozy reading room to lively group activity spaces, each area is carefully curated to support learning experience, with: <span class = "font-[500]">Large south-facing windows, Acoustic panels, The polyurethane flooring.</span> The completed design reflects where design meets function to empower the next generation of learners
      </div>
  `,
        picDes: {
            pic1: `/Extorior/XRL01.png`,
            pic2: `/Extorior/EX5.png`,
            pic3: '/Extorior/EX6.png',
            pic4: '/Extorior/EX7.png',
        }
    },
    {
        id: 6,
        name: 'Modern Haven Residences',
        content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Exterior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">Ulm, Germany</span>
          <br/>Client: <span class = "font-[500]">MF</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        With a commitment to functional elegance and sustainable design, this collaboration of MF with us brings innovative architectural concepts to life.
      </div>
    </div>
  `,
        content2: `
      <div class = "font-[300] my-4">
        A blend of modern minimalism and aesthetic appeal with practicality, Nomo Render worked closely with MF to bring their architectural vision through landscape <span class = "font-[500]">featuring lush greenery, soft contours creating a welcoming atmosphere</span>
      </div>

      <div class = "font-[300] my-4">
        By understanding their intent and project goals, we crafted every detail, from the strategic lighting to the realistic reflection with <span class = "font-[500]">clean geometric lines, expansive glass windows, and sleek back railings</span>, to emphasize openness and natural light.
      </div>
  `,
        picDes: {
            pic1: `/Extorior/7.png`,
            pic2: `/Extorior/EX8.png`,
            pic3: '/Extorior/EX9.png',
            pic4: '/Extorior/EX10.png',
        }
    },

    {
        id: 7,
        name: 'The Manor',
        content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Exterior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">Georgia, USA</span>
          <br/>Client: <span class = "font-[500]">Jeffrey Bruce Baker</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        Fusion of European style and Southern charm? Why not? The Manor is a distinguished architectural vision brought to life through our teamwork with Jeffrey Bruce Baker Company. Inspired by the timeless beauty of Old-World estates, this residences shows <span class = "font-[500]">warm brick textures, sculptural rooflines, copper details</span> to create a sense of refined beauty
      </div>
    </div>
  `,
        content2: `
      <div class = "font-[300] my-4">
        We focus on capturing the soft, neutral complementary with rich earthy materials through precise visualization. From the curved brick parapet to the turret-style bay window, each detail is crafted to reflect the architectural narrative envisioned by the client.
      </div>
  `,
        picDes: {
            pic1: `/Extorior/3.png`,
            pic2: `/Extorior/EX11.png`,
            pic3: '/Extorior/EX12.png',
            pic4: '/Extorior/EX13.png',
        }
    },

    {
        id: 8,
        name: 'Frame & Ridge',
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
      <div class = "font-[300] my-4">
        The steel-framed overhangs are an aesthetic choice for us, which optimize shading angles for seasonal efficiency. Floor-to-ceiling glazing is not only about openness, but also strategically frames the landscape, turning every window into a living portrait of San Francisco’s terrain: <span class = "font-[500]">The material (including raw stone, warm wood and industrial steel), Lighting simulation and texture mapping</span> create a touchable contrast and contribute a dynamic interplay of light and shadow. 
      </div>
  `,
        picDes: {
            pic1: `/Feedback/UserFeedback/15.jpg`,
            pic2: `/Feedback/UserFeedback/16.jpg`,
            pic3: '/Feedback/UserFeedback/17.jpg',
        }
    },
]


const isOpen = ref(false)
const selectedItem = ref<Item | undefined>(undefined)

const selectedIndex = ref<number | null>(null)

const openModal = (id: number): void => {
    const item = items.find(i => i.id === id)
    selectedItem.value = item
    selectedIndex.value = items.findIndex(i => i.id === id)
    isOpen.value = true
}

const goToNextItem = () => {
    if (selectedIndex.value !== null) {
        selectedIndex.value = (selectedIndex.value + 1) % items.length
        selectedItem.value = items[selectedIndex.value]
        const modal = document.querySelector('.modal-container')
        if (modal) {
            modal.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }
}

const goToPrevItem = () => {
    if (selectedIndex.value !== null) {
        selectedIndex.value = (selectedIndex.value - 1 + items.length) % items.length
        selectedItem.value = items[selectedIndex.value]

        const modal = document.querySelector('.modal-container')
        if (modal) {
            modal.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }
}
</script>