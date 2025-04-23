<template>
    <div class ="my-20">
        <div class = "bg-[#FAF8F5]">
            <div class ="flex flex-col justify-center items-center">
                <div class = "text-[32px] leading-[150%] font-[400]">Our other</div>
                <div class = "text-[64px] font-[600] leading-[150%] text-[#8D7662]">Services</div>
            </div>

            <!-- Picture + text -->
            <div class = "mt-[70px]">
               <div class = "flex gap-8">
                    <div class = "w-[68%]">
                        <NuxtImg src = "/Extorior/OtherService.png" class = "w-full h-full"/>
                    </div>
                    <div class = "w-[320px]">
                        <div class = "text-[#8D7662] font-[600] text-[32px] leading-[150%]">3D Interior Rendering</div>
                        <div class = "text-[20px] font-[300] leading-[180%] text-justify mt-8"><span class = "font-[500]">Photorealistic and immersive spaces</span> are at the core of 3D interior rendering, a vital tool in architectural visualization that transforms design concepts into highly detailed, lifelike environments.</div>
                        <div class = "mt-8">
                            <UButton
                  class="hover:bg-[#D9D9D9] text-[#980C0C] ring-1 ring-[#980C0C] focus:ring-[#980C0C] active:ring-[#980C0C] focus:outline-none transition-all px-[20px] py-[10px] rounded-[8px]"
                  variant="outline" :trailing="false" color="red" icon="i-heroicons-arrow-right"><div class ="text-[18px] text-[#980C0C] leading-[16px] font-[500]">See more</div></UButton>
                        </div>
                    </div>
                </div> 

                <div class = "flex">
                    <div class = "w-[330px]">
                        <div class = "text-[#8D7662] font-[600] text-[32px] leading-[150%]">3D Furniture Modeling</div>
                        <div class = "text-[20px] font-[300] leading-[180%] text-justify mt-8">Our precision-crafted CGI models let manufacturers and designers showcase products flawlessly - no physical prototypes or costly shoots needed - perfect for catalogs, promotions, and virtual showrooms.</div>
                        <div class = "mt-8">
                            <UButton
                  class="hover:bg-[#D9D9D9] text-[#980C0C] ring-1 ring-[#980C0C] focus:ring-[#980C0C] active:ring-[#980C0C] focus:outline-none transition-all px-[20px] py-[10px] rounded-[8px]"
                  variant="outline" :trailing="false" color="red" icon="i-heroicons-arrow-right"><div class ="text-[18px] text-[#980C0C] leading-[16px] font-[500]">See more</div></UButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
