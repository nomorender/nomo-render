<template>
    <div class="pb-20">
        <div class="bg-[#FAF8F5]">
            <div class="md:max-w-7xl md:py-20 py-[40px] md:mx-auto flex flex-col item-center justify-center">
                <div class="flex items-center justify-center">
                    <div class="md:w-full w-[228px]">
                        <p
                            class="text-center md:text-[32px] font-[400] text-[16px] leading-[100%] md:leading-[150%] mb-[5px]">
                            What do we need</p>
                        <h2
                            class="text-center font-semibold md:text-[64px] text-[30px] leading-[100%] md:leading-[150%] mb-5 md:mb-20 text-[#8D7662]">
                            Before Crafting?
                        </h2>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="md:flex gap-[25px] justify-between md:px-0 mx-9">
                        <div
                            class="md:w-[600px] h-[286px] md:h-[480px] bg-[#D8C3A566] md:py-10 py-[30px] flex flex-col md:p-10 rounded-[8px] mb-10 md:mb-0 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                            <div class="flex items-left md:w-full md:px-10 mb-[20px] md:mb-0">
                                <div class="flex items-center justify-center md:gap-4 gap-[10px] pl-6 md:pl-0">
                                    <nuxt-img alt="group" src="/Extorior/Group.svg"
                                        class="md:w-[62px] md:h-[62px] w-[40px] h-[40px]" />
                                    <div class="md:text-[25px] text-[15px] font-[500] leading-[180%] md:leading-[200%]">
                                        Architectural Design Drawings
                                    </div>
                                </div>
                            </div>
                            <ul class="md:px-10 md:pt-5 mx-6 md:mx-0">
                                <li class="flex items-center gap-5 mb-1">
                                    <icon name="material-symbols-light:crop-square-outline" class="md:size-7 size-4" />
                                    <span
                                        class="md:text-[25px] text-[15px] md:leading-[200%] leading-[180%] font-[300] text-justify">Floor
                                        plans</span>
                                </li>
                                <li class="flex items-center gap-5 mb-1">
                                    <icon name="material-symbols-light:crop-square-outline" class="md:size-7 size-4" />
                                    <span
                                        class="md:text-[25px] text-[15px] md:leading-[200%] leading-[180%] font-[300] text-justify">Elevation
                                        views</span>
                                </li>
                                <li class="flex items-center gap-5 mb-1">
                                    <icon name="material-symbols-light:crop-square-outline" class="md:size-7 size-4" />
                                    <span
                                        class="md:text-[25px] text-[15px] md:leading-[200%] leading-[180%] font-[300] text-justify">Section
                                        drawings</span>
                                </li>
                                <li class="flex items-start gap-5 mb-1">
                                    <icon name="material-symbols-light:crop-square-outline "
                                        class="md:size-7 size-4 md:pt-[47px] pt-[26px]" />
                                    <span
                                        class="w-[90%] md:text-[25px] text-[15px] md:leading-[200%] leading-[180%] font-[300]">Detailed construction documents
                                        (material specifications as indicated in the design plans)</span>
                                </li>
                            </ul>
                        </div>
                        <div
                            class="md:w-[600px] h-[286px] md:h-[480px] bg-[#D8C3A566] md:py-10 py-[30px] flex flex-col  md:p-10 rounded-[8px] mb-10 md:mb-0 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                            <div class="flex items-left md:w-full md:px-10 mb-[20px] md:mb-0">
                                <div class="flex items-center justify-center gap-[10px] md:pl-0 pl-6">
                                    <nuxt-img alt="group" src="/Extorior/Group2.svg"
                                        class="md:w-[62px] md:h-[62px] w-[40px] h-[40px]" />
                                    <div class="md:text-[25px] text-[15px] font-[500] leading-[180%] md:leading-[200%]">
                                        Surrounding Context References
                                    </div>
                                </div>
                            </div>
                            <ul class="md:px-10 md:pt-5 md:mx-0 mx-6">
                                <li class="flex items-start gap-5 mb-1">
                                    <icon name="material-symbols-light:crop-square-outline"
                                        class="md:size-7 size-4 md:pt-[47px] pt-[26px]" />
                                    <span
                                        class="w-[90%] md:text-[25px] text-[15px] md:leading-[200%] leading-[180%] font-[300] ">Images/drawings
                                        of the
                                        surrounding landscape and structures (If the rendering needs to reflect the real
                                        environment)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <UButton color="gray" size="xl" variant="solid"
                        class="bg-[#8D7662] uppercase text-[#F5F5F5] md:text-[20px] text-[16px] font-[600] md:px-6 md:py-3 px-6 py-2 hover:bg-[#90755e] md:mt-[3rem]">
                        See our
                        workflow
                    </UButton>
                </div>
            </div>
        </div>
    </div>
</template>
