<template>
    <div class="md:my-20 my-10">
        <div class="bg-[#D9D9D9] w-full flex flex-col justify-center items-center py-[40px] md:pb-[66px] md:pt-[55px]">
            <div class="flex flex-col justify-center items-center">
                <div class="md:text-[32px] text-[16px] leading-[100%] md:leading-[150%] font-[400]">Our other</div>
                <div class="md:text-[64px] text-[30px] font-[600] leading-[100%] md:leading-[150%] text-[#8D7662]">
                    Services</div>
            </div>
            <!-- Picture + text -->
            <div class="hidden mt-[70px] md:flex flex-col justify-center items-center">
                <div class="md:flex gap-[4rem] w-full justify-start">
                    <div class="w-[60%]">
                        <div class="flex justify-end">
                            <NuxtImg format="webp" src="/Interior/Pic9.png" class="w-[960px] h-[500px] object-cover" />
                        </div>
                    </div>
                    <div class="basis-[400px]">
                        <div class="text-[#8D7662] font-[600] text-[32px] leading-[150%]">3D Exterior Rendering</div>
                        <div class="text-[20px] font-[300] leading-[180%] text-justify mt-8"><span
                                class="font-[500]">Top-notch
                                quality</span> of
                            3D exterior visualization services, transforming architectural concepts into vivid, lifelike
                            representations</div>
                        <div class="mt-8">
                            <UButton to="/exterior" id="see-more-service"
                                class="hover:bg-[#D9D9D9] text-[#980C0C] ring-1 ring-[#980C0C] focus:ring-[#980C0C] active:ring-[#980C0C] focus:outline-none transition-all px-[20px] py-[10px] rounded-[8px]"
                                variant="outline" :trailing="false" color="red" icon="i-heroicons-arrow-right">
                                <div class="text-[18px] text-[#980C0C] leading-[16px] font-[500]">See more</div>
                            </UButton>
                        </div>
                    </div>
                </div>

                <div class="md:flex gap-[4rem] justify-end w-full mt-20">
                    <div class="basis-[400px]">
                        <div class="text-[#8D7662] font-[600] text-[32px] leading-[150%]">3D Furniture Modeling</div>
                        <div class="text-[20px] font-[300] leading-[180%] text-justify mt-8">Our precision-crafted CGI
                            models let manufacturers and designers showcase products flawlessly - no physical prototypes
                            or costly shoots needed - perfect for catalogs, promotions, and virtual showrooms.</div>
                        <div class="mt-8">
                            <UButton to="/furniture" id="see-more-furniture"
                                class="hover:bg-[#D9D9D9] text-[#980C0C] ring-1 ring-[#980C0C] focus:ring-[#980C0C] active:ring-[#980C0C] focus:outline-none transition-all px-[20px] py-[10px] rounded-[8px]"
                                variant="outline" :trailing="false" color="red" icon="i-heroicons-arrow-right">
                                <div class="text-[18px] text-[#980C0C] leading-[16px] font-[500]">See more</div>
                            </UButton>
                        </div>
                    </div>
                    <div class="w-[60%]">
                        <div class="md:flex ">
                            <NuxtImg format="webp" src="/Chair.jpg"
                                class="w-[450px] h-[500px]  aspect-square object-cover" />
                            <NuxtImg format="webp" src="/services/10.jpg"
                                class="w-[500px] h-[500px]  aspect-[3/4] object-cover" />
                        </div>
                    </div>
                </div>
            </div>


            <div class="md:hidden flex flex-col mt-[20px]">
                <div class="md:flex gap-[4rem] w-full justify-start">
                    <div class="mx-[13px]">
                        <div class="flex justify-end">
                            <NuxtImg format="webp" src="/Interior/Pic9.png"
                                class="w-full h-[300px] object-cover rounded-[8px]" />
                        </div>
                    </div>
                    <div class="basis-[400px] mx-[30px] mt-[20px]">
                        <div class="text-[#8D7662] font-[600] text-[18px] leading-[100%] uppercase">3D Exterior
                            Rendering</div>
                        <div class="text-[15px] font-[300] leading-[180%] text-justify mt-[15px]"><span
                                class="font-[500]">Top-notch
                                quality</span> of
                            3D exterior visualization services, transforming architectural concepts into vivid, lifelike
                            representations</div>
                        <div class="mt-[20px] flex justify-center">
                            <UButton to="/exterior" id="see-more-service"
                                class="hover:bg-[#D9D9D9] text-[#980C0C] ring-1 ring-[#980C0C] focus:ring-[#980C0C] active:ring-[#980C0C] focus:outline-none transition-all px-[12px] py-[6px] rounded-[5px]"
                                variant="outline" :trailing="false" color="red">
                                <Icon name="i-heroicons-arrow-right" class="text-[#980C0C]" />
                                <div class="text-[13px] text-[#980C0C] leading-[16px] font-[400]">See more</div>
                            </UButton>
                        </div>
                    </div>
                </div>

                <div class="md:flex gap-[4rem] w-full justify-start mt-[35px]">
                    <div class="mx-[13px]">
                        <div class="flex justify-end">
                            <NuxtImg format="webp" src="/Chair.jpg"
                                class="w-full h-[350px] object-cover rounded-[8px]" />
                        </div>
                    </div>
                    <div class="basis-[400px] mx-[30px] mt-[20px]">
                        <div class="text-[#8D7662] font-[600] text-[18px] leading-[100%] uppercase">3D Furniture
                            Modeling</div>
                        <div class="text-[15px] font-[300] leading-[180%] text-justify mt-[15px]">Our precision-crafted
                            CGI
                            models let manufacturers and designers showcase products flawlessly - <span
                                class="font-[500]">no physical prototypes
                                or costly shoots needed</span> - perfect for catalogs, promotions, and virtual
                            showrooms.</div>
                        <div class="mt-[20px] flex justify-center">
                            <UButton to="/furniture" id="see-more-furniture"
                                class="hover:bg-[#D9D9D9] text-[#980C0C] ring-1 ring-[#980C0C] focus:ring-[#980C0C] active:ring-[#980C0C] focus:outline-none transition-all px-[12px] py-[6px] rounded-[5px]"
                                variant="outline" :trailing="false" color="red">
                                <Icon name="i-heroicons-arrow-right" class="text-[#980C0C]" />
                                <div class="text-[13px] text-[#980C0C] leading-[16px] font-[400]">See more</div>
                            </UButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
