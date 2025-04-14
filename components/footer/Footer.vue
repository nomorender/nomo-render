<script setup>
</script>


<template>
    <div class=" bg-[#FAF8F5] flex items-center justify-center">
        <div class=" py-16 md:w-[1208px] md:px-0 px-5">
            <div class="flex items-center">
                <nuxt-img alt="logo" src="/Logo3.svg" class="md:w-[190px] md:h-[143px] w-[65px] h-[49px]" />
                <div class="flex flex-col items-start justify-center ml-5">
                    <div class="md:text-[32px] text-[15px] font-[700] text-left leading-[150%] mb-4">
                        Nomadic Creativity, Timeless Render
                    </div>
                    <div class="md:text-[25px] text-[12px] font-[400] italic text-left leading-[150%]">
                        More than just blueprints, it’s about storytelling
                    </div>
                </div>
            </div>
            <div class="mt-16 grid grid-cols-1 md:grid-cols-10 gap-16">
                <div class="col-span-4">
                    <div class="text-[#8D7662] leading-[200%] font-[600] text-[25px] mb-2">
                        Location
                    </div>
                    <div>
                        <div class="text-[25px] font-[300] leading-[200%] text-justify">
                            81 Huynh Thuc Khang, Thanh Pho Vinh, Nghe An, Viet Nam
                        </div>
                    </div>
                </div>
                <div class="col-span-3">
                    <div class="text-[#8D7662] leading-[200%] font-[600] text-[25px] mb-2">
                        Contact
                    </div>
                    <div>
                        <div class="text-[25px] font-[300] leading-[200%] text-justify">
                            Email: team@nomorender.com<br />
                            WhatsApp: +84967563407
                        </div>
                    </div>
                </div>
                <div class="col-span-3">
                    <div class="text-[#8D7662] font-[600] text-[25px] mb-2 leading-[200%]">Social</div>
                    <div class="grid grid-cols-4 gap-7">
                        <div class="flex items-center justify-center">
                            <NuxtLink to="https://www.behance.net/nomorender" target="_blank">
                                <nuxt-img alt="behance" src="/SocialMedia/Behance.svg" class="w-[56px] h-[58px]" />
                            </NuxtLink>
                        </div>
                        <div class="flex items-center justify-center">
                            <NuxtLink to="https://www.instagram.com/team.nomorender" target="_blank">
                                <nuxt-img alt="instagram" src="/SocialMedia/Instagram.svg" class="w-[56px] h-[58px]" />
                            </NuxtLink>
                        </div>
                        <div class="flex items-center justify-center">
                            <NuxtLink to="https://wa.me/84967563407" target="_blank">
                                <nuxt-img alt="whatsapp" src="/SocialMedia/whatsApp.svg" class="w-[56px] h-[58px]" />
                            </NuxtLink>
                        </div>

                        <div class="flex items-center justify-center">
                            <NuxtLink to="https://www.trustpilot.com/review/nomorender.com" target="_blank">
                                <nuxt-img alt="trust pilot" src="/SocialMedia/Trustpilot.svg" class="w-[56px] h-[58px]" />
                            </NuxtLink>
                        </div>

                        <div class="flex items-center justify-center">
                            <NuxtLink to="https://www.facebook.com/team.nomorender" target="_blank">
                                <nuxt-img alt="facebook" src="/SocialMedia/Facebook.svg" class="w-[56px] h-[58px]" />
                            </NuxtLink>
                        </div>

                        <div class="flex items-center justify-center">
                            <NuxtLink to="https://www.linkedin.com/company/nomorender/" target="_blank">
                                <nuxt-img alt="linkedin" src="/SocialMedia/Linkedin.svg" class="w-[56px] h-[58px]" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-span-4">
                    <div class="text-[#8D7662] leading-[200%] font-[600] text-[25px] mb-2">3D Rendering Services</div>
                    <div class="text-[25px] font-[300] leading-[200%]">
                        <div>
                            <NuxtLink to="/exterior">
                                3D Exterior Rendering
                            </NuxtLink>
                        </div>
                        <div>
                            <NuxtLink to="">
                                3D Interior Rendering
                            </NuxtLink>
                        </div>
                        <div>
                            <NuxtLink to="">
                                3D Furniture Modeling Rendering
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-span-3">
                    <div class="text-[#8D7662] leading-[200%] font-[600] text-[25px] mb-2">Our Work</div>
                    <div class="text-[25px] font-[300] leading-[200%] text-justify">
                        <div>
                            <NuxtLink to="/">
                                Portfolio
                            </NuxtLink>
                        </div>
                        <div>
                            <NuxtLink to="">
                                Workflow
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-span-3">
                    <div class="text-[#8D7662] leading-[200%] font-[600] text-[25px] mb-2">Explore</div>
                    <div class="text-[25px] font-[300] leading-[200%] text-justify">
                        <div>
                            <NuxtLink to="/">
                                Inspire Space
                            </NuxtLink>
                        </div>
                        <div>
                            <NuxtLink to="">
                                Library
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>