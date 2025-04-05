<template>
    <div class="bg-[#FAF8F5]">
        <div class="max-w-7xl py-20 mx-auto flex flex-col item-center justify-center">
            <div>
                <p class="text-center text-[32px] md:text-3xl">What do we need</p>
                <h2 class="text-center font-semibold text-3xl text-[64px] md:text-6xl mb-5 md:mb-20 text-[#8D7662]">
                    Before Crafting?
                </h2>
            </div>
            <div class="flex justify-center">
                <div class="flex gap-2 justify-between">
                    <div class="w-[600px] h-fit bg-[#D8C3A566] py-10 flex flex-col items-center">
                        <div class="flex items-center mb-4 gap-4">
                            <NuxtImg src="/Extorior/Drawing.png" class="w-[63px] h-[63px]"/>
                            <div class="text-xl font-bold">Architectural Design Drawings</div>
                        </div>
                        <ul class="space-y-2">
                            <li class="flex items-center">
                                <Icon name="material-symbols-light:crop-square-outline" />

                                <span class="text-lg">Floor plans</span>
                            </li>
                            <li class="flex items-center">
                                <Icon name="material-symbols-light:crop-square-outline" />

                                <span class="text-lg">Elevation views</span>
                            </li>
                            <li class="flex items-center">
                                <Icon name="material-symbols-light:crop-square-outline" />

                                <span class="text-lg">Section drawings</span>
                            </li>
                            <li class="flex items-center">
                                <Icon name="material-symbols-light:crop-square-outline" />

                                <span class="text-lg">Detailed construction documents</span>
                            </li>
                            <li class="ml-7 text-lg">
                                (material specifications as indicated in the design plans)
                            </li>
                        </ul>
                    </div>
                    <div class="w-[600px] h-[480px] bg-[#D8C3A566]">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>