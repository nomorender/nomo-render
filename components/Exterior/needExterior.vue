<template>
    <div class="pb-20">
        <div class="bg-[#FAF8F5]">
            <div class="max-w-7xl py-20 mx-auto flex flex-col item-center justify-center">
                <div>
                    <p class="text-center text-[32px] md:text-3xl">What do we need</p>
                    <h2 class="text-center font-semibold text-3xl text-[64px] md:text-6xl mb-5 md:mb-20 text-[#8D7662]">
                        Before Crafting?
                    </h2>
                </div>
                <div class="flex justify-center">
                    <div class="flex gap-4 justify-between">
                        <div class="w-[600px] h-fit bg-[#D8C3A566] py-10 flex flex-col items-center p-10 rounded-[8px]">
                            <div class="flex items-left w-full px-10">
                                <div class="flex items-center justify-center gap-4">
                                    <nuxt-img alt="" src="/Extorior/Group.svg" class="w-[62px] h-[62px]" />
                                    <div class="text-[25px] font-[500] leading-[200%]">Architectural Design Drawings
                                    </div>
                                </div>
                            </div>
                            <ul class="px-10 pt-5">
                                <li class="flex items-center gap-5 mb-1">
                                    <icon name="material-symbols-light:crop-square-outline" class="size-7" />

                                    <span class="text-[25px] leading-[200%] font-[300] text-justify">Floor plans</span>
                                </li>
                                <li class="flex items-center gap-5 mb-1">
                                    <icon name="material-symbols-light:crop-square-outline" class="size-7" />

                                    <span class="text-[25px] leading-[200%] font-[300] text-justify">Elevation
                                        views</span>
                                </li>
                                <li class="flex items-center gap-5 mb-1">
                                    <icon name="material-symbols-light:crop-square-outline" class="size-7" />

                                    <span class="text-[25px] leading-[200%] font-[300] text-justify">Section
                                        drawings</span>
                                </li>
                                <li class="flex items-start gap-5 mb-1">
                                    <icon name="material-symbols-light:crop-square-outline pt-[47px]" class="size-7" />

                                    <span class="w-[90%] text-[25px] leading-[200%] font-[300]">Detailed construction
                                        documents
                                        (material specifications as indicated in the design plans)</span>
                                </li>
                            </ul>
                        </div>
                        <div class="w-[600px] h-[480px] bg-[#D8C3A566] rounded-[8px] p-10 py-10">
                            <div class="flex items-left w-full px-10">
                                <div class="flex items-center justify-center gap-4">
                                    <nuxt-img alt="" src="/Extorior/Group2.svg" class="w-[62px] h-[62px]" />
                                    <div class="text-[25px] font-[500] leading-[200%]">Surrounding Context References
                                    </div>
                                </div>
                            </div>
                            <ul class="px-10 pt-5">
                                <li class="flex items-start gap-5 mb-1">
                                    <icon name="material-symbols-light:crop-square-outline pt-[50px]" class="size-7" />

                                    <span class="w-[90%] text-[25px] leading-[200%] font-[300]">Images/drawings of the
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
