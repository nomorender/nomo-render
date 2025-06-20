<template>
    <div>
        <div class="md:my-20 mt-[50px] mb-[40px]">
            <div class="flex flex-col gap-[25px] md:mb-0 mb-[35px] justify-center items-center">
                <div class="md:text-[64px] text-[30px] leading-[130%] md:leading-[150%]  font-[600] text-[#8D7662]">
                    Some Of Our Works
                </div>
                <div
                    class="md:text-[32px] text-[18px] w-[315px] md:w-[750px] leading-[180%] md:leading-[150%] font-[300] lg:w-[1210px] text-center">
                    We leverage physically accurate material simulation, advanced ray tracing, and dynamic lighting
                    algorithms to produce <span class="font-[600] italic">high-resolution, precision-crafted interior
                        visualizations.</span>
                </div>
            </div>
            <div class="hidden md:flex flex-col items-center justify-center mt-[70px]">
                <div class="flex flex-col gap-2">
                    <div class="grid grid-cols-10 gap-2 w-full">
                        <div class="block relative group cursor-pointer col-span-3" @click="openModal(1)">
                            <NuxtImg format="webp" v-if="getProjectByStt(1)?.cover_url"
                                :src="getProjectByStt(1)?.cover_url"
                                class=" w-full h-[420px] object-cover break-inside-avoid object-center" />
                            <div
                                class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(1)?.title
                                                }}</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location: {{
                                            getProjectByStt(1)?.location
                                            }}
                                        </div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: {{
                                                getProjectByStt(1)?.client }}</div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                {{ getProjectByStt(1)?.founded }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="block relative group cursor-pointer col-span-4" @click="openModal(2)">
                            <NuxtImg format="webp" v-if="getProjectByStt(2)?.cover_url"
                                :src="getProjectByStt(2)?.cover_url" class=" w-full h-[420px] object-cover" />
                            <div
                                class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(2)?.title
                                                }}</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location:
                                            {{ getProjectByStt(2)?.location }}</div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: {{
                                                getProjectByStt(2)?.client }}</div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                {{ getProjectByStt(2)?.founded }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="block relative group cursor-pointer col-span-3" @click="openModal(3)">
                            <NuxtImg format="webp" v-if="getProjectByStt(3)?.cover_url"
                                :src="getProjectByStt(3)?.cover_url" class=" w-full h-[420px] object-cover" />
                            <div
                                class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(3)?.title
                                            }}</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location: {{
                                            getProjectByStt(3)?.location
                                        }}
                                        </div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(3)?.client
                                                }}</div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                {{ getProjectByStt(3)?.founded
                                                }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-2 w-full">
                        <div class="block relative group cursor-pointer col-span-4" @click="openModal(4)">
                            <NuxtImg format="webp" v-if="getProjectByStt(4)?.cover_url"
                                :src="getProjectByStt(4)?.cover_url" class=" w-full h-[420px] object-cover" />
                            <div
                                class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(4)?.title
                                                }}</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location: {{
                                            getProjectByStt(4)?.location
                                        }}
                                        </div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(4)?.client
                                                }}
                                            </div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                {{ getProjectByStt(4)?.founded
                                                }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="block relative group cursor-pointer col-span-5" @click="openModal(5)">
                            <NuxtImg format="webp" v-if="getProjectByStt(5)?.cover_url"
                                :src="getProjectByStt(5)?.cover_url" class="w-full h-[420px] object-cover" />
                            <div
                                class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(5)?.title
                                                }}</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location: {{
                                            getProjectByStt(5)?.location
                                            }}
                                        </div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(5)?.client
                                                }}
                                            </div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                {{ getProjectByStt(5)?.founded
                                                }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="block relative group cursor-pointer col-span-3" @click="openModal(6)">
                            <NuxtImg format="webp" v-if="getProjectByStt(6)?.cover_url"
                                :src="getProjectByStt(6)?.cover_url" class="w-full h-[420px] object-cover" />
                            <div
                                class="md:pt-8 md:px-5 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(6)?.title
                                                }}</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location: {{
                                            getProjectByStt(6)?.location
                                            }}
                                        </div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(6)?.client
                                                }}</div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                {{ getProjectByStt(6)?.founded
                                                }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-9 gap-2 w-full">
                        <div class="block relative group cursor-pointer col-span-2 " @click="openModal(7)">
                            <NuxtImg format="webp" v-if="getProjectByStt(7)?.cover_url"
                                :src="getProjectByStt(7)?.cover_url" class="w-full h-[420px] object-cover" />
                            <div
                                class="md:pt-8 md:px-5 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(7)?.title
                                            }}</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location: {{
                                            getProjectByStt(7)?.location
                                            }}
                                        </div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(7)?.client
                                                }}</div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                {{ getProjectByStt(7)?.founded
                                                }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="block relative group cursor-pointer col-span-4 " @click="openModal(8)">
                            <NuxtImg format="webp" v-if="getProjectByStt(8)?.cover_url"
                                :src="getProjectByStt(8)?.cover_url" class=" w-full h-[420px] object-cover" />
                            <div
                                class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(8)?.title
                                                }}</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location: {{
                                            getProjectByStt(8)?.location
                                            }}
                                        </div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(8)?.client
                                            }}</div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                {{ getProjectByStt(8)?.founded
                                                }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="block relative group cursor-pointer col-span-3" @click="openModal(9)">
                            <NuxtImg format="webp" v-if="getProjectByStt(9)?.cover_url"
                                :src="getProjectByStt(9)?.cover_url" class=" w-full h-[420px] object-cover" />
                            <div
                                class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(9)?.title
                                            }}</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location: {{
                                            getProjectByStt(9)?.location
                                            }}
                                        </div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(9)?.client
                                                }}</div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                {{ getProjectByStt(9)?.founded
                                                }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="md:hidden flex gap-1 flex-col items-center justify-center">
                <div class="flex flex-col">
                    <div class="grid grid-cols-7 gap-1 w-full">
                        <div class="block relative group cursor-pointer col-span-4" @click="openModal(2)">
                            <NuxtImg format="webp" v-if="getProjectByStt(2)?.cover_url"
                                :src="getProjectByStt(2)?.cover_url"
                                class=" w-full md:h-[420px] h-[135px] object-cover" />
                            <div
                                class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(2)?.title }}
                                            </div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location:
                                            {{ getProjectByStt(2)?.location }}</div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(2)?.client
                                                }}</div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                {{ getProjectByStt(2)?.founded }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="block relative group cursor-pointer col-span-3" @click="openModal(1)">
                            <NuxtImg format="webp" v-if="getProjectByStt(1)?.cover_url"
                                :src="getProjectByStt(1)?.cover_url"
                                class=" w-full md:h-[420px] h-[135px] object-cover" />
                            <div
                                class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(1)?.title
                                                }}</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location:
                                            {{ getProjectByStt(1)?.location
                                            }}</div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(1)?.client
                                            }}</div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                {{ getProjectByStt(1)?.founded
                                                }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col">
                    <div class="grid grid-cols-7 gap-1 w-full">

                        <!-- Pic 3 -->
                        <div class="block relative group cursor-pointer col-span-3" @click="openModal(3)">
                            <NuxtImg format="webp" v-if="getProjectByStt(3)?.cover_url"
                                :src="getProjectByStt(3)?.cover_url"
                                class=" w-full md:h-[420px] h-[135px] object-cover" />
                            <div
                                class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(3)?.title
                                                }}</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location:
                                            {{ getProjectByStt(3)?.location
                                            }}</div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(3)?.client
                                            }}</div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                {{ getProjectByStt(3)?.founded
                                                }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Pic 4 -->
                        <div class="block relative group cursor-pointer col-span-4" @click="openModal(4)">
                            <NuxtImg format="webp" v-if="getProjectByStt(4)?.cover_url"
                                :src="getProjectByStt(4)?.cover_url"
                                class=" w-full md:h-[420px] h-[135px] object-cover" />
                            <div
                                class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(4)?.title
                                                }}</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location:
                                            {{ getProjectByStt(4)?.location }}</div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(4)?.client
                                                }}</div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                {{ getProjectByStt(4)?.founded }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col">
                    <div class="grid grid-cols-7 gap-1 w-full">

                        <!-- Pic 5 -->
                        <div class="block relative group cursor-pointer col-span-4" @click="openModal(5)">
                            <NuxtImg format="webp" v-if="getProjectByStt(5)?.cover_url"
                                :src="getProjectByStt(5)?.cover_url"
                                class=" w-full md:h-[420px] h-[200px] object-cover" />
                            <div
                                class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(5)?.title
                                                }}</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location:
                                            {{ getProjectByStt(5)?.location
                                            }}</div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(5)?.client
                                            }}</div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                {{ getProjectByStt(5)?.founded
                                                }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Pic 7 -->
                        <div class="block relative group cursor-pointer col-span-3" @click="openModal(7)">
                            <NuxtImg format="webp" v-if="getProjectByStt(7)?.cover_url"
                                :src="getProjectByStt(7)?.cover_url"
                                class=" w-full md:h-[420px] h-[200px] object-cover" />
                            <div
                                class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(7)?.title
                                            }}</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location:
                                            {{ getProjectByStt(7)?.location
                                            }}</div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(7)?.client
                                            }}</div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                {{ getProjectByStt(7)?.founded
                                                }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Pic 8 -->
                <div class="block relative cursor-pointer group" @click="openModal(8)">
                    <NuxtImg format="webp" v-if="getProjectByStt(8)?.cover_url" :src="getProjectByStt(8)?.cover_url"
                        class="w-full h-full object-cover object-center" />
                    <div
                        class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                        <div>
                            <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                <div class="flex justify-between">
                                    <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(8)?.title }}</div>
                                    <div class="flex justify-center items-center">
                                        <Icon name="heroicons:arrows-pointing-out-16-solid"
                                            class="size-5 text-[#F97316]" />
                                    </div>
                                </div>
                                <div class="font-[300] leading-[180%] md:leading-[120%]">Location:
                                    {{ getProjectByStt(8)?.location }}</div>
                                <div class="flex justify-between">
                                    <div class="font-[300] leading-[180%]">Client: {{ getProjectByStt(8)?.client }}
                                    </div>
                                    <div
                                        class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                        {{ getProjectByStt(8)?.founded }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="grid grid-cols-7 gap-1 w-full">
                        <!-- Pic 6 -->
                        <div class="block relative group cursor-pointer col-span-3" @click="openModal(6)">
                            <NuxtImg format="webp" v-if="getProjectByStt(6)?.cover_url"
                                :src="getProjectByStt(6)?.cover_url"
                                class=" w-full md:h-[420px] h-[135px] object-cover" />
                            <div
                                class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(6)?.title
                                            }}</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location:
                                            {{ getProjectByStt(6)?.location }}</div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: {{
                                                getProjectByStt(6)?.client }}</div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                {{ getProjectByStt(6)?.founded }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="block relative group cursor-pointer col-span-4" @click="openModal(9)">
                            <NuxtImg format="webp" v-if="getProjectByStt(9)?.cover_url"
                                :src="getProjectByStt(9)?.cover_url"
                                class=" w-full md:h-[420px] h-[135px] object-cover" />
                            <div
                                class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                                        <div class="flex justify-between">
                                            <div class="font-[600] md:leading-[200%]">{{ getProjectByStt(9)?.title
                                                }}</div>
                                            <div class="flex justify-center items-center">
                                                <Icon name="heroicons:arrows-pointing-out-16-solid"
                                                    class="size-5 text-[#F97316]" />
                                            </div>
                                        </div>
                                        <div class="font-[300] leading-[180%] md:leading-[120%]">Location:
                                            {{ getProjectByStt(9)?.location }}</div>
                                        <div class="flex justify-between">
                                            <div class="font-[300] leading-[180%]">Client: {{
                                                getProjectByStt(9)?.client }}</div>
                                            <div
                                                class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                                                {{ getProjectByStt(9)?.founded }}
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
                    <UButton color="gray" variant="solid" to="/portfolio" id="see-more-project"
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
    <ModalItem v-model="isOpen" :items="items" :selectedIndex="selectedIndex" @update:modelValue="isOpen = $event"
        @update:selectedIndex="selectedIndex = $event" />
</template>


<script setup lang="ts">
import { useProjectStoreInterior } from '~/stores/project/useProjectInterior';
import type { Project } from '~/types/project/project'
const isOpen = ref(false)
const selectedItem = ref<Project | undefined>(undefined)
const selectedIndex = ref<number | null>(null)

const store = useProjectStoreInterior();

const fetchData = () => {
    store.load();
};

onMounted(() => {
    fetchData()
})

const items = computed(() => store.res)
const openModal = (stt: number): void => {
    const item = items.value.find(i => i.stt === stt)
    selectedItem.value = item
    selectedIndex.value = items.value.findIndex(i => i.stt === stt)
    isOpen.value = true
}

const getProjectByStt = (stt: number): Project | undefined => {
    return items.value.find(i => i.stt === stt)
}
</script>