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
                                                2025
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
                                                2025
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
                                                2025
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
                                                2025
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
                                            <div class="font-[300] leading-[180%]">Client: L.M Interiors</div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                2025
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
                                            <div class="font-[300] leading-[180%]">Client: KJ Design</div>
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
                                            <div class="font-[600] md:leading-[200%]">Timeless Hearth</div>
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
                                                2025
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
                                                2025
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
                    <NuxtImg v-if="selectedItem?.picDes?.pic1" alt="PicHouse" :src="selectedItem?.picDes.pic1"
                        class="w-full h-auto object-cover object-center" />
                </div>
            </div>
            <div class="md:px-[4rem] px-[35px] py-[30px]" v-if="selectedItem?.content2">
                <div class="md:text-[25px] text-[15px] md:leading-[200%] leading-[180%] font-[300] text-justify"
                    v-html="selectedItem?.content2"></div>
            </div>

            <div v-if="Object.keys(selectedItem?.picDes || {}).length === 3" class="flex gap-1">
                <div class="w-[50%]">
                    <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic2" class="w-full h-[421px] object-cover" />
                </div>
                <div class="w-[50%]">
                    <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic3" class="w-full h-[421px] object-cover" />
                </div>
            </div>

            <div v-if="Object.keys(selectedItem?.picDes || {}).length === 4 && selectedItem?.picDes.pic1"
                class="grid grid-cols-2 gap-2">
                <div class="col-span-2">
                    <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic2" class="w-full h-full object-cover" />
                </div>
                <div class="col-span-1">
                    <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic4" class="w-full h-[421px] object-cover" />
                </div>
                <div class="col-span-1">
                    <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic3" class="w-full h-[421px] object-cover" />
                </div>
            </div>

            <div v-if="Object.keys(selectedItem?.picDes || {}).length === 4 && !selectedItem?.picDes.pic1"
                class="grid grid-cols-2 gap-2">
                <div class="col-span-2">
                    <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic2" class="w-full h-full object-cover" />
                </div>
                <div class="col-span-1 md:h-[357px] h-[131px]">
                    <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic3" class="w-full h-[421px] object-cover" />
                </div>
                <div class="col-span-1 ">
                    <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic4" class="w-full h-[421px] object-cover" />
                </div>
                <div class="col-span-2">
                    <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic5" class="w-full h-full object-cover" />
                </div>
            </div>

            <div v-if="Object.keys(selectedItem?.picDes || {}).length === 5" class="grid grid-cols-2 gap-2">
                <div class="col-span-2">
                    <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic2" class="w-full h-[421px] object-cover" />
                </div>
                <div class="col-span-1 md:h-[357px] h-[131px]">
                    <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic3" class="w-full h-full object-cover" />
                </div>
                <div class="col-span-1 ">
                    <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic4" class="w-full h-[421px] object-cover" />
                </div>
                <div class="col-span-2">
                    <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic5" class="w-full h-[421px] object-cover" />
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
    content2?: any
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
            pic1: `/Interior/Pic17.jpg`,
            pic2: `/Interior/Pic20.png`,
            pic3: '/Interior/Pic21.png',
            pic4: '/Interior/Pic22.png',
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
            pic1: `/Interior/Pic11.jpg`,
            pic2: '/Interior/Pic23.jpg',
            pic3: '/Interior/Pic24.jpg',
        }
    },
    {
        id: 3,
        name: 'Timber & Stone',
        content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Interior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">Florida, USA</span>
          <br/>Client: <span class = "font-[500]">Maritza Capiro Design</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        Designed by Maritza Capiro Design, this kitchen is all about contrasts that click. Tiimber & Stone is the blending organic warmth with minimalist precision. The space is defined by natural wood cabinetry, a striking gray marbled island, and a dark textured stone backsplash, creating a balance of contrast and harmony.
      </div>

      <div class = "font-[300] mb-4">
        We from Nomo Render Team capture every detail in photorealistic 3D renders, refining layout, finishes, and lighting so that each element feels intentional. The open wooden shelves, integrated appliances, and light terrazzo flooring reflect meticulous craftsmanship and functional elegance.
      </div>

       <div class = "font-[300] mb-4">
        The large square window frames lush greenery, enhancing the connection to nature. Every detail such as the woven bar stools and even the neutral palette, cultivates a serene, inviting atmosphere. A kitchen that feels calm, curated, and quietly luxurious. That is a proof when simplicity and sophistication can absolutely be friends.
      </div>
    </div>
  `,
        picDes: {
            pic2: `/Interior/Pic12.png`,
            pic3: `/Interior/Pic27.png`,
            pic4: '/Interior/Pic26.jpg',
            pic5: '/Interior/Pic26.jpg',
        }
    },
    {
        id: 4,
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
        Step inside Tranquil Haven - a calming, modern retreat designed by Madeleine Blommer Design, with a blend of organic warmth and modern elegance. The serene bedroom features soft muted green walls, crisp white trim, and warm amber lighting, creating a cozy retreat. Key elements include a sculptural drum pendant, a creamy upholstered bed, and natural bamboo shades that enhance the room’s calming essence
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
            pic1: `/Interior/Pic13.png`,
            pic2: `/Interior/Pic28.png`,
            pic3: '/Interior/Pic29.png',
        }
    },
    {
        id: 5,
        name: 'Breezy Space',
        content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Interior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">Florida, USA</span>
          <br/>Client: <span class = "font-[500]">David Phoenix Interior Design</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        Breezy Space designed by David Phoenix Interior Design with coastal and contemporary influences, is the open-concept dining and kitchen area. It features a soft palette of light beige, cream, and aqua, creating an airy and inviting atmosphere
      </div>
       <div class = "font-[300] mb-4">
        Key elements include light cabinetry, marble countertops, and aqua-tiled backsplashes in the kitchen. The dining area is anchored by a wooden table paired with rattan-back chairs and blue cushions, complemented by a striking spherical chandelier with blue accents. Large windows flood the space with natural light, enhancing its warmth and elegance.
      </div>
    </div>
  `,
        content2: `
      <div class = "font-[300] my-4">
        We teamed up with the design to bring this space to life through photorealistic 3D visuals: adjusting layouts, materials, and details until everything just clicked. The pendant lights, the texture of the tiles and the overall flow, it all came together with a clear vision and a thoughtful touch by our Nomo Render Team
      </div>

      <div class = "font-[300] my-4">
        That easygoing, polished vibe doesn’t stop at the kitchen and dining area. The result is a timeless, serene environment that feels both modern and effortlessly inviting
      </div>
  `,
        picDes: {
            pic1: `/Interior/Pic14.png`,
            pic2: `/Interior/Pic14.png`,
            pic3: `/Interior/Pic30.png`,
            pic4: '/Interior/Pic31.png',
        }
    },
    {
        id: 6,
        name: 'Azure Serenity',
        content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Interior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">Carolina, USA</span>
          <br/>Client: <span class = "font-[500]">L.M Interiors</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        Take a peek into Azure Serenity, a bathroom project that’s equal parts spa day and style statement, brought to life by the collaboration of Nomo Render with Lauren McKay Interiors. The space features a freestanding bathtub framed by a curved window, light blue walls, and gold-accented white cabinetry, creating a bright and airy retreat. Key elements include marble flooring, a decorative chandelier, and sconce lighting that enhances the tranquil ambiance.
      </div>
    </div>
  `,
        content2: `
      <div class = "font-[300] my-4">
        We brought this vision to life with photorealistic 3D visuals, optimizing layouts and material selections for a seamless design process. The vanity area mirrors the same refined aesthetic, with a marble countertop, gold-framed mirror, and repeated sconce reflections adding depth.</span>
      </div>

      <div class = "font-[300] my-4">
        Everything in here plays together beautifully, the cool tones, the warm lights, the luxe textures. The whole design just flows, making sure function never gets in the way of a little indulgence. It’s calm, curated, and ready for its close-up.
      </div>
  `,
        picDes: {
            pic1: `/Interior/Pic15.png`,
            pic2: `/Interior/Pic33.png`,
            pic3: '/Interior/Pic34.png',
        }
    },

    {
        id: 7,
        name: 'Serene Oasis',
        content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Interior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">Weston, USA</span>
          <br/>Client: <span class = "font-[500]">KJ Design</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        Welcome to Serene Oasis! A calming escape by KJ Design Collective focuses on interior spaces with a blend of organic luxury and modern minimalism. The bathroom exudes tranquility with its woven-textured vanity, marble countertops, and a freestanding tub framed by lush tropical views. Gold accents and a contemporary chandelier elevate the space, while herringbone flooring adds subtle texture.
      </div>

      <div class = "font-[300] mb-4">
        The living area continues the theme of warmth and sophistication, featuring light wood tones, built-in cabinetry, and a curated seating arrangement. An abstract painting and arched doorway enhance the refined yet inviting atmosphere.
      </div>

      <div class = "font-[300] mb-4">
        At Nomo Render, we helped bring these spaces to life through photorealistic 3D visuals: tweaking layouts, dialing in materials, and playing with light until every detail felt just right.       </div>
      </div>
      <div class = "font-[300]">
        Serene Oasis is the kind of place that whispers luxury and leaves a lasting impression, from sculptural accents to that calm, collected palette.
      </div>
  `,

        picDes: {
            pic2: `/Interior/Pic16.png`,
            pic3: '/Interior/Pic35.png',
            pic4: '/Interior/Pic36.png',
            pic5: '/Interior/Pic37.png',
        }
    },

    {
        id: 8,
        name: 'Timeless Hearth',
        content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Interior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">Chicago, USA</span>
          <br/>Client: <span class = "font-[500]">Studio MAK</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        Back at it with Studio MAK 🤝 Our second collab, Timeless Hearth, is all about cozy luxury, beige tones, wood textures, and a marble fireplace moment you’ll want to curl up next to 🔥
      </div>
    </div>
  `,
        content2: `
      <div class = "font-[300] my-4">
        Set in an open-plan layout, the living room embraces a serene neutral palette: beige walls, light wood flooring, and a plush cream sectional accented with earthy orange and brown pillows. A marble fireplace adds subtle luxury, while a tall olive tree brings in a gentle, organic touch. Overhead, dark wood beams introduce architectural rhythm and balance, complemented by a grounded coffee table that anchors the space.
      </div>
       <div class = "font-[300] mb-4">
        By refining every layout, material, and finish Nomo Render could capture that luxurious-yet-livable energy. The open-plan kitchen and dining space keeps the mood going strong with beige cabinetry, marble surfaces, and clean, calming lines.
       </div>
       <div class = "font-[300] mb-4">
        It’s soft, sculptural, and seriously inviting because comfort and elegance? They go hand in hand. 🤎
       </div>
  `,
        picDes: {
            pic1: `/Interior/Pic18.png`,
            pic2: `/Interior/Pic38.png`,
            pic3: '/Interior/Pic39.png',
            pic4: '/Interior/Pic40.png',
        }
    },

    {
        id: 9,
        name: 'Olive Haven',
        content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Interior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">Chicago, USA</span>
          <br/>Client: <span class = "font-[500]">Studio MAK</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        Olive Haven. All wrapped up in a chic home office designed by the amazing Studio MAK and brought to life in photorealistic glory by Nomo Render. 
      </div>

       <div class = "font-[300] mb-4">
        This space is all about balance: a muted olive-green palette, natural light streaming in, and sculptural furnishings that make you want to work and stay a little longer. Desk goals? Check. A black marble-like desk with sleek cylindrical legs and a gold chandelier that definitely has something to say.
      </div>

      <div class = "font-[300] mb-4">
        Pair that with beige and black-framed chairs, a textured cowhide rug, and a tiered white planter for contrast, and you've got a workspace that’s sophisticated with a dash of warmth. The brown velvet chair and angular desk lamp? Pure mood 
      </div>

       <div class = "font-[300] mb-4">
        A polished, inviting workspace that’s all about function and flair. Cohesion? We’ve got that covered. This is one office where both style and productivity flow seamlessly.      </div>
        </div>
  `,
        picDes: {
            pic1: `/Interior/Pic19.png`,
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